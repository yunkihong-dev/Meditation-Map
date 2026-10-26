import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * QA 2차 지적(03_qa_report.md R2-1·R2-2·R2-4) 회귀 테스트 — 순수 로직·실제 레포 + 가짜 BE fetch.
 * 보장하는 것:
 * - R2-1: BE `SpaUnauthorizedEntryPoint` 는 Accept 에 application/json(또는 text/event-stream)이 없으면 401 대신 302 를 내고,
 *   브라우저 fetch 는 교차 출처 리다이렉트에서 TypeError 를 던진다. 가짜 BE 가 그 동작을 흉내 낸다.
 *   apiFetch·sessionAlive·bootstrapAuth 가 기본 Accept: application/json 을 보내 401 을 실제 401 로 받는지,
 *   호출자가 Accept 를 정하면 그대로 두는지, 401 이면 SSE 를 다시 열지 않고 로그아웃 상태가 되는지, 채팅 전송 401 문구.
 * - R2-2: ChatMessage.deletable(계약 C15) — 값이 있으면 그대로, 없으면 mine && !deleted 로 폴백. 삭제 반영 시 false
 * - R2-4: 신고 상세에는 최상위 resolvedAt 키가 없다(BE AdminReportDetail 에 없음) — resolution.resolvedAt 만
 * 보장하지 않는 것: 실제 브라우저 리다이렉트(브라우저 프로브 몫), BE 가 deletable 을 실제로 내는지(BE 원문 대기).
 */

vi.mock("@/services/notifications/firebasePush", () => ({ syncPushIfGranted: async () => undefined }));

import { apiFetch, sessionAlive, useAuthStore, COOKIE_SESSION_MARKER } from "@/stores/authStore";
import { useCenterChatStore, applyDeleted, keyOf } from "@/stores/centerChatStore";
import { parseAdminReportDetail, parseChatMessage } from "@/services/centerChat/types";
import { MemberNotificationBridge } from "@/components/notifications/NotificationBridges";

type Call = { url: string; accept: string | null };

/** SpaUnauthorizedEntryPoint 흉내: JSON/SSE Accept 면 401 JSON, 아니면 302 → 브라우저 fetch TypeError */
function fakeLoggedOutBe(calls: Call[]) {
  return vi.fn(async (url: string, init?: RequestInit) => {
    const accept = new Headers(init?.headers).get("Accept");
    calls.push({ url: String(url), accept });
    const a = accept ?? "";
    if (!a.includes("application/json") && !a.includes("text/event-stream")) throw new TypeError("Failed to fetch");
    return { ok: false, status: 401, text: async () => '{"error":"UNAUTHORIZED"}', json: async () => ({ error: "UNAUTHORIZED" }) };
  });
}

class FakeEventSource {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSED = 2;
  static instances: FakeEventSource[] = [];
  readyState = FakeEventSource.CONNECTING;
  onerror: ((ev: Event) => void) | null = null;
  closed = false;
  constructor(public url: string) {
    FakeEventSource.instances.push(this);
  }
  addEventListener() {}
  fail() {
    this.readyState = FakeEventSource.CLOSED;
    this.onerror?.(new Event("error"));
  }
  close() {
    this.closed = true;
    this.readyState = FakeEventSource.CLOSED;
  }
}

