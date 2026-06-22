import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ensureNaverMapsGeocoder } from "@/services/meditation/naverMapLoader";
import { searchAddressCandidates, zoomForGeocodeCandidate } from "@/services/meditation/naverGeocode";

const MapWrap = styled.div`
  width: 100%;
  height: 180px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg100};
  border: 1px solid ${({ theme }) => theme.colors.border200};
`;

const MapFallback = styled.div`
  min-height: 140px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.bg100};
  border: 1px solid ${({ theme }) => theme.colors.border200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  text-align: center;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text700};
  line-height: 1.45;

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.primary600};
    opacity: 0.7;
  }
`;

const MapStatus = styled.p`
  margin: 8px 0 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text700};
`;

type MapState = "idle" | "loading" | "ready" | "error" | "no-key";

async function waitForPaint(): Promise<void> {
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

interface AdminPreviewMapProps {
  address: string;
}

export default function AdminPreviewMap({ address }: AdminPreviewMapProps) {
  const mapElRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const markerRef = useRef<unknown>(null);
  const [mapState, setMapState] = useState<MapState>("idle");
  const [approximate, setApproximate] = useState(false);

  const ncpKeyId = (import.meta.env.VITE_NAVER_MAP_CLIENT_ID as string | undefined)?.trim();
  const trimmed = address.trim();

  useEffect(() => {
    if (!trimmed) {
      setMapState("idle");
      setApproximate(false);
      mapRef.current = null;
      markerRef.current = null;
      return;
    }
    if (!ncpKeyId) {
      setMapState("no-key");
      return;
    }

    let cancelled = false;
    const timer = window.setTimeout(() => {
      void (async () => {
        setMapState("loading");
        try {
          await ensureNaverMapsGeocoder(ncpKeyId);
          if (cancelled) return;
          await waitForPaint();

          const list = await searchAddressCandidates(trimmed);
          if (cancelled) return;

          const candidate = list.find((c) => c.address === trimmed) ?? list[0];
          if (!candidate) {
            setMapState("error");
            setApproximate(false);
            return;
          }

          const el = mapElRef.current;
          if (!el || cancelled) return;

          const naver = window.naver as {
            maps: {
              LatLng: new (lat: number, lng: number) => unknown;
              Map: new (
                el: HTMLElement,
                opts: object
              ) => { setCenter: (p: unknown) => void; setZoom: (z: number) => void };
              Marker: new (opts: object) => unknown;
              Event?: { trigger: (target: unknown, event: string) => void };
            };
          };

          const position = new naver.maps.LatLng(candidate.lat, candidate.lng);
          const zoom = zoomForGeocodeCandidate(candidate);
          if (!mapRef.current) {
            mapRef.current = new naver.maps.Map(el, {
              center: position,
              zoom,
              scrollWheel: false,
              mapTypeControl: false,
              zoomControl: false,
              scaleControl: false,
            });
          } else {
            const map = mapRef.current as { setCenter: (p: unknown) => void; setZoom: (z: number) => void };
            map.setCenter(position);
            map.setZoom(zoom);
          }

          if (markerRef.current) {
            (markerRef.current as { setMap: (m: null) => void }).setMap(null);
          }
          markerRef.current = new naver.maps.Marker({ position, map: mapRef.current });
          naver.maps.Event?.trigger(mapRef.current, "resize");
          if (!cancelled) {
            setApproximate(Boolean(candidate.approximate));
            setMapState("ready");
          }
        } catch {
          if (!cancelled) {
            setApproximate(false);
            setMapState("error");
          }
        }
      })();
    }, 350);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [ncpKeyId, trimmed]);

  if (!trimmed) {
    return (
      <MapFallback>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        주소를 입력하면 지도가 표시됩니다
      </MapFallback>
    );
  }

  if (mapState === "no-key") {
    return (
      <MapFallback>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {trimmed}
        <MapStatus>VITE_NAVER_MAP_CLIENT_ID 설정 시 지도 미리보기가 표시됩니다.</MapStatus>
      </MapFallback>
    );
  }

  return (
    <>
      <MapWrap ref={mapElRef} aria-label="위치 미리보기 지도" />
      {mapState === "loading" && <MapStatus>지도 불러오는 중…</MapStatus>}
      {mapState === "ready" && approximate && (
        <MapStatus>대략적인 위치입니다. 정확한 주소 검색을 권장합니다.</MapStatus>
      )}
      {mapState === "error" && (
        <MapStatus>지도를 표시하지 못했습니다. 시·군·구 이름으로 다시 입력해 보세요.</MapStatus>
      )}
    </>
  );
}
