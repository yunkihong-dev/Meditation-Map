import { regionNameById } from "@/data/koreaRegions";
import { REGION_BBOXES } from "./regionFromLocation";

export type GeocodePrecision = "exact" | "area" | "region";

export type GeocodeCandidate = {
  address: string;
  lat: number;
  lng: number;
  /** 정확한 주소가 아닌 대략 위치 */
  approximate?: boolean;
  precision?: GeocodePrecision;
};

const REGION_GEO_NAMES: { id: string; names: string[] }[] = [
  { id: "KR-11", names: ["서울특별시", "서울"] },
  { id: "KR-26", names: ["부산광역시", "부산"] },
  { id: "KR-27", names: ["대구광역시", "대구"] },
  { id: "KR-28", names: ["인천광역시", "인천"] },
  { id: "KR-29", names: ["광주광역시", "광주"] },
  { id: "KR-30", names: ["대전광역시", "대전"] },
  { id: "KR-31", names: ["울산광역시", "울산"] },
  { id: "KR-50", names: ["세종특별자치시", "세종"] },
  { id: "KR-41", names: ["경기도", "경기"] },
  { id: "KR-42", names: ["강원특별자치도", "강원도", "강원"] },
  { id: "KR-43", names: ["충청북도", "충북"] },
  { id: "KR-44", names: ["충청남도", "충남"] },
  { id: "KR-45", names: ["전북특별자치도", "전라북도", "전북"] },
  { id: "KR-46", names: ["전라남도", "전남"] },
  { id: "KR-47", names: ["경상북도", "경북"] },
  { id: "KR-48", names: ["경상남도", "경남"] },
  { id: "KR-49", names: ["제주특별자치도", "제주도", "제주"] },
];

function parseNum(v: unknown): number {
  return typeof v === "number" ? v : parseFloat(String(v ?? ""));
}

type GeocodeItem = {
  roadAddress?: string;
  jibunAddress?: string;
  address?: string;
  point?: { x?: unknown; y?: unknown };
  x?: unknown;
  y?: unknown;
};

function itemToCandidate(item: GeocodeItem): GeocodeCandidate | null {
  const lat = parseNum(item.point?.y ?? item.y);
  const lng = parseNum(item.point?.x ?? item.x);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  const address = (item.roadAddress || item.jibunAddress || item.address || "").trim();
  if (!address) return null;
  return { address, lat, lng, precision: "exact" };
}

type NaverService = {
  geocode?: (opts: { query: string }, cb: (status: string | number, response: unknown) => void) => void;
  Status?: { OK?: string | number; ERROR?: string | number; [key: string]: string | number | undefined };
};

function getNaverService(): NaverService | undefined {
  return (window.naver as { maps?: { Service?: NaverService } } | undefined)?.maps?.Service;
}

function isGeocodeOk(status: string | number): boolean {
  if (status === "OK" || status === 0) return true;
  const ok = getNaverService()?.Status?.OK;
  return ok != null && status === ok;
}

function geocodeStatusMessage(status: string | number): string {
  const Status = getNaverService()?.Status;
  if (Status) {
    for (const [name, value] of Object.entries(Status)) {
      if (value === status && name !== "OK") return name;
    }
  }
  return String(status);
}

function parseGeocodeResponse(response: unknown): GeocodeCandidate[] {
  const res = response as Record<string, unknown>;
  const out: GeocodeCandidate[] = [];
  const seen = new Set<string>();

  const push = (c: GeocodeCandidate | null) => {
    if (!c || seen.has(c.address)) return;
    seen.add(c.address);
    out.push(c);
  };

  const v2Addrs = (res.v2 as { addresses?: GeocodeItem[] } | undefined)?.addresses ?? [];
  for (const raw of v2Addrs) push(itemToCandidate(raw));

  const items =
    (res.result as { items?: GeocodeItem[] } | undefined)?.items ??
    (res.addresses as GeocodeItem[] | undefined) ??
    [];
  for (const raw of items) push(itemToCandidate(raw));

  return out;
}

