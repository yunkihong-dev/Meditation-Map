import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import Icon from "@/components/common/Icon";
import FilterPanel from "@/components/meditation/FilterPanel";
import KeywordSearchBar from "@/components/meditation/KeywordSearchBar";
import MapPlacePeekCard from "@/components/meditation/MapPlacePeekCard";
import PlaceListItem from "@/components/meditation/PlaceListItem";
import PlacesClusterMap from "@/components/meditation/PlacesClusterMap";
import {
  applyFilters,
  collectAvailableTags,
  getRegionById,
  sortPlaces,
} from "@/services/meditation/meditationService";
import { useCatalogStore } from "@/stores/catalogStore";
import { useMeditationStore } from "@/stores/meditationStore";

const PEEK_STRIP_PX = 96;
const NARROW_MAX = 960;
/** 데스크톱 지도+목록 분할 시 오른쪽 목록 패널 기준 너비(px). PlacesClusterMap 버튼 inset과 맞춤. */
const DESKTOP_MAP_LIST_WIDTH_PX = 400;

/**
 * 지도 위 유형 칩. 지역 선택 팝오버와 같은 갈래입니다.
 * 앞의 둘은 목록을 걸러 내고 — 켜진 칩을 다시 누르면 꺼져 전체가 됩니다 —
 * "전문가" 는 사람을 찾는 화면이라 같은 자리에서 그쪽으로 넘겨 줍니다.
 */
const MAP_VENUE_CHIPS: { label: string; venueKind: "명상센터" | "명상지" }[] = [
  { label: "명상센터", venueKind: "명상센터" },
  { label: "명상지", venueKind: "명상지" },
];

function useNarrowScreen() {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${NARROW_MAX}px)`).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${NARROW_MAX}px)`);
    const fn = () => setNarrow(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return narrow;
}

/*
 * 넓은 화면(>960px)에서 목록 ↔ 지도는 서로 다른 트리를 early return 으로
 * 갈아 끼웁니다. 좁은 화면처럼 시트가 미끄러지는 전환이 없어 그냥 툭 바뀌므로,
 * 새로 붙는 쪽이 스스로 떠오르며 나타나게 해 전환이 눈에 보이도록 합니다.
 * fill-mode 를 두지 않아 애니메이션이 끝나면 transform 이 남지 않습니다.
 */
const listSwapIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const mapSwapIn = keyframes`
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
`;

const swapEase = "cubic-bezier(0.25, 0.85, 0.3, 1)";

/** 누르는 순간 살짝 눌리는 느낌 — 탭이 먹었는지 바로 알 수 있게. */
const pressable = css`
  transition: transform 0.16s ease, filter 0.16s ease;

  &:active {
    transform: scale(0.96);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active {
      transform: none;
    }
  }
`;

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({ theme }) => theme.colors.text900};
  animation: ${listSwapIn} 0.34s ${swapEase};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.pill};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.text900};
  }
`;

const LinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(103, 59, 183, 0.35);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "filter content";
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`;

const Content = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilterAside = styled.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`;

const FilterIconButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.pill};

  @media (max-width: 960px) {
    display: flex;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 22px;
    height: 22px;
    stroke: ${({ theme }) => theme.colors.text900};
  }
`;

const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 125;
`;

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideIn = keyframes`from { transform: translateX(100%); } to { transform: translateX(0); }`;

const DrawerBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.2s ease;
`;

const DrawerPanel = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.25s ease;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const DrawerClose = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: ${({ theme }) => theme.colors.bg100};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;

  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.colors.text900};
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Empty = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const MapViewport = styled.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--tabbar-space);
  background: ${({ theme }) => theme.colors.bg100};
`;

const MapLayer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const MapTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: calc(10px + env(safe-area-inset-top, 0px)) 12px 28px;
  background: linear-gradient(
    180deg,
    rgba(247, 250, 252, 0.97) 0%,
    rgba(247, 250, 252, 0.72) 52%,
    rgba(247, 250, 252, 0) 100%
  );
  pointer-events: none;

  & button,
  & form,
  & input {
    pointer-events: auto;
  }
`;

const MapTopInner = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 8px;
  max-width: 1200px;
  margin: 0 auto;
`;

const MapIconButton = styled.button`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 30px rgba(107, 70, 193, 0.08);
  display: grid;
  place-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary600};
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.16s ease;

  &:active {
    transform: scale(0.94);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const MapRegionTitle = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text900};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ViewModeBar = styled.div`
  position: fixed;
  left: 50%;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 110;
  display: flex;
  justify-content: center;
`;

