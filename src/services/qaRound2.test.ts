import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { apiErrorFrom } from "@/services/http/apiError";
import { buildClaimFormData } from "@/services/placeClaims/repositories/placeClaimsRepository";
import { isValidBroadcastLink, safeInternalLink } from "@/services/notifications/types";
import {
  fetchNotifications,
  fetchUnreadCount,
  markAllNotificationsRead,
  markNotificationRead,
  notificationStreamUrl,
  registerPushToken,
  unregisterPushToken,
} from "@/services/notifications/repositories/notificationsRepository";

/**
 * QA 1차 지적(03_qa_report.md Q1~Q4) 회귀 테스트.
 * Q1: 경로 조립을 리터럴로 바꿔도 scope 별 실제 요청 URL 이 같아야 한다(동작 불변)
 * Q2: VALIDATION_FAILED 의 details.fields 가 맵이어도 키를 읽고, photos[0]·programs[0].id 는 최상위 키로 정규화
 * Q3: type 이 빈 .heic/.heif 파일은 image/heic(heif) 로 다시 감싸 보낸다(BE 는 part content type 만 본다)
 * Q4: 링크 사전 검증이 BE LinkUrlPolicy.java:24-31 과 같은 판정을 낸다
 */

describe("Q1 알림 API 경로 — scope 별 리터럴", () => {
  let calls: { url: string; method: string }[];
  beforeEach(() => {
    calls = [];
    vi.stubEnv("VITE_API_BASE_URL", "http://api.test");
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string, init?: RequestInit) => {
        calls.push({ url: String(url), method: init?.method ?? "GET" });
        return { ok: true, status: 200, text: async () => "{}" };
      })
    );
  });
  afterEach(() => vi.unstubAllGlobals());

  it.each([
    ["me", "/me"],
    ["admin", "/admin"],
  ] as const)("%s", async (scope, p) => {
    await fetchNotifications(scope, "10", 5);
    await fetchUnreadCount(scope);
    await markNotificationRead(scope, "7");
    await markAllNotificationsRead(scope);
    await registerPushToken(scope, "tok");
    await unregisterPushToken(scope, "tok");
    expect(calls).toEqual([
      { url: `http://api.test${p}/notifications?size=5&cursor=10`, method: "GET" },
      { url: `http://api.test${p}/notifications/unread-count`, method: "GET" },
      { url: `http://api.test${p}/notifications/7/read`, method: "POST" },
      { url: `http://api.test${p}/notifications/read-all`, method: "POST" },
      { url: `http://api.test${p}/push-tokens`, method: "PUT" },
      { url: `http://api.test${p}/push-tokens`, method: "DELETE" },
    ]);
    expect(notificationStreamUrl(scope)).toBe(`http://api.test${p}/notifications/stream`);
  });
});

describe("Q2 apiErrorFrom — details.fields 맵 모양", () => {
  it("BE 실측 모양: 맵의 키를 최상위 필드로 정규화한다", () => {
    const e = apiErrorFrom(
      400,
      JSON.stringify({
        code: "VALIDATION_FAILED",
        message: "입력값 검증에 실패했습니다.",
        details: { fields: { name: "필수", "photos[0]": "URL", "programs[0].id": "필수", "programs[1].imageUrl": "URL" } },
      })
    );
    expect(e.fields).toEqual(["name", "photos", "programs"]);
  });

  it("배열 모양(PLACE_OWNER_FIELD_NOT_ALLOWED)은 그대로", () => {
    const e = apiErrorFrom(400, JSON.stringify({ code: "PLACE_OWNER_FIELD_NOT_ALLOWED", details: { fields: ["address", "hidden"] } }));
    expect(e.fields).toEqual(["address", "hidden"]);
  });
});

describe("Q3 buildClaimFormData — 빈 type 의 HEIC/HEIF", () => {
  it.each([
    ["IMG_0001.HEIC", "image/heic"],
    ["photo.heif", "image/heif"],
  ])("%s → %s", (name, type) => {
    const fd = buildClaimFormData({ placeId: "12", contact: "c", evidence: new File(["x"], name, { type: "" }) });
    const f = fd.get("evidence") as File;
    expect(f.type).toBe(type);
    expect(f.name).toBe(name);
  });

  it("type 이 있는 파일은 건드리지 않는다", () => {
    const fd = buildClaimFormData({ placeId: "12", contact: "c", evidence: new File(["x"], "a.pdf", { type: "application/pdf" }) });
    expect((fd.get("evidence") as File).type).toBe("application/pdf");
  });
});

describe("Q4 링크 검증 = BE LinkUrlPolicy", () => {
  // [입력, BE isAllowed 판정]
  const table: [string, boolean][] = [
    ["/meditation/map", true],
    ["/admin/place-claims/57", true],
    ["/x?next=https://a", false],
    ["/x?u=HTTP:evil", false],
    ["/path with space", false],
    ["/tab\tx", false],
    ["/ctl\u0001x", false],
    ["/a\\b", false],
    ["//evil.example", false],
    ["relative", false],
    ["/" + "a".repeat(299), true],
    ["/" + "a".repeat(300), false],
  ];
  it.each(table)("%j → %s", (input, allowed) => {
    expect(isValidBroadcastLink(input)).toBe(allowed);
    expect(safeInternalLink(input)).toBe(allowed ? input : null);
  });

  it("빈 값은 링크 없음으로 허용(BE null 과 같음)", () => {
    expect(isValidBroadcastLink("")).toBe(true);
    expect(isValidBroadcastLink("   ")).toBe(true);
  });
});
