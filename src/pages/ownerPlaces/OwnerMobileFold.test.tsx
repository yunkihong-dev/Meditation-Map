import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { theme } from "@/styles/theme";
import { OWNER_EDITABLE_FIELDS } from "@/services/ownerPlaces/types";
import {
  OWNER_SECTIONS_BY_MODE,
  dirtySections,
  initialOpenSection,
  sectionOfField,
} from "@/pages/ownerPlaces/ownerEditSections";

/**
 * 센터 편집 모바일 접기(<1024px).
 * 보장하는 것:
 * - 모바일은 카드를 한 번에 하나만 펼친다(기본 정보 화면은 첫 카드, 상세 화면은 전부 접힘, #해시면 그 카드)
 * - 접힌 카드의 입력값은 저장 payload 에서 빠지지 않는다(접었다 다른 카드를 펼쳐도 PATCH 는 이전과 같다)
 * - 저장 검증이 접힌 카드의 필드를 가리키면 그 카드를 펼친다
 * - 프로그램 하위 항목: 기존 항목은 접힘, 새로 추가한 항목은 펼침
 * - PC(≥1024px)는 접기 버튼 없이 모든 칸이 보인다(기존 화면 그대로)
 * 보장하지 않는 것: 실제 높이·여백(스크린샷 몫).
 */

const repo = vi.hoisted(() => ({
  fetchOwnerPlace: vi.fn(),
  patchOwnerPlace: vi.fn(),
}));
const inq = vi.hoisted(() => ({ fetchInquirySettings: vi.fn(), putInquirySettings: vi.fn() }));
vi.mock("@/services/ownerPlaces/repositories/ownerPlacesRepository", () => repo);
vi.mock("@/services/ownerPlaces/repositories/inquirySettingsRepository", () => inq);
vi.mock("@/components/layout/BottomNav", () => ({ default: () => <nav data-testid="bottom-nav" /> }));

import CenterManagementLayout from "@/components/centerManagement/CenterManagementLayout";
import OwnerPlaceEditPage from "@/pages/ownerPlaces/OwnerPlaceEditPage";
import { useAuthStore, COOKIE_SESSION_MARKER } from "@/stores/authStore";

let desktop = false;
const listeners = new Set<(e: MediaQueryListEvent) => void>();

const view = {
  placeId: "12",
  regionId: "seoul",
  data: {
    id: "12", regionId: "seoul", name: "고요명상센터", address: "서울 강남구 테헤란로 123", hidden: false, lat: 37.5, lng: 127,
    shortDescription: "## 숲 속 명상", description: "", thumbnailUrl: "", photos: ["https://m/1.jpg"], hashtags: [],
    themes: [], hasTempleStay: false, duration: "", admissionFee: "",
    programs: [{ id: "1", title: "싱잉볼 명상 입문", status: "ongoing", imageUrl: "", bodyFromVenue: "", reviews: [] }],
    instructors: [], organization: { name: "" }, externalLink: "", detailSections: [], facilities: [], viewCount: 0,
  },
  businessRegistrationNumber: null,
  editableFields: [...OWNER_EDITABLE_FIELDS],
};

function renderAt(path: string) {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route element={<CenterManagementLayout />}>
            <Route path="/profile/places/:placeId/edit" element={<OwnerPlaceEditPage />} />
            <Route path="/profile/places/:placeId/details" element={<OwnerPlaceEditPage mode="details" />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

/** 카드(section)의 접기 머리 버튼 */
function head(name: string) {
  return within(screen.getByRole("region", { name })).getByRole("button", { name: new RegExp(`^${name}`) });
}

beforeEach(() => {
  // jsdom 에는 scrollIntoView 가 없다 — #해시 진입 시 페이지가 카드로 스크롤합니다
  Element.prototype.scrollIntoView = vi.fn();
  desktop = false;
  listeners.clear();
  vi.stubGlobal("matchMedia", (query: string) => ({
    get matches() {
      return query.includes("1024px") ? desktop : false;
    },
    media: query,
    addEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => listeners.add(fn),
    removeEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => listeners.delete(fn),
  }));
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 401, text: async () => "" })));
  useAuthStore.setState({ accessToken: COOKIE_SESSION_MARKER, email: "o@e.x", role: "MEMBER", authReady: true });
  repo.fetchOwnerPlace.mockImplementation(async () => structuredClone(view));
  repo.patchOwnerPlace.mockImplementation(async () => structuredClone(view));
  inq.fetchInquirySettings.mockResolvedValue({ placeId: "12", mode: "CHAT", kakaoType: null, kakaoUrl: null, updatedAt: null });
  inq.putInquirySettings.mockImplementation(async (_id: string, b: Record<string, unknown>) => ({ placeId: "12", updatedAt: "t", ...b }));
});

