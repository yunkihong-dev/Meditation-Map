import { describe, expect, it } from "vitest";
import {
  isValidBroadcastLink,
  parseNotification,
  parseNotificationPage,
  parseReadResult,
  parseUnreadCount,
  safeInternalLink,
} from "@/services/notifications/types";
import { apiErrorFrom } from "@/services/http/apiError";

/**
 * 계약 1·2절 응답 파서. 계약서 예시 JSON 을 그대로 넣어 키 이름이 맞는지 고정한다.
 * 보장하지 않는 것: BE 가 실제로 이 shape 을 내는지(계약 QA·BE 테스트 몫).
 */

const contractExample = {
  items: [
    {
      id: "1024",
      type: "PLACE_CLAIM_APPROVED",
      title: "소유 신청이 승인되었어요",
      body: "…",
      linkUrl: "/profile/places/12/edit",
      refType: "PLACE_CLAIM",
      refId: "57",
      read: false,
      readAt: null,
      createdAt: "2026-10-07T03:12:45.123Z",
    },
    {
      id: "1001",
      type: "AD",
      title: "(광고) 가을 명상 주간",
      body: "…",
      linkUrl: null,
      refType: "BROADCAST",
      refId: "7",
      read: true,
      readAt: "2026-10-06T10:00:00.000Z",
      createdAt: "2026-10-06T09:00:00.000Z",
    },
  ],
  nextCursor: "1001",
};

describe("parseNotificationPage", () => {
  it("계약 2.1 예시를 그대로 읽는다", () => {
    const page = parseNotificationPage(contractExample);
    expect(page.nextCursor).toBe("1001");
    expect(page.items).toHaveLength(2);
    expect(page.items[0]).toEqual(contractExample.items[0]);
    expect(page.items[1].linkUrl).toBeNull();
  });

  it("마지막 페이지(nextCursor null)와 빈 목록", () => {
    expect(parseNotificationPage({ items: [], nextCursor: null })).toEqual({ items: [], nextCursor: null });
  });

  it("깨진 응답에도 터지지 않는다", () => {
    expect(parseNotificationPage(null)).toEqual({ items: [], nextCursor: null });
    expect(parseNotificationPage({ items: [{ title: "id 없음" }] }).items).toEqual([]);
  });
});

describe("parseNotification", () => {
  it("모르는 type 도 일반 알림으로 받는다", () => {
    const parsed = parseNotification({ ...contractExample.items[0], type: "SOMETHING_NEW", refType: "X" });
    expect(parsed?.type).toBe("SOMETHING_NEW");
    expect(parsed?.refType).toBeNull();
  });

  it("숫자 id 가 와도 문자열로 바꾼다", () => {
    expect(parseNotification({ ...contractExample.items[0], id: 1024 })?.id).toBe("1024");
  });

  it("외부·프로토콜 상대 링크는 버린다", () => {
    expect(parseNotification({ ...contractExample.items[0], linkUrl: "https://evil.example" })?.linkUrl).toBeNull();
    expect(parseNotification({ ...contractExample.items[0], linkUrl: "//evil.example" })?.linkUrl).toBeNull();
  });
});

describe("safeInternalLink / isValidBroadcastLink", () => {
  it("계약 9절 경로는 통과", () => {
    for (const p of ["/notifications", "/profile/place-claims", "/admin/place-claims/57", "/profile/places/12/edit"]) {
      expect(safeInternalLink(p)).toBe(p);
    }
  });

  it("규칙 위반은 거부", () => {
    expect(safeInternalLink("profile")).toBeNull();
    expect(safeInternalLink("/" + "a".repeat(300))).toBeNull();
    expect(isValidBroadcastLink("http://x")).toBe(false);
    expect(isValidBroadcastLink("")).toBe(true);
    expect(isValidBroadcastLink("/meditation/map")).toBe(true);
  });
});

describe("unread / read 응답", () => {
  it("계약 2.2·2.3", () => {
    expect(parseUnreadCount({ unreadCount: 3 })).toBe(3);
    expect(parseUnreadCount({})).toBe(0);
    expect(parseReadResult({ id: "1024", read: true, unreadCount: 2 })).toEqual({ id: "1024", read: true, unreadCount: 2 });
  });
});

describe("apiErrorFrom", () => {
  it("ApiErrorResponse 의 code·message·details.fields 를 읽는다", () => {
    const e = apiErrorFrom(400, JSON.stringify({ code: "PLACE_OWNER_FIELD_NOT_ALLOWED", message: "m", details: { fields: ["address", "hidden"] } }));
    expect(e.code).toBe("PLACE_OWNER_FIELD_NOT_ALLOWED");
    expect(e.fields).toEqual(["address", "hidden"]);
    expect(e.message).toBe("m");
  });

  it("401 본문 {error} 와 JSON 이 아닌 본문", () => {
    expect(apiErrorFrom(401, '{"error":"UNAUTHORIZED"}').code).toBe("UNAUTHORIZED");
    const html = apiErrorFrom(502, "<html>bad gateway</html>");
    expect(html.code).toBeNull();
    expect(html.message).not.toContain("<html>");
  });
});
