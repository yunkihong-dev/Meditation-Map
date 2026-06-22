import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AdminError, AdminField, AdminInput, AdminLabel } from "./adminStyles";
import { ensureNaverMapsGeocoder } from "@/services/meditation/naverMapLoader";
import {
  searchAddressCandidates,
  zoomForGeocodeCandidate,
  type GeocodeCandidate,
} from "@/services/meditation/naverGeocode";

const SearchRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
`;

const SearchInputWrap = styled.div`
  flex: 1;
  min-width: 0;

  input {
    width: 100%;
    height: 100%;
  }
`;

const SearchIconButton = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 8px;
  border: 1px solid #52525b;
  background: #27272a;
  color: #f4f4f5;
  cursor: pointer;
  display: grid;
  place-items: center;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  .spin {
    animation: address-search-spin 0.8s linear infinite;
  }

  @keyframes address-search-spin {
    to {
      transform: rotate(360deg);
    }
  }

  &:hover:not(:disabled) {
    background: #3f3f46;
    border-color: #71717a;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

function LoadingIcon() {
  return (
    <svg className="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3a9 9 0 1 1-6.36 15.36" strokeLinecap="round" />
    </svg>
  );
}

const CandidateList = styled.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  border: 1px solid #3f3f46;
  border-radius: 8px;
  overflow: hidden;
  max-height: 160px;
  overflow-y: auto;
`;

