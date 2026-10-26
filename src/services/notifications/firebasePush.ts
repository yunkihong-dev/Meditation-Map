/**
 * Firebase Cloud Messaging(웹 푸시) — 오프라인(SSE 연결 없음)일 때 BE 가 보내는 푸시를 받습니다.
 *
 * 원칙
 * - 설정은 VITE_FIREBASE_* env 에서만 읽습니다. 기본값이 없어 env 가 비면 아무것도 하지 않습니다
 * - VAPID 키가 없으면 토큰 등록을 건너뜁니다. 알림함·SSE 는 그대로 동작해야 하고, 어떤 경우에도 던지지 않습니다
 * - firebase SDK 는 동적 import 로만 불러 초기 번들을 늘리지 않습니다
 * - 서비스워커는 PWA(workbox, scope "/")와 겹치지 않도록 별도 scope 로 등록합니다
 * - 권한 요청은 사용자 제스처(알림 화면 버튼)에서만. 이미 허용된 경우에만 로그인 시 조용히 갱신합니다
 */
import {
  registerPushToken,
  unregisterPushToken,
} from "@/services/notifications/repositories/notificationsRepository";
import { useMemberNotificationStore } from "@/stores/notificationStore";
import { onBeforeLogout } from "@/stores/authStore";
import { toast } from "@/stores/toastStore";

