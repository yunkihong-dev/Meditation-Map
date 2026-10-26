import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { theme } from "@/styles/theme";
import { parseChatDeletedEvent, parseChatThread, type ChatMessage, type ChatThread } from "@/services/centerChat/types";
import { previewText } from "@/components/centerChat/ThreadRow";

/**
 * 라운드 7 — 센터 1:1 문의(계약 01_contract_chat.md).
 * 보장하는 것:
 * - 상세 '문의하기': availability false 면 안 그림 / 프로그램 시트(진행 중 먼저, 지난 것은 접힘, '선택 없이') → 시작 API 인자 → 대화로 이동
 * - 전송 실패 → '다시 보내기'가 **같은 clientMessageId** 로 재전송(멱등, C3.6)
 * - SSE chat-message: id 중복 제거·순서 뒤바뀜 정렬, 내 메시지 이벤트가 대기 말풍선을 대체 / chat-read 로 "1" 사라짐 / 삭제 이벤트 → '삭제된 메시지'
 * - 알림 합치기: 같은 대화의 미확인 CENTER_CHAT_MESSAGE 는 1개만, 안읽은 수 증가 없음
 * - 사이드바 '1:1 문의' 미답변 배지 = summary.unansweredCount
 * - 삭제 SSE `chat-message-deleted`(BE `ChatRealtimeListener.DeletedEvent` 원문 shape) → 받는 쪽 보기의 말풍선·목록 미리보기·요약값
 * 보장하지 않는 것: 실제 BE 응답·SSE 스트림(레포를 모킹 — 실제 BE 연결은 스크린샷 스크립트로 확인).
 */

const repo = vi.hoisted(() => ({
  fetchChatAvailability: vi.fn(),
  startChat: vi.fn(),
  fetchThread: vi.fn(),
  fetchMessages: vi.fn(),
  sendMessage: vi.fn(),
  markThreadRead: vi.fn(),
  fetchThreads: vi.fn(),
  fetchInboxSummary: vi.fn(),
  fetchUnreadChats: vi.fn(),
  deleteMessage: vi.fn(),
  reportThread: vi.fn(),
  chatImageHref: (u: string) => `http://api.test${u}`,
}));
vi.mock("@/services/centerChat/repositories/centerChatRepository", () => repo);
vi.mock("@/components/layout/BottomNav", () => ({ default: () => <nav data-testid="bottom-nav" /> }));

import ChatInquiryButton, { InquiryBar, sheetPrograms } from "@/components/centerChat/ChatInquiryButton";
import ChatRoom from "@/components/centerChat/ChatRoom";
import CenterManagementLayout from "@/components/centerManagement/CenterManagementLayout";
import { applyIncoming } from "@/stores/notificationStore";
import { keyOf, mergeMessages, useCenterChatStore } from "@/stores/centerChatStore";
import { useAuthStore, COOKIE_SESSION_MARKER } from "@/stores/authStore";
import type { MeditationPlace } from "@/services/meditation/types";
import type { AppNotification } from "@/services/notifications/types";

const place = {
  id: "401", regionId: "KR-11", name: "라운드3 테스트센터", address: "", shortDescription: "", description: "", thumbnailUrl: "",
  hashtags: [], themes: [], hasTempleStay: false, duration: "", organization: { name: "" }, externalLink: "", detailSections: [],
  programs: [
    { id: "p-1", title: "아침 명상", status: "ongoing", imageUrl: "", bodyFromVenue: "", reviews: [] },
    { id: "p-2", title: "지난 수행", status: "past", imageUrl: "", bodyFromVenue: "", reviews: [] },
    { id: "p-3", title: "숨김 프로그램", status: "ongoing", imageUrl: "", bodyFromVenue: "", reviews: [], hidden: true },
  ],
} as unknown as MeditationPlace;

const thread = (over: Partial<ChatThread> = {}): ChatThread => ({
  id: "31",
  place: { id: "401", name: "라운드3 테스트센터", thumbnailUrl: null },
  program: { id: "p-1", title: "아침 명상" },
  customer: { displayName: "김명상" },
  status: "OPEN",
  lastMessage: { id: "905", senderRole: "CUSTOMER", preview: "안녕하세요", imageCount: 0, deleted: false, createdAt: "2026-10-08T01:20:00.000Z" },
  unreadCount: 0,
  unanswered: true,
  myLastReadMessageId: "905",
  counterpartLastReadMessageId: "900",
  createdAt: "2026-10-08T01:19:40.000Z",
  ...over,
});

