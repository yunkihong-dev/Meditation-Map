import { describe, expect, it } from "vitest";
import type { AppNotification } from "@/services/notifications/types";
import { applyIncoming, applyRead, applyReadAll, compareId, mergePage } from "@/stores/notificationStore";

/**
 * 알림 스토어의 순수 리듀서. 보장하는 것:
 * - 같은 id 가 SSE·FCM·재동기화로 여러 번 와도 목록·안읽은 수에 한 번만 반영된다
 * - connected 재동기화(첫 페이지 교체)가 이미 더 불러온 오래된 페이지를 지우지 않는다
 * 보장하지 않는 것: 서버 응답 shape(파서 테스트·계약 QA 몫), SSE 연결 자체(훅 테스트 몫)
 */

function n(id: string, read = false): AppNotification {
  return {
    id,
    type: "AD",
    title: `t${id}`,
    body: "",
    linkUrl: null,
    refType: null,
    refId: null,
    read,
    readAt: read ? "2026-10-07T00:00:00.000Z" : null,
    createdAt: "2026-10-07T00:00:00.000Z",
  };
}

describe("compareId", () => {
  it("숫자 문자열은 자릿수까지 고려해 비교한다", () => {
    expect(compareId("9", "10")).toBeLessThan(0);
    expect(compareId("100", "99")).toBeGreaterThan(0);
    expect(compareId("5", "5")).toBe(0);
  });
});

describe("applyIncoming", () => {
  it("새 알림은 목록 앞에 넣고 안읽은 수를 1 올린다", () => {
    const r = applyIncoming([n("2")], new Set(["2"]), 1, n("3"), true);
    expect(r.isNew).toBe(true);
    expect(r.items.map((x) => x.id)).toEqual(["3", "2"]);
    expect(r.unreadCount).toBe(2);
  });

  it("이미 본 id 면 아무것도 바꾸지 않는다(SSE·FCM 중복)", () => {
    const items = [n("3"), n("2")];
    const r = applyIncoming(items, new Set(["3", "2"]), 2, n("3"), true);
    expect(r.isNew).toBe(false);
    expect(r.items).toBe(items);
    expect(r.unreadCount).toBe(2);
  });

  it("seenIds 에 없어도 목록에 같은 id 가 있으면 중복으로 본다", () => {
    const r = applyIncoming([n("3")], new Set(), 1, n("3"), true);
    expect(r.isNew).toBe(false);
  });

  it("목록을 아직 안 불러왔으면 목록은 두고 안읽은 수만 올린다", () => {
    const r = applyIncoming([], new Set(), 0, n("7"), false);
    expect(r.isNew).toBe(true);
    expect(r.items).toEqual([]);
    expect(r.unreadCount).toBe(1);
  });

  it("이미 읽은 상태로 온 알림은 안읽은 수를 올리지 않는다", () => {
    const r = applyIncoming([], new Set(), 4, n("8", true), true);
    expect(r.unreadCount).toBe(4);
  });
});

describe("mergePage", () => {
  it("append 는 중복 id 를 빼고 뒤에 붙인다", () => {
    const merged = mergePage([n("5"), n("4")], [n("4"), n("3")], true);
    expect(merged.map((x) => x.id)).toEqual(["5", "4", "3"]);
  });

  it("첫 페이지 교체는 새 값을 쓰고, 그보다 오래된 기존 항목은 유지한다", () => {
    const existing = [n("5"), n("4"), n("3"), n("2")];
    const firstPage = [n("6"), n("5", true), n("4")];
    const merged = mergePage(existing, firstPage, false);
    expect(merged.map((x) => x.id)).toEqual(["6", "5", "4", "3", "2"]);
    expect(merged[1].read).toBe(true);
  });

  it("빈 첫 페이지면 목록을 비운다", () => {
    expect(mergePage([n("1")], [], false)).toEqual([]);
  });
});

describe("applyRead / applyReadAll", () => {
  it("한 건 읽음은 해당 id 만, 이미 읽은 항목의 readAt 은 유지한다", () => {
    const items = [n("2"), n("1", true)];
    const r = applyRead(items, "2", "2026-10-07T05:00:00.000Z");
    expect(r[0]).toMatchObject({ read: true, readAt: "2026-10-07T05:00:00.000Z" });
    expect(applyRead(r, "1", "X")[1].readAt).toBe("2026-10-07T00:00:00.000Z");
  });

  it("모두 읽음", () => {
    const r = applyReadAll([n("2"), n("1", true)], "T");
    expect(r.every((x) => x.read)).toBe(true);
    expect(r[1].readAt).toBe("2026-10-07T00:00:00.000Z");
  });
});