export interface FirebaseWebConfig {
  apiKey: string;
  authDomain?: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

export interface PushEnv {
  VITE_FIREBASE_API_KEY?: string;
  VITE_FIREBASE_AUTH_DOMAIN?: string;
  VITE_FIREBASE_PROJECT_ID?: string;
  VITE_FIREBASE_STORAGE_BUCKET?: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID?: string;
  VITE_FIREBASE_APP_ID?: string;
  VITE_FIREBASE_MEASUREMENT_ID?: string;
  VITE_FIREBASE_VAPID_KEY?: string;
}

export const FCM_SW_PATH = "/firebase-messaging-sw.js";
export const FCM_SW_SCOPE = "/firebase-cloud-messaging-push-scope";
const TOKEN_STORAGE_KEY = "mm_fcm_token";

function clean(v: string | undefined): string | undefined {
  const t = v?.trim();
  return t ? t : undefined;
}

/** 필수 4개(apiKey·projectId·messagingSenderId·appId) 중 하나라도 비면 null. */
export function readFirebaseConfig(env: PushEnv): FirebaseWebConfig | null {
  const apiKey = clean(env.VITE_FIREBASE_API_KEY);
  const projectId = clean(env.VITE_FIREBASE_PROJECT_ID);
  const messagingSenderId = clean(env.VITE_FIREBASE_MESSAGING_SENDER_ID);
  const appId = clean(env.VITE_FIREBASE_APP_ID);
  if (!apiKey || !projectId || !messagingSenderId || !appId) return null;
  return {
    apiKey,
    projectId,
    messagingSenderId,
    appId,
    authDomain: clean(env.VITE_FIREBASE_AUTH_DOMAIN),
    storageBucket: clean(env.VITE_FIREBASE_STORAGE_BUCKET),
    measurementId: clean(env.VITE_FIREBASE_MEASUREMENT_ID),
  };
}

export function readVapidKey(env: PushEnv): string | null {
  return clean(env.VITE_FIREBASE_VAPID_KEY) ?? null;
}

/**
 * SW 안에서는 import.meta.env 를 못 쓰므로 설정을 등록 URL 쿼리로 넘깁니다(모두 공개 클라이언트 값).
 * SW 는 self.location.search 에서 읽습니다.
 */
export function buildServiceWorkerUrl(cfg: FirebaseWebConfig): string {
  const q = new URLSearchParams({
    apiKey: cfg.apiKey,
    projectId: cfg.projectId,
    messagingSenderId: cfg.messagingSenderId,
    appId: cfg.appId,
  });
  if (cfg.authDomain) q.set("authDomain", cfg.authDomain);
  if (cfg.storageBucket) q.set("storageBucket", cfg.storageBucket);
  return `${FCM_SW_PATH}?${q.toString()}`;
}

export type PushStatus =
  | "unconfigured" // env 또는 VAPID 없음 → 등록 생략
  | "unsupported" // 브라우저가 웹 푸시 미지원(iOS 는 홈 화면 설치 PWA 16.4+ 에서만)
  | "default" // 아직 권한을 묻지 않음
  | "denied"
  | "enabled"
  | "error";

const env = import.meta.env as PushEnv;

function browserSupportsPush(): boolean {
  return (
    typeof window !== "undefined" &&
    "serviceWorker" in navigator &&
    "Notification" in window &&
    "PushManager" in window
  );
}

/** 지금 상태(권한 요청 없이). 알림 화면 버튼 표시용. */
export function currentPushStatus(): PushStatus {
  if (!readFirebaseConfig(env) || !readVapidKey(env)) return "unconfigured";
  if (!browserSupportsPush()) return "unsupported";
  if (Notification.permission === "denied") return "denied";
  if (Notification.permission === "default") return "default";
  return readStoredToken() ? "enabled" : "default";
}

function readStoredToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredToken(token: string | null) {
  try {
    if (token) localStorage.setItem(TOKEN_STORAGE_KEY, token);
    else localStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch {
    // 저장소를 못 써도 푸시 자체는 동작합니다(로그아웃 때 해제만 못 함).
  }
}

let foregroundBound = false;

/**
 * 푸시 활성화. `requestPermission` 이 true 일 때만 권한을 묻습니다(사용자 제스처 안에서 호출).
 * 실패해도 던지지 않고 상태만 돌려줍니다.
 */
export async function enablePush(requestPermission: boolean): Promise<PushStatus> {
  const cfg = readFirebaseConfig(env);
  const vapidKey = readVapidKey(env);
  if (!cfg || !vapidKey) return "unconfigured";
  if (!browserSupportsPush()) return "unsupported";

  try {
    let permission = Notification.permission;
    if (permission === "default" && requestPermission) {
      permission = await Notification.requestPermission();
    }
    if (permission !== "granted") return permission === "denied" ? "denied" : "default";

    const [{ initializeApp, getApps }, messagingMod] = await Promise.all([
      import("firebase/app"),
      import("firebase/messaging"),
    ]);
    if (!(await messagingMod.isSupported())) return "unsupported";

    const app = getApps()[0] ?? initializeApp(cfg);
    const messaging = messagingMod.getMessaging(app);
    const registration = await navigator.serviceWorker.register(buildServiceWorkerUrl(cfg), {
      scope: FCM_SW_SCOPE,
    });
    const token = await messagingMod.getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: registration,
    });
    if (!token) return "error";

    const previous = readStoredToken();
    await registerPushToken("me", token);
    if (previous && previous !== token) {
      void unregisterPushToken("me", previous).catch(() => undefined);
    }
    writeStoredToken(token);

    if (!foregroundBound) {
      foregroundBound = true;
      // 앱이 열려 있으면 SSE 가 있어 보통 FCM 이 오지 않습니다. 재연결 틈에 오면 id 로 중복을 거릅니다.
      messagingMod.onMessage(messaging, (payload) => {
        const id = payload.data?.notificationId;
        const store = useMemberNotificationStore.getState();
        if (id && store.seenIds.has(id)) return;
        void store.refreshUnreadCount();
        if (store.loaded) void store.loadFirstPage();
        const title = payload.notification?.title;
        if (title) toast.info(title);
      });
    }
    return "enabled";
  } catch {
    return "error";
  }
}

/** 로그인 직후 — 권한이 이미 허용돼 있을 때만 토큰을 조용히 갱신·등록합니다. */
export async function syncPushIfGranted(): Promise<void> {
  if (!browserSupportsPush()) return;
  if (Notification.permission !== "granted") return;
  await enablePush(false);
}

/** 로그아웃 직전 — 이 기기 토큰을 BE 에서 해제합니다(인증 필요해서 /auth/logout 보다 먼저). */
export async function disablePushForLogout(): Promise<void> {
  const token = readStoredToken();
  if (!token) return;
  try {
    await unregisterPushToken("me", token);
  } catch {
    // 해제 실패는 로그아웃을 막지 않습니다. BE 는 무효 토큰을 발송 시점에 정리합니다.
  }
  writeStoredToken(null);
}

onBeforeLogout(disablePushForLogout);
