import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import FilterPanel from "@/components/meditation/FilterPanel";
import logoImg from "@/assets/logo.png";
import Icon from "@/components/common/Icon";
import KeywordSearchBar from "@/components/meditation/KeywordSearchBar";
import FeaturedPlaceCard from "@/components/meditation/FeaturedPlaceCard";
import PopularPlaceCard from "@/components/meditation/PopularPlaceCard";
import PromoBannerRail from "@/components/meditation/PromoBannerRail";
import PlaceListItem from "@/components/meditation/PlaceListItem";
import {
  applyFilters,
  collectAvailableTags,
  collectFeaturedPrograms,
  computePopularPlaces,
  sortPlaces,
} from "@/services/meditation/meditationService";
import type {
  RegionEntryKind,
  RegionMapEntryState,
} from "@/pages/meditation/MeditationMapPage";
import type { Category } from "@/services/meditation/types";
import { useCatalogStore } from "@/stores/catalogStore";
import { useMeditationStore } from "@/stores/meditationStore";

const fadeSlideIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

/**
 * 시안의 홈은 좌우 20px(margin-mobile) 여백을 씁니다.
 * 레이아웃이 잡아 둔 --content-pad 만큼 되돌려 나간 뒤 20px 을 다시 넣습니다.
 */
const Page = styled.div`
  margin-inline: calc(-1 * var(--content-pad, 16px));
  padding: 0 20px 24px;
  color: ${({ theme }) => theme.colors.text900};
`;

/* ── 붙박이 상단 — 로고와 알림 ─────────────────────────── */
const StickyTop = styled.div`
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-inline: -20px;
  padding: calc(16px + env(safe-area-inset-top, 0px)) 20px 12px;
  background: rgba(247, 250, 252, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.radii.sm};
  }
`;

const BrandLogo = styled.img`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  object-fit: contain;
`;

const BrandName = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primary600};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/** 배너와 바로가기 사이에 놓이는 검색 자리. */
const SearchArea = styled.div`
  width: 100%;
`;

/**
 * 상단바 아래 본문. 검색 중에도 검색줄만은 그대로 붙어 있어야 해서
 * (다시 그리면 입력 포커스가 풀립니다) 이 스택이 분기 바깥에 있습니다.
 */
const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 16px;
`;

const BellButton = styled(Link)`
  position: relative;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.04);
  color: ${({ theme }) => theme.colors.primary600};

  /* 시안의 빨간 알림 점 */
  &::after {
    content: "";
    position: absolute;
    top: 12px;
    right: 12px;
    width: 8px;
    height: 8px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.colors.error};
  }
`;

const MainContent = styled.div`
  animation: ${fadeSlideIn} 0.35s ease both;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

/* ── 배너 (가로 스냅 스크롤) ───────────────────────────── */
const BannerRail = styled.section`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin-inline: -20px;
  padding: 0 20px 4px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Banner = styled(Link)<{ $tone: "a" | "b" }>`
  position: relative;
  flex-shrink: 0;
  width: 85%;
  min-height: 180px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  border-radius: 32px;
  overflow: hidden;
  text-decoration: none;
  background: ${({ $tone }) =>
    $tone === "a"
      ? "linear-gradient(135deg, #E9D8FD, #D6BCFA)"
      : "linear-gradient(135deg, #d0c0e4, #ecdcff)"};
  box-shadow: ${({ $tone }) =>
    $tone === "a"
      ? "0 8px 30px rgba(107, 70, 193, 0.1)"
      : "0 8px 30px rgba(107, 70, 193, 0.05)"};

  /* 시안의 흐릿한 빛 방울 — 배너 모서리 밖에서 은은하게 번집니다. */
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: ${({ theme }) => theme.radii.pill};
    pointer-events: none;
  }
  &::before {
    right: -40px;
    bottom: -40px;
    width: 160px;
    height: 160px;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(28px);
  }
  &::after {
    left: -40px;
    top: -40px;
    width: 128px;
    height: 128px;
    background: rgba(107, 70, 193, 0.1);
    filter: blur(20px);
  }
