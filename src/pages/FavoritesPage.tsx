import { useMemo, useState } from "react";
import styled from "styled-components";
import PlaceListItem from "@/components/meditation/PlaceListItem";
import { useCatalogStore } from "@/stores/catalogStore";
import { useFavoritesStore } from "@/stores/favoritesStore";
import { applyFilters } from "@/services/meditation/meditationService";
import type { Category } from "@/services/meditation/types";
import { typography } from "@/styles/typography";

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "전체", value: "all" },
  { label: "템플스테이", value: "템플스테이" },
  { label: "명상센터", value: "명상센터" },
  { label: "프리랜서", value: "프리랜서(공간없음)" },
  { label: "힐링명상", value: "힐링명상" },
  { label: "기타", value: "기타" },
];

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 4px 24px;
  color: ${({ theme }) => theme.colors.text900};
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.primary600};
`;

const FilterBar = styled.div`
  display: flex;
  gap: 8px;
  margin: 0 0 32px;
  padding: 4px 0 8px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterChip = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  padding: 10px 18px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary100 : theme.colors.surfaceContainer};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary900 : theme.colors.warmGray};
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadow.soft : "none")};
  ${typography.body2};
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme, $active }) =>
      $active ? theme.colors.primary100 : theme.colors.secondaryFixed};
  }
`;

const Count = styled.span`
  margin-left: 4px;
  opacity: 0.72;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EmptyMessage = styled.p`
  ${typography.body2};
  color: ${({ theme }) => theme.colors.warmGray};
  padding: 56px 24px;
  text-align: center;
  margin: 0;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

const FavoritesPage = () => {
  const [category, setCategory] = useState<Category>("all");
  const { favorites } = useFavoritesStore();
  const placesAll = useCatalogStore((s) => s.places);
  const places = useMemo(
    () =>
      favorites
        .map((id) => placesAll.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => p != null),
    [favorites, placesAll]
  );
  const filteredPlaces = useMemo(
    () =>
      applyFilters(places, {
        category,
        keyword: "",
        tags: [],
        sortBy: "recommend",
      }),
    [category, places]
  );
  const categoryCounts = useMemo(
    () =>
      new Map(
        CATEGORIES.map(({ value }) => [
          value,
          value === "all"
            ? places.length
            : applyFilters(places, {
                category: value,
                keyword: "",
                tags: [],
                sortBy: "recommend",
              }).length,
        ])
      ),
    [places]
  );

  return (
    <Page>
      <PageTitle>나의 찜 목록</PageTitle>
      <FilterBar aria-label="찜 목록 카테고리">
        {CATEGORIES.map((item) => (
          <FilterChip
            key={item.value}
            type="button"
            $active={category === item.value}
            onClick={() => setCategory(item.value)}
          >
            {item.label}
            <Count>{categoryCounts.get(item.value) ?? 0}</Count>
          </FilterChip>
        ))}
      </FilterBar>
      {filteredPlaces.length === 0 ? (
        <EmptyMessage>
          {places.length === 0
            ? "찜한 명상아이템이 없어요. 리스트에서 하트를 눌러 찜해보세요."
            : "이 카테고리에 찜한 장소가 아직 없어요."}
        </EmptyMessage>
      ) : (
        <List>
          {filteredPlaces.map((place) => (
            <li key={place.id}>
              <PlaceListItem place={place} />
            </li>
          ))}
        </List>
      )}
    </Page>
  );
};

export default FavoritesPage;