const msg = (id: string, over: Partial<ChatMessage> = {}): ChatMessage => ({
  id,
  threadId: "31",
  senderRole: "CUSTOMER",
  mine: true,
  body: `본문 ${id}`,
  images: [],
  clientMessageId: `c-${id}`,
  createdAt: "2026-10-08T01:20:00.000Z",
  deleted: false,
  deletedAt: null,
  deletable: (over.mine ?? true) && !(over.deleted ?? false),
  ...over,
});

function Where() {
  return <div data-testid="where">{useLocation().pathname}</div>;
}

function wrap(ui: React.ReactNode, path = "/") {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[path]}>
        {ui}
        <Routes>
          <Route path="*" element={<Where />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

beforeEach(() => {
  useCenterChatStore.getState().reset();
  useAuthStore.setState({ accessToken: COOKIE_SESSION_MARKER, email: "viewer8@example.com", role: "MEMBER", authReady: true });
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 401, text: async () => "" })));
  repo.fetchChatAvailability.mockResolvedValue({ placeId: "401", available: true, reason: null });
  repo.startChat.mockResolvedValue(thread({ lastMessage: null }));
  repo.markThreadRead.mockResolvedValue({ threadId: "31", lastReadMessageId: "905", unreadCount: 0 });
  repo.fetchInboxSummary.mockResolvedValue({ placeId: null, unansweredCount: 3, unreadThreadCount: 2, unreadMessageCount: 5 });
  repo.fetchUnreadChats.mockResolvedValue({ unreadThreadCount: 0, unreadMessageCount: 0 });
});

