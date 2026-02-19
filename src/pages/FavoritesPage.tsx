import styled from "styled-components";
import PlaceListItem from "@/components/meditation/PlaceListItem";
import { getPlaceById } from "@/services/meditation/meditationService";
import { useFavoritesStore } from "@/stores/favoritesStore";

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
  const { favorites } = useFavoritesStore();
  const places = favorites
    .map((id) => getPlaceById(id))
    .filter((p): p is NonNullable<typeof p> => p != null);

  return (
    <Page>
      <PageTitle>찜 목록</PageTitle>
      {places.length === 0 ? (
        <EmptyMessage>찜한 명상 장소가 없어요. 리스트에서 하트를 눌러 찜해보세요.</EmptyMessage>
      ) : (
        <List>
          {places.map((place) => (
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
