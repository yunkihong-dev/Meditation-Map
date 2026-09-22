import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * `expertsRepository` 의 **숨김 필터(2차 방어선)** 회귀 테스트. `placesRepository.test.ts` 와 같은 취지다.
 *
 * <h2>보장하는 것</h2>
 *
 * - `hidden: true` 전문가가 목록에서 빠진다
 * - `hidden` 키가 없는 전문가와 `hidden: false`·`null` 전문가는 남는다
 * - 서버가 `"true"`(문자열)·`1`(숫자)로 보내도 걸러진다
 * - 상세는 숨김이면 `null`, 404 도 `null`
 * - 지역 필터 경로에서도 같은 필터가 적용된다 — BE 가 두 SQL 분기 중 한쪽만 고쳤을 때의 보완선
 *
 * <h2>보장하지 않는 것</h2>
 *
 * - 서버 SQL 의 숨김 필터(`fetch` 를 모킹한다)
 * - `PUT /me/expert-profile` 의 `hidden` 저장 — 그건 BE 쪽 테스트가 본다
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

/** 모듈 스코프 캐시(`expertsRepository.ts:56`) 때문에 테스트마다 새로 읽는다. */
async function loadRepository() {
  vi.resetModules();
  vi.stubEnv("VITE_API_BASE_URL", BASE_URL);
  return import("./expertsRepository");
}

function expert(id: string, extra: Row = {}): Row {
  return { id, name: `전문가 ${id}`, regionIds: ["KR-11"], ...extra };
}

beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
});

describe("fetchExperts — 목록 숨김 필터", () => {
  it("hidden:true 인 전문가를 목록에서 제외한다", async () => {
    fetchMock.mockResolvedValue(
      ok([expert("visible"), expert("hidden-one", { hidden: true }), expert("also-visible")])
    );
    const { fetchExperts } = await loadRepository();

    const list = await fetchExperts();

    expect(list.map((e) => e.id)).toEqual(["visible", "also-visible"]);
  });

  it("hidden 키가 없는 전문가와 hidden:false·null 인 전문가는 모두 남는다", async () => {
    fetchMock.mockResolvedValue(
      ok([
        expert("no-key"),
        expert("false", { hidden: false }),
        expert("json-null", { hidden: null }),
      ])
    );
    const { fetchExperts } = await loadRepository();

    const list = await fetchExperts();

    expect(list.map((e) => e.id)).toEqual(["no-key", "false", "json-null"]);
  });

  it("문자열 \"true\"·숫자 1 로 온 hidden 도 걸러진다", async () => {
    fetchMock.mockResolvedValue(
      ok([
        expert("str-true", { hidden: "true" }),
        expert("num-1", { hidden: 1 }),
        expert("survivor"),
      ])
    );
    const { fetchExperts } = await loadRepository();

    const list = await fetchExperts();

    expect(list.map((e) => e.id)).toEqual(["survivor"]);
  });
});

describe("fetchExpertsByRegionId — 지역 필터 경로", () => {
  it("regionId=all 이면 쿼리스트링 없이 /experts 를 부르고 같은 숨김 필터를 적용한다", async () => {
    fetchMock.mockResolvedValue(ok([expert("visible"), expert("gone", { hidden: true })]));
    const { fetchExpertsByRegionId } = await loadRepository();

    const list = await fetchExpertsByRegionId("all");

    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/experts`);
    expect(list.map((e) => e.id)).toEqual(["visible"]);
  });

  it("지역을 지정하면 regionId 쿼리를 붙이고 같은 숨김 필터를 적용한다", async () => {
    fetchMock.mockResolvedValue(ok([expert("visible"), expert("gone", { hidden: true })]));
    const { fetchExpertsByRegionId } = await loadRepository();

    const list = await fetchExpertsByRegionId("KR-49");

    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/experts?regionId=KR-49`);
    expect(list.map((e) => e.id)).toEqual(["visible"]);
  });
});

describe("fetchExpertById — 상세 직접 접근 차단", () => {
  it("숨김 전문가의 상세는 null 이다", async () => {
    fetchMock.mockResolvedValue(ok(expert("hidden-one", { hidden: true })));
    const { fetchExpertById } = await loadRepository();

    await expect(fetchExpertById("hidden-one")).resolves.toBeNull();
  });

  it("없는 id(404)는 null 이다", async () => {
    fetchMock.mockResolvedValue(notFound());
    const { fetchExpertById } = await loadRepository();

    await expect(fetchExpertById("does-not-exist")).resolves.toBeNull();
  });

  it("노출 중인 전문가는 그대로 돌려준다", async () => {
    fetchMock.mockResolvedValue(ok(expert("open")));
    const { fetchExpertById } = await loadRepository();

    const found = await fetchExpertById("open");

    expect(found?.id).toBe("open");
  });
});
