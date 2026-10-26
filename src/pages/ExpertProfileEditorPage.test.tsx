import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { theme } from "@/styles/theme";
import { EXPERT_STEP, EXPERT_STEPS, expertMissingSteps } from "@/pages/expertEditorSteps";

/**
 * 전문가 프로필 편집(/profile/expert) — 모바일(<1024px) 단계 나누기.
 * 보장하는 것:
 * - 모바일은 5단계(기본 정보·이력·관심사·활동 지역·센터 정보) 중 한 단계만 보이고, 진행 표시와 하단 버튼으로 이동한다
 * - 다른 단계에서 입력한 값이 저장 요청(updateMyExpertProfile)에 모두 실린다 — 단계 이동으로 값이 사라지지 않는다
 * - 저장 조건은 이전과 같다(활동명·자기소개·활동 지역). 비어 있으면 마지막 단계에서 어느 단계인지 알려 준다
 * - PC(≥1024px)는 단계 없이 기존 한 페이지 그대로
 * 보장하지 않는 것: 지도 SVG·마크다운 편집기 자체 동작(목으로 대체), 실제 높이.
 */

const api = vi.hoisted(() => ({
  fetchMyProfile: vi.fn(),
  fetchMyExpertProfile: vi.fn(),
  updateMyExpertProfile: vi.fn(),
}));
vi.mock("@/services/profile/profileApi", () => api);
vi.mock("@/components/meditation/RegionMap", () => ({
  default: ({ onSelectRegion }: { onSelectRegion: (id: string) => void }) => (
    <button type="button" onClick={() => onSelectRegion("KR-11")}>
      지도: 서울 선택
    </button>
  ),
}));
vi.mock("@/components/common/NotionMarkdownEditor", () => ({
  default: ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
    <textarea aria-label="자기소개 입력" value={value} onChange={(e) => onChange(e.target.value)} />
  ),
}));
vi.mock("@/components/common/CelebrationParticles", () => ({ default: () => null }));

import ExpertProfileEditorPage from "@/pages/ExpertProfileEditorPage";
import { useAuthStore, COOKIE_SESSION_MARKER } from "@/stores/authStore";
import { useCatalogStore } from "@/stores/catalogStore";

let desktop = false;

const me = {
  username: "viewer8@example.com", email: "viewer8@example.com", role: "MEMBER", profileImageUrl: null, createdAt: null,
  displayName: "viewer8", regionIds: [], interests: [], expertProfileId: null as string | null,
};

function renderPage() {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={["/profile/expert"]}>
        <ExpertProfileEditorPage />
      </MemoryRouter>
    </ThemeProvider>
  );
}

const stepNav = () => screen.getByRole("navigation", { name: "입력 단계" });

beforeEach(() => {
  desktop = false;
  vi.stubGlobal("matchMedia", (query: string) => ({
    get matches() {
      return query.includes("1024px") ? desktop : false;
    },
    media: query,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
  }));
  useAuthStore.setState({ accessToken: COOKIE_SESSION_MARKER, email: "viewer8@example.com", role: "MEMBER", authReady: true });
  useCatalogStore.setState({ interests: [{ id: "1", name: "호흡명상" }, { id: "2", name: "숲 명상" }] as never });
  api.fetchMyProfile.mockResolvedValue({ ...me });
  api.fetchMyExpertProfile.mockResolvedValue(null);
  api.updateMyExpertProfile.mockImplementation(async () => ({ ...me, expertProfileId: "e1" }));
});

describe("expertMissingSteps(순수 함수) — 페이지 valid 조건과 1:1", () => {
  it("활동명·자기소개 → 기본 정보 단계, 지역 → 활동 지역 단계", () => {
    expect(EXPERT_STEPS).toHaveLength(5);
    expect(expertMissingSteps({ name: " ", intro: "x", regionIds: [] })).toEqual([EXPERT_STEP.basic, EXPERT_STEP.regions]);
    expect(expertMissingSteps({ name: "a", intro: "", regionIds: ["KR-11"] })).toEqual([EXPERT_STEP.basic]);
    expect(expertMissingSteps({ name: "a", intro: "b", regionIds: ["KR-11"] })).toEqual([]);
  });
});

