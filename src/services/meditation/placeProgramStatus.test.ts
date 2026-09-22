import { describe, expect, it } from "vitest";
import type { PlaceProgram } from "@/services/meditation/types";
import { computeProgramStatus, normalizePlacePrograms } from "./placeProgramStatus";

/**
 * 순수 함수 회귀 테스트. DB·네트워크·DOM 을 쓰지 않는다.
 *
 * 날짜는 2020 년(과거)과 2999 년(미래)만 쓴다 — 오늘 날짜에 따라 결과가 바뀌면 테스트가 시간에
 * 의존해 언젠가 혼자 깨진다. 경계값(오늘 == endDate)은 `today` 인자를 직접 넘겨서 고정한다.
 *
 * 보장하지 않는 것: 이 상태값이 화면에서 어떤 배지로 그려지는지, KST 변환의 시간대 경계.
 */

function program(overrides: Partial<PlaceProgram>): PlaceProgram {
  return {
    id: "p1",
    title: "프로그램",
    status: "ongoing",
    imageUrl: "",
    bodyFromVenue: "",
    reviews: [],
    ...overrides,
  };
}

describe("computeProgramStatus", () => {
  it("종료일이 지난 프로그램은 past 다", () => {
    expect(computeProgramStatus(program({ endDate: "2020-01-01" }), "2020-01-02")).toBe("past");
  });

  it("종료일 당일은 아직 past 가 아니다", () => {
    expect(computeProgramStatus(program({ endDate: "2020-01-01" }), "2020-01-01")).toBe("ongoing");
  });

  it("종료일이 없으면 ongoing 이다", () => {
    expect(computeProgramStatus(program({}), "2999-12-31")).toBe("ongoing");
  });

  it("날짜 형식이 아니면 기간 판정을 하지 않고 ongoing 이다", () => {
    expect(computeProgramStatus(program({ endDate: "상시" }), "2999-12-31")).toBe("ongoing");
  });

  it("행사(event)는 시작·종료일이 모두 있어야 기간으로 판정한다", () => {
    const withPeriod = program({ kind: "event", startDate: "2020-01-01", endDate: "2020-01-05" });
    expect(computeProgramStatus(withPeriod, "2020-01-06")).toBe("past");
    expect(computeProgramStatus(withPeriod, "2020-01-03")).toBe("ongoing");
  });

  it("기간이 없는 행사는 기존에 저장된 status 를 유지한다", () => {
    const noPeriod = program({ kind: "event", status: "past" });
    expect(computeProgramStatus(noPeriod, "2020-01-01")).toBe("past");
    expect(computeProgramStatus(program({ kind: "event" }), "2020-01-01")).toBe("ongoing");
  });
});

describe("normalizePlacePrograms", () => {
  it("저장된 status 를 무시하고 기간 기준으로 다시 계산한다", () => {
    const place = {
      programs: [
        program({ id: "past-1", endDate: "2020-01-01", status: "ongoing" }),
        program({ id: "ongoing-1", endDate: "2999-12-31", status: "past" }),
      ],
    };

    const out = normalizePlacePrograms(place);

    expect(out.programs?.map((p) => [p.id, p.status])).toEqual([
      ["past-1", "past"],
      ["ongoing-1", "ongoing"],
    ]);
  });

  it("프로그램이 없으면 객체를 그대로 돌려준다", () => {
    const place = { id: "p", programs: undefined };
    expect(normalizePlacePrograms(place)).toBe(place);
    const empty = { id: "p", programs: [] };
    expect(normalizePlacePrograms(empty)).toBe(empty);
  });

  it("프로그램 외의 필드는 건드리지 않는다", () => {
    const out = normalizePlacePrograms({
      name: "고요원",
      programs: [program({ id: "x", endDate: "2020-01-01" })],
    });

    expect(out.name).toBe("고요원");
  });
});
