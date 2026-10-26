import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { backoffDelay, useNotificationStream } from "@/hooks/useNotificationStream";
import { useAdminNotificationStore, useMemberNotificationStore } from "@/stores/notificationStore";

/**
 * SSE 훅 (계약 2.6). 브라우저 EventSource 를 가짜로 바꿔 이벤트를 직접 흘려 본다.
 * 보장하는 것:
 * - withCredentials 로 /me|/admin 스트림 URL 을 연다
 * - connected → 안읽은 수 반영 + (목록을 불러온 상태면) 첫 페이지 재동기화 요청
 * - notification → 같은 id 두 번이면 한 번만 반영
 * - unread-count → 덮어쓰기
 * - readyState CLOSED 오류 → 세션 확인 후 백오프로 다시 연다 / 세션 없으면 다시 열지 않는다
 * - enabled=false·언마운트 → close
 * 보장하지 않는 것: 실제 서버 스트림 형식(BE·QA 실측 몫), 브라우저 자동 재연결 동작.
 */

class FakeEventSource {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSED = 2;
  static instances: FakeEventSource[] = [];
  url: string;
  withCredentials: boolean;
  readyState = FakeEventSource.CONNECTING;
  onerror: ((ev: Event) => void) | null = null;
  closed = false;
  listeners = new Map<string, ((ev: MessageEvent) => void)[]>();

  constructor(url: string, init?: { withCredentials?: boolean }) {
    this.url = url;
    this.withCredentials = !!init?.withCredentials;
    FakeEventSource.instances.push(this);
  }

  addEventListener(type: string, fn: (ev: MessageEvent) => void) {
    this.listeners.set(type, [...(this.listeners.get(type) ?? []), fn]);
  }

  emit(type: string, data: unknown) {
    const ev = { data: typeof data === "string" ? data : JSON.stringify(data) } as MessageEvent;
    for (const fn of this.listeners.get(type) ?? []) fn(ev);
  }

  fail(closed: boolean) {
    this.readyState = closed ? FakeEventSource.CLOSED : FakeEventSource.CONNECTING;
    this.onerror?.(new Event("error"));
  }

  close() {
    this.closed = true;
    this.readyState = FakeEventSource.CLOSED;
  }
}

const notification = (id: string) => ({
  id,
  type: "PLACE_CLAIM_REJECTED",
  title: "소유 신청이 반려되었어요",
  body: "…",
  linkUrl: "/profile/place-claims",
  refType: "PLACE_CLAIM",
  refId: "58",
  read: false,
  readAt: null,
  createdAt: "2026-10-07T03:20:00.000Z",
});

let fetchMock: ReturnType<typeof vi.fn>;
/** 알림 API 호출만(채팅 배지·따라잡기 호출 제외) */
const notifCalls = () => fetchMock.mock.calls.filter((c) => String(c[0]).includes("/notifications"));

