import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import type { MeditationPlace } from "@/services/meditation/types";
import { getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "./FavoriteButton";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(75, 0, 130, 0.15);
  }
`;

const CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Body = styled.div`
  padding: 16px 18px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.text900};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.dustyGold};
`;

const Location = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
  font-size: 0.85rem;

  span {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary50};
    color: ${({ theme }) => theme.colors.primary700};
    padding: 4px 10px;
    border-radius: ${({ theme }) => theme.radii.pill};
  }
`;

const Actions = styled.div`
  position: relative;
`;

const FavoriteWrap = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 6px;
`;

const BookButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
  }
`;

interface PlaceListItemProps {
  place: MeditationPlace;
}

const PlaceListItem = ({ place }: PlaceListItemProps) => {
  const navigate = useNavigate();
  const region = getRegionById(place.regionId);
  const rating = place.rating ?? 4.5;
  const reviewCount = place.reviewCount ?? 80;

  const handleBook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/meditation/place/${place.id}`);
  };

  return (
    <Card>
      <CardLink to={`/meditation/place/${place.id}`}>
        <Thumbnail>
          <img src={place.thumbnailUrl} alt={`${place.name} 썸네일`} />
        </Thumbnail>
        <Body>
          <Title>{place.name}</Title>
          <Meta>
            <Rating>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {rating.toFixed(1)} ({reviewCount} 리뷰)
            </Rating>
            <Location>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {region?.name ?? place.regionId}
            </Location>
          </Meta>
          <Tags>
            {place.hashtags.slice(0, 4).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </Tags>
          <Actions>
            <FavoriteWrap>
              <FavoriteButton placeId={place.id} />
            </FavoriteWrap>
            <BookButton type="button" onClick={handleBook}>
              예약하기
            </BookButton>
          </Actions>
        </Body>
      </CardLink>
    </Card>
  );
};

export default PlaceListItem;