describe("ownerEditSections — 카드와 필드 대응(순수 함수)", () => {
  it("필드 → 카드, 좌표·사업자번호는 기본 정보 카드", () => {
    expect(sectionOfField("lat")).toBe("owner-basic");
    expect(sectionOfField("businessRegistrationNumber")).toBe("owner-basic");
    expect(sectionOfField("externalLink")).toBe("owner-intro");
    expect(sectionOfField("programs")).toBe("owner-programs");
    expect(sectionOfField("regionId")).toBeNull();
  });

  it("두 화면이 다루는 필드는 모두 어떤 카드에 속한다(접혀서 수정됨 표시가 빠지는 필드 없음)", async () => {
    const { OWNER_MODE_FIELDS } = await import("@/pages/ownerPlaces/OwnerPlaceEditPage");
    for (const mode of ["basic", "details"] as const) {
      for (const f of OWNER_MODE_FIELDS[mode]) {
        const sec = sectionOfField(f);
        expect(sec, f).not.toBeNull();
        expect(OWNER_SECTIONS_BY_MODE[mode], f).toContain(sec);
      }
    }
  });

  it("처음 펼칠 카드: #해시 > 기본 화면 첫 카드 / 상세 화면은 전부 접힘, 다른 화면 해시는 무시", () => {
    expect(initialOpenSection("basic", "")).toBe("owner-basic");
    expect(initialOpenSection("basic", "#owner-photos")).toBe("owner-photos");
    expect(initialOpenSection("details", "")).toBeNull();
    expect(initialOpenSection("details", "#owner-programs")).toBe("owner-programs");
    expect(initialOpenSection("details", "#owner-photos")).toBeNull();
  });

  it("dirtySections: patch 키를 카드로 묶는다", () => {
    expect([...dirtySections(["lat", "lng", "address", "facilities"])].sort()).toEqual(["owner-basic", "owner-facilities"]);
  });
});

