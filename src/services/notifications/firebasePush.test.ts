import { describe, expect, it, vi } from "vitest";
import {
  FCM_SW_SCOPE,
  buildServiceWorkerUrl,
  currentPushStatus,
  enablePush,
  readFirebaseConfig,
  readVapidKey,
} from "@/services/notifications/firebasePush";

/**
 * FCM 설정 읽기와 "키가 없으면 조용히 건너뛴다" 경로.
 * 보장하는 것: env 가 비거나 VAPID 가 없으면 등록을 시도하지 않고 던지지 않는다(하네스 샌드박스 기본 경로).
 * 보장하지 않는 것: 실제 토큰 발급·푸시 수신(VAPID 미주입이라 미검증).
 */

const full = {
  VITE_FIREBASE_API_KEY: "k",
  VITE_FIREBASE_AUTH_DOMAIN: "x.firebaseapp.com",
  VITE_FIREBASE_PROJECT_ID: "p",
  VITE_FIREBASE_STORAGE_BUCKET: "b",
  VITE_FIREBASE_MESSAGING_SENDER_ID: "1",
  VITE_FIREBASE_APP_ID: "1:1:web:a",
  VITE_FIREBASE_MEASUREMENT_ID: "G-1",
  VITE_FIREBASE_VAPID_KEY: " vapid ",
};

describe("readFirebaseConfig", () => {
  it("필수 4개가 있으면 설정을 만든다", () => {
    expect(readFirebaseConfig(full)).toMatchObject({ apiKey: "k", projectId: "p", messagingSenderId: "1", appId: "1:1:web:a" });
    expect(readVapidKey(full)).toBe("vapid");
  });

  it("하나라도 비면 null, 공백만 있어도 빈 값으로 본다", () => {
    expect(readFirebaseConfig({ ...full, VITE_FIREBASE_APP_ID: "  " })).toBeNull();
    expect(readFirebaseConfig({})).toBeNull();
    expect(readVapidKey({ ...full, VITE_FIREBASE_VAPID_KEY: "" })).toBeNull();
  });
});

describe("buildServiceWorkerUrl", () => {
  it("SW 가 읽을 설정을 쿼리로 넘긴다", () => {
    const cfg = readFirebaseConfig(full)!;
    const url = new URL(buildServiceWorkerUrl(cfg), "https://healingmedit.kr");
    expect(url.pathname).toBe("/firebase-messaging-sw.js");
    expect(url.searchParams.get("apiKey")).toBe("k");
    expect(url.searchParams.get("appId")).toBe("1:1:web:a");
    expect(FCM_SW_SCOPE).toBe("/firebase-cloud-messaging-push-scope");
  });
});

describe("env 가 없을 때 (샌드박스 빌드와 같은 조건)", () => {
  it("enablePush 는 권한을 묻지 않고 unconfigured 를 돌려준다", async () => {
    // 로컬 .env.local 에 키가 있어도 결과가 같도록 env 를 비웁니다(테스트 격리).
    for (const k of Object.keys(full)) vi.stubEnv(k, "");
    await expect(enablePush(true)).resolves.toBe("unconfigured");
    expect(currentPushStatus()).toBe("unconfigured");
  });
});