beforeEach(() => {
  FakeEventSource.instances = [];
  vi.stubGlobal("EventSource", FakeEventSource);
  vi.stubEnv("VITE_API_BASE_URL", "http://api.test");
  fetchMock = vi.fn(async () => ({
    ok: true,
    status: 200,
    text: async () => JSON.stringify({ items: [notification("9")], nextCursor: null }),
  }));
  vi.stubGlobal("fetch", fetchMock);
  useMemberNotificationStore.getState().reset();
  useAdminNotificationStore.getState().reset();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("backoffDelay", () => {
  it("1→2→4초… 60초 상한", () => {
    expect([0, 1, 2, 3].map(backoffDelay)).toEqual([1000, 2000, 4000, 8000]);
    expect(backoffDelay(10)).toBe(60_000);
  });
});

describe("useNotificationStream", () => {
  it("회원 스트림을 쿠키 포함으로 열고 이벤트를 스토어에 반영한다", async () => {
    renderHook(() => useNotificationStream({ scope: "me", enabled: true, checkSession: async () => true, toastOnNew: false }));
    expect(FakeEventSource.instances).toHaveLength(1);
    const es = FakeEventSource.instances[0];
    expect(es.url).toBe("http://api.test/me/notifications/stream");
    expect(es.withCredentials).toBe(true);

    act(() => es.emit("connected", { unreadCount: 3 }));
    expect(useMemberNotificationStore.getState().unreadCount).toBe(3);
    // 목록을 아직 안 불러왔으면 알림 재동기화 요청을 하지 않는다(채팅 따라잡기 호출은 별개)
    expect(notifCalls()).toHaveLength(0);

    act(() => es.emit("notification", notification("1025")));
    act(() => es.emit("notification", notification("1025")));
    expect(useMemberNotificationStore.getState().unreadCount).toBe(4);

    act(() => es.emit("unread-count", { unreadCount: 2 }));
    expect(useMemberNotificationStore.getState().unreadCount).toBe(2);

    act(() => es.emit("notification", "not json"));
    expect(useMemberNotificationStore.getState().unreadCount).toBe(2);
  });

  it("목록을 불러온 상태에서 connected 가 오면 첫 페이지를 다시 받는다(끊긴 동안 복구)", async () => {
    await act(async () => {
      await useMemberNotificationStore.getState().loadFirstPage();
    });
    expect(notifCalls()).toHaveLength(1);
    renderHook(() => useNotificationStream({ scope: "me", enabled: true, checkSession: async () => true, toastOnNew: false }));
    await act(async () => {
      FakeEventSource.instances[0].emit("connected", { unreadCount: 1 });
    });
    expect(notifCalls()).toHaveLength(2);
    expect(String(notifCalls()[1][0])).toBe("http://api.test/me/notifications?size=20");
  });

  it("관리자 scope 는 /admin 스트림과 관리자 스토어를 쓴다", () => {
    renderHook(() => useNotificationStream({ scope: "admin", enabled: true, checkSession: async () => true, toastOnNew: false }));
    const es = FakeEventSource.instances[0];
    expect(es.url).toBe("http://api.test/admin/notifications/stream");
    act(() => es.emit("connected", { unreadCount: 5 }));
    expect(useAdminNotificationStore.getState().unreadCount).toBe(5);
    expect(useMemberNotificationStore.getState().unreadCount).toBe(0);
  });

  it("CONNECTING 오류는 브라우저 재연결에 맡기고, CLOSED 오류는 세션 확인 후 백오프로 다시 연다", async () => {
    vi.useFakeTimers();
    const checkSession = vi.fn(async () => true);
    renderHook(() => useNotificationStream({ scope: "me", enabled: true, checkSession, toastOnNew: false }));
    const first = FakeEventSource.instances[0];

    act(() => first.fail(false));
    expect(FakeEventSource.instances).toHaveLength(1);
    expect(first.closed).toBe(false);

    act(() => first.fail(true));
    expect(first.closed).toBe(true);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1000);
    });
    expect(checkSession).toHaveBeenCalledTimes(1);
    expect(FakeEventSource.instances).toHaveLength(2);
  });

  it("세션이 끝났으면 다시 열지 않는다", async () => {
    vi.useFakeTimers();
    renderHook(() =>
      useNotificationStream({ scope: "me", enabled: true, checkSession: async () => false, toastOnNew: false })
    );
    act(() => FakeEventSource.instances[0].fail(true));
    await act(async () => {
      await vi.advanceTimersByTimeAsync(5000);
    });
    expect(FakeEventSource.instances).toHaveLength(1);
  });

  it("enabled=false 면 열지 않고, 꺼지거나 언마운트되면 닫는다", () => {
    const { rerender, unmount } = renderHook(
      ({ enabled }) => useNotificationStream({ scope: "me", enabled, checkSession: async () => true }),
      { initialProps: { enabled: false } }
    );
    expect(FakeEventSource.instances).toHaveLength(0);
    rerender({ enabled: true });
    const es = FakeEventSource.instances[0];
    rerender({ enabled: false });
    expect(es.closed).toBe(true);
    rerender({ enabled: true });
    unmount();
    expect(FakeEventSource.instances[1].closed).toBe(true);
  });

  it("API 베이스 URL 이 없으면 연결하지 않는다", () => {
    vi.stubEnv("VITE_API_BASE_URL", "");
    renderHook(() => useNotificationStream({ scope: "me", enabled: true, checkSession: async () => true }));
    expect(FakeEventSource.instances).toHaveLength(0);
  });
});

describe("채팅 이벤트(라운드 7)", () => {
  it("회원 스트림의 chat-message·chat-read·chat-thread 를 채팅 스토어로 넘기고, 관리자 스트림은 듣지 않는다", async () => {
    const { useCenterChatStore } = await import("@/stores/centerChatStore");
    useCenterChatStore.getState().reset();
    useCenterChatStore.setState({
      threads: {
        "owner:31": {
          id: "31", place: { id: "401", name: "센터", thumbnailUrl: null }, program: null, customer: { displayName: "김명상" },
          status: "OPEN", lastMessage: null, unreadCount: 0, unanswered: false, myLastReadMessageId: null,
          counterpartLastReadMessageId: null, createdAt: "",
        },
      },
    });
    renderHook(() => useNotificationStream({ scope: "me", enabled: true, checkSession: async () => true, toastOnNew: false }));
    const es = FakeEventSource.instances[0];
    act(() =>
      es.emit("chat-message", {
        threadId: "31", viewerRole: "OWNER",
        message: { id: "906", threadId: "31", senderRole: "CUSTOMER", mine: false, body: "네", images: [], clientMessageId: null, createdAt: "2026-10-08T01:25:00.000Z" },
        thread: { lastMessageId: "906", unreadCount: 3, unanswered: true, status: "OPEN" },
      })
    );
    expect(useCenterChatStore.getState().threads["owner:31"]).toMatchObject({ unreadCount: 3, unanswered: true, lastMessage: { id: "906" } });
    act(() => es.emit("chat-thread", { threadId: "31", status: "BLOCKED" }));
    expect(useCenterChatStore.getState().threads["owner:31"].status).toBe("BLOCKED");
    act(() => es.emit("chat-message", "깨진 데이터"));

    renderHook(() => useNotificationStream({ scope: "admin", enabled: true, checkSession: async () => true }));
    const adminEs = FakeEventSource.instances[1] as unknown as { listeners: Map<string, unknown> };
    expect(adminEs.listeners.has("chat-message")).toBe(false);
  });
});