describe("상세 '문의하기' + 프로그램 시트", () => {
  it("availability false 면 sticky 바를 그리지 않는다", async () => {
    repo.fetchChatAvailability.mockResolvedValue({ placeId: "401", available: false, reason: "NO_OWNER" });
    wrap(<ChatInquiryButton place={place} />);
    await waitFor(() => expect(repo.fetchChatAvailability).toHaveBeenCalledWith("401"));
    expect(screen.queryByTestId("chat-inquiry-bar")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /문의하기/ })).not.toBeInTheDocument();
  });

  it("availability true 면 탭바 위 sticky 바에 '문의하기' 버튼을 그린다", async () => {
    wrap(<ChatInquiryButton place={place} />);
    const bar = await screen.findByTestId("chat-inquiry-bar");
    expect(within(bar).getByRole("button", { name: /문의하기/ })).toBeInTheDocument();
    const style = getComputedStyle(bar);
    expect(style.position).toBe("sticky");
    expect(style.bottom).toContain("--tabbar-space");
  });

  it("바에 glass 받침(rgba(255,255,255,0.7) + blur 20px, -webkit- 포함) — 버튼과 탭바 사이 틈을 메운다(탭바 위에 딱 붙음)", async () => {
    wrap(<ChatInquiryButton place={place} />);
    const bar = await screen.findByTestId("chat-inquiry-bar");
    // styled-components 가 넣은 이 바의 규칙만 모은다(jsdom 은 backdrop-filter 를 computed style 에 남기지 않음)
    const cls = Array.from(bar.classList);
    const css = Array.from(document.querySelectorAll("style"))
      .map((el) => el.textContent ?? "")
      .join("\n")
      .split("}")
      .filter((rule) => cls.some((c) => rule.includes(`.${c}`)))
      .join("}")
      .replace(/\s+/g, "");
    expect(css).toContain("background:rgba(255,255,255,0.7)");
    expect(css).toContain("-webkit-backdrop-filter:blur(20px)");
    expect(css).toMatch(/[^-]backdrop-filter:blur\(20px\)/);
    // 탭바 위로 8px 띄우던 틈을 없애고 받침이 탭바 윗변까지 내려온다(겹치지 않음)
    expect(getComputedStyle(bar).bottom).toBe("var(--tabbar-space)");
  });

  it("버튼을 누르면 프로그램 시트가 바 밖(body 포털)에 열린다", async () => {
    wrap(<ChatInquiryButton place={place} />);
    const bar = await screen.findByTestId("chat-inquiry-bar");
    fireEvent.click(within(bar).getByRole("button", { name: /문의하기/ }));
    const sheet = screen.getByRole("dialog", { name: "문의할 프로그램 선택" });
    expect(bar.contains(sheet)).toBe(false);
    expect(repo.startChat).not.toHaveBeenCalled();
  });

  it("InquiryBar 는 동작을 모른다 — 누르면 onPress 만 부른다(카카오 분기 대비)", () => {
    const onPress = vi.fn();
    wrap(<InquiryBar onPress={onPress} label="카카오톡으로 문의하기" />);
    fireEvent.click(screen.getByRole("button", { name: /카카오톡으로 문의하기/ }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("숨김 제외·진행 중 먼저·지난 것은 접힘, 프로그램 고르면 그 id 로 시작 → 대화로 이동", async () => {
    expect(sheetPrograms(place.programs).ongoing.map((p) => p.id)).toEqual(["p-1"]);
    wrap(<ChatInquiryButton place={place} />);
    fireEvent.click(await screen.findByRole("button", { name: /문의하기/ }));
    const sheet = screen.getByRole("dialog", { name: "문의할 프로그램 선택" });
    expect(within(sheet).getByText("아침 명상")).toBeInTheDocument();
    expect(within(sheet).queryByText("숨김 프로그램")).not.toBeInTheDocument();
    expect(within(sheet).queryByText("지난 수행")).not.toBeInTheDocument();
    fireEvent.click(within(sheet).getByRole("button", { name: "지난 프로그램 1개 보기" }));
    expect(within(sheet).getByText("지난 수행")).toBeInTheDocument();
    fireEvent.click(within(sheet).getByText("아침 명상"));
    await waitFor(() => expect(repo.startChat).toHaveBeenCalledWith("401", "p-1"));
    await waitFor(() => expect(screen.getByTestId("where")).toHaveTextContent("/profile/center-chats/31"));
  });

  it("'프로그램 선택 없이 문의하기' → programId null", async () => {
    wrap(<ChatInquiryButton place={place} />);
    fireEvent.click(await screen.findByRole("button", { name: /문의하기/ }));
    fireEvent.click(screen.getByRole("button", { name: "프로그램 선택 없이 문의하기" }));
    await waitFor(() => expect(repo.startChat).toHaveBeenCalledWith("401", null));
  });

  it("비로그인이면 시작하지 않고 로그인으로", async () => {
    useAuthStore.setState({ accessToken: null, role: null, authReady: true });
    wrap(<ChatInquiryButton place={place} />);
    fireEvent.click(await screen.findByRole("button", { name: /문의하기/ }));
    expect(repo.startChat).not.toHaveBeenCalled();
    expect(screen.getByTestId("where")).toHaveTextContent("/profile");
  });
});

describe("채팅 화면 — 멱등 재전송·SSE·삭제", () => {
  async function openRoom() {
    repo.fetchThread.mockResolvedValue(thread());
    repo.fetchMessages.mockResolvedValue({ items: [msg("905"), msg("902", { mine: false, senderRole: "OWNER", clientMessageId: null })], nextCursor: null });
    await act(async () => {
      await useCenterChatStore.getState().openThread("customer", "31");
    });
    wrap(<ChatRoom viewer="customer" threadId="31" />);
  }

  it("전송 실패 → '다시 보내기'는 같은 clientMessageId 로 재전송, 성공하면 대기 말풍선이 실제 메시지로 바뀐다", async () => {
    await openRoom();
    repo.sendMessage.mockRejectedValueOnce(new Error("offline"));
    fireEvent.change(screen.getByLabelText("메시지"), { target: { value: "자리 있나요?" } });
    fireEvent.click(screen.getByRole("button", { name: "보내기" }));
    expect(await screen.findByRole("button", { name: "다시 보내기" })).toBeInTheDocument();
    const firstId = repo.sendMessage.mock.calls[0][2].clientMessageId as string;
    expect(firstId).toMatch(/^[0-9a-f-]{36}$/);
    repo.sendMessage.mockResolvedValueOnce(msg("906", { body: "자리 있나요?", clientMessageId: firstId }));
    fireEvent.click(screen.getByRole("button", { name: "다시 보내기" }));
    await waitFor(() => expect(repo.sendMessage).toHaveBeenCalledTimes(2));
    expect(repo.sendMessage.mock.calls[1][2].clientMessageId).toBe(firstId);
    expect(await screen.findByTestId("msg-906")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "다시 보내기" })).not.toBeInTheDocument();
  });

  it("SSE chat-message 중복·역순 도착도 id 순 1번씩, 내 메시지 이벤트가 대기 말풍선을 대체", async () => {
    await openRoom();
    const st = useCenterChatStore.getState();
    const ev = (m: ChatMessage) => ({ threadId: "31", viewerRole: "CUSTOMER" as const, message: m, thread: { lastMessageId: m.id, unreadCount: 0, unanswered: false, status: "OPEN" } });
    act(() => {
      st.receiveMessage(ev(msg("910", { mine: false, senderRole: "OWNER", clientMessageId: null })));
      st.receiveMessage(ev(msg("908", { mine: false, senderRole: "OWNER", clientMessageId: null })));
      st.receiveMessage(ev(msg("910", { mine: false, senderRole: "OWNER", clientMessageId: null })));
    });
    const ids = useCenterChatStore.getState().messages[keyOf("customer", "31")].map((m) => m.id);
    expect(ids).toEqual(["902", "905", "908", "910"]);
    expect(screen.getAllByTestId(/^msg-91?0$|^msg-908$/)).toHaveLength(2);
    // 상대 메시지를 열린 대화에서 받으면 곧바로 읽음(C7.1)
    await waitFor(() => expect(repo.markThreadRead).toHaveBeenCalled());

    // 대기 말풍선 → 같은 clientMessageId 의 내 메시지 이벤트가 오면 대체
    repo.sendMessage.mockReturnValueOnce(new Promise(() => undefined));
    fireEvent.change(screen.getByLabelText("메시지"), { target: { value: "보내는 중" } });
    fireEvent.click(screen.getByRole("button", { name: "보내기" }));
    const pend = useCenterChatStore.getState().pending[keyOf("customer", "31")][0];
    expect(screen.getByTestId(`pending-${pend.clientMessageId}`)).toBeInTheDocument();
    act(() => st.receiveMessage(ev(msg("911", { body: "보내는 중", clientMessageId: pend.clientMessageId }))));
    expect(screen.queryByTestId(`pending-${pend.clientMessageId}`)).not.toBeInTheDocument();
    expect(screen.getByTestId("msg-911")).toBeInTheDocument();
  });

  it("chat-read: 상대가 읽으면 내 메시지의 '1'이 사라진다", async () => {
    await openRoom();
    expect(within(screen.getByTestId("msg-905")).getByLabelText("상대가 아직 읽지 않음")).toBeInTheDocument();
    act(() => useCenterChatStore.getState().receiveRead({ threadId: "31", readerRole: "OWNER", lastReadMessageId: "905" }));
    expect(within(screen.getByTestId("msg-905")).queryByLabelText("상대가 아직 읽지 않음")).not.toBeInTheDocument();
  });

  it("DC5 삭제: 메뉴 → 확인 → '삭제된 메시지', 상대 쪽 삭제 이벤트도 같은 표시", async () => {
    await openRoom();
    repo.deleteMessage.mockResolvedValue(null);
    fireEvent.click(within(screen.getByTestId("msg-905")).getByRole("button", { name: "메시지 메뉴" }));
    fireEvent.click(screen.getByRole("menuitem", { name: /삭제/ }));
    fireEvent.click(within(screen.getByRole("dialog", { name: "메시지 삭제" })).getByRole("button", { name: "삭제" }));
    await waitFor(() => expect(repo.deleteMessage).toHaveBeenCalledWith("customer", "31", "905"));
    expect(within(screen.getByTestId("msg-905")).getByText("삭제된 메시지입니다")).toBeInTheDocument();
    // 상대 메시지는 메뉴가 없고, 삭제 이벤트로만 바뀐다
    expect(within(screen.getByTestId("msg-902")).queryByRole("button", { name: "메시지 메뉴" })).not.toBeInTheDocument();
    act(() => useCenterChatStore.getState().receiveDeleted({ threadId: "31", viewerRole: "CUSTOMER", messageId: "902", thread: null }));
    expect(within(screen.getByTestId("msg-902")).getByText("삭제된 메시지입니다")).toBeInTheDocument();
  });

  it("BLOCKED 면 입력창 대신 안내(chat-thread 이벤트)", async () => {
    await openRoom();
    act(() => useCenterChatStore.getState().receiveThread({ threadId: "31", status: "BLOCKED" }));
    expect(screen.queryByLabelText("메시지")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("더 이상 메시지를 보낼 수 없어요");
  });
});

describe("순수 로직", () => {
  it("BE chat-message-deleted 원문 → 받는 쪽 보기의 말풍선·목록 미리보기가 '삭제된 메시지', 요약값 반영", () => {
    const raw = {
      threadId: "31",
      viewerRole: "OWNER",
      messageId: "905",
      thread: { lastMessageId: "905", unreadCount: 0, unanswered: false, status: "OPEN" },
    };
    const e = parseChatDeletedEvent(raw);
    expect(e).toEqual({ threadId: "31", viewerRole: "OWNER", messageId: "905", thread: raw.thread });
    useCenterChatStore.setState({
      threads: { "owner:31": thread({ unreadCount: 1 }) },
      messages: { "owner:31": [msg("905", { mine: false, body: "원문", clientMessageId: null })] },
    });
    act(() => useCenterChatStore.getState().receiveDeleted(e!));
    const st = useCenterChatStore.getState();
    expect(st.messages["owner:31"][0]).toMatchObject({ deleted: true, body: null, images: [] });
    expect(previewText(st.threads["owner:31"])).toBe("삭제된 메시지");
    expect(st.threads["owner:31"]).toMatchObject({ unreadCount: 0, unanswered: false });
    expect(st.threads["customer:31"]).toBeUndefined();
  });

  it("parseChatThread: lastMessage.deleted 를 읽는다(C9)", () => {
    const t = parseChatThread({ id: "31", place: {}, customer: {}, lastMessage: { id: "9", senderRole: "OWNER", preview: null, imageCount: 0, deleted: true, createdAt: "x" } });
    expect(t?.lastMessage?.deleted).toBe(true);
  });

  it("mergeMessages: 같은 id 는 새 값, id 오름차순", () => {
    const r = mergeMessages([msg("10"), msg("9")], [msg("10", { deleted: true }), msg("11")]);
    expect(r.map((m) => m.id)).toEqual(["9", "10", "11"]);
    expect(r[1].deleted).toBe(true);
  });

  it("알림 합치기: 같은 대화 미확인 CENTER_CHAT_MESSAGE 는 1개, 안읽은 수 그대로", () => {
    const n = (id: string, read = false): AppNotification => ({
      id, type: "CENTER_CHAT_MESSAGE", title: "새 문의 메시지", body: "", linkUrl: "/center/inquiries/31",
      refType: "CENTER_CHAT", refId: "31", read, readAt: null, createdAt: "",
    });
    const r = applyIncoming([n("5"), n("3", true)], new Set(["5", "3"]), 1, n("7"), true);
    expect(r.items.map((x) => x.id)).toEqual(["7", "3"]);
    expect(r.unreadCount).toBe(1);
  });
});

describe("사이드바 '1:1 문의' 미답변 배지", () => {
  it("summary.unansweredCount 를 배지로", async () => {
    vi.stubGlobal("matchMedia", (q: string) => ({ matches: q.includes("1024px"), media: q, addEventListener: () => undefined, removeEventListener: () => undefined }));
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/center/inquiries"]}>
          <Routes>
            <Route element={<CenterManagementLayout />}>
              <Route path="/center/inquiries" element={<div />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(await screen.findByLabelText("미답변 3건")).toHaveTextContent("3");
  });
});

describe("관리자 '대화 신고' 메뉴 — DC3", () => {
  it.each([
    ["DEV", false],
    ["EMPLOYEE", true],
    ["ADMIN", true],
  ])("%s → 메뉴 %s", async (role, shown) => {
    const { default: AdminLayout } = await import("@/components/admin/AdminLayout");
    const { useAdminAuthStore } = await import("@/stores/adminAuthStore");
    vi.stubGlobal("matchMedia", (q: string) => ({ matches: true, media: q, addEventListener: () => undefined, removeEventListener: () => undefined }));
    useAdminAuthStore.setState({ username: "admin", role, ready: true, authenticated: false });
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/admin"]}>
          <Routes>
            <Route path="/admin" element={<AdminLayout />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(!!screen.queryByText("대화 신고")).toBe(shown);
  });
});
