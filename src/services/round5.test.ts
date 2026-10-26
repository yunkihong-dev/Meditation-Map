import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DEDUPE_MS, resetPlaceViewBeacon, sendPlaceView } from "@/services/meditation/repositories/placeViewBeacon";
import { normalizeAdminPlace } from "@/services/admin/placeAdminFields";
import { saveAdminPlace } from "@/services/admin/adminApi";
import { changeRateText, parsePlaceStats } from "@/services/ownerPlaces/types";
import { fieldGroupOf } from "@/services/ownerPlaces/types";
import type { MeditationPlace } from "@/services/meditation/types";

/**
 * 라운드 5(BE C4~C8 연결) 회귀.
 * - C7 비콘: 같은 장소는 짧은 시간 안에 1번만(StrictMode 이중 effect·재렌더 대비), POST /places/{id}/views, 실패 무시
 * - C6 통계 파서·증감 문구: changeRate null 이면 문구 없음
 * - 관리자 장소 폼: 저장 때 오너가 넣은 addressDetail 과 모르는 키를 버리지 않는다
 */

let fetchMock: ReturnType<typeof vi.fn>;
beforeEach(() => {
  resetPlaceViewBeacon();
  vi.stubEnv("VITE_API_BASE_URL", "http://api.test");
  fetchMock = vi.fn(async () => ({ ok: true, status: 204, text: async () => "" }));
  vi.stubGlobal("fetch", fetchMock);
});
afterEach(() => vi.unstubAllGlobals());

describe("C7 조회 비콘", () => {
  it("같은 장소는 DEDUPE_MS 안에 한 번만 보낸다", () => {
    expect(sendPlaceView("401", 1000)).toBe(true);
    expect(sendPlaceView("401", 1000 + 10)).toBe(false); // StrictMode 이중 실행
    expect(sendPlaceView("401", 1000 + DEDUPE_MS - 1)).toBe(false);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("http://api.test/places/401/views");
    expect(init).toMatchObject({ method: "POST", credentials: "include" });
    expect(sendPlaceView("402", 1000)).toBe(true);
    expect(sendPlaceView("401", 1000 + DEDUPE_MS)).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it("네트워크 실패를 던지지 않는다", async () => {
    fetchMock.mockRejectedValueOnce(new Error("offline"));
    expect(() => sendPlaceView("9")).not.toThrow();
    await Promise.resolve();
  });
});

describe("C6 통계", () => {
  const raw = {
    placeId: "401", range: "1W", timezone: "Asia/Seoul", from: "2026-10-01", to: "2026-10-07",
    views: { total: 3, previousTotal: 0, changeRate: null },
    bookmarks: { current: 1, added: 1, removed: 0, net: 1 }, granularity: "DAY",
    series: [{ date: "2026-10-07", views: 3, bookmarksAdded: 1, bookmarksRemoved: 0 }],
  };
  it("BE 실측 원문을 그대로 읽는다", () => {
    const s = parsePlaceStats(raw);
    expect(s.views).toEqual({ total: 3, previousTotal: 0, changeRate: null });
    expect(s.bookmarks.current).toBe(1);
    expect(s.series).toHaveLength(1);
  });
  it("changeRate null → 문구 없음, 값이 있으면 범위별 기준", () => {
    expect(changeRateText("1M", null)).toBeNull();
    expect(changeRateText("ALL", 5)).toBeNull();
    expect(changeRateText("1M", 12)).toBe("직전 30일 대비 12.0% 증가");
    expect(changeRateText("1D", -3.5)).toBe("어제 대비 3.5% 감소");
    expect(changeRateText("1W", 0)).toBe("직전 7일 대비 변화 없음");
  });
  it("서버 필드 lat·lng 는 주소 칸으로 묶인다", () => {
    expect(["lat", "lng", "address", "addressDetail"].map(fieldGroupOf)).toEqual(["address", "address", "address", "addressDetail"]);
  });
});

describe("관리자 장소 폼 — addressDetail 보존", () => {
  const place = {
    id: "401", regionId: "KR-26", name: "센터", address: "부산광역시 해운대구 해운대해변로 264", addressDetail: "4층 402호",
    lat: 35.1587, lng: 129.1604, shortDescription: "", description: "", thumbnailUrl: "", hashtags: [], themes: [],
    hasTempleStay: false, duration: "", organization: { name: "" }, externalLink: "", detailSections: [],
    futureKey: { keep: true },
  } as unknown as MeditationPlace;

  it("normalizeAdminPlace 가 addressDetail·모르는 키를 남긴다", () => {
    const n = normalizeAdminPlace(structuredClone(place)) as MeditationPlace & { futureKey?: unknown };
    expect(n.addressDetail).toBe("4층 402호");
    expect(n.futureKey).toEqual({ keep: true });
  });

  it("saveAdminPlace PUT 본문 data 에 addressDetail 이 실린다", async () => {
    fetchMock.mockResolvedValueOnce({ ok: true, status: 200, json: async () => ({ id: "401", regionId: "KR-26", name: "센터", data: place }), text: async () => "" });
    await saveAdminPlace("401", "KR-26", normalizeAdminPlace(structuredClone(place)));
    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(String((init as RequestInit).body));
    expect(init).toMatchObject({ method: "PUT" });
    expect(body.data.addressDetail).toBe("4층 402호");
    expect(body.data.futureKey).toEqual({ keep: true });
    expect(body.data).not.toHaveProperty("id");
  });
});