`;

const BannerBody = styled.div`
  position: relative;
  z-index: 1;
`;

const BannerBadge = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary600};
`;

const BannerTitle = styled.h2`
  margin: 0 0 4px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.onSecondaryFixed};
`;

const BannerDesc = styled.p`
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.onSecondaryFixedVariant};
  opacity: 0.9;
`;

const BannerGo = styled.span`
  position: relative;
  z-index: 1;
  align-self: flex-end;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary600};
  box-shadow: 0 2px 8px rgba(107, 70, 193, 0.12);
  transition: transform 0.2s ease;

  ${Banner}:hover & {
    transform: scale(0.95);
  }
`;

/* ── 바로가기 4칸 ──────────────────────────────────────── */
const QuickGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const QuickAction = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.warmGray};
`;

const QuickIcon = styled.span`
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary600};
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.06);
  transition: background 0.2s ease;

  ${QuickAction}:hover & {
    background: ${({ theme }) => theme.colors.primary50};
  }
`;

const QuickLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  white-space: nowrap;
`;

/* ── 섹션 머리 ─────────────────────────────────────────── */
const SectionHead = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SectionMore = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.primary600};
`;

/** 대표 카드 하나 + 보조 카드들이 세로로 쌓이는 벤토 배치 */
const SpotStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.charcoal};
  margin: 0;
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

  color: ${({ theme }) => theme.colors.charcoal};
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
  color: ${({ theme }) => theme.colors.charcoal};
`;

const ScrollSentinel = styled.div`
  height: 1px;
`;


