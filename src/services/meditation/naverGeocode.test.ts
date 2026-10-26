import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const ensureNaverMapsGeocoder = vi.fn();
vi.mock("@/services/meditation/naverMapLoader", () => ({
  ensureNaverMapsGeocoder: (...args: unknown[]) => ensureNaverMapsGeocoder(...args),
}));

import { searchAddressCandidates } from "./naverGeocode";

type Win = { naver?: unknown };

/** 지오코더가 붙은 지도 API 를 흉내 낸다 — 로더가 불린 뒤에만 window.naver 가 생긴다. */
function installGeocoderOnLoad() {
  ensureNaverMapsGeocoder.mockImplementation(async () => {
    (window as unknown as Win).naver = {
      maps: {
        Map: function Map() {},
        Service: {
          Status: { OK: "OK" },
          geocode: (_opts: unknown, cb: (status: string, res: unknown) => void) =>
            cb("OK", {
              v2: {
                addresses: [
                  { roadAddress: "서울특별시 종로구 종로 1", jibunAddress: "", x: "126.97", y: "37.57" },
                ],
              },
            }),
        },
      },
    };
    return true;
  });
}

describe("searchAddressCandidates — 지도 스크립트 로드", () => {
  beforeEach(() => {
    delete (window as unknown as Win).naver;
    ensureNaverMapsGeocoder.mockReset();
    vi.stubEnv("VITE_NAVER_MAP_CLIENT_ID", "test-key");
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    delete (window as unknown as Win).naver;
  });

  it("지도 API 가 아직 없으면(장소 상세를 거치지 않은 화면) 지오코더를 먼저 로드한 뒤 검색한다", async () => {
    installGeocoderOnLoad();
    const found = await searchAddressCandidates("거북골로24길 20");
    expect(ensureNaverMapsGeocoder).toHaveBeenCalledWith("test-key");
    expect(found.length).toBeGreaterThan(0);
    expect(found[0]!.lat).toBeCloseTo(37.57);
  });

  it("지도 키가 없으면 원인을 알 수 있는 오류를 낸다", async () => {
    vi.stubEnv("VITE_NAVER_MAP_CLIENT_ID", "");
    ensureNaverMapsGeocoder.mockResolvedValue(false);
    await expect(searchAddressCandidates("종로 1")).rejects.toThrow(/VITE_NAVER_MAP_CLIENT_ID/);
  });
});