/** 지도 보기 중 → 목록으로 전환 (채워진 보라) */
const SwitchToListBtn = styled.button`
  padding: 12px 28px;
  border: none;
  margin: 0;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  -webkit-tap-highlight-color: transparent;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  box-shadow: 0 4px 22px rgba(107, 70, 193, 0.35);
  ${pressable};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 3px;
  }

  &:hover {
    filter: brightness(1.06);
  }
`;

/** 리스트 보기 중 → 지도로 전환 (시안의 떠 있는 유리 컨트롤 톤) */
const SwitchToMapBtn = styled.button`
  padding: 12px 28px;
  border: none;
  margin: 0;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  -webkit-tap-highlight-color: transparent;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: ${({ theme }) => theme.colors.primary600};
  box-shadow: 0 8px 30px rgba(107, 70, 193, 0.18);
  ${pressable};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary500};
    outline-offset: 3px;
  }

  &:hover {
    filter: brightness(1.05);
  }
`;

/** 뒤로 버튼과 검색줄이 나란히 놓이는 첫 줄. */
const MapSearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

/**
 * 지도 위에 떠 있는 검색줄. KeywordSearchBar 는 목록용 모양(모서리 16px)이라
 * 여기서만 알약으로 바꿔 씌웁니다.
 */
const MapSearchWrap = styled.div`
  flex: 1;
  min-width: 0;

  form {
    margin: 0;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 30px rgba(107, 70, 193, 0.08);
  }
`;

/** 검색줄 아래 유형 칩. 넘치면 옆으로 밀어서 봅니다. */
const MapChipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  overflow-x: auto;
  padding-bottom: 2px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MapChip = styled.button<{ $active?: boolean }>`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 9px 16px;
  border: 1px solid
    ${({ $active }) => ($active ? "transparent" : "rgba(255, 255, 255, 0.6)")};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary600 : "rgba(255, 255, 255, 0.95)"};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.warmGray)};
  box-shadow: 0 4px 20px rgba(107, 70, 193, ${({ $active }) => ($active ? 0.24 : 0.08)});
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.16s ease;

  &:active {
    transform: scale(0.96);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary500};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active {
      transform: none;
    }
  }
`;

const SheetShell = styled.div<{ $ty: number; $dragging: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: var(--tabbar-space);
  height: calc(100dvh - var(--tabbar-space));
  z-index: 95;
  transform: translateY(${({ $ty }) => $ty}px);
  ${({ $dragging }) =>
    $dragging
      ? css`
          transition: none;
        `
      : css`
          transition: transform 0.48s cubic-bezier(0.25, 0.85, 0.3, 1);
        `}
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 36px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  touch-action: pan-y;
`;

const SheetHandle = styled.div`
  flex-shrink: 0;
  padding: 10px 0 8px;
  touch-action: none;
  cursor: grab;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};

  &:active {
    cursor: grabbing;
  }

  &::before {
    content: "";
    width: 42px;
    height: 5px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary200};
  }
`;

const SheetScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`;

const SheetListMeta = styled.p`
  margin: 0 0 12px;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const DesktopMapSplitRoot = styled.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: var(--tabbar-space);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.bg100};
  animation: ${mapSwapIn} 0.38s ${swapEase};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const DesktopMapStage = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
`;

const DesktopListRail = styled.aside`
  width: min(${DESKTOP_MAP_LIST_WIDTH_PX}px, 42vw);
  max-width: ${DESKTOP_MAP_LIST_WIDTH_PX}px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.primary100};
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.06);
  z-index: 2;
  min-height: 0;
`;

const DesktopListSearch = styled.div`
  flex-shrink: 0;
  padding: 12px 12px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
`;

const DesktopListScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`;

const ScrollSentinel = styled.div`
  height: 1px;
