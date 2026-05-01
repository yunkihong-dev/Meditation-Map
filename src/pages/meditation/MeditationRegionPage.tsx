import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import FilterPanel from "@/components/meditation/FilterPanel";
import KeywordSearchBar from "@/components/meditation/KeywordSearchBar";
import MapPlacePeekCard from "@/components/meditation/MapPlacePeekCard";
import PlaceListItem from "@/components/meditation/PlaceListItem";
import PlacesClusterMap from "@/components/meditation/PlacesClusterMap";
import {
  applyFilters,
  getAvailableTags,
  getPlaceById,
  getPlacesByRegion,
  getRegionById,
  sortPlaces,
} from "@/services/meditation/meditationService";
import { useMeditationStore } from "@/stores/meditationStore";

const PEEK_STRIP_PX = 96;
const NARROW_MAX = 960;

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

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({ theme }) => theme.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
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
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
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
  padding: calc(6px + env(safe-area-inset-top, 0px)) 12px 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.97) 0%,
    rgba(255, 255, 255, 0.72) 42%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;

  & button {
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
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.1);
  display: grid;
  place-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text900};
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;
    stroke: currentColor;
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
  box-shadow: 0 4px 22px rgba(75, 0, 130, 0.35);

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 3px;
  }

  &:hover {
    filter: brightness(1.06);
  }
`;

/** 리스트 보기 중 → 지도로 전환 (밝은 골드 톤) */
const SwitchToMapBtn = styled.button`
  padding: 12px 28px;
  border: none;
  margin: 0;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  -webkit-tap-highlight-color: transparent;
  background: ${({ theme }) => theme.colors.dustyGold};
  color: ${({ theme }) => theme.colors.primary900};
  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.14);

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary500};
    outline-offset: 3px;
  }

  &:hover {
    filter: brightness(1.05);
  }
`;

const SheetShell = styled.div<{ $ty: number; $dragging: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  height: calc(100dvh - 56px - env(safe-area-inset-bottom, 0px));
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

const SheetSearchWrap = styled.div`
  flex-shrink: 0;
  padding: 0 12px 8px;
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
    resetFilters,
    isFilterOpen,
    setFilterOpen,
  } = useMeditationStore();
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [mapPeekPlaceId, setMapPeekPlaceId] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const sheetScrollRef = useRef<HTMLDivElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({ active: false, startY: 0, startTy: 0 });
  const [sheetTy, setSheetTy] = useState(0);
  const [maxTy, setMaxTy] = useState(400);
  const [halfTy, setHalfTy] = useState(200);
  const [sheetDragging, setSheetDragging] = useState(false);
  const [sheetReady, setSheetReady] = useState(false);

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

  const region = regionId ? getRegionById(regionId) : undefined;
  const availableTags = useMemo(() => getAvailableTags(), []);
  const places = useMemo(
    () => (regionId ? getPlacesByRegion(regionId) : []),
    [regionId]
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
    mapPeekPlaceId && inMapContext ? getPlaceById(mapPeekPlaceId) : undefined;

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
    const root = narrow ? sheetScrollRef.current : null;
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
  }, [hasMore, narrow, page, setPage]);

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

  const switchToListView = () => {
    if (narrow) setSheetTy(0);
    else setViewMode("list");
  };

  const switchToMapView = () => {
    if (narrow) setSheetTy(maxTy);
    else setViewMode("map");
  };

  const mapTabActive = narrow
    ? !sheetReady
      ? true
      : maxTy > 0 && sheetTy >= maxTy * 0.5
    : viewMode === "map";

  const filterDrawer = isFilterOpen && (
    <DrawerOverlay>
      <DrawerBackdrop onClick={() => setFilterOpen(false)} />
      <DrawerPanel>
        <DrawerHeader>
          <h3 style={{ margin: 0, fontSize: "1.2rem" }}>필터</h3>
          <DrawerClose type="button" onClick={() => setFilterOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
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

  const viewModeToggle = mapTabActive ? (
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
              places={sortedPlaces}
              onSelectPlace={setMapPeekPlaceId}
            />
          </MapLayer>
          <MapTopBar>
            <MapTopInner>
              <MapIconButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </MapIconButton>
              <MapRegionTitle>{region.name}</MapRegionTitle>
              <MapIconButton type="button" onClick={() => setFilterOpen(true)} aria-label="필터">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </MapIconButton>
            </MapTopInner>
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
          <SheetSearchWrap>
            <KeywordSearchBar
              layout="region"
              value={filters.keyword}
              onChange={setKeyword}
              placeholder="장소, 이름, 주소, 기관명, 태그로 검색"
            />
          </SheetSearchWrap>
          <SheetScroll ref={sheetScrollRef}>
            <SheetListMeta>총 {sortedPlaces.length}곳</SheetListMeta>
            <List>
              {visibleItems.length === 0 && <Empty>조건에 맞는 명상센터가 없어요.</Empty>}
              {visibleItems.map((place) => (
                <PlaceListItem key={place.id} place={place} />
              ))}
            </List>
            {hasMore && <ScrollSentinel ref={sentinelRef} />}
          </SheetScroll>
        </SheetShell>

        {peekCard}
        {viewModeToggle}
        {filterDrawer}
      </>
    );
  }

  if (viewMode === "map") {
    return (
      <>
        <MapViewport>
          <MapLayer>
            <PlacesClusterMap
              fillViewport
              places={sortedPlaces}
              onSelectPlace={setMapPeekPlaceId}
            />
          </MapLayer>
          <MapTopBar>
            <MapTopInner>
              <MapIconButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </MapIconButton>
              <MapRegionTitle>{region.name}</MapRegionTitle>
              <MapIconButton type="button" onClick={() => setFilterOpen(true)} aria-label="필터">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </MapIconButton>
            </MapTopInner>
          </MapTopBar>
        </MapViewport>
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
            <BackButton type="button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </BackButton>
            <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>명상지 리스트</h2>
          </HeaderLeft>
          <FilterIconButton type="button" onClick={() => setFilterOpen(true)} aria-label="필터">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </FilterIconButton>
        </PageHeader>

        <KeywordSearchBar
          layout="region"
          value={filters.keyword}
          onChange={setKeyword}
          placeholder="장소, 이름, 주소, 기관명, 태그로 검색"
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
              {visibleItems.length === 0 && <Empty>조건에 맞는 명상센터가 없어요.</Empty>}
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
