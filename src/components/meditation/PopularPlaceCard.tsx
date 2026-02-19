import { Link } from "react-router-dom";
import styled from "styled-components";
import type { MeditationPlace } from "@/services/meditation/types";
import { getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "./FavoriteButton";

const CardWrapper = styled.div`
  flex-shrink: 0;
  width: 200px;
  position: relative;
`;

const Card = styled(Link)`
  display: block;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(75, 0, 130, 0.16);
  }
`;

const FavoriteWrap = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
`;

const Thumb = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Body = styled.div`
  padding: 12px;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dustyGold};
  margin-bottom: 4px;
`;

const Location = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary600};
  background: ${({ theme }) => theme.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.pill};
  margin-top: 6px;
`;

interface PopularPlaceCardProps {
  place: MeditationPlace;
}

const PopularPlaceCard = ({ place }: PopularPlaceCardProps) => {
  const region = getRegionById(place.regionId);
  const rating = place.rating ?? 4.5;

  return (
    <CardWrapper>
      <FavoriteWrap>
        <FavoriteButton placeId={place.id} />
      </FavoriteWrap>
      <Card to={`/meditation/place/${place.id}`}>
      <Thumb>
        <img src={place.thumbnailUrl} alt={`${place.name} 썸네일`} />
      </Thumb>
      <Body>
        <Title>{place.name}</Title>
        <RatingRow>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>{rating.toFixed(1)}</span>
        </RatingRow>
        <Location>{region?.name ?? place.regionId}</Location>
        <Tag>힐링 뉴스</Tag>
      </Body>
    </Card>
    </CardWrapper>
  );
};

export default PopularPlaceCard;
