import { create } from "zustand";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import { clearLegacyAuthArtifacts } from "@/stores/authCookie";

const STAFF_ROLES = new Set(["ADMIN", "DEV", "EMPLOYEE"]);

/**
 * BE 미인증 응답(SpaUnauthorizedEntryPoint)은 Accept 에 application/json 이 있어야 401 JSON 을 주고,
 * 없으면(브라우저 기본 Accept) /profile 로 302 를 보낸다. fetch 는 그 교차 출처 리다이렉트에서 TypeError 를 던져
 * 401 처리(SSE 재연결 중단·로그인 문구)가 동작하지 않는다(QA R2-1). 그래서 API 호출은 기본으로 이 값을 보낸다.
 */
export const JSON_ACCEPT = "application/json";

/** JWT는 HttpOnly 쿠키에만 존재하므로 프론트 상태에는 세션 존재 여부만 표시합니다. */
export const COOKIE_SESSION_MARKER = "__http_only_cookie_session__";

/**
 * 로그아웃 직전에 돌릴 정리 작업(예: FCM 토큰 해제 DELETE /me/push-tokens).
 * 해제 API 는 인증이 필요하므로 /auth/logout 보다 먼저 불러야 합니다.
 * 스토어가 알림 모듈을 직접 import 하면 순환 의존이 생겨 등록 방식으로 둡니다.
 */
type BeforeLogoutHook = () => Promise<void>;
const beforeLogoutHooks = new Set<BeforeLogoutHook>();
const BEFORE_LOGOUT_TIMEOUT_MS = 3000;

export function onBeforeLogout(hook: BeforeLogoutHook): () => void {
  beforeLogoutHooks.add(hook);
  return () => beforeLogoutHooks.delete(hook);
}

async function runBeforeLogoutHooks(): Promise<void> {
  if (beforeLogoutHooks.size === 0) return;
  const all = Promise.allSettled(Array.from(beforeLogoutHooks, (h) => h()));
  // 정리 작업이 느려도 로그아웃 자체는 막지 않습니다.
  await Promise.race([all, new Promise((r) => setTimeout(r, BEFORE_LOGOUT_TIMEOUT_MS))]);
}

interface AuthState {
  accessToken: string | null;
  email: string | null;
  role: string | null;
  authReady: boolean;
  bootstrapAuth: () => Promise<void>;
  setSession: (accessToken?: string, email?: string, role?: string | null) => Promise<void>;
  logout: () => Promise<void>;
  isStaff: () => boolean;
  isAuthenticated: () => boolean;
  authHeader: () => undefined;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  email: null,
  role: null,
  authReady: false,
  bootstrapAuth: async () => {
    clearLegacyAuthArtifacts();
    const base = getMeditationApiBaseUrl();
    if (!base) {
      set({ accessToken: null, email: null, role: null, authReady: true });
      return;
    }
    try {
      const res = await fetch(`${base}/me`, { credentials: "include", headers: { Accept: JSON_ACCEPT } });
      if (res.ok) {
        const me = (await res.json()) as { username?: string; email?: string; role?: string };
        const account = me.email ?? me.username ?? "";
        const role = me.role ?? "MEMBER";
        set({
          accessToken: COOKIE_SESSION_MARKER,
          email: account || null,
          role,
          authReady: true,
        });
        return;
      }
    } catch {
      // guest 처리
    }
    set({ accessToken: null, email: null, role: null, authReady: true });
  },
  setSession: async () => {
    set({ accessToken: COOKIE_SESSION_MARKER, email: null, role: null, authReady: false });
    await get().bootstrapAuth();
  },
  logout: async () => {
    const base = getMeditationApiBaseUrl();
    if (base && get().accessToken) {
      await runBeforeLogoutHooks();
    }
    if (base) {
      try {
        await fetch(`${base}/auth/logout`, { method: "POST", credentials: "include" });
      } catch {
        // 로컬 상태는 항상 비웁니다.
      }
    }
    clearLegacyAuthArtifacts();
    set({ accessToken: null, email: null, role: null, authReady: true });
  },
  isStaff: () => STAFF_ROLES.has(get().role ?? ""),
  isAuthenticated: () => !!get().accessToken,
  authHeader: () => undefined,
}));

export async function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const base = getMeditationApiBaseUrl();
  if (!base) throw new Error("VITE_API_BASE_URL 미설정");

  const headers = new Headers(init.headers);
  if (!headers.has("Accept")) headers.set("Accept", JSON_ACCEPT);
  if (init.body && !headers.has("Content-Type") && !(init.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }
  const url = path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
  return fetch(url, { ...init, headers, credentials: "include" });
}

/** SSE 재연결 전 세션 확인(/me · /admin/auth/me). 2xx 면 살아 있음. */
export async function sessionAlive(path: string): Promise<boolean> {
  const base = getMeditationApiBaseUrl();
  if (!base) return false;
  const res = await fetch(`${base}${path}`, { credentials: "include", headers: { Accept: JSON_ACCEPT } });
  return res.ok;
}
