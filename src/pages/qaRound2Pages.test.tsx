import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { theme } from "@/styles/theme";
import { ApiError } from "@/services/http/apiError";
import type { AdminChatReportDetail, AdminChatReportSummary, ChatMessage, ChatThread } from "@/services/centerChat/types";

/**
 * QA 2차 지적(03_qa_report.md R2-2·R2-3·R2-5) 화면 회귀 테스트 — 레포 모킹.
 * 보장하는 것:
 * - R2-2: 채팅 말풍선 삭제 메뉴는 m.deletable 일 때만(이관 전 오너 메시지 = mine:true·deletable:false 면 메뉴 없음)
 * - R2-3: 대시보드 문의 카드 라벨에 '이 센터' 기준임을 적고, 채팅 이벤트로 사이드바 배지가 갱신될 때 카드(선택 장소 값)도 다시 받는다
 * - R2-5: BLOCK_THREAD 처리 뒤 같은 대화의 다른 PENDING 신고 행도 '처리됨'·'대화 차단됨', 다른 대화 행은 그대로.
 *   409(이미 처리됨)면 목록을 다시 받고 안내 토스트
 * 보장하지 않는 것: BE 응답 원문(모킹), 실제 SSE 스트림.
 */

const chatRepo = vi.hoisted(() => ({
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
  fetchAdminChatReports: vi.fn(),
  fetchAdminChatReport: vi.fn(),
  resolveAdminChatReport: vi.fn(),
  fetchAdminChatMessages: vi.fn(),
  chatImageHref: (u: string) => `http://api.test${u}`,
}));
const ownerRepo = vi.hoisted(() => ({
  fetchOwnerPlace: vi.fn(),
  patchOwnerPlace: vi.fn(),
  fetchMyPlaces: vi.fn(),
  fetchPlaceStats: vi.fn(),
}));
vi.mock("@/services/centerChat/repositories/centerChatRepository", () => chatRepo);
vi.mock("@/services/ownerPlaces/repositories/ownerPlacesRepository", () => ownerRepo);
vi.mock("@/components/layout/BottomNav", () => ({ default: () => <nav data-testid="bottom-nav" /> }));

import ChatRoom from "@/components/centerChat/ChatRoom";
import CenterManagementLayout from "@/components/centerManagement/CenterManagementLayout";
import MyPlacesPage from "@/pages/ownerPlaces/MyPlacesPage";
import AdminChatReportsPage from "@/pages/admin/AdminChatReportsPage";
import { useCenterChatStore } from "@/stores/centerChatStore";
import { useAuthStore, COOKIE_SESSION_MARKER } from "@/stores/authStore";
import { useAdminAuthStore } from "@/stores/adminAuthStore";
import { useMemberNotificationStore } from "@/stores/notificationStore";
import { useToastStore } from "@/stores/toastStore";

let desktop = true;
beforeEach(() => {
  desktop = true;
  vi.stubGlobal("matchMedia", (q: string) => ({
    get matches() {
      return q.includes("1024px") ? desktop : false;
    },
    media: q,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
  }));
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 401, text: async () => "" })));
  useCenterChatStore.getState().reset();
  useMemberNotificationStore.getState().reset();
  useToastStore.setState({ toasts: [] });
  useAuthStore.setState({ accessToken: COOKIE_SESSION_MARKER, email: "owner9@example.com", role: "MEMBER", authReady: true });
  chatRepo.markThreadRead.mockResolvedValue({ threadId: "16", lastReadMessageId: null, unreadCount: 0 });
  chatRepo.fetchUnreadChats.mockResolvedValue({ unreadThreadCount: 0, unreadMessageCount: 0 });
});

