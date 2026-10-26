import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { theme } from "@/styles/theme";
import { apiErrorFrom } from "@/services/http/apiError";
import { parseAvailability } from "@/services/centerChat/types";
import {
  buildInquiryPut,
  isValidKakaoUrl,
  parseInquirySettings,
  validateInquiryDraft,
} from "@/services/ownerPlaces/inquirySettings";
import { OWNER_EDITABLE_FIELDS } from "@/services/ownerPlaces/types";

/**
 * 라운드 10 — 문의 방식(카카오톡, 계약 C14·C16·C17).
 * 보장하는 것:
 * - 상세 하단 바: availability.reason 분기 — null → 채팅 '문의하기' / "KAKAO" → '카카오톡으로 문의하기' 링크(새 창, noopener noreferrer, 비로그인도) / 그 외 → 숨김.
 *   kakaoUrl 이 형식에 안 맞으면 숨김(방어)
 * - 링크 검증이 BE InquirySettingsPolicy 정규식과 같은 판정(정상·다른 도메인·http·종류 불일치·끝 슬래시·채널 /chat)
 * - 센터 정보 수정의 '문의 방식' 카드: PUT 본문, 클라이언트 검증, PUT 400 details.fields.kakaoUrl 문구 표시,
 *   기본정보 PATCH 와 요청 두 개(하나 실패 시 어느 쪽인지)
 * - 오너 1:1 문의: 카카오톡 모드인 장소가 있으면 안내 배너 + 설정으로 가기
 * 보장하지 않는 것: 실제 BE(모킹 — 실제 연결은 fe-r10-shots 스크립트).
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
  chatImageHref: (u: string) => `http://api.test${u}`,
}));
const ownerRepo = vi.hoisted(() => ({
  fetchOwnerPlace: vi.fn(),
  patchOwnerPlace: vi.fn(),
  fetchMyPlaces: vi.fn(),
  fetchPlaceStats: vi.fn(),
}));
const inqRepo = vi.hoisted(() => ({ fetchInquirySettings: vi.fn(), putInquirySettings: vi.fn() }));
vi.mock("@/services/centerChat/repositories/centerChatRepository", () => chatRepo);
vi.mock("@/services/ownerPlaces/repositories/ownerPlacesRepository", () => ownerRepo);
vi.mock("@/services/ownerPlaces/repositories/inquirySettingsRepository", () => inqRepo);
vi.mock("@/services/meditation/naverGeocode", () => ({ searchAddressCandidates: vi.fn() }));
vi.mock("@/components/layout/BottomNav", () => ({ default: () => <nav data-testid="bottom-nav" /> }));

import ChatInquiryButton from "@/components/centerChat/ChatInquiryButton";
import CenterManagementLayout from "@/components/centerManagement/CenterManagementLayout";
import OwnerPlaceEditPage from "@/pages/ownerPlaces/OwnerPlaceEditPage";
import CenterInquiriesPage from "@/pages/centerChat/CenterInquiriesPage";
import { useAuthStore, COOKIE_SESSION_MARKER } from "@/stores/authStore";
import { useCenterChatStore } from "@/stores/centerChatStore";
import type { MeditationPlace } from "@/services/meditation/types";

const place = {
  id: "403", regionId: "KR-11", name: "채팅 이관센터", address: "", shortDescription: "", description: "", thumbnailUrl: "",
  hashtags: [], themes: [], hasTempleStay: false, duration: "", organization: { name: "" }, externalLink: "", detailSections: [],
  programs: [],
} as unknown as MeditationPlace;

function Where() {
  return <div data-testid="where">{useLocation().pathname + useLocation().hash}</div>;
}

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
  useAuthStore.setState({ accessToken: COOKIE_SESSION_MARKER, email: "viewer8@example.com", role: "MEMBER", authReady: true });
  chatRepo.fetchInboxSummary.mockResolvedValue({ placeId: null, unansweredCount: 0, unreadThreadCount: 0, unreadMessageCount: 0 });
  chatRepo.fetchUnreadChats.mockResolvedValue({ unreadThreadCount: 0, unreadMessageCount: 0 });
  chatRepo.fetchThreads.mockResolvedValue({ items: [], nextCursor: null });
});

// ── BE 원문(02_backend_report.md C16 실측) ──
const AV_CHAT = { placeId: "403", available: true, reason: null, mode: "CHAT", kakaoType: null, kakaoUrl: null };
const AV_KAKAO = { placeId: "403", available: false, reason: "KAKAO", mode: "KAKAO", kakaoType: "OPEN_CHAT", kakaoUrl: "https://open.kakao.com/o/gAbc123" };
const AV_HIDDEN = { placeId: "402", available: false, reason: "HIDDEN", mode: "KAKAO", kakaoType: null, kakaoUrl: null };
const AV_NO_OWNER = { placeId: "102", available: false, reason: "NO_OWNER", mode: "CHAT", kakaoType: null, kakaoUrl: null };

function renderButton() {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <ChatInquiryButton place={place} />
        <Routes>
          <Route path="*" element={<Where />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe("C16 availability 파서", () => {
  it("mode·kakaoType·kakaoUrl 을 읽는다", () => {
    expect(parseAvailability(AV_KAKAO)).toEqual(AV_KAKAO);
    expect(parseAvailability(AV_CHAT)).toEqual(AV_CHAT);
    expect(parseAvailability({ placeId: "1", available: true, reason: null })).toMatchObject({ mode: "CHAT", kakaoType: null, kakaoUrl: null });
  });
});

describe("상세 하단 바 — reason 분기", () => {
  it("reason null → 채팅 '문의하기' 버튼", async () => {
    chatRepo.fetchChatAvailability.mockResolvedValue(parseAvailability(AV_CHAT));
    renderButton();
    const bar = await screen.findByTestId("chat-inquiry-bar");
    expect(within(bar).getByRole("button", { name: "문의하기" })).toBeInTheDocument();
    expect(within(bar).queryByRole("link")).not.toBeInTheDocument();
  });

  it.each([
    ["로그인", true],
    ["비로그인", false],
  ])("reason KAKAO → '카카오톡으로 문의하기' 링크, 새 창 + noopener noreferrer (%s)", async (_l, member) => {
    if (!member) useAuthStore.setState({ accessToken: null, email: null, role: null, authReady: true });
    chatRepo.fetchChatAvailability.mockResolvedValue(parseAvailability(AV_KAKAO));
    renderButton();
    const link = await screen.findByRole("link", { name: /카카오톡으로 문의하기/ });
    expect(link).toHaveAttribute("href", "https://open.kakao.com/o/gAbc123");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")?.split(/\s+/)).toEqual(expect.arrayContaining(["noopener", "noreferrer"]));
    fireEvent.click(link);
    expect(chatRepo.startChat).not.toHaveBeenCalled();
    expect(screen.getByTestId("where")).toHaveTextContent(/^\/$/);
  });

  it.each([
    ["HIDDEN", AV_HIDDEN],
    ["NO_OWNER", AV_NO_OWNER],
    ["KAKAO 인데 링크가 형식 밖", { ...AV_KAKAO, kakaoUrl: "https://evil.example.com/o/x" }],
  ])("%s → 바 숨김", async (_l, av) => {
    chatRepo.fetchChatAvailability.mockResolvedValue(parseAvailability(av));
    renderButton();
    await waitFor(() => expect(chatRepo.fetchChatAvailability).toHaveBeenCalled());
    await new Promise((r) => setTimeout(r, 20));
    expect(screen.queryByTestId("chat-inquiry-bar")).not.toBeInTheDocument();
  });
});

describe("카카오 링크 검증 = BE InquirySettingsPolicy 정규식", () => {
  it.each([
    ["OPEN_CHAT", "https://open.kakao.com/o/gAbc123", true],
    ["OPEN_CHAT", "  https://open.kakao.com/o/gAbc123  ", true], // 앞뒤 공백만 제거
    ["CHANNEL", "https://pf.kakao.com/_xAbCd", true],
    ["CHANNEL", "https://pf.kakao.com/_xAbCd/chat", true],
    ["OPEN_CHAT", "http://open.kakao.com/o/gAbc123", false], // http
    ["OPEN_CHAT", "https://open.kakao.com.evil.com/o/gAbc123", false], // 다른 도메인
    ["OPEN_CHAT", "https://open.kakao.com/me/someone", false], // 다른 경로
    ["CHANNEL", "https://open.kakao.com/o/gAbc123", false], // 종류 불일치
    ["OPEN_CHAT", "https://pf.kakao.com/_xAbCd", false], // 종류 불일치
    ["CHANNEL", "https://pf.kakao.com/_xAbC/chat/x", false],
    ["OPEN_CHAT", "https://open.kakao.com/o/gAbc123/", false], // 끝 슬래시
    ["OPEN_CHAT", "https://OPEN.kakao.com/o/gAbc123", false], // 대소문자
    ["OPEN_CHAT", "https://open.kakao.com/o/gAbc123?x=1", false], // 쿼리
    ["OPEN_CHAT", `https://open.kakao.com/o/${"a".repeat(65)}`, false], // id 64자 초과
  ] as const)("%s %s → %s", (type, url, ok) => {
    expect(isValidKakaoUrl(type, url)).toBe(ok);
  });

  it("validateInquiryDraft: BE 와 같은 키·문구", () => {
    expect(validateInquiryDraft({ mode: "CHAT", kakaoType: null, kakaoUrl: "" })).toEqual({});
    expect(validateInquiryDraft({ mode: "KAKAO", kakaoType: null, kakaoUrl: "" })).toEqual({
      kakaoType: "OPEN_CHAT 또는 CHANNEL 이어야 합니다.",
      kakaoUrl: "필수입니다.",
    });
    expect(validateInquiryDraft({ mode: "KAKAO", kakaoType: "CHANNEL", kakaoUrl: "https://open.kakao.com/o/gAbc123" })).toEqual({
      kakaoUrl: "https://pf.kakao.com/… 형식의 카카오톡 채널 링크여야 합니다.",
    });
    expect(validateInquiryDraft({ mode: "KAKAO", kakaoType: "OPEN_CHAT", kakaoUrl: "http://open.kakao.com/o/gAbc123" })).toEqual({
      kakaoUrl: "https://open.kakao.com/o/… 형식의 오픈채팅 링크여야 합니다.",
    });
  });

  it("buildInquiryPut: KAKAO 는 공백 제거한 링크, CHAT 은 유효한 링크만 보관(아니면 null 둘 다)", () => {
    expect(buildInquiryPut({ mode: "KAKAO", kakaoType: "OPEN_CHAT", kakaoUrl: " https://open.kakao.com/o/gAbc123 " })).toEqual({
      mode: "KAKAO", kakaoType: "OPEN_CHAT", kakaoUrl: "https://open.kakao.com/o/gAbc123",
    });
    expect(buildInquiryPut({ mode: "CHAT", kakaoType: "CHANNEL", kakaoUrl: "https://pf.kakao.com/_xAbCd/chat" })).toEqual({
      mode: "CHAT", kakaoType: "CHANNEL", kakaoUrl: "https://pf.kakao.com/_xAbCd/chat",
    });
    expect(buildInquiryPut({ mode: "CHAT", kakaoType: "OPEN_CHAT", kakaoUrl: "반쯤 쓴 링크" })).toEqual({ mode: "CHAT", kakaoType: null, kakaoUrl: null });
  });

  it("parseInquirySettings: BE 원문 5키", () => {
    const raw = { placeId: "403", mode: "KAKAO", kakaoType: "CHANNEL", kakaoUrl: "https://pf.kakao.com/_xAbCd/chat", updatedAt: "2026-10-14T15:44:49.267Z" };
    expect(parseInquirySettings(raw)).toEqual(raw);
    expect(parseInquirySettings({ placeId: "403", mode: "CHAT", kakaoType: null, kakaoUrl: null, updatedAt: null })).toEqual({
      placeId: "403", mode: "CHAT", kakaoType: null, kakaoUrl: null, updatedAt: null,
    });
  });
});

// ── 오너 설정 카드 ──
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
  editableFields: [...OWNER_EDITABLE_FIELDS],
};
const SETTINGS_CHAT = { placeId: "12", mode: "CHAT", kakaoType: null, kakaoUrl: null, updatedAt: null };

function renderEdit(isDesktop = true) {
  desktop = isDesktop;
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={["/profile/places/12/edit"]}>
        <Routes>
          <Route element={<CenterManagementLayout />}>
            <Route path="/profile/places/:placeId/edit" element={<OwnerPlaceEditPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe("센터 정보 수정 — '문의 방식' 카드", () => {
  beforeEach(() => {
    useAuthStore.setState({ accessToken: COOKIE_SESSION_MARKER, email: "owner9@example.com", role: "MEMBER", authReady: true });
    ownerRepo.fetchOwnerPlace.mockImplementation(async () => structuredClone(view));
    ownerRepo.patchOwnerPlace.mockImplementation(async () => structuredClone(view));
    inqRepo.fetchInquirySettings.mockResolvedValue({ ...SETTINGS_CHAT });
    inqRepo.putInquirySettings.mockImplementation(async (_id: string, b: Record<string, unknown>) => ({ placeId: "12", updatedAt: "t", ...b }));
  });

  async function chooseKakao(type: "오픈채팅" | "카카오톡 채널", url: string) {
    const card = await screen.findByRole("region", { name: "문의 방식" });
    // 모바일(<1024px)은 카드가 접힌 요약 행으로 시작 — 사용자처럼 머리를 눌러 펼칩니다(PC 는 머리 버튼 없음).
    const head = within(card).queryByRole("button", { name: /^문의 방식/, expanded: false });
    if (head) fireEvent.click(head);
    fireEvent.click(within(card).getByRole("radio", { name: /카카오톡으로 받기/ }));
    fireEvent.click(within(card).getByRole("radio", { name: type }));
    fireEvent.change(within(card).getByLabelText("카카오톡 링크"), { target: { value: url } });
    return card;
  }

  it.each([true, false])("오픈채팅 링크 저장 → PUT 한 번(공백 제거), 기본정보 PATCH 없음 (desktop=%s)", async (isDesktop) => {
    renderEdit(isDesktop);
    const card = await chooseKakao("오픈채팅", " https://open.kakao.com/o/gAbc123 ");
    expect(within(card).getByLabelText("카카오톡 링크")).toHaveAttribute("placeholder", expect.stringContaining("https://open.kakao.com/o/"));
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(inqRepo.putInquirySettings).toHaveBeenCalledTimes(1));
    expect(inqRepo.putInquirySettings).toHaveBeenCalledWith("12", { mode: "KAKAO", kakaoType: "OPEN_CHAT", kakaoUrl: "https://open.kakao.com/o/gAbc123" });
    expect(ownerRepo.patchOwnerPlace).not.toHaveBeenCalled();
  });

  it("채널 placeholder, 종류 불일치는 저장 전에 막고 문구", async () => {
    renderEdit();
    const card = await chooseKakao("카카오톡 채널", "https://open.kakao.com/o/gAbc123");
    const input = within(card).getByLabelText("카카오톡 링크");
    expect(input).toHaveAttribute("placeholder", expect.stringContaining("https://pf.kakao.com/"));
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    expect(await within(card).findByText("https://pf.kakao.com/… 형식의 카카오톡 채널 링크여야 합니다.")).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(inqRepo.putInquirySettings).not.toHaveBeenCalled();
  });

  it("PUT 400 → details.fields.kakaoUrl 문구를 링크 칸 아래에", async () => {
    inqRepo.putInquirySettings.mockRejectedValue(
      apiErrorFrom(400, JSON.stringify({ code: "VALIDATION_FAILED", message: "입력값 검증에 실패했습니다.", details: { fields: { kakaoUrl: "서버가 거부한 링크예요(테스트)" } } }))
    );
    renderEdit();
    const card = await chooseKakao("오픈채팅", "https://open.kakao.com/o/gAbc123");
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    expect(await within(card).findByText("서버가 거부한 링크예요(테스트)")).toBeInTheDocument();
    expect(within(card).getByLabelText("카카오톡 링크")).toHaveAttribute("aria-invalid", "true");
  });

  it("기본정보 + 문의 방식 함께 저장: 요청 두 개, PUT 만 실패하면 어느 쪽인지 표시", async () => {
    inqRepo.putInquirySettings.mockRejectedValue(apiErrorFrom(500, ""));
    renderEdit();
    fireEvent.change(await screen.findByLabelText("센터 이름"), { target: { value: "새 이름" } });
    await chooseKakao("오픈채팅", "https://open.kakao.com/o/gAbc123");
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(ownerRepo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    expect(inqRepo.putInquirySettings).toHaveBeenCalledTimes(1);
    expect(ownerRepo.patchOwnerPlace.mock.calls[0][1]).toEqual({ name: "새 이름" });
    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("기본 정보는 저장했어요");
    expect(alert).toHaveTextContent("문의 방식은 저장하지 못했어요");
  });
});

// ── 오너 1:1 문의 안내 배너 ──
describe("오너 1:1 문의 — 카카오톡 모드 안내 배너", () => {
  beforeEach(() => {
    ownerRepo.fetchMyPlaces.mockResolvedValue([
      { placeId: "12", regionId: "seoul", name: "고요명상센터", thumbnailUrl: null, hidden: false, approvedAt: null },
    ]);
  });

  function renderInbox() {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/center/inquiries"]}>
          <Routes>
            <Route element={<CenterManagementLayout />}>
              <Route path="/center/inquiries" element={<CenterInquiriesPage />} />
            </Route>
            <Route path="*" element={<Where />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );
  }

  it("KAKAO 면 배너 + '설정으로 가기' → 그 장소 센터 정보 수정의 문의 방식 카드", async () => {
    inqRepo.fetchInquirySettings.mockResolvedValue({ placeId: "12", mode: "KAKAO", kakaoType: "OPEN_CHAT", kakaoUrl: "https://open.kakao.com/o/gAbc123", updatedAt: "t" });
    renderInbox();
    const banner = await screen.findByRole("status", { name: "문의 방식 안내" });
    expect(banner).toHaveTextContent("현재 새 문의는 카카오톡으로 받고 있어요. 진행 중인 대화는 계속 답변할 수 있어요");
    fireEvent.click(within(banner).getByRole("button", { name: "설정으로 가기" }));
    expect(await screen.findByTestId("where")).toHaveTextContent("/profile/places/12/edit#owner-inquiry");
  });

  it("CHAT 이면 배너 없음", async () => {
    inqRepo.fetchInquirySettings.mockResolvedValue({ ...SETTINGS_CHAT });
    renderInbox();
    await waitFor(() => expect(inqRepo.fetchInquirySettings).toHaveBeenCalledWith("12"));
    await new Promise((r) => setTimeout(r, 20));
    expect(screen.queryByRole("status", { name: "문의 방식 안내" })).not.toBeInTheDocument();
  });
});
