import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * `placesRepository` 의 **숨김 필터(2차 방어선)** 회귀 테스트.
 *
 * <p>서버가 이미 숨김 행을 걸러 보내지만, 이 필터는 그 서버 수정이 되돌려지거나 캐시가 옛 응답을
 * 돌려줄 때 화면을 지키는 마지막 방어선이다. 계약 12절 7항이 "삭제 금지" 로 못 박은 코드이므로
 * 여기서 회귀로 고정한다.
 *
 * <h2>보장하는 것</h2>
 *
 * - `hidden: true` 원소가 목록에서 빠진다
 * - **`hidden` 키가 없는 원소와 `hidden: false`·`null` 원소는 남는다** (목록이 통째로 비는 사고 방지)
 * - 서버가 `"true"`(문자열)·`1`(숫자)로 보내도 걸러진다 — BE 는 세 표기를 모두 숨김으로 취급한다
 * - 상세는 숨김이면 `null`, 404 도 `null` 을 돌려준다
 * - 지역 필터 경로에서도 같은 필터가 적용된다
 *
 * <h2>보장하지 않는 것</h2>
 *
 * - **서버 SQL 의 숨김 필터.** `fetch` 를 모킹하므로 BE 가 무엇을 돌려주는지는 내가 정한 값이다.
 *   BE 수정이 되돌려져도 이 테스트는 통과한다 — 그건 실DB 판정(`_workspace/03_qa_report.md`)의 몫이다
 * - 화면 렌더링. 목록을 그리는 컴포넌트·스토어는 이 테스트 범위 밖이다
 */

const BASE_URL = "http://api.test";

type Row = Record<string, unknown>;

function ok(body: unknown): Response {
  return { ok: true, status: 200, json: async () => body } as unknown as Response;
}

function notFound(): Response {
  return { ok: false, status: 404, json: async () => ({}) } as unknown as Response;
}

let fetchMock: ReturnType<typeof vi.fn>;

/**
 * 모듈이 레포지토리 인스턴스를 모듈 스코프에 캐시하므로(`placesRepository.ts:68`) 테스트마다
 * 모듈 레지스트리를 비우고 새로 읽는다. 안 그러면 첫 테스트가 잡은 baseUrl 과 상태가 남는다.
 */
async function loadRepository() {
  vi.resetModules();
  vi.stubEnv("VITE_API_BASE_URL", BASE_URL);
  return import("./placesRepository");
}

function place(id: string, extra: Row = {}): Row {
  return { id, regionId: "KR-11", name: `장소 ${id}`, ...extra };
}

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
});

describe("fetchPlaces — 목록 숨김 필터", () => {
  it("hidden:true 인 장소를 목록에서 제외한다", async () => {
    fetchMock.mockResolvedValue(
      ok([place("visible"), place("hidden-one", { hidden: true }), place("also-visible")])
    );
    const { fetchPlaces } = await loadRepository();

    const list = await fetchPlaces();

    expect(list.map((p) => p.id)).toEqual(["visible", "also-visible"]);
  });

  it("hidden 키가 없는 장소와 hidden:false·null 인 장소는 모두 남는다", async () => {
    // 운영 데이터 대다수가 '키 없음' 형태다. 이 셋이 사라지면 목록이 통째로 비는 사고가 된다.
    fetchMock.mockResolvedValue(
      ok([
        place("no-key"),
        place("false", { hidden: false }),
        place("json-null", { hidden: null }),
      ])
    );
    const { fetchPlaces } = await loadRepository();

    const list = await fetchPlaces();

    expect(list.map((p) => p.id)).toEqual(["no-key", "false", "json-null"]);
  });

  it("문자열 \"true\"·숫자 1 로 온 hidden 도 걸러진다", async () => {
    // BE 는 이 세 표기를 모두 숨김으로 취급한다(계약 8-0 동작표). FE 도 같이 막아야 방어선이 된다.
    fetchMock.mockResolvedValue(
      ok([
        place("str-true", { hidden: "true" }),
        place("num-1", { hidden: 1 }),
        place("survivor"),
      ])
    );
    const { fetchPlaces } = await loadRepository();

    const list = await fetchPlaces();

    expect(list.map((p) => p.id)).toEqual(["survivor"]);
  });

  it("목록 원소의 숨김 프로그램도 함께 제외한다", async () => {
    fetchMock.mockResolvedValue(
      ok([
        place("with-programs", {
          programs: [
            { id: "open", title: "공개", status: "ongoing", reviews: [] },
            { id: "secret", title: "비공개", status: "ongoing", reviews: [], hidden: true },
          ],
        }),
      ])
    );
    const { fetchPlaces } = await loadRepository();

    const [first] = await fetchPlaces();

    expect(first.programs?.map((p) => p.id)).toEqual(["open"]);
  });
});

describe("fetchPlacesByRegionId — 지역 필터 경로", () => {
  it("regionId=all 이면 쿼리스트링 없이 /places 를 부르고 같은 숨김 필터를 적용한다", async () => {
    fetchMock.mockResolvedValue(ok([place("visible"), place("gone", { hidden: true })]));
    const { fetchPlacesByRegionId } = await loadRepository();

    const list = await fetchPlacesByRegionId("all");

    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/places`);
    expect(list.map((p) => p.id)).toEqual(["visible"]);
  });

  it("지역을 지정하면 regionId 쿼리를 붙이고 같은 숨김 필터를 적용한다", async () => {
    fetchMock.mockResolvedValue(ok([place("visible"), place("gone", { hidden: true })]));
    const { fetchPlacesByRegionId } = await loadRepository();

    const list = await fetchPlacesByRegionId("KR-11");

    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/places?regionId=KR-11`);
    expect(list.map((p) => p.id)).toEqual(["visible"]);
  });
});

describe("fetchPlaceById — 상세 직접 접근 차단", () => {
  it("숨김 장소의 상세는 null 이다 — 서버가 200 + hidden:true 를 돌려줘도 화면에 띄우지 않는다", async () => {
    fetchMock.mockResolvedValue(ok(place("hidden-one", { hidden: true })));
    const { fetchPlaceById } = await loadRepository();

    await expect(fetchPlaceById("hidden-one")).resolves.toBeNull();
  });

  it("없는 id(404)는 null 이다", async () => {
    fetchMock.mockResolvedValue(notFound());
    const { fetchPlaceById } = await loadRepository();

    await expect(fetchPlaceById("does-not-exist")).resolves.toBeNull();
  });

  it("노출 중인 장소는 그대로 돌려주되 숨김 프로그램은 뺀다", async () => {
    fetchMock.mockResolvedValue(
      ok(
        place("open", {
          programs: [
            { id: "open", title: "공개", status: "ongoing", reviews: [] },
            { id: "secret", title: "비공개", status: "ongoing", reviews: [], hidden: true },
          ],
        })
      )
    );
    const { fetchPlaceById } = await loadRepository();

    const found = await fetchPlaceById("open");

    expect(found?.id).toBe("open");
    expect(found?.programs?.map((p) => p.id)).toEqual(["open"]);
  });
});