describe("전문가 프로필 편집 — 모바일 단계", () => {
  it("한 단계씩: 진행 표시·다음/이전, 숨은 단계의 칸은 접근성 트리에서 빠진다", async () => {
    renderPage();
    expect(await screen.findByLabelText("활동명")).toBeVisible();
    expect(within(stepNav()).getByText("5단계 중 1단계")).toBeInTheDocument();
    expect(within(stepNav()).getByRole("button", { name: "기본 정보" })).toHaveAttribute("aria-current", "step");
    expect(screen.queryByRole("button", { name: "호흡명상" })).not.toBeInTheDocument(); // 3단계(관심사) 칩은 숨김
    expect(screen.queryByRole("button", { name: "이전" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "다음" }));
    expect(within(stepNav()).getByText("5단계 중 2단계")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "학위 추가 +" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "호흡명상" })).not.toBeInTheDocument(); // 관심사는 모바일에서 별도 단계

    fireEvent.click(screen.getByRole("button", { name: "다음" }));
    expect(screen.getByRole("button", { name: "호흡명상" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "이전" }));
    expect(within(stepNav()).getByText("5단계 중 2단계")).toBeInTheDocument();

    // 진행 표시를 눌러 바로 이동
    fireEvent.click(within(stepNav()).getByRole("button", { name: "센터 정보" }));
    expect(screen.getByRole("button", { name: "센터 있음" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "다음" })).not.toBeInTheDocument();
  });

  it("여러 단계에 나눠 입력한 값이 저장 요청에 모두 실리고, 빈 필수 단계는 마지막 단계에서 알려 준다", async () => {
    renderPage();
    await screen.findByLabelText("활동명");
    // 마지막 단계로 바로 가면: 자기소개·지역이 비어 저장 불가 + 어느 단계인지 안내
    fireEvent.click(within(stepNav()).getByRole("button", { name: "센터 정보" }));
    const save = screen.getByRole("button", { name: "명상 전문가로 전환" });
    expect(save).toBeDisabled();
    expect(screen.getByText("1단계 기본 정보, 4단계 활동 지역을(를) 채워야 저장할 수 있어요.")).toBeInTheDocument();

    // 1단계: 숨김 선택·자기소개
    fireEvent.click(within(stepNav()).getByRole("button", { name: "기본 정보" }));
    fireEvent.click(screen.getByRole("button", { name: "숨김" }));
    fireEvent.change(screen.getByLabelText("자기소개 입력"), { target: { value: "호흡으로 시작합니다" } });
    fireEvent.click(screen.getByRole("button", { name: "다음" }));
    fireEvent.click(screen.getByRole("button", { name: "다음" }));
    // 3단계: 관심사
    fireEvent.click(screen.getByRole("button", { name: "숲 명상" }));
    fireEvent.click(screen.getByRole("button", { name: "다음" }));
    // 4단계: 지역
    fireEvent.click(screen.getByRole("button", { name: "지도: 서울 선택" }));
    fireEvent.click(screen.getByRole("button", { name: "다음" }));
    // 5단계: 센터 정보
    fireEvent.click(screen.getByRole("button", { name: "센터 있음" }));
    fireEvent.change(screen.getByLabelText("센터명"), { target: { value: "고요명상센터" } });

    expect(screen.queryByText(/채워야 저장할 수 있어요/)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "명상 전문가로 전환" }));
    await waitFor(() => expect(api.updateMyExpertProfile).toHaveBeenCalledTimes(1));
    expect(api.updateMyExpertProfile.mock.calls[0][0]).toEqual({
      name: "viewer8",
      intro: "호흡으로 시작합니다",
      degrees: [],
      certificates: [],
      careers: [],
      classTypes: ["숲 명상"],
      regionIds: ["KR-11"],
      hasCenter: true,
      centerName: "고요명상센터",
      centerAddress: "",
      businessRegistrationNumber: "",
      businessOpeningDate: "",
      hidden: true,
    });
  });

  it("이미 전문가면(수정) 어느 단계에서나 저장 버튼이 보인다 — 한 칸만 고치러 끝까지 갈 필요 없음", async () => {
    api.fetchMyProfile.mockResolvedValue({ ...me, expertProfileId: "e1" });
    api.fetchMyExpertProfile.mockResolvedValue({ name: "지도자", intro: "소개", regionIds: ["KR-11"] });
    renderPage();
    await screen.findByLabelText("활동명");
    expect(screen.getByRole("button", { name: "전문가 정보 저장" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "다음" })).toBeInTheDocument();
  });
});

describe("전문가 프로필 편집 — PC(≥1024px)", () => {
  it("단계 표시 없이 모든 카드가 한 페이지에, 저장 버튼 하나", async () => {
    desktop = true;
    renderPage();
    await screen.findByLabelText("활동명");
    expect(screen.queryByRole("navigation", { name: "입력 단계" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "호흡명상" })).toBeVisible();
    expect(screen.getByRole("button", { name: "센터 있음" })).toBeVisible();
    expect(screen.queryByRole("button", { name: "다음" })).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "명상 전문가로 전환" })).toHaveLength(1);
  });
});
