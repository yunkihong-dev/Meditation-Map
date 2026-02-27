import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import FilterPanel from "@/components/meditation/FilterPanel";
import PopularPlaceCard from "@/components/meditation/PopularPlaceCard";
import PlaceListItem from "@/components/meditation/PlaceListItem";
import RegionMap from "@/components/meditation/RegionMap";
import {
  applyFilters,
  getAvailableTags,
  getPlaces,
  getPopularPlaces,
  getRegions,
  sortPlaces,
} from "@/services/meditation/meditationService";
import { useMeditationStore } from "@/stores/meditationStore";

const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 12px 24px;
  color: ${({ theme }) => theme.colors.text900};
  background: ${({ theme }) => theme.colors.warmCream};

  @media (max-width: 960px) {
    padding: 14px 10px 24px;
  }
`;

const SearchBar = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  padding: 12px 44px 12px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  width: 75%;
  max-width: 420px;
  box-shadow: 0 2px 8px rgba(75, 0, 130, 0.06);
  transition: width 0.35s ease, max-width 0.35s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:focus-within {
    width: 100%;
    max-width: 100%;
    border-color: ${({ theme }) => theme.colors.primary400};
    box-shadow: 0 4px 16px rgba(75, 0, 130, 0.12);
  }
`;

const SearchIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary600};
  display: grid;
  place-items: center;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font-size: 1.1rem;
  outline: none;
  color: ${({ theme }) => theme.colors.text900};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text700};
    opacity: 0.8;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text700};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.pill};

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    color: ${({ theme }) => theme.colors.text900};
  }
`;

const MainContent = styled.div`
  animation: ${fadeSlideIn} 0.35s ease both;
`;

const MapSection = styled.section`
  padding: 12px;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 20px;
`;

const RegionChips = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.warmCream};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary200};
    border-radius: 3px;
  }
`;

const PopularSection = styled.section`
  margin-top: 28px;
  background: ${({ theme }) => theme.colors.warmCream};
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text900};
  margin: 0 0 16px;
`;

const PopularScroll = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
`;

const RegionChip = styled.button<{ $active?: boolean }>`
  flex-shrink: 0;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.primary300)};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary600 : theme.colors.white};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary400};
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primary600 : theme.colors.primary50};
  }
`;

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "filter content";
  gap: 28px;
  animation: ${fadeSlideIn} 0.35s ease both;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`;

const FilterAside = styled.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`;

const SearchContentWrapper = styled.div`
  grid-area: content;
`;

const SearchContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const SearchResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SearchResultTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text700};
  margin: 0;
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

const drawerFadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const drawerSlideIn = keyframes`from { transform: translateX(100%); } to { transform: translateX(0); }`;

const DrawerBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${drawerFadeIn} 0.2s ease;
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
  animation: ${drawerSlideIn} 0.25s ease;
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

const ScrollSentinel = styled.div`
  height: 1px;
`;

const MeditationMainPage = () => {
  const navigate = useNavigate();
  const {
    selectedRegionId,
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
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [placeholder, setPlaceholder] = useState("");

  const regions = getRegions();
  const allRegions = [{ id: "all", name: "전체" }, ...regions];
  const popularPlaces = getPopularPlaces(8);
  const availableTags = useMemo(() => getAvailableTags(), []);
  const places = useMemo(() => getPlaces(), []);

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

  const isSearching = filters.keyword.trim().length > 0;

  useEffect(() => {
    setRegion("all");
  }, [setRegion]);

  useEffect(() => {
    const placeholders = [
      "템플스테이",
      "숲 명상",
      "바다 명상",
      "한옥 명상",
      "호흡 수련",
      "걷기 명상",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const schedule = (delay: number) => {
      timeoutId = window.setTimeout(() => {
        const current = placeholders[wordIndex % placeholders.length];

        if (isDeleting) {
          charIndex -= 1;
        } else {
          charIndex += 1;
        }

        setPlaceholder(current.slice(0, Math.max(charIndex, 0)));

        if (!isDeleting && charIndex >= current.length) {
          isDeleting = true;
          schedule(700);
          return;
        }

        if (isDeleting && charIndex <= 0) {
          isDeleting = false;
          wordIndex += 1;
          schedule(300);
          return;
        }

        schedule(isDeleting ? 120 : 240);
      }, delay);
    };

    schedule(240);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filters.keyword, filters.sortBy, filters.tags, filters.category, setPage]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore || !isSearching) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setPage(page + 1);
      },
      { rootMargin: "200px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, page, setPage, isSearching]);

  const handleMapRegionClick = (regionId: string) => {
    setRegion(regionId);
    navigate("/meditation/map");
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Page>
      <SearchBar onSubmit={handleSearchSubmit}>
        <SearchIcon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.65" y1="16.65" x2="21" y2="21" />
          </svg>
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder={placeholder || "명상센터 검색"}
          value={filters.keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {filters.keyword && (
          <ClearButton
            type="button"
            onClick={() => setKeyword("")}
            aria-label="검색어 삭제"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </ClearButton>
        )}
      </SearchBar>

      {!isSearching ? (
        <MainContent>
          <MapSection>
            <RegionMap
              activeRegionId={selectedRegionId}
              onSelectRegion={handleMapRegionClick}
            />
          </MapSection>

          <RegionChips>
            {allRegions.map((region) => (
              <RegionChip
                key={region.id}
                type="button"
                $active={selectedRegionId === region.id}
                onClick={() => handleMapRegionClick(region.id)}
              >
                {region.name}
              </RegionChip>
            ))}
          </RegionChips>

          <PopularSection>
            <SectionTitle>인기 명상지</SectionTitle>
            <PopularScroll>
              {popularPlaces.map((place) => (
                <PopularPlaceCard key={place.id} place={place} />
              ))}
            </PopularScroll>
          </PopularSection>
        </MainContent>
      ) : (
        <SearchResults>
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
          <SearchContentWrapper>
            <SearchContent>
              <SearchResultHeader>
                <SearchResultTitle>총 {sortedPlaces.length}곳의 명상센터</SearchResultTitle>
                <FilterIconButton type="button" onClick={() => setFilterOpen(true)} aria-label="필터">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </FilterIconButton>
              </SearchResultHeader>
              <List>
                {visibleItems.length === 0 && (
                  <Empty>조건에 맞는 명상센터가 없어요.</Empty>
                )}
                {visibleItems.map((place) => (
                  <PlaceListItem key={place.id} place={place} />
                ))}
              </List>
              {hasMore && <ScrollSentinel ref={sentinelRef} />}
            </SearchContent>
          </SearchContentWrapper>
        </SearchResults>
      )}

      {isSearching && isFilterOpen && (
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

export default MeditationMainPage;