const CandidateBtn = styled.button<{ $active?: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  border-bottom: 1px solid #27272a;
  background: ${({ $active }) => ($active ? "rgba(75, 0, 130, 0.25)" : "#111114")};
  color: #f4f4f5;
  font-size: 13px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

const MapBox = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #3f3f46;
  background: #27272a;
`;

const MapPlaceholder = styled.p`
  margin: 12px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`;

const VerifiedBadge = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #86efac;
`;

const ApproxBadge = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #fcd34d;
  line-height: 1.45;
`;

const Hint = styled.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`;

interface AdminAddressMapFieldProps {
  value: string;
  onChange: (address: string) => void;
}

async function waitForPaint(): Promise<void> {
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

export default function AdminAddressMapField({ value, onChange }: AdminAddressMapFieldProps) {
  const mapElRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const markerRef = useRef<unknown>(null);
  const [query, setQuery] = useState(value);
  const [candidates, setCandidates] = useState<GeocodeCandidate[]>([]);
  const [selected, setSelected] = useState<GeocodeCandidate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  const ncpKeyId = (import.meta.env.VITE_NAVER_MAP_CLIENT_ID as string | undefined)?.trim();

  useEffect(() => {
    setQuery(value);
    if (!value.trim()) {
      setSelected(null);
      setVerified(false);
      setCandidates([]);
    }
  }, [value]);

  const showOnMap = useCallback(
    (candidate: GeocodeCandidate, options?: { syncAddress?: boolean }) => {
      const naver = window.naver as {
        maps?: {
          Map?: new (
            el: HTMLElement,
            opts: object
          ) => { setCenter: (p: unknown) => void; setZoom: (z: number) => void };
          LatLng?: new (lat: number, lng: number) => unknown;
          Marker?: new (opts: object) => unknown;
          Event?: { trigger: (target: unknown, event: string) => void };
        };
      };
      const maps = naver.maps;
      const el = mapElRef.current;
      if (!maps?.Map || !maps.LatLng || !maps.Marker || !el) return;

      const position = new maps.LatLng!(candidate.lat, candidate.lng);
      const zoom = zoomForGeocodeCandidate(candidate);
      if (!mapRef.current) {
        mapRef.current = new maps.Map(el, {
          center: position,
          zoom,
          scrollWheel: true,
          mapTypeControl: false,
        });
      } else {
        const map = mapRef.current as { setCenter: (p: unknown) => void; setZoom: (z: number) => void };
        map.setCenter(position);
        map.setZoom(zoom);
      }
      if (markerRef.current) {
        (markerRef.current as { setMap: (m: null) => void }).setMap(null);
      }
      markerRef.current = new maps.Marker!({ position, map: mapRef.current });
      maps.Event?.trigger(mapRef.current, "resize");
      setSelected(candidate);
      setVerified(!candidate.approximate);
      if (options?.syncAddress !== false && !candidate.approximate) {
        onChange(candidate.address);
      }
    },
    [onChange]
  );

  const runSearch = useCallback(async (searchText?: string) => {
    const q = (searchText ?? query).trim();
    if (!q) {
      setError("검색할 주소를 입력하세요.");
      return;
    }
    setError(null);
    setLoading(true);
    setVerified(false);
    try {
      if (!ncpKeyId) {
        setError(".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도에서 주소를 확인할 수 있습니다.");
        onChange(q);
        return;
      }
      await ensureNaverMapsGeocoder(ncpKeyId);
      await waitForPaint();
      const list = await searchAddressCandidates(q);
      setCandidates(list);
      if (list.length === 0) {
        setError("위치를 찾지 못했습니다. 시·군·구 이름이나 더 구체적인 주소로 다시 검색해 보세요.");
        return;
      }
      await waitForPaint();
      showOnMap(list[0], { syncAddress: !list[0]!.approximate });
    } catch (e) {
      setError(e instanceof Error ? e.message : "주소 검색 실패");
    } finally {
      setLoading(false);
    }
  }, [ncpKeyId, onChange, query, showOnMap]);

  useEffect(() => {
    if (!value.trim() || !ncpKeyId) return;
    let cancelled = false;
    void (async () => {
      try {
        await ensureNaverMapsGeocoder(ncpKeyId);
        if (cancelled) return;
        await waitForPaint();
        const list = await searchAddressCandidates(value);
        if (cancelled || list.length === 0) return;
        const match = list.find((c) => c.address === value) ?? list[0];
        await waitForPaint();
        if (!cancelled) showOnMap(match!, { syncAddress: false });
      } catch {
        /* 기존 주소 자동 표시 실패는 무시 */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [ncpKeyId, showOnMap, value]);

  useEffect(() => {
    const q = query.trim();
    if (!q || !ncpKeyId || q === value.trim()) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      void (async () => {
        try {
          await ensureNaverMapsGeocoder(ncpKeyId);
          if (cancelled) return;
          await waitForPaint();
          const list = await searchAddressCandidates(q);
          if (cancelled || list.length === 0) return;
          await waitForPaint();
          if (!cancelled) {
            setCandidates(list);
            setError(null);
            showOnMap(list[0]!, { syncAddress: false });
          }
        } catch {
          /* 입력 중 자동 미리보기 실패는 무시 */
        }
      })();
    }, 600);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [ncpKeyId, query, showOnMap, value]);

  return (
    <AdminField>
      <AdminLabel>주소 (검색 후 지도에서 확인)</AdminLabel>
      <SearchRow>
        <SearchInputWrap>
          <AdminInput
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVerified(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                void runSearch();
              }
            }}
            placeholder="예: 서울특별시 종로구 ..."
          />
        </SearchInputWrap>
        <SearchIconButton
          type="button"
          onClick={() => void runSearch()}
          disabled={loading}
          aria-label={loading ? "주소 검색 중" : "주소 검색"}
          title={loading ? "검색 중…" : "검색"}
        >
          {loading ? <LoadingIcon /> : <SearchIcon />}
        </SearchIconButton>
      </SearchRow>
      <Hint>
        정확한 도로명·지번이 없어도 「강릉」, 「제주」, 「종로구」처럼 지역명만으로 대략적인 위치를 표시합니다.
        검색 후 핀 위치를 확인해 주세요.
      </Hint>
      {error && <AdminError>{error}</AdminError>}
      {candidates.length > 1 && (
        <CandidateList>
          {candidates.map((c) => (
            <li key={`${c.address}-${c.lat}`}>
              <CandidateBtn
                type="button"
                $active={selected?.address === c.address}
                onClick={() => void waitForPaint().then(() => showOnMap(c))}
              >
                {c.address}
              </CandidateBtn>
            </li>
          ))}
        </CandidateList>
      )}
      {ncpKeyId ? (
        <>
          <MapBox ref={mapElRef} aria-label="주소 확인 지도" />
          {!selected && <MapPlaceholder>검색하면 지도에서 위치를 확인할 수 있습니다.</MapPlaceholder>}
        </>
      ) : (
        <Hint>.env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도 미리보기가 표시됩니다.</Hint>
      )}
      {verified && selected && (
        <VerifiedBadge>✓ 지도에서 확인됨 — {selected.address}</VerifiedBadge>
      )}
      {!verified && selected?.approximate && (
        <ApproxBadge>
          ◎ 대략적인 위치 — {selected.precision === "region" ? "시·도" : "지역"} 단위로 표시됩니다.
          {selected.address !== query.trim() && selected.precision !== "region" ? ` (${selected.address})` : ""}
        </ApproxBadge>
      )}
    </AdminField>
  );
}