`;

const MeditationRegionPage = () => {
  const navigate = useNavigate();
  const { regionId } = useParams();
  const narrow = useNarrowScreen();
  const {
    filters,
    page,
    pageSize,
    setPage,
    setRegion,
    setKeyword,
    toggleTag,
    setSortBy,
    setCategory,
    setVenueKind,
    resetFilters,
    isFilterOpen,
    setFilterOpen,
  } = useMeditationStore();
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [mapPeekPlaceId, setMapPeekPlaceId] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const sheetScrollRef = useRef<HTMLDivElement | null>(null);
  const desktopListScrollRef = useRef<HTMLDivElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({ active: false, startY: 0, startTy: 0 });
  const [sheetTy, setSheetTy] = useState(0);
  const [maxTy, setMaxTy] = useState(400);
  const [halfTy, setHalfTy] = useState(200);
  const [sheetDragging, setSheetDragging] = useState(false);
  const [sheetReady, setSheetReady] = useState(false);

  /**
   * 하단 탭의 "지도" 가 이 화면으로 바로 들어오게 되면서, 여기가 앱의 첫 화면일 수
   * 있습니다. 그때 navigate(-1) 은 앱 밖으로 나가 버리므로 돌아갈 곳이 없으면 홈으로 보냅니다.
   */
  const goBack = useCallback(() => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) navigate(-1);
    else navigate("/");
  }, [navigate]);

  const recalcSheetMetrics = useCallback(() => {
    const el = sheetRef.current;
    if (!el) return;
    const h = el.offsetHeight;
    const m = Math.max(0, h - PEEK_STRIP_PX);
    setMaxTy(m);
    setHalfTy(Math.round(m * 0.4));
    setSheetTy((prev) => Math.max(0, Math.min(m, prev)));
  }, []);

  useLayoutEffect(() => {
    if (!narrow || !regionId) return;
    const id = requestAnimationFrame(() => {
      recalcSheetMetrics();
      const el = sheetRef.current;
      if (el) {
        const m = Math.max(0, el.offsetHeight - PEEK_STRIP_PX);
        setSheetTy(m);
      }
      setSheetReady(true);
    });
    return () => cancelAnimationFrame(id);
  }, [narrow, regionId, recalcSheetMetrics]);

  useEffect(() => {
    if (!narrow) return;
    const onResize = () => recalcSheetMetrics();
    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, [narrow, recalcSheetMetrics]);

  useEffect(() => {
    if (regionId) {
      setRegion(regionId);
      setPage(1);
    }
  }, [regionId, setRegion, setPage]);

  const placesAll = useCatalogStore((s) => s.places);
  const region = regionId ? getRegionById(regionId) : undefined;
  const availableTags = useMemo(() => collectAvailableTags(placesAll), [placesAll]);
  /* 전국 지도로 들어왔을 때 "전체 · 총 120곳" 은 어색해서 "전국" 으로 부릅니다. */
  const regionLabel = regionId === "all" ? "전국" : (region?.name ?? "");
  const places = useMemo(
    () =>
      regionId
        ? regionId === "all"
          ? [...placesAll]
          : placesAll.filter((p) => p.regionId === regionId)
        : [],
    [regionId, placesAll]
  );
  const filteredPlaces = useMemo(
    () => applyFilters(places, filters),
    [places, filters]
  );
  const sortedPlaces = useMemo(
    () => sortPlaces(filteredPlaces, filters.sortBy),
    [filteredPlaces, filters.sortBy]
  );
  const visibleItems = useMemo(
    () => sortedPlaces.slice(0, page * pageSize),
    [sortedPlaces, page, pageSize]
  );
  const hasMore = visibleItems.length < sortedPlaces.length;

  const inMapContext = narrow || viewMode === "map";
  const peekPlace =
    mapPeekPlaceId && inMapContext
      ? placesAll.find((p) => p.id === mapPeekPlaceId)
      : undefined;

  useEffect(() => {
    if (!inMapContext) setMapPeekPlaceId(null);
  }, [inMapContext]);

  useEffect(() => {
    setMapPeekPlaceId(null);
  }, [filters.keyword, filters.sortBy, filters.tags, filters.category]);

  useEffect(() => {
    setPage(1);
  }, [filters.keyword, filters.sortBy, filters.tags, filters.category, setPage]);

  useEffect(() => {
    const root =
      narrow ? sheetScrollRef.current
      : viewMode === "map" ? desktopListScrollRef.current
      : null;
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setPage(page + 1);
        }
      },
      { root: root ?? undefined, rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, narrow, viewMode, page, setPage]);

  const snapSheet = useCallback(
    (y: number) => {
      const dFull = y;
      const dHalf = Math.abs(y - halfTy);
      const dPeek = Math.abs(y - maxTy);
      if (dFull <= dHalf && dFull <= dPeek) return 0;
      if (dHalf <= dPeek) return halfTy;
      return maxTy;
    },
    [halfTy, maxTy]
  );

  const onSheetHandleDown = useCallback(
    (e: React.PointerEvent) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      dragRef.current = { active: true, startY: e.clientY, startTy: sheetTy };
      setSheetDragging(true);
    },
    [sheetTy]
  );

  const onSheetHandleMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current.active) return;
      const dy = e.clientY - dragRef.current.startY;
      let next = dragRef.current.startTy + dy;
      next = Math.max(0, Math.min(maxTy, next));
      setSheetTy(next);
    },
    [maxTy]
  );

  const onSheetHandleUp = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current.active) return;
      dragRef.current.active = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      setSheetDragging(false);
      setSheetTy((y) => snapSheet(y));
    },
    [snapSheet]
  );

  if (!regionId || !region) {
    return (
      <Page>
        <Empty>해당 지역 정보를 찾지 못했어요.</Empty>
        <LinkButton type="button" onClick={() => navigate("/meditation")}>
          메인으로 돌아가기
        </LinkButton>
      </Page>
    );
  }

  /*
   * 목록 ↔ 지도 전환 버튼은 넓은 화면에서만 씁니다.
   * 좁은 화면은 지도 위에 목록 시트가 얹혀 있어서, 시트를 끌어 올리고 내리는 것이
   * 곧 전환입니다. 버튼을 같이 두면 하는 일이 겹치고 지도 아래쪽만 더 가립니다.
   */
  const switchToListView = () => setViewMode("list");
  const switchToMapView = () => setViewMode("map");

  const filterDrawer = isFilterOpen && (
    <DrawerOverlay>
      <DrawerBackdrop onClick={() => setFilterOpen(false)} />
      <DrawerPanel>
        <DrawerHeader>
          <h3 style={{ margin: 0, fontSize: "1.2rem" }}>필터</h3>
          <DrawerClose type="button" onClick={() => setFilterOpen(false)}>
            <Icon name="close" size={20} />
          </DrawerClose>
        </DrawerHeader>
        <FilterPanel
          filters={filters}
          availableTags={availableTags}
          onChangeKeyword={setKeyword}
          onChangeCategory={setCategory}
          onToggleTag={toggleTag}
          onChangeSortBy={setSortBy}
          onReset={resetFilters}
        />
      </DrawerPanel>
    </DrawerOverlay>
  );

  const peekCard =
    inMapContext && peekPlace ? (
      <MapPlacePeekCard
        place={peekPlace}
        onClose={() => setMapPeekPlaceId(null)}
        onOpenDetail={() => {
          navigate(`/meditation/place/${peekPlace.id}`);
          setMapPeekPlaceId(null);
        }}
      />
    ) : null;

  const viewModeToggle = narrow ? null : viewMode === "map" ? (
    <ViewModeBar>
      <SwitchToListBtn type="button" onClick={switchToListView} aria-label="목록으로 보기">
        목록
      </SwitchToListBtn>
    </ViewModeBar>
  ) : (
    <ViewModeBar>
      <SwitchToMapBtn type="button" onClick={switchToMapView} aria-label="지도로 보기">
        지도
      </SwitchToMapBtn>
    </ViewModeBar>
  );

  if (narrow) {
    return (
      <>
        <MapViewport>
          <MapLayer>
            <PlacesClusterMap
              fillViewport
              /* 검색줄(44) + 칩줄(38) + 사이 여백 아래로 내려 붙입니다. */
              myLocationTopPx={112}
              places={sortedPlaces}
              onSelectPlace={setMapPeekPlaceId}
            />
          </MapLayer>
          <MapTopBar>
            <MapSearchRow>
              <MapIconButton type="button" onClick={goBack} aria-label="뒤로 가기">
                <Icon name="arrow_back" size={22} />
              </MapIconButton>
              <MapSearchWrap>
                <KeywordSearchBar
                  layout="region"
                  value={filters.keyword}
                  onChange={setKeyword}
                  placeholder="명상지, 명상센터 검색"
                />
              </MapSearchWrap>
            </MapSearchRow>
            <MapChipRow role="group" aria-label="유형">
              {MAP_VENUE_CHIPS.map((chip) => {
                const on = filters.venueKind === chip.venueKind;
                return (
                  <MapChip
                    key={chip.venueKind}
                    type="button"
                    $active={on}
                    aria-pressed={on}
                    onClick={() => setVenueKind(on ? undefined : chip.venueKind)}
                  >
                    {chip.label}
                  </MapChip>
                );
              })}
              <MapChip
                type="button"
                onClick={() => navigate(`/meditation/region/${regionId}/experts`)}
              >
                전문가
              </MapChip>
              <MapChip type="button" onClick={() => setFilterOpen(true)}>
                <Icon name="tune" size={16} />
                필터
              </MapChip>
            </MapChipRow>
          </MapTopBar>
        </MapViewport>

        <SheetShell
          ref={sheetRef}
          $ty={sheetReady ? sheetTy : maxTy}
          $dragging={sheetDragging}
          style={{ visibility: sheetReady ? "visible" : "hidden" }}
          aria-label="명상지 목록 패널"
        >
          <SheetHandle
            onPointerDown={onSheetHandleDown}
            onPointerMove={onSheetHandleMove}
            onPointerUp={onSheetHandleUp}
            onPointerCancel={onSheetHandleUp}
            aria-hidden
          />
          <SheetScroll ref={sheetScrollRef}>
            <SheetListMeta>
              {regionLabel} · 총 {sortedPlaces.length}곳
            </SheetListMeta>
            <List>
              {visibleItems.length === 0 && (
                <Empty>
                  {places.length === 0
                    ? "등록된 공간이 없습니다."
                    : "조건에 맞는 명상센터가 없어요."}
                </Empty>
              )}
              {visibleItems.map((place) => (
                <PlaceListItem key={place.id} place={place} />
              ))}
            </List>
            {hasMore && <ScrollSentinel ref={sentinelRef} />}
          </SheetScroll>
        </SheetShell>

        {peekCard}
        {filterDrawer}
      </>
    );
  }

  if (viewMode === "map") {
    return (
      <>
        <DesktopMapSplitRoot>
          <DesktopMapStage>
            <MapLayer>
              <PlacesClusterMap
                fillViewport
                sidePanelInsetPx={DESKTOP_MAP_LIST_WIDTH_PX}
                /* 한 줄짜리 상단바 아래 */
                myLocationTopPx={68}
                places={sortedPlaces}
                onSelectPlace={setMapPeekPlaceId}
              />
            </MapLayer>
            <MapTopBar>
              <MapTopInner>
                <MapIconButton type="button" onClick={goBack} aria-label="뒤로 가기">
                  <Icon name="arrow_back" size={22} />
                </MapIconButton>
                <MapRegionTitle>{regionLabel}</MapRegionTitle>
                <MapIconButton type="button" onClick={() => setFilterOpen(true)} aria-label="필터">
                  <Icon name="tune" size={22} />
                </MapIconButton>
              </MapTopInner>
            </MapTopBar>
          </DesktopMapStage>
          <DesktopListRail aria-label="명상지 목록">
            <DesktopListSearch>
              <KeywordSearchBar
                layout="region"
                value={filters.keyword}
                onChange={setKeyword}
                placeholder="명상지, 명상센터 검색"
              />
            </DesktopListSearch>
            <DesktopListScroll ref={desktopListScrollRef}>
              <SheetListMeta>총 {sortedPlaces.length}곳</SheetListMeta>
              <List>
                {visibleItems.length === 0 && (
                  <Empty>
                    {places.length === 0
                      ? "등록된 공간이 없습니다."
                      : "조건에 맞는 명상센터가 없어요."}
                  </Empty>
                )}
                {visibleItems.map((place) => (
                  <PlaceListItem key={place.id} place={place} />
                ))}
              </List>
              {hasMore && <ScrollSentinel ref={sentinelRef} />}
            </DesktopListScroll>
          </DesktopListRail>
        </DesktopMapSplitRoot>
        {peekCard}
        {viewModeToggle}
        {filterDrawer}
      </>
    );
  }

  return (
    <>
      <Page>
        <PageHeader>
          <HeaderLeft>
            <BackButton type="button" onClick={goBack} aria-label="뒤로 가기">
              <Icon name="arrow_back" size={22} />
            </BackButton>
            <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>명상지 리스트</h2>
          </HeaderLeft>
          <FilterIconButton type="button" onClick={() => setFilterOpen(true)} aria-label="필터">
            <Icon name="tune" size={22} />
          </FilterIconButton>
        </PageHeader>

        <KeywordSearchBar
          layout="region"
          value={filters.keyword}
          onChange={setKeyword}
          placeholder="명상지, 명상센터 검색"
        />

        <Grid>
          <FilterAside>
            <FilterPanel
              filters={filters}
              availableTags={availableTags}
              onChangeKeyword={setKeyword}
              onChangeCategory={setCategory}
              onToggleTag={toggleTag}
              onChangeSortBy={setSortBy}
              onReset={resetFilters}
            />
          </FilterAside>
          <Content>
            <List>
              {visibleItems.length === 0 && (
                <Empty>
                  {places.length === 0
                    ? "등록된 공간이 없습니다."
                    : "조건에 맞는 명상센터가 없어요."}
                </Empty>
              )}
              {visibleItems.map((place) => (
                <PlaceListItem key={place.id} place={place} />
              ))}
            </List>
            {hasMore && <ScrollSentinel ref={sentinelRef} />}
          </Content>
        </Grid>
      </Page>

      {viewModeToggle}

      {filterDrawer}
    </>
  );
};

export default MeditationRegionPage;