function callGeocode(query: string): Promise<{ status: string | number; results: GeocodeCandidate[] }> {
  const service = getNaverService();
  const geocode = service?.geocode;
  if (!geocode) {
    return Promise.reject(new Error("지도 API(geocoder)가 로드되지 않았습니다."));
  }

  return new Promise((resolve, reject) => {
    try {
      geocode.call(service, { query }, (status, response) => {
        resolve({ status, results: isGeocodeOk(status) ? parseGeocodeResponse(response) : [] });
      });
    } catch (e) {
      reject(e instanceof Error ? e : new Error("주소 검색 호출 실패"));
    }
  });
}

function compactText(text: string): string {
  return text.replace(/\s+/g, "");
}

function detectRegionIdFromText(text: string): string | null {
  const compact = compactText(text);
  for (const region of REGION_GEO_NAMES) {
    for (const name of [...region.names].sort((a, b) => b.length - a.length)) {
      if (compact.includes(compactText(name))) return region.id;
    }
  }
  return null;
}

function regionBBoxCandidate(query: string, regionId: string): GeocodeCandidate {
  const bbox = REGION_BBOXES.find((b) => b.id === regionId) ?? REGION_BBOXES[0]!;
  return {
    address: query.trim(),
    lat: (bbox.minLat + bbox.maxLat) / 2,
    lng: (bbox.minLng + bbox.maxLng) / 2,
    approximate: true,
    precision: "region",
  };
}

/** 짧은 지명·부분 주소로도 geocode를 재시도할 쿼리 목록 */
function buildFallbackQueries(original: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const push = (s: string) => {
    const t = s.trim().replace(/\s+/g, " ");
    if (t.length >= 2 && !seen.has(t)) {
      seen.add(t);
      out.push(t);
    }
  };

  const normalized = original.trim().replace(/\s+/g, " ");
  push(normalized);

  const beforeComma = normalized.split(/[,，]/)[0]?.trim();
  if (beforeComma && beforeComma !== normalized) push(beforeComma);

  const tokens = normalized.split(/\s+/).filter(Boolean);
  for (let len = tokens.length - 1; len >= 1; len--) {
    push(tokens.slice(0, len).join(" "));
  }

  const last = tokens[tokens.length - 1];
  if (last && last.length >= 2 && !/[시군구읍면동로]$/.test(last)) {
    const prefix = tokens.slice(0, -1).join(" ");
    push(`${prefix} ${last}시`.trim());
    push(`${prefix} ${last}군`.trim());
    push(`${prefix} ${last}구`.trim());
    push(`${last}시`);
    push(`${last}군`);
    push(`${last}구`);
  }

  for (const region of REGION_GEO_NAMES) {
    for (const name of region.names) {
      if (normalized.includes(name)) push(name);
    }
  }

  const regionId = detectRegionIdFromText(normalized);
  if (regionId) {
    const geoName = REGION_GEO_NAMES.find((r) => r.id === regionId)?.names[0];
    if (geoName) push(geoName);
    push(regionNameById(regionId));
  }

  return out;
}

function markCandidates(
  results: GeocodeCandidate[],
  approximate: boolean,
  precision: GeocodePrecision
): GeocodeCandidate[] {
  return results.map((r) => ({
    ...r,
    approximate: approximate || r.approximate,
    precision: approximate ? precision : (r.precision ?? "exact"),
  }));
}

export function zoomForGeocodeCandidate(candidate: GeocodeCandidate): number {
  if (candidate.precision === "region") return 11;
  if (candidate.approximate || candidate.precision === "area") return 14;
  return 17;
}

/** 네이버 geocode + 부분 주소·지역명 fallback */
export async function searchAddressCandidates(query: string): Promise<GeocodeCandidate[]> {
  const q = query.trim();
  if (!q) return [];

  const queries = buildFallbackQueries(q);
  let lastStatus: string | number = "OK";

  for (let i = 0; i < queries.length; i++) {
    const subq = queries[i]!;
    const { status, results } = await callGeocode(subq);
    lastStatus = status;
    if (results.length > 0) {
      return markCandidates(results, i > 0, i > 0 ? "area" : "exact");
    }
  }

  const regionId = detectRegionIdFromText(q);
  if (regionId) {
    return [regionBBoxCandidate(q, regionId)];
  }

  if (!isGeocodeOk(lastStatus)) {
    throw new Error(`주소 검색 실패 (${geocodeStatusMessage(lastStatus)})`);
  }

  return [];
}