describe("센터 편집 — 모바일 접기", () => {
  it("기본 정보 화면: 첫 카드만 펼침, 다른 카드를 펼치면 앞 카드는 접힘", async () => {
    renderAt("/profile/places/12/edit");
    await screen.findByLabelText("센터 이름");
    await screen.findByText("우리 채팅으로 받기", { selector: "small" });
    expect(head("기본 정보")).toHaveAttribute("aria-expanded", "true");
    expect(head("센터 사진 관리")).toHaveAttribute("aria-expanded", "false");
    expect(head("문의 방식")).toHaveAttribute("aria-expanded", "false");
    // 요약: 이름·주소 / 사진 장수 / 문의 방식
    expect(head("기본 정보")).toHaveTextContent("고요명상센터 · 서울 강남구 테헤란로 123");
    expect(head("센터 사진 관리")).toHaveTextContent("사진 1장");
    expect(screen.queryByRole("radio", { name: /카카오톡으로 받기/ })).not.toBeInTheDocument(); // 접힌 카드 안 → 접근성 트리에서 숨김

    fireEvent.click(head("문의 방식"));
    expect(head("문의 방식")).toHaveAttribute("aria-expanded", "true");
    expect(head("기본 정보")).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("radio", { name: /카카오톡으로 받기/ })).toBeInTheDocument();
  });

  it("접힌 카드의 입력값도 저장에 실린다: 이름 수정 → 문의 방식 카드로 이동 → 저장 시 PATCH 는 {name}", async () => {
    renderAt("/profile/places/12/edit");
    fireEvent.change(await screen.findByLabelText("센터 이름"), { target: { value: "새 이름" } });
    await screen.findByText("우리 채팅으로 받기", { selector: "small" });
    fireEvent.click(head("문의 방식"));
    expect(head("기본 정보")).toHaveAttribute("aria-expanded", "false");
    expect(head("기본 정보")).toHaveTextContent("수정됨");
    expect(screen.getByLabelText("센터 이름")).toHaveValue("새 이름"); // DOM 에 남아 있음(hidden)
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(repo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    expect(repo.patchOwnerPlace.mock.calls[0][1]).toEqual({ name: "새 이름" });
    expect(inq.putInquirySettings).not.toHaveBeenCalled();
  });

  it("상세 화면: 전부 접힌 요약으로 시작, 두 카드에 나눠 고친 값이 한 PATCH 에 모두 실린다", async () => {
    renderAt("/profile/places/12/details");
    await screen.findByLabelText("소요 시간");
    for (const name of ["소개 정보", "목록 썸네일", "시설", "안내 항목", "행사·프로그램", "강사"]) {
      expect(head(name)).toHaveAttribute("aria-expanded", "false");
    }
    expect(head("소개 정보")).toHaveTextContent("숲 속 명상"); // 마크다운 기호 뺀 첫 줄

    fireEvent.click(head("소개 정보"));
    fireEvent.change(screen.getByLabelText("소요 시간"), { target: { value: "1시간" } });
    fireEvent.click(head("시설"));
    expect(head("소개 정보")).toHaveAttribute("aria-expanded", "false");
    const facilities = screen.getByRole("region", { name: "시설" });
    const chip = within(facilities).getAllByRole("button", { pressed: false })[0];
    fireEvent.click(chip);
    expect(head("시설")).toHaveTextContent("1개 선택");
    expect(head("소개 정보")).toHaveTextContent("수정됨");

    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(repo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    const body = repo.patchOwnerPlace.mock.calls[0][1];
    expect(Object.keys(body).sort()).toEqual(["duration", "facilities"]);
    expect(body.duration).toBe("1시간");
    expect(body.facilities).toHaveLength(1);
  });

  it("검증 실패한 필드가 접힌 카드에 있으면 그 카드를 펼치고 PATCH 하지 않는다", async () => {
    renderAt("/profile/places/12/details");
    await screen.findByLabelText("외부 링크");
    fireEvent.click(head("소개 정보"));
    fireEvent.change(screen.getByLabelText("외부 링크"), { target: { value: "ftp://nope" } });
    fireEvent.click(head("강사"));
    expect(head("소개 정보")).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    expect(await screen.findByText("외부 링크 값을 확인해 주세요.")).toBeVisible();
    expect(head("소개 정보")).toHaveAttribute("aria-expanded", "true");
    expect(repo.patchOwnerPlace).not.toHaveBeenCalled();
  });

  it("#owner-programs 로 들어오면 그 카드가 펼쳐진다. 기존 프로그램은 접힘, 새로 추가한 프로그램은 펼침, 저장 시 programs 에 둘 다", async () => {
    renderAt("/profile/places/12/details#owner-programs");
    await screen.findByText("싱잉볼 명상 입문");
    expect(head("행사·프로그램")).toHaveAttribute("aria-expanded", "true");
    const existing = screen.getByRole("button", { name: "싱잉볼 명상 입문 편집" });
    expect(existing).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(screen.getByRole("button", { name: "+ 프로그램 추가" }));
    expect(screen.getByRole("button", { name: "새 프로그램 접기" })).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(existing);
    expect(screen.getByRole("button", { name: "싱잉볼 명상 입문 접기" })).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(screen.getByRole("button", { name: "변경사항 저장하기" }));
    await waitFor(() => expect(repo.patchOwnerPlace).toHaveBeenCalledTimes(1));
    const programs = repo.patchOwnerPlace.mock.calls[0][1].programs as { id: string; title: string }[];
    expect(programs.map((p) => p.title)).toEqual(["싱잉볼 명상 입문", "새 프로그램"]);
  });

  it("PC(≥1024px): 접기 머리·편집 버튼 없이 모든 칸이 보인다", async () => {
    desktop = true;
    renderAt("/profile/places/12/details");
    await screen.findByLabelText("소요 시간");
    // 편집기 안에 접기 머리(aria-expanded) 버튼이 하나도 없다(사이드바의 알림 종은 제외하려고 편집기로 한정)
    expect(within(screen.getByTestId("owner-editor")).queryAllByRole("button", { expanded: false })).toHaveLength(0);
    expect(screen.getByRole("heading", { name: "시설" })).toBeVisible();
    expect(screen.getByLabelText("소요 시간")).toBeVisible();
    expect(screen.queryByRole("button", { name: /싱잉볼 명상 입문 (편집|접기)/ })).not.toBeInTheDocument();
  });

  it("모바일 → PC 로 폭이 바뀌면 접혀 있던 칸도 모두 보인다(값 유지)", async () => {
    renderAt("/profile/places/12/details");
    fireEvent.change(await screen.findByLabelText("소요 시간"), { target: { value: "2시간" } });
    desktop = true;
    act(() => listeners.forEach((fn) => fn({ matches: true } as MediaQueryListEvent)));
    expect(await screen.findByLabelText("소요 시간")).toHaveValue("2시간");
    expect(screen.getByLabelText("소요 시간")).toBeVisible();
  });
});
