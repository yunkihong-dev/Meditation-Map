import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { theme } from "@/styles/theme";
import { OWNER_EDITABLE_FIELDS } from "@/services/ownerPlaces/types";

/**
 * 라운드 4 — 센터 관리 화면(관리화면 예시 pc_1~pc_4 / _4·_6).
 * 보장하는 것:
 * - 폭(matchMedia ≥1024px)에 따라 CenterManagementLayout·각 화면이 PC/모바일 레이아웃을 고른다
 *   (PC 는 사이드바 + 탭바 없음, 내 센터 관리·수정은 상단 글로벌 내비, 센터 등록은 사이드바만)
 * - PC 편집 폼 저장의 PATCH 본문은 바뀐 허용 필드뿐이다(주소·사업자번호 칸은 읽기 전용이라 안 실림)
 * - 입력 중에 모바일↔PC 로 폭이 바뀌어도 입력값이 남는다
 * - 데이터가 없는 통계 카드(조회수·북마크·문의·리포트)는 숫자를 그리지 않는다
 * 보장하지 않는 것: 실제 배치·여백의 목업 일치(시각 확인 몫), BE 응답.
 */

const repo = vi.hoisted(() => ({
  fetchOwnerPlace: vi.fn(),
  patchOwnerPlace: vi.fn(),
  fetchMyPlaces: vi.fn(),
  fetchPlaceStats: vi.fn(),
}));
const geo = vi.hoisted(() => ({ searchAddressCandidates: vi.fn() }));
vi.mock("@/services/meditation/naverGeocode", () => geo);
vi.mock("@/services/ownerPlaces/repositories/ownerPlacesRepository", () => repo);
vi.mock("@/components/layout/BottomNav", () => ({ default: () => <nav data-testid="bottom-nav" /> }));

import CenterManagementLayout from "@/components/centerManagement/CenterManagementLayout";
import OwnerPlaceEditPage from "@/pages/ownerPlaces/OwnerPlaceEditPage";
import MyPlacesPage from "@/pages/ownerPlaces/MyPlacesPage";
import CenterRegisterPage from "@/pages/CenterRegisterPage";
import { useAuthStore, COOKIE_SESSION_MARKER } from "@/stores/authStore";
import { useMemberNotificationStore } from "@/stores/notificationStore";

let desktop = false;
const listeners = new Set<(e: MediaQueryListEvent) => void>();
function installMatchMedia() {
  vi.stubGlobal("matchMedia", (query: string) => ({
    get matches() {
      return query.includes("1024px") ? desktop : false;
    },
    media: query,
    addEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => listeners.add(fn),
    removeEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => listeners.delete(fn),
  }));
}
function resize(toDesktop: boolean) {
  desktop = toDesktop;
  act(() => listeners.forEach((fn) => fn({ matches: toDesktop } as MediaQueryListEvent)));
}

const view = {
  placeId: "12",
  regionId: "seoul",
  data: {
    id: "12", regionId: "seoul", name: "고요명상센터", address: "서울 강남구 테헤란로 123", hidden: false, lat: 37.5, lng: 127,
    shortDescription: "", description: "", thumbnailUrl: "", photos: ["https://m/1.jpg", "https://m/2.jpg"], hashtags: [],
    themes: [], hasTempleStay: false, duration: "", admissionFee: "",
    programs: [{ id: "1", title: "싱잉볼 명상 입문", status: "ongoing", imageUrl: "", bodyFromVenue: "", reviews: [] }],
    instructors: [], organization: { name: "" }, externalLink: "", detailSections: [], facilities: [], viewCount: 1248,
  },
  businessRegistrationNumber: null,
  editableFields: [...OWNER_EDITABLE_FIELDS],
};