let calls: Call[];
beforeEach(() => {
  calls = [];
  vi.stubEnv("VITE_API_BASE_URL", "http://api.test");
  vi.stubGlobal("fetch", fakeLoggedOutBe(calls));
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("R2-1 미인증 401 — 기본 Accept: application/json", () => {
  it("apiFetch: 기본 Accept 로 401 을 실제 401 로 받는다(302 → TypeError 가 아니라)", async () => {
    const res = await apiFetch("/me/center-chats");
    expect(res.status).toBe(401);
    expect(calls[0].accept).toBe("application/json");
  });

  it("apiFetch: 호출자가 Accept 를 정하면 존중한다", async () => {
    await apiFetch("/me/notifications/stream", { headers: { Accept: "text/event-stream" } }).catch(() => undefined);
    expect(calls[0].accept).toBe("text/event-stream");
  });

  it("sessionAlive: 로그아웃 상태면 던지지 않고 false", async () => {
    await expect(sessionAlive("/me")).resolves.toBe(false);
    expect(calls[0]).toEqual({ url: "http://api.test/me", accept: "application/json" });
  });

  it("bootstrapAuth: /me 를 JSON Accept 로 부른다", async () => {
    await useAuthStore.getState().bootstrapAuth();
    expect(calls.find((c) => c.url.endsWith("/me"))?.accept).toBe("application/json");
    expect(useAuthStore.getState().accessToken).toBeNull();
  });

  it("채팅 전송이 401 이면 '로그인이 필요해요' 문구(일반 실패 문구가 아니라)", async () => {
    useCenterChatStore.getState().reset();
    await act(async () => {
      await useCenterChatStore.getState().send("customer", "31", "안녕하세요", []);
    });
    const p = useCenterChatStore.getState().pending[keyOf("customer", "31")][0];
    expect(p.status).toBe("failed");
    expect(p.error).toMatch(/로그인이 필요해요/);
  });

  it("SSE: 스트림이 끊긴 뒤 세션이 없으면(401) 다시 열지 않고 로그아웃 상태가 된다 — 무한 재연결 없음", async () => {
    vi.useFakeTimers();
    FakeEventSource.instances = [];
    vi.stubGlobal("EventSource", FakeEventSource);
    useAuthStore.setState({ accessToken: COOKIE_SESSION_MARKER, email: "viewer8@example.com", role: "MEMBER", authReady: true });
    render(<MemberNotificationBridge />);
    expect(FakeEventSource.instances).toHaveLength(1);
    act(() => FakeEventSource.instances[0].fail());
    await act(async () => {
      await vi.advanceTimersByTimeAsync(120_000);
    });
    expect(FakeEventSource.instances).toHaveLength(1);
    expect(useAuthStore.getState().accessToken).toBeNull();
  });
});

describe("R2-2 ChatMessage.deletable (계약 C15)", () => {
  const base = { id: "14", threadId: "16", senderRole: "OWNER", body: "안내", images: [], clientMessageId: "c", createdAt: "x" };

  it("BE 값이 있으면 그대로 — 이관 전 오너 메시지는 mine:true 여도 deletable:false", () => {
    expect(parseChatMessage({ ...base, mine: true, deletable: false })?.deletable).toBe(false);
    expect(parseChatMessage({ ...base, mine: true, deletable: true })?.deletable).toBe(true);
  });

  it("BE 원문(02_backend_report.md C15 실측, owner9 보기 대화 16): 이전 오너 메시지 14는 false, 자기 메시지 16은 true, 삭제 후 false", () => {
    const m14 = { id: "14", threadId: "16", senderRole: "OWNER", mine: true, body: "이전 오너 답장", images: [], clientMessageId: "4e7d8af4-0b04-40b1-82d3-c49ff379e5d4", deleted: false, deletable: false, createdAt: "2026-10-14T15:11:18.443Z" };
    const m16 = { id: "16", threadId: "16", senderRole: "OWNER", mine: true, body: "새 오너 답장", images: [], clientMessageId: "a16e045a-ea94-42c5-ac0d-f97c1c9930d4", deleted: false, deletable: true, createdAt: "2026-10-14T15:44:29.574Z" };
    const m16del = { ...m16, body: null, deleted: true, deletable: false };
    expect([m14, m16, m16del].map((m) => parseChatMessage(m)?.deletable)).toEqual([false, true, false]);
  });

  it("필드가 없으면 mine && !deleted 로 폴백", () => {
    expect(parseChatMessage({ ...base, mine: true })?.deletable).toBe(true);
    expect(parseChatMessage({ ...base, mine: false })?.deletable).toBe(false);
    expect(parseChatMessage({ ...base, mine: true, deleted: true, body: null })?.deletable).toBe(false);
  });

  it("삭제 반영(applyDeleted) 뒤에는 deletable:false", () => {
    const m = parseChatMessage({ ...base, mine: true, deletable: true })!;
    expect(applyDeleted([m], "14", null)[0].deletable).toBe(false);
  });
});

describe("R2-4 신고 상세 resolvedAt", () => {
  it("최상위 resolvedAt 키 없음, resolution.resolvedAt 만", () => {
    const d = parseAdminReportDetail({
      id: "2",
      thread: { id: "9", placeId: "401", placeName: "센터", status: "BLOCKED", program: null, createdAt: "t" },
      reporter: { memberId: "1", email: "a@e.x", role: "CUSTOMER" },
      reason: "SPAM",
      status: "RESOLVED",
      createdAt: "c",
      customer: { memberId: "1", email: "a@e.x", displayName: "김" },
      resolution: { action: "BLOCK_THREAD", note: null, resolvedBy: null, resolvedAt: "2026-10-15T01:00:00Z" },
    });
    expect(Object.keys(d)).not.toContain("resolvedAt");
    expect(d.resolution?.resolvedAt).toBe("2026-10-15T01:00:00Z");
  });
});
