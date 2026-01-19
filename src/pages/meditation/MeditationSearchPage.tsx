import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import FilterPanel from "@/components/meditation/FilterPanel";
import PlaceListItem from "@/components/meditation/PlaceListItem";
import {
  applyFilters,
  getAvailableTags,
  getPlaces,
  sortPlaces,
} from "@/services/meditation/meditationService";
import { useMeditationStore } from "@/stores/meditationStore";

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 64px;
  color: ${({ theme }) => theme.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px 48px;
  }
`;

const Hero = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    font-size: 2.4rem;
    margin-top: 6px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBarSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
`;

const SearchForm = styled.form<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border200};
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  width: ${({ $expanded }) => ($expanded ? "100%" : "240px")};
  max-width: 520px;
  transition: width 0.25s ease, box-shadow 0.25s ease;

  &:focus-within {
    box-shadow: 0 8px 18px rgba(103, 59, 183, 0.16);
  }

  @media (max-width: 960px) {
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 1.1rem;
  width: 100%;
`;

const SearchButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 6px;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 14px;
    height: 14px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const Eyebrow = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Subtitle = styled.p`
  margin-top: 8px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const FilterDesktop = styled.aside`
  @media (max-width: 960px) {
    display: none;
  }
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilterMobile = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Empty = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(24px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const DrawerBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(53, 24, 96, 0.35);
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
  box-shadow: -12px 0 32px rgba(53, 24, 96, 0.24);
  animation: ${slideIn} 0.25s ease;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const DrawerClose = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.bg100};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: transform 0.2s ease;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
    stroke: ${({ theme }) => theme.colors.text900};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    transition: transform 0.25s ease;
  }

  &:hover svg,
  &:focus-visible svg {
    transform: rotate(90deg);
  }
`;

const ScrollSentinel = styled.div`
  height: 1px;
`;

const MeditationSearchPage = () => {
  const {
    filters,
    page,
    pageSize,
    setPage,
    setKeyword,
    toggleTag,
    setSortBy,
    resetFilters,
    isFilterOpen,
    setFilterOpen,
  } = useMeditationStore();
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

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
  }, [filters.keyword, filters.sortBy, filters.tags, setPage]);

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

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setKeyword(filters.keyword);
  };

  return (
    <Page>
      <Hero>
        <div>
          <Eyebrow>전체 명상지</Eyebrow>
          <h1>명상지 검색</h1>
          <Subtitle>총 {sortedPlaces.length}곳의 명상지가 검색되었습니다.</Subtitle>
        </div>
      </Hero>

      <SearchBarSection>
        <SearchForm $expanded={isFocused || filters.keyword.length > 0} onSubmit={handleSearchSubmit}>
          <SearchInput
            type="text"
            placeholder={placeholder}
            value={filters.keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <SearchButton type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
          </SearchButton>
        </SearchForm>
      </SearchBarSection>

      <Grid>
        <FilterDesktop>
          <FilterPanel
            filters={filters}
            availableTags={availableTags}
            onChangeKeyword={setKeyword}
            onToggleTag={toggleTag}
            onChangeSortBy={setSortBy}
            onReset={resetFilters}
          />
        </FilterDesktop>

        <Content>
          <FilterMobile>
            <LinkButton type="button" onClick={() => setFilterOpen(true)}>
              필터 열기
            </LinkButton>
          </FilterMobile>

          <List>
            {visibleItems.length === 0 && (
              <Empty>조건에 맞는 명상지가 없어요.</Empty>
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
              <h3>필터</h3>
              <DrawerClose type="button" onClick={() => setFilterOpen(false)}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </DrawerClose>
            </DrawerHeader>
            <FilterPanel
              filters={filters}
              availableTags={availableTags}
              onChangeKeyword={setKeyword}
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

export default MeditationSearchPage;