function stats(range: string, changeRate: number | null) {
  return {
    placeId: "12", range, timezone: "Asia/Seoul", from: "2026-09-08", to: "2026-10-07",
    views: { total: 321, previousTotal: changeRate == null ? 0 : 300, changeRate },
    bookmarks: { current: 7, added: 2, removed: 1, net: 1 },
    granularity: "DAY",
    series: [
      { date: "2026-10-06", views: 120, bookmarksAdded: 0, bookmarksRemoved: 0 },
      { date: "2026-10-07", views: 201, bookmarksAdded: 2, bookmarksRemoved: 1 },
    ],
  };
}

function renderAt(path: string) {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route element={<CenterManagementLayout />}>
            <Route path="/center/register" element={<CenterRegisterPage />} />
            <Route path="/profile/places" element={<MyPlacesPage />} />
            <Route path="/profile/places/:placeId/edit" element={<OwnerPlaceEditPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

beforeEach(() => {
  desktop = false;
  listeners.clear();
  installMatchMedia();
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 401, text: async () => "" })));
  useAuthStore.setState({ accessToken: COOKIE_SESSION_MARKER, email: "o@e.x", role: "MEMBER", authReady: true });
  useMemberNotificationStore.getState().reset();
  repo.fetchOwnerPlace.mockImplementation(async () => structuredClone(view));
  repo.fetchMyPlaces.mockResolvedValue([
    { placeId: "12", regionId: "seoul", name: "고요명상센터", thumbnailUrl: null, hidden: false, approvedAt: null },
  ]);
  repo.patchOwnerPlace.mockImplementation(async () => structuredClone(view));
  repo.fetchPlaceStats.mockImplementation(async (_id: string, range: string) => stats(range, null));
  geo.searchAddressCandidates.mockResolvedValue([
    { address: "부산광역시 해운대구 해운대해변로 264", lat: 35.1587, lng: 129.1604, approximate: false, precision: "exact" },
  ]);
});

describe("센터 관리 레이아웃 — 폭 분기", () => {
  it("PC: 사이드바만(상단 글로벌 내비 없음 — 사용자 지시), 앱으로 돌아가기·종, 탭바 없음", async () => {
    desktop = true;
    const { container } = renderAt("/profile/places/12/edit");
    expect(await screen.findByTestId("owner-editor")).toHaveAttribute("data-layout", "desktop");
    expect(container.firstElementChild).toHaveAttribute("data-layout", "desktop");
    const side = screen.getByRole("navigation", { name: "센터 관리 메뉴" });
    // 사용자 결정: 센터 등록은 내비 탭이 아니라 CTA 버튼, 내비 탭은 '내 센터 관리' 하나
    expect(within(side).queryByRole("link", { name: /센터 등록/ })).not.toBeInTheDocument();
    expect(within(side).getByRole("button", { name: /센터 등록/ })).toBeInTheDocument();
    // 탭: 내 센터 관리 → 1:1 문의(문의함 자리 /center/inquiries — 준비 중). 하단 '고객 센터'(앱 /inquiry)는 중복이라 없음
    expect(within(side).getAllByRole("link").map((l) => l.getAttribute("href"))).toEqual(["/profile/places", "/center/inquiries"]);
    expect(within(side).queryByRole("button", { name: /고객 센터/ })).not.toBeInTheDocument();
    expect(within(side).getByRole("link", { name: /내 센터 관리/ })).toHaveAttribute("href", "/profile/places");
    expect(screen.queryByRole("navigation", { name: "주요 메뉴" })).not.toBeInTheDocument();
    expect(within(side).getByRole("button", { name: /앱으로 돌아가기/ })).toBeInTheDocument();
    expect(within(side).getByRole("button", { name: /^알림/ })).toBeInTheDocument();
    expect(screen.queryByTestId("bottom-nav")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "변경사항 저장하기" })).toBeInTheDocument();
  });

  it("PC 센터 등록(pc_1·pc_2): 사이드바만(상단 내비 없음), 단계·두 카드", async () => {
    desktop = true;
    renderAt("/center/register");
    expect(screen.getByTestId("center-register-desktop")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "센터 관리 메뉴" })).toBeInTheDocument();
    expect(screen.queryByRole("navigation", { name: "주요 메뉴" })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /센터 검색 및 소유권 요청/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /신규 센터 등록/ })).toBeInTheDocument();
  });

  it("모바일: 사이드바 없음. 편집(고정 저장 바)은 탭바를 숨기고 대시보드는 탭바 유지", async () => {
    const { unmount } = renderAt("/profile/places/12/edit");
    expect(await screen.findByTestId("owner-editor")).toHaveAttribute("data-layout", "mobile");
    expect(screen.queryByTestId("bottom-nav")).not.toBeInTheDocument();
    unmount();
    renderAt("/profile/places");
    expect(await screen.findByTestId("my-centers")).toHaveAttribute("data-layout", "mobile");
    expect(screen.getByTestId("bottom-nav")).toBeInTheDocument();
    expect(screen.queryByRole("navigation", { name: "센터 관리 메뉴" })).not.toBeInTheDocument();
  });
});