function wrap(ui: React.ReactNode, path: string, pattern: string) {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path={pattern} element={ui} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

// ── R2-2 ──
const thread: ChatThread = {
  id: "16",
  place: { id: "401", name: "센터", thumbnailUrl: null },
  program: null,
  customer: { displayName: "김명상" },
  status: "OPEN",
  lastMessage: null,
  unreadCount: 0,
  unanswered: false,
  myLastReadMessageId: null,
  counterpartLastReadMessageId: null,
  createdAt: "2026-10-08T01:19:40.000Z",
};
const ownerMsg = (id: string, deletable: boolean): ChatMessage =>
  ({
    id, threadId: "16", senderRole: "OWNER", mine: true, body: `본문 ${id}`, images: [], clientMessageId: `c-${id}`,
    createdAt: "2026-10-08T01:20:00.000Z", deleted: false, deletedAt: null, deletable,
  }) as ChatMessage;

describe("R2-2 삭제 메뉴는 deletable 기준", () => {
  it("이관 전 오너 메시지(mine:true, deletable:false)에는 메뉴가 없고, 내 메시지에는 있다", async () => {
    chatRepo.fetchThread.mockResolvedValue(thread);
    chatRepo.fetchMessages.mockResolvedValue({ items: [ownerMsg("14", false), ownerMsg("15", true)], nextCursor: null });
    await act(async () => {
      await useCenterChatStore.getState().openThread("owner", "16");
    });
    wrap(<ChatRoom viewer="owner" threadId="16" />, "/", "*");
    const old = await screen.findByTestId("msg-14");
    expect(within(old).queryByRole("button", { name: "메시지 메뉴" })).not.toBeInTheDocument();
    fireEvent.contextMenu(old);
    expect(screen.queryByRole("menuitem", { name: /삭제/ })).not.toBeInTheDocument();
    expect(within(screen.getByTestId("msg-15")).getByRole("button", { name: "메시지 메뉴" })).toBeInTheDocument();
  });
});

// ── R2-3 ──
const view = {
  placeId: "12",
  regionId: "seoul",
  data: {
    id: "12", regionId: "seoul", name: "고요명상센터", address: "서울", hidden: false, lat: 37.5, lng: 127,
    shortDescription: "", description: "", thumbnailUrl: "", photos: [], hashtags: [], themes: [], hasTempleStay: false,
    duration: "", admissionFee: "", programs: [], instructors: [], organization: { name: "" }, externalLink: "", detailSections: [],
    facilities: [],
  },
  businessRegistrationNumber: null,
  editableFields: [],
};

describe("R2-3 대시보드 문의 카드 — 이 센터 기준 + 실시간 갱신", () => {
  let placeCount = 0;
  let total = 2;
  beforeEach(() => {
    placeCount = 0;
    total = 2;
    ownerRepo.fetchMyPlaces.mockResolvedValue([
      { placeId: "12", regionId: "seoul", name: "고요명상센터", thumbnailUrl: null, hidden: false, approvedAt: null },
      { placeId: "13", regionId: "seoul", name: "두번째센터", thumbnailUrl: null, hidden: false, approvedAt: null },
    ]);
    ownerRepo.fetchOwnerPlace.mockImplementation(async () => structuredClone(view));
    ownerRepo.fetchPlaceStats.mockRejectedValue(new Error("skip"));
    chatRepo.fetchInboxSummary.mockImplementation(async (placeId?: string | null) =>
      placeId
        ? { placeId, unansweredCount: placeCount, unreadThreadCount: placeCount, unreadMessageCount: placeCount }
        : { placeId: null, unansweredCount: total, unreadThreadCount: total, unreadMessageCount: total }
    );
  });

  it.each([true, false])("라벨에 '이 센터', 채팅 이벤트 뒤 카드 값도 갱신 (desktop=%s)", async (isDesktop) => {
    desktop = isDesktop;
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/profile/places"]}>
          <Routes>
            <Route element={<CenterManagementLayout />}>
              <Route path="/profile/places" element={<MyPlacesPage />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(await screen.findByTestId("inbox-unanswered")).toHaveTextContent("0");
    expect(screen.getByText(/이 센터 신규 문의/)).toBeInTheDocument();

    placeCount = 1;
    total = 3;
    act(() =>
      useCenterChatStore.getState().receiveMessage({
        threadId: "77",
        viewerRole: "OWNER",
        message: { ...ownerMsg("900", false), threadId: "77", senderRole: "CUSTOMER", mine: false },
        thread: { lastMessageId: "900", unreadCount: 1, unanswered: true, status: "OPEN" },
      })
    );
    await waitFor(() => expect(screen.getByTestId("inbox-unanswered")).toHaveTextContent("1"));
  });
});

// ── R2-5 ──
const summary = (id: string, threadId: string): AdminChatReportSummary => ({
  id,
  thread: { id: threadId, placeId: "401", placeName: `센터${threadId}`, status: "OPEN" },
  reporter: { memberId: "1", email: "viewer8@example.com", role: "CUSTOMER" },
  reason: "SPAM",
  status: "PENDING",
  createdAt: "2026-10-15T00:00:00Z",
  resolvedAt: null,
});
const detailOf = (s: AdminChatReportSummary, over: Partial<AdminChatReportDetail> = {}): AdminChatReportDetail =>
  ({
    ...s,
    thread: { ...s.thread, program: null, createdAt: "t" },
    customer: { memberId: "1", email: "viewer8@example.com", displayName: "김명상" },
    currentOwner: null,
    detail: null,
    reportedUpToMessageId: null,
    resolution: null,
    otherReportCount: 1,
    ...over,
  }) as AdminChatReportDetail;

describe("R2-5 대화 차단 뒤 같은 대화의 다른 신고 행", () => {
  beforeEach(() => {
    useAdminAuthStore.setState({ role: "ADMIN", authenticated: true });
    chatRepo.fetchAdminChatReports.mockResolvedValue({ items: [summary("2", "9"), summary("3", "9"), summary("4", "10")], nextCursor: null });
    chatRepo.fetchAdminChatReport.mockResolvedValue(detailOf(summary("2", "9")));
    chatRepo.fetchAdminChatMessages.mockResolvedValue({ items: [], nextCursor: null });
  });

  async function blockReport2() {
    wrap(<AdminChatReportsPage />, "/admin/chat-reports/2", "/admin/chat-reports/:reportId");
    fireEvent.click(await screen.findByRole("button", { name: "대화 차단" }));
    fireEvent.click(within(screen.getByRole("dialog")).getByRole("button", { name: "차단" }));
  }

  it("BLOCK_THREAD 성공 → 같은 대화(9)의 대기 신고 3도 '처리됨·대화 차단됨', 다른 대화(10)는 '대기'", async () => {
    const s2 = summary("2", "9");
    chatRepo.resolveAdminChatReport.mockResolvedValue(
      detailOf({ ...s2, status: "RESOLVED", thread: { ...s2.thread, status: "BLOCKED" } }, {
        resolution: { action: "BLOCK_THREAD", note: null, resolvedBy: null, resolvedAt: "2026-10-15T01:00:00Z" },
      })
    );
    await blockReport2();
    await waitFor(() => expect(screen.getByTestId("report-row-2")).toHaveTextContent("처리됨"));
    expect(screen.getByTestId("report-row-3")).toHaveTextContent("처리됨");
    expect(screen.getByTestId("report-row-3")).toHaveTextContent("대화 차단됨");
    expect(screen.getByTestId("report-row-4")).toHaveTextContent("대기");
    expect(screen.getByTestId("report-row-4")).not.toHaveTextContent("대화 차단됨");
  });

  it("409 이미 처리됨 → 목록 다시 받기 + 안내", async () => {
    chatRepo.resolveAdminChatReport.mockRejectedValue(
      new ApiError(409, "CENTER_CHAT_REPORT_ALREADY_RESOLVED", "already")
    );
    await blockReport2();
    await waitFor(() => expect(chatRepo.fetchAdminChatReports).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(chatRepo.fetchAdminChatReport).toHaveBeenCalledTimes(2));
    const msgs = useToastStore.getState().toasts.map((t) => t.message).join(" | ");
    expect(msgs).toMatch(/이미 처리된 신고/);
    expect(msgs).toMatch(/새로/);
  });
});
