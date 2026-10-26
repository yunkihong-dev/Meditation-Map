/// <reference types="vite/client" />

declare module "*.svg?raw" {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  /** Firebase 웹 설정(공개 클라이언트 값). 기본값 없음 — 비면 FCM 을 초기화하지 않습니다. */
  readonly VITE_FIREBASE_API_KEY?: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN?: string;
  readonly VITE_FIREBASE_PROJECT_ID?: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET?: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID?: string;
  readonly VITE_FIREBASE_APP_ID?: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID?: string;
  /** 웹 푸시 VAPID 공개키. 비면 FCM 토큰 등록을 건너뜁니다(SSE·알림함은 그대로 동작). */
  readonly VITE_FIREBASE_VAPID_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