describe("센터 정보 수정(pc_4)", () => {
  it("저장은 바뀐 허용 필드만 PATCH", async () => {
    desktop = true;
    renderAt("/profile/places/12/edit");
    fireEvent.change(await screen.findByLabelText("센터 이름"), { target: { value: "새 이름" } });
    fireEvent.change(screen.getByLabelText("상세 주소"), { target: { value: "2층" } });
    expect(screen.getByLabelText("주소 검색")).toHaveAttribute("readonly");
    // pc_4 화면에는 두 카드(기본 정보·센터 사진 관리)만 — 소개·프로그램 칸은 상세 정보 화면으로 옮겼다
    expect(screen.queryByLabelText("소요 시간")).not.toBeInTheDocument();
    expect(screen.queryByText("행사·프로그램")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(repo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    const [placeId, body] = repo.patchOwnerPlace.mock.calls[0];
    expect(placeId).toBe("12");
    expect(body).toEqual({ name: "새 이름", addressDetail: "2층" });
  });

  it("프로그램·상세 정보 화면은 그 화면 키만 PATCH(소요 시간), 기본 정보 키는 안 실림", async () => {
    desktop = true;
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/profile/places/12/details"]}>
          <Routes>
            <Route element={<CenterManagementLayout />}>
              <Route path="/profile/places/:placeId/details" element={<OwnerPlaceEditPage mode="details" />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );
    fireEvent.change(await screen.findByLabelText("소요 시간"), { target: { value: "1시간" } });
    expect(screen.queryByLabelText("센터 이름")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(repo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    expect(repo.patchOwnerPlace.mock.calls[0][1]).toEqual({ duration: "1시간" });
  });

  it("주소 찾기 → 결과 선택: address·lat·lng 셋 함께, 상세주소·사업자번호는 별도 키, regionId 는 보내지 않음", async () => {
    desktop = true;
    renderAt("/profile/places/12/edit");
    fireEvent.click(await screen.findByRole("button", { name: "주소 찾기" }));
    fireEvent.change(screen.getByLabelText("주소 검색어"), { target: { value: "해운대해변로 264" } });
    fireEvent.click(screen.getByRole("button", { name: "검색" }));
    expect(geo.searchAddressCandidates).toHaveBeenCalledWith("해운대해변로 264");
    fireEvent.click(await screen.findByRole("option", { name: "부산광역시 해운대구 해운대해변로 264" }));
    fireEvent.change(screen.getByLabelText("상세 주소"), { target: { value: "4층 402호" } });
    fireEvent.change(screen.getByLabelText("사업자 등록번호"), { target: { value: "123-45-67890" } });
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(repo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    const body = repo.patchOwnerPlace.mock.calls[0][1];
    expect(body).toEqual({
      address: "부산광역시 해운대구 해운대해변로 264",
      lat: 35.1587,
      lng: 129.1604,
      addressDetail: "4층 402호",
      businessRegistrationNumber: "123-45-67890",
    });
    expect(body).not.toHaveProperty("regionId");
  });

  it("주소를 검색만 하고 결과를 고르지 않으면 주소는 PATCH 에 실리지 않음", async () => {
    desktop = true;
    renderAt("/profile/places/12/edit");
    fireEvent.click(await screen.findByRole("button", { name: "주소 찾기" }));
    fireEvent.change(screen.getByLabelText("주소 검색어"), { target: { value: "아무거나" } });
    fireEvent.change(screen.getByLabelText("센터 이름"), { target: { value: "새 이름" } });
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(repo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    expect(repo.patchOwnerPlace.mock.calls[0][1]).toEqual({ name: "새 이름" });
  });

  it("400 VALIDATION_FAILED details.fields(lat·lng)는 주소 칸 강조로 묶인다", async () => {
    desktop = true;
    const { ApiError } = await import("@/services/http/apiError");
    repo.patchOwnerPlace.mockRejectedValueOnce(new ApiError(400, "VALIDATION_FAILED", "입력값 검증에 실패했습니다.", ["lat", "lng"]));
    renderAt("/profile/places/12/edit");
    fireEvent.change(await screen.findByLabelText("상세 주소"), { target: { value: "2층" } });
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(screen.getByLabelText("주소 검색")).toHaveAttribute("aria-invalid", "true"));
    expect(screen.getByText("주소 값을 확인해 주세요.")).toBeInTheDocument();
  });

  it("사진 순서 바꾸기는 photos 만 PATCH", async () => {
    desktop = true;
    renderAt("/profile/places/12/edit");
    fireEvent.click(await screen.findByRole("button", { name: "사진 2 앞으로" }));
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(repo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    expect(repo.patchOwnerPlace.mock.calls[0][1]).toEqual({ photos: ["https://m/2.jpg", "https://m/1.jpg"] });
  });

  it("입력 중에 모바일→PC→모바일로 폭이 바뀌어도 값이 남는다", async () => {
    renderAt("/profile/places/12/edit");
    fireEvent.change(await screen.findByLabelText("센터 이름"), { target: { value: "입력 중" } });
    resize(true);
    expect(screen.getByTestId("owner-editor")).toHaveAttribute("data-layout", "desktop");
    expect(screen.getByLabelText("센터 이름")).toHaveValue("입력 중");
    resize(false);
    expect(screen.getByTestId("owner-editor")).toHaveAttribute("data-layout", "mobile");
    expect(screen.getByLabelText("센터 이름")).toHaveValue("입력 중");
    expect(repo.fetchOwnerPlace).toHaveBeenCalledTimes(1);
  });
});

describe("내 센터 관리 대시보드(pc_3 / _4)", () => {
  it.each([true, false])("데이터 없는 카드(문의·리포트)는 숫자를 그리지 않는다 (desktop=%s)", async (isDesktop) => {
    desktop = isDesktop;
    renderAt("/profile/places");
    expect(await screen.findByText(/고요명상센터/)).toBeInTheDocument();
    const pending = await screen.findAllByTestId("stat-pending");
    expect(pending.length).toBe(isDesktop ? 2 : 1);
    for (const el of pending) {
      expect(el.textContent).toBe("집계 준비 중");
      expect(el.textContent).not.toMatch(/\d/);
    }
    // payload 의 누적 viewCount(1248)를 기간 조회수로 둔갑시키지 않는다
    expect(screen.queryByText(/1,?248/)).not.toBeInTheDocument();
  });

  it("PC: 최근 30일(1M) 조회수·북마크 실제 값, changeRate null 이면 증감 문구 숨김", async () => {
    desktop = true;
    renderAt("/profile/places");
    expect(await screen.findByTestId("views-total")).toHaveTextContent("321");
    expect(repo.fetchPlaceStats).toHaveBeenCalledWith("12", "1M");
    expect(screen.getByText("최근 30일 조회수")).toBeInTheDocument();
    expect(screen.queryByText("월간 조회수")).not.toBeInTheDocument();
    expect(screen.getByTestId("bookmarks-current")).toHaveTextContent("7");
    expect(screen.queryByTestId("change-rate")).not.toBeInTheDocument();
  });

  it("PC: changeRate 가 있으면 '직전 30일 대비' 문구", async () => {
    desktop = true;
    repo.fetchPlaceStats.mockImplementation(async (_id: string, range: string) => stats(range, 7));
    renderAt("/profile/places");
    expect(await screen.findByTestId("change-rate")).toHaveTextContent("직전 30일 대비 7.0% 증가");
  });

  it("모바일: 1D 기본, 탭으로 범위 바꾸면 그 범위로 다시 조회 + 차트", async () => {
    renderAt("/profile/places");
    expect(await screen.findByTestId("views-total")).toHaveTextContent("321");
    expect(repo.fetchPlaceStats).toHaveBeenLastCalledWith("12", "1D");
    fireEvent.click(screen.getByRole("tab", { name: "1W" }));
    await waitFor(() => expect(repo.fetchPlaceStats).toHaveBeenLastCalledWith("12", "1W"));
    expect(await screen.findByRole("img", { name: "최근 7일 조회수 추이" })).toBeInTheDocument();
  });

  it("PC: 센터 카드의 실제 값(이름·주소)과 버튼", async () => {
    desktop = true;
    renderAt("/profile/places");
    expect(await screen.findByText("서울 강남구 테헤란로 123")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "센터 정보 수정" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "사진 관리" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "최근 활동 및 알림" })).toBeInTheDocument();
  });

  it("모바일: 운영 중인 프로그램은 실제 프로그램 목록", async () => {
    renderAt("/profile/places");
    expect(await screen.findByText("싱잉볼 명상 입문")).toBeInTheDocument();
    expect(screen.queryByText(/예약/)).not.toBeInTheDocument();
  });
});

describe("센터 등록(pc_1·pc_2 / _6·_3)", () => {
  it("PC: 단계 점 표시 없음, 회신 이메일·소개 칸 없음, 사진 최대 10장", async () => {
    desktop = true;
    renderAt("/center/register");
    expect(screen.getByTestId("center-register-desktop")).toBeInTheDocument();
    expect(screen.queryByText("서류 제출")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("회신 받을 이메일")).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/센터 소개/)).not.toBeInTheDocument();
    expect(screen.getByText("센터 사진 (외부/내부, 최대 10장)")).toBeInTheDocument();
    expect(
      screen.getByText("PC 환경에서 등록하시기를 권장드립니다. 원활한 서류 업로드와 정보 입력을 위해 데스크탑을 이용해주세요.")
    ).toBeInTheDocument();
  });

  it("모바일: _6 위저드 — 3단계 진행바, 탭바 숨김, 새로 등록 → 1단계 기본 정보·계속하기", async () => {
    renderAt("/center/register");
    const root = screen.getByTestId("center-register-mobile");
    expect(within(root).getByText("3단계 중 1단계")).toBeInTheDocument();
    expect(screen.queryByTestId("bottom-nav")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /새로 등록하기/ }));
    expect(screen.getByText("기본 정보")).toBeInTheDocument();
    expect(screen.getByLabelText("센터명")).toBeInTheDocument();
    expect(screen.getByText("0/5")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /계속하기/ })).toBeDisabled();
  });
});

describe("등록 완료(_3)", () => {
  it("문구·다음 단계·버튼 3개", async () => {
    const { default: Done } = await import("@/pages/centerRegister/CenterRegisterDone");
    const onHome = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Done kind="create" onHome={onHome} onRegister={vi.fn()} onProfile={vi.fn()} onClaims={vi.fn()} />
      </ThemeProvider>
    );
    expect(screen.getByRole("heading", { name: "등록 완료!" })).toBeInTheDocument();
    expect(screen.getByText("관리자 승인 대기")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "홈 화면으로" }));
    expect(onHome).toHaveBeenCalled();
    expect(screen.getByRole("button", { name: "내 센터 등록하기" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "내 프로필 확인" })).toBeInTheDocument();
  });
});
