import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import FilterPanel from "@/components/meditation/FilterPanel";
import PlaceListItem from "@/components/meditation/PlaceListItem";
import {
  applyFilters,
  getAvailableTags,
  getPlacesByRegion,
  getRegionById,
  sortPlaces,
} from "@/services/meditation/meditationService";
import { useMeditationStore } from "@/stores/meditationStore";

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
  z-index: 70;
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

const ScrollSentinel = styled.div`
  height: 1px;
`;

const MeditationRegionPage = () => {
  const navigate = useNavigate();
  const { regionId } = useParams();
  const {
    filters,
    page,
    pageSize,
    setPage,
    setRegion,
    toggleTag,
    setSortBy,
    setCategory,
    resetFilters,
    isFilterOpen,
    setFilterOpen,
  } = useMeditationStore();
  const sentinelRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    setPage(1);
  }, [filters.keyword, filters.sortBy, filters.tags, filters.category, setPage]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setPage(page + 1);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, page, setPage]);

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

  return (
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

      <Grid>
        <FilterAside>
          <FilterPanel
            filters={filters}
            availableTags={availableTags}
            onChangeCategory={setCategory}
            onToggleTag={toggleTag}
            onChangeSortBy={setSortBy}
            onReset={resetFilters}
          />
        </FilterAside>
        <Content>
          <List>
            {visibleItems.length === 0 && (
              <Empty>조건에 맞는 명상센터가 없어요.</Empty>
            )}
            {visibleItems.map((place) => (
              <PlaceListItem key={place.id} place={place} />
            ))}
          </List>
          {hasMore && <ScrollSentinel ref={sentinelRef} />}
        </Content>
      </Grid>

      {isFilterOpen && (
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
              onChangeCategory={setCategory}
              onToggleTag={toggleTag}
              onChangeSortBy={setSortBy}
              onReset={resetFilters}
            />
          </DrawerPanel>
        </DrawerOverlay>
      )}
    </Page>
  );
};

export default MeditationRegionPage;
