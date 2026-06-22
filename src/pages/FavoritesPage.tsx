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
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({ theme }) => theme.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.text900};
`;

const FilterBar = styled.div`
  display: flex;
  gap: 8px;
  margin: -8px 0 22px;
  padding: 4px 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterChip = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  padding: 9px 12px;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary600 : theme.colors.primary200};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary600 : theme.colors.white};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.text700)};
  ${typography.caption};
  cursor: pointer;
`;

const Count = styled.span`
  margin-left: 4px;
  opacity: 0.72;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EmptyMessage = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text700};
  padding: 48px 24px;
  text-align: center;
  margin: 0;
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
      <PageTitle>찜 목록</PageTitle>
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
