import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { approximateLatLngForPlace } from "@/services/meditation/placeApproxPosition";
import { ensureNaverMapsCore } from "@/services/meditation/naverMapLoader";
import type { MeditationPlace } from "@/services/meditation/types";

const Root = styled.div<{ $fillViewport?: boolean }>`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: ${({ $fillViewport }) => ($fillViewport ? "0" : "min(62dvh, 520px)")};
  border-radius: ${({ $fillViewport, theme }) => ($fillViewport ? "0" : theme.radii.lg)};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg100};
`;

const MyLocationBtn = styled.button<{ $floating?: boolean; $rightInsetPx?: number }>`
  ${({ $floating, $rightInsetPx = 0 }) =>
    $floating
      ? css`
          position: fixed;
          z-index: 108;
          right: calc(14px + ${$rightInsetPx}px);
          bottom: calc(64px + env(safe-area-inset-bottom, 0px));
        `
      : css`
          position: absolute;
          z-index: 5;
          right: 14px;
          bottom: 20px;
        `}
  width: 46px;
  height: 46px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary600};
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.14);
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    filter: brightness(1.03);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const MapEl = styled.div<{ $fillViewport?: boolean }>`
  width: 100%;
  height: 100%;
  min-height: ${({ $fillViewport }) => ($fillViewport ? "100%" : "min(62dvh, 520px)")};
`;

function clusterThresholdPx(zoom: number): number {
  if (zoom <= 9) return 100;
  if (zoom <= 11) return 72;
  if (zoom <= 13) return 48;
  /* 고배율: 동일 픽셀에 겹칠 때만 묶고, 나머지는 전부 단일 마커 */
  return 0;
}

function clusterIndices(offsets: { x: number; y: number }[], threshold: number): number[][] {
  const rem = new Set<number>(offsets.map((_, i) => i));
  const clusters: number[][] = [];
  while (rem.size > 0) {
    const seed = rem.values().next().value as number;
    const group = new Set<number>([seed]);
    rem.delete(seed);
    let grew = true;
    while (grew) {
      grew = false;
      for (const r of [...rem]) {
        const pr = offsets[r]!;
        let join = false;
        for (const g of group) {
          const pg = offsets[g]!;
          const dx = pr.x - pg.x;
          const dy = pr.y - pg.y;
          if (dx * dx + dy * dy <= threshold * threshold) {
            join = true;
            break;
          }
        }
        if (join) {
          group.add(r);
          rem.delete(r);
          grew = true;
        }
      }
    }
    clusters.push([...group]);
  }
  return clusters;
}

function readLatLng(ll: unknown): { lat: number; lng: number } {
  const o = ll as { lat?: () => number; lng?: () => number };
  if (typeof o.lat === "function" && typeof o.lng === "function") {
    return { lat: o.lat(), lng: o.lng() };
  }
  return { lat: 37.5665, lng: 126.978 };
}

/** HTML/SVG filter id용 — 한 문서에 마커가 많아도 id 충돌 방지 */
function safeMarkerId(raw: string) {
  const s = raw.replace(/[^a-zA-Z0-9_-]/g, "_");
  return s.length > 0 ? s.slice(0, 48) : "x";
}

function escapeHtmlText(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** 간판 판(표지판 느낌) + 아래 막대 — 앵커는 막대 끝 */
const SIGNPOST_W = 88;
const SIGNPOST_SIGN_H = 34;
const SIGNPOST_POLE_H = 13;
const SIGNPOST_POLE_W = 7;
const MARKER_W = SIGNPOST_W;
const MARKER_H = SIGNPOST_SIGN_H + SIGNPOST_POLE_H;
const PIN_TIP_X = SIGNPOST_W / 2;
const PIN_TIP_Y = MARKER_H;

/* 한 톤 더 밝은 바이올렛 */
const SIGN_BOARD = "#a78bfa";
const SIGN_POLE = "#8b5cf6";
const CLUSTER_FILL = "#a78bfa";

/**
 * 단일 장소: 표지판(직사각형 안에 이름) + 기둥. 좌표는 기둥 끝.
 */
function buildSinglePinHtml(_placeId: string, placeName: string): string {
  const name = escapeHtmlText(placeName);
  return `<div style="width:${MARKER_W}px;height:${MARKER_H}px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 3px rgba(0,0,0,.24));pointer-events:auto" aria-hidden="true">