const MeditationMainPage = () => {
  const navigate = useNavigate();
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
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [placeholder, setPlaceholder] = useState("");

  const places = useCatalogStore((s) => s.places);
  const banners = useCatalogStore((s) => s.banners);
  const popularPlaces = useMemo(() => computePopularPlaces(places, 3), [places]);
  /** 배너는 DB의 진행 중인 프로그램에서 뽑습니다. */
  const featuredPrograms = useMemo(() => collectFeaturedPrograms(places, 4), [places]);
  /** 벤토 배치: 맨 앞 한 곳은 큰 대표 카드, 나머지는 보조 카드로 쌓습니다. */
  const [featuredPlace, ...restPlaces] = popularPlaces;
  const availableTags = useMemo(() => collectAvailableTags(places), [places]);

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

  /**
   * 바로가기 4칸 — 여기서 유형을 고른 뒤 지역 선택 화면으로 넘깁니다.
   * 고른 유형을 함께 실어 보내면 지역 팝오버가 유형을 다시 묻지 않고
   * 지역명과 "이동"만 보여 줍니다.
   */
  const handleQuickJump = (
    entry: RegionEntryKind,
    nextCategory: Category,
    venueKind?: "명상지" | "명상센터"
  ) => {
    setCategory(nextCategory);
    setVenueKind(venueKind);
    setRegion("all");
    const state: RegionMapEntryState = { entry, category: nextCategory, venueKind };
    navigate("/meditation/map", { state });
  };

  return (
    <Page>
      <StickyTop>
        <Brand to="/">
          <BrandLogo src={logoImg} alt="" />
          <BrandName>명상 웰니스 지도</BrandName>
        </Brand>
        <BellButton to="/notice" aria-label="공지사항">
          <Icon name="notifications" />
        </BellButton>
      </StickyTop>

      <Stack>
        {!isSearching && (
          <BannerRail aria-label="추천 배너">
            {featuredPrograms.map(({ placeId, placeName, program, caption }, index) => (
              <Banner
                key={`${placeId}-${program.id}`}
                $tone={index % 2 === 0 ? "a" : "b"}
                to={`/meditation/place/${placeId}`}
              >
                <BannerBody>
                  <BannerBadge>
                    {program.kind === "event" ? "진행 중인 행사" : "추천 프로그램"}
                  </BannerBadge>
                  <BannerTitle>{program.title}</BannerTitle>
                  <BannerDesc>{caption || placeName}</BannerDesc>
                </BannerBody>
                <BannerGo>
                  <Icon name="arrow_forward" size={18} />
                </BannerGo>
              </Banner>
            ))}
            {/* 안내 배너는 콘텐츠가 아니라 앱 기능이라 항상 마지막에 둡니다. */}
            <Banner
              $tone={featuredPrograms.length % 2 === 0 ? "a" : "b"}
              to="/service-info"
            >
              <BannerBody>
                <BannerBadge>초보자 가이드</BannerBadge>
                <BannerTitle>명상이 처음이신가요?</BannerTitle>
                <BannerDesc>나에게 맞는 명상법 찾기</BannerDesc>
              </BannerBody>
              <BannerGo>
                <Icon name="arrow_forward" size={18} />
              </BannerGo>
            </Banner>
          </BannerRail>
        )}

        <SearchArea>
          <KeywordSearchBar
            layout="main"
            value={filters.keyword}
            onChange={setKeyword}
            placeholder={placeholder ? `${placeholder} 검색...` : "명상 스팟 검색..."}
          />
        </SearchArea>

        {!isSearching ? (
          <MainContent>
            <QuickGrid aria-label="바로가기">
              <QuickAction type="button" onClick={() => handleQuickJump("place", "all")}>
                <QuickIcon>
                  <Icon name="forest" filled size={24} />
                </QuickIcon>
                <QuickLabel>명상 스팟</QuickLabel>
              </QuickAction>
              <QuickAction
                type="button"
                onClick={() => handleQuickJump("center", "all", "명상센터")}
              >
                <QuickIcon>
                  <Icon name="home_work" filled size={24} />
                </QuickIcon>
                <QuickLabel>센터</QuickLabel>
              </QuickAction>
              <QuickAction type="button" onClick={() => handleQuickJump("expert", "all")}>
                <QuickIcon>
                  <Icon name="psychology" filled size={24} />
                </QuickIcon>
                <QuickLabel>전문가</QuickLabel>
              </QuickAction>
              <QuickAction
                type="button"
                onClick={() => handleQuickJump("place", "템플스테이")}
              >
                <QuickIcon>
                  <Icon name="temple_buddhist" filled size={24} />
                </QuickIcon>
                <QuickLabel>템플스테이</QuickLabel>
              </QuickAction>
            </QuickGrid>

            <PromoBannerRail promos={banners} aria-label="이벤트 배너" />

            <section>
              <SectionHead>
                <SectionTitle>오늘의 마인드풀 스팟</SectionTitle>
                <SectionMore type="button" onClick={() => handleQuickJump("place", "all")}>
                  모두 보기
                </SectionMore>
              </SectionHead>
              {places.length === 0 ? (
                <Empty style={{ marginTop: 12, textAlign: "center", padding: "24px 8px" }}>
                  등록된 공간이 없습니다.
                </Empty>
              ) : (
                <SpotStack>
                  {featuredPlace && <FeaturedPlaceCard place={featuredPlace} />}
                  {restPlaces.map((place) => (
                    <PopularPlaceCard key={place.id} place={place} />
                  ))}
                </SpotStack>
              )}
            </section>
          </MainContent>
        ) : (
          <SearchResults>
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
            <SearchContentWrapper>
              <SearchContent>
                <SearchResultHeader>
                  <SearchResultTitle>총 {sortedPlaces.length}곳의 명상센터</SearchResultTitle>
                  <FilterIconButton type="button" onClick={() => setFilterOpen(true)} aria-label="필터">
                    <Icon name="tune" size={22} />
                  </FilterIconButton>
                </SearchResultHeader>
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
              </SearchContent>
            </SearchContentWrapper>
          </SearchResults>
        )}
      </Stack>

      {isSearching && isFilterOpen && (
        <DrawerOverlay>
          <DrawerBackdrop onClick={() => setFilterOpen(false)} />
          <DrawerPanel>
            <DrawerHeader>
              <h3 style={{ margin: 0, fontSize: "1.2rem" }}>필터</h3>
              <DrawerClose type="button" onClick={() => setFilterOpen(false)} aria-label="필터 닫기">
                <Icon name="close" size={18} />
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
      )}
    </Page>
  );
};

export default MeditationMainPage;