<div style="width:100%;height:${SIGNPOST_SIGN_H}px;box-sizing:border-box;background:${SIGN_BOARD};border-radius:6px;padding:3px 4px;display:flex;align-items:center;justify-content:center">
<span style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;box-sizing:border-box;margin:0;color:#fff;font-size:10px;font-weight:800;line-height:1.2;text-align:center;word-break:keep-all;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;letter-spacing:-0.02em;text-shadow:0 1px 2px rgba(0,0,0,.45)">${name}</span>
</div>
<div style="width:${SIGNPOST_POLE_W}px;height:${SIGNPOST_POLE_H}px;box-sizing:border-box;background:${SIGN_POLE};border-radius:0 0 3px 3px;flex-shrink:0"></div>
</div>`;
}

/** 클러스터: 단색 원 + 숫자(테두리 없음) */
function buildClusterHtml(count: number, clusterKey: string): string {
  const fid = `clf_${safeMarkerId(clusterKey)}`;
  const label = count > 99 ? "99+" : String(count);
  const fontSize = count > 99 ? 10 : count > 9 ? 11 : 13;
  return `<div style="width:38px;height:38px;pointer-events:auto" aria-hidden="true">
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="${fid}" x="-40%" y="-40%" width="180%" height="180%">
<feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2f0051" flood-opacity="0.42"/>
</filter>
</defs>
<circle cx="19" cy="19" r="15" fill="${CLUSTER_FILL}" filter="url(#${fid})"/>
<text x="19" y="19" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="${fontSize}" font-weight="800" font-family="system-ui,-apple-system,'Segoe UI',sans-serif">${label}</text>
</svg>
</div>`;
}

interface PlacesClusterMapProps {
  places: MeditationPlace[];
  onSelectPlace: (placeId: string) => void;
  /** true면 부모가 꽉 찬 높이(전체 화면 지도)일 때 비율에 맞춤 */
  fillViewport?: boolean;
  /**
   * fillViewport + 전체 화면 지도 옆에 목록 패널이 있을 때, 고정된 "내 위치" 버튼이 패널과 겹치지 않도록
   * 오른쪽에서 덜어 낼 픽셀(패널 너비와 맞춤).
   */
  sidePanelInsetPx?: number;
}

/**
 * 필터된 명상지 목록을 네이버 지도에 표시합니다.
 * 좌표는 `placeApproxPosition` 근사값이며, 줌 레벨에 따라 마커를 묶어 숫자 배지로 보여 줍니다.
 */
const PlacesClusterMap = ({
  places,
  onSelectPlace,
  fillViewport = false,
  sidePanelInsetPx = 0,
}: PlacesClusterMapProps) => {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const markersRef = useRef<Array<{ setMap: (v: unknown) => void }>>([]);
  const myPosMarkerRef = useRef<{ setMap: (v: unknown) => void; setPosition?: (p: unknown) => void } | null>(null);
  const lastGeoRef = useRef<{ lat: number; lng: number } | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [locPending, setLocPending] = useState(false);
  const placesRef = useRef(places);
  const onSelectRef = useRef(onSelectPlace);
  placesRef.current = places;
  onSelectRef.current = onSelectPlace;

  const onMyLocation = useCallback(() => {
    const map = mapRef.current;
    if (!map || typeof navigator === "undefined" || !navigator.geolocation) return;
    const naver = window.naver as Record<string, unknown> | undefined;
    const maps = naver?.maps as Record<string, unknown> | undefined;
    if (!maps) return;
    const LatLng = maps.LatLng as new (a: number, b: number) => unknown;
    const panTo = (map as { panTo?: (x: unknown) => void }).panTo;
    const setZoom = (map as { setZoom?: (z: number) => void }).setZoom;
    const move = (lat: number, lng: number) => {
      panTo?.call(map, new LatLng(lat, lng));
      setZoom?.call(map, 16);
    };
    if (lastGeoRef.current) {
      move(lastGeoRef.current.lat, lastGeoRef.current.lng);
      return;
    }
    setLocPending(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocPending(false);
        move(pos.coords.latitude, pos.coords.longitude);
      },
      () => setLocPending(false),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
    );
  }, []);

  const clearMarkers = () => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  };

  const rebuildMarkers = (map: unknown) => {
    const naver = window.naver as Record<string, unknown> | undefined;
    const maps = naver?.maps as Record<string, unknown> | undefined;
    if (!map || !maps) return;

    const Marker = maps.Marker as new (o: Record<string, unknown>) => { setMap: (v: unknown) => void };
    const LatLng = maps.LatLng as new (lat: number, lng: number) => unknown;
    const Point = maps.Point as new (x: number, y: number) => unknown;
    const Event = maps.Event as { addListener: (t: unknown, e: string, h: () => void) => void };

    const getProjection = (map as { getProjection?: () => { fromCoordToOffset: (c: unknown) => { x: number; y: number } } })
      .getProjection;
    const getZoom = (map as { getZoom?: () => number }).getZoom;
    const setZoom = (map as { setZoom?: (z: number) => void }).setZoom;
    const panTo = (map as { panTo?: (c: unknown) => void }).panTo;

    if (!getProjection || !getZoom || !setZoom || !panTo) return;

    const list = placesRef.current;
    if (list.length === 0) {
      clearMarkers();
      return;
    }

    const proj = getProjection.call(map);
    if (!proj || typeof proj.fromCoordToOffset !== "function") {
      return;
    }

    const latlngs = list.map((place) => {
      const { lat, lng } = approximateLatLngForPlace(place);
      return { place, latlng: new LatLng(lat, lng) };
    });

    let offsets: { x: number; y: number }[];
    try {
      offsets = latlngs.map((x) => {
        const p = proj.fromCoordToOffset(x.latlng);
        return { x: p.x, y: p.y };
      });
    } catch {
      return;
    }

    const zoom = getZoom.call(map) ?? 11;
    const thr = clusterThresholdPx(zoom);
    const badOffsets = offsets.some((o) => !Number.isFinite(o.x) || !Number.isFinite(o.y));
    const groups = badOffsets ? latlngs.map((_, i) => [i]) : clusterIndices(offsets, thr);

    clearMarkers();

    for (const [groupIndex, idxs] of groups.entries()) {
      const groupPlaces = idxs.map((i) => latlngs[i]!);
      if (groupPlaces.length === 1) {
        const { place, latlng } = groupPlaces[0]!;
        const marker = new Marker({
          position: latlng,
          map,
          title: place.name,
          icon: {
            content: buildSinglePinHtml(place.id, place.name),
            anchor: new Point(PIN_TIP_X, PIN_TIP_Y),
          },
        });
        Event.addListener(marker, "click", () => onSelectRef.current(place.id));
        markersRef.current.push(marker);
        continue;
      }

      let sumLat = 0;
      let sumLng = 0;
      for (const g of groupPlaces) {
        const { lat, lng } = readLatLng(g.latlng);
        sumLat += lat;
        sumLng += lng;
      }
      const n = groupPlaces.length;
      const center = new LatLng(sumLat / n, sumLng / n);
      const marker = new Marker({
        position: center,
        map,
        icon: {
          content: buildClusterHtml(n, `g${groupIndex}_${n}`),
          anchor: new Point(26, 26),
        },
      });
      Event.addListener(marker, "click", () => {
        const z = getZoom.call(map) ?? 11;
        setZoom.call(map, Math.min(z + 2, 19));
        panTo.call(map, center);
      });
      markersRef.current.push(marker);
    }
  };

  useEffect(() => {
    const el = mapDivRef.current;
    if (!el) return;

    let cancelled = false;

    void (async () => {
      const ok = await ensureNaverMapsCore(import.meta.env.VITE_NAVER_MAP_CLIENT_ID as string | undefined);
      if (!ok || cancelled || !mapDivRef.current) return;

      const naver = window.naver as Record<string, unknown>;
      const maps = naver.maps as Record<string, unknown>;
      const MapCtor = maps.Map as new (node: HTMLElement, opts: Record<string, unknown>) => unknown;
      const LatLng = maps.LatLng as new (a: number, b: number) => unknown;
      const LatLngBounds = maps.LatLngBounds as new () => { extend: (p: unknown) => void };
      const Event = maps.Event as { addListener: (t: unknown, e: string, h: () => void) => void };

      const map = new MapCtor(el, {
        center: new LatLng(37.5665, 126.978),
        zoom: 11,
        scrollWheel: true,
        scaleControl: false,
        mapDataControl: false,
        zoomControl: false,
      });

      if (cancelled) return;

      mapRef.current = map;

      setMapReady(true);

      const scheduleRebuild = () => {
        rebuildMarkers(map);
      };

      Event.addListener(map, "idle", scheduleRebuild);
      scheduleRebuild();

      const list = placesRef.current;
      if (list.length > 0) {
        const bounds = new LatLngBounds();
        for (const place of list) {
          const { lat, lng } = approximateLatLngForPlace(place);
          bounds.extend(new LatLng(lat, lng));
        }
        const fitBounds = (map as { fitBounds?: (b: unknown, pad?: unknown) => void }).fitBounds;
        fitBounds?.call(map, bounds, { top: 52, right: 20, bottom: 100, left: 20 });
      }
    })();

    return () => {
      cancelled = true;
      clearMarkers();
      lastGeoRef.current = null;
      myPosMarkerRef.current?.setMap(null);
      myPosMarkerRef.current = null;
      mapRef.current = null;
      setMapReady(false);
      if (mapDivRef.current) {
        mapDivRef.current.innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    placesRef.current = places;
    const map = mapRef.current;
    if (!map) return;
    rebuildMarkers(map);

    if (places.length === 0) return;

    const naver = window.naver as Record<string, unknown> | undefined;
    const maps = naver?.maps as Record<string, unknown> | undefined;
    const LatLng = maps?.LatLng as new (a: number, b: number) => unknown;
    const LatLngBounds = maps?.LatLngBounds as new () => { extend: (p: unknown) => void };
    if (!LatLng || !LatLngBounds) return;

    const bounds = new LatLngBounds();
    for (const place of places) {
      const { lat, lng } = approximateLatLngForPlace(place);
      bounds.extend(new LatLng(lat, lng));
    }
    const fitBounds = (map as { fitBounds?: (b: unknown, pad?: unknown) => void }).fitBounds;
    fitBounds?.call(map, bounds, { top: 52, right: 20, bottom: 100, left: 20 });
  }, [places]);

  useEffect(() => {
    if (!mapReady || typeof navigator === "undefined" || !navigator.geolocation) return;

    const dot = `<div style="width:16px;height:16px;background:#4B0082;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.28)" aria-hidden="true"></div>`;

    const upsertMarker = (lat: number, lng: number) => {
      lastGeoRef.current = { lat, lng };
      const m = mapRef.current;
      if (!m) return;
      const naver = window.naver as Record<string, unknown> | undefined;
      const maps = naver?.maps as Record<string, unknown> | undefined;
      if (!maps) return;
      const LatLng = maps.LatLng as new (a: number, b: number) => unknown;
      const Marker = maps.Marker as new (o: Record<string, unknown>) => unknown;
      const Point = maps.Point as new (x: number, y: number) => unknown;
      const ll = new LatLng(lat, lng);
      const cur = myPosMarkerRef.current;
      if (cur && typeof cur.setPosition === "function") {
        cur.setPosition(ll);
        return;
      }
      cur?.setMap(null);
      myPosMarkerRef.current = new Marker({
        position: ll,
        map: m,
        zIndex: 1000,
        title: "내 위치",
        icon: { content: dot, anchor: new Point(8, 8) },
      }) as { setMap: (v: unknown) => void; setPosition?: (p: unknown) => void };
    };

    const watchId = navigator.geolocation.watchPosition(
      (pos) => upsertMarker(pos.coords.latitude, pos.coords.longitude),
      () => {},
      { enableHighAccuracy: true, maximumAge: 15000, timeout: 30000 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [mapReady]);

  const canLocate = typeof navigator !== "undefined" && !!navigator.geolocation;

  const locationBtn = (
    <MyLocationBtn
      $floating={fillViewport}
      $rightInsetPx={fillViewport ? sidePanelInsetPx : 0}
      type="button"
      aria-label="현재 위치로 이동"
      title="현재 위치로 이동"
      disabled={!mapReady || locPending || !canLocate}
      onClick={onMyLocation}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    </MyLocationBtn>
  );

  return (
    <Root $fillViewport={fillViewport}>
      <MapEl ref={mapDivRef} $fillViewport={fillViewport} role="application" aria-label="명상지 지도" />
      {fillViewport ? createPortal(locationBtn, document.body) : locationBtn}
    </Root>
  );
};

export default PlacesClusterMap;
