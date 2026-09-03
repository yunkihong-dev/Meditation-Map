import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import type { MeditationPlace } from "@/services/meditation/types";
import { listPlaceThumbnailUrl } from "@/services/meditation/listImageUrl";
import { getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "./FavoriteButton";

/**
 * 시안 메인 "오늘의 마인드풀 스팟"의 대표 카드.
 * 사진을 꽉 채우고 아래쪽에 어두운 그러데이션을 깔아 그 위에 글을 얹습니다.
 */
const Card = styled.article`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const Photo = styled.div`
  position: relative;
  width: 100%;
  height: 256px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceVariant};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0) 60%);
  }
`;

const FavoriteSlot = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: ${({ theme }) => theme.colors.white};
`;

const Caption = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 24px;
  z-index: 2;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;

  span {
    padding: 4px 12px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: rgba(234, 217, 254, 0.9);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    color: ${({ theme }) => theme.colors.onSecondaryContainer};
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Title = styled.h3`
  margin: 0 0 6px;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.white};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);

  .material-symbols-outlined {
    color: #facc15;
  }
`;

const Dot = styled.span`
  opacity: 0.7;
`;

interface FeaturedPlaceCardProps {
  place: MeditationPlace;
}

const FeaturedPlaceCard = ({ place }: FeaturedPlaceCardProps) => {
  const region = getRegionById(place.regionId);

  return (
    <Card>
      <FavoriteSlot>
        <FavoriteButton placeId={place.id} />
      </FavoriteSlot>
      <CardLink to={`/meditation/place/${place.id}`}>
        <Photo>
          <img
            src={listPlaceThumbnailUrl(place.thumbnailUrl)}
            alt={`${place.name} 대표 사진`}
            loading="lazy"
            decoding="async"
            sizes="100vw"
          />
        </Photo>
        <Caption>
          {place.hashtags.length > 0 && (
            <Tags>
              {place.hashtags.slice(0, 2).map((tag) => (
                <span key={tag}>#{tag.replace(/^#/, "")}</span>
              ))}
            </Tags>
          )}
          <Title>{place.name}</Title>
          <Meta>
            <Icon name="star" filled size={16} />
            <span>
              {typeof place.rating === "number" ? place.rating.toFixed(1) : "–"}
              {typeof place.reviewCount === "number" ? ` (${place.reviewCount})` : ""}
            </span>
            <Dot>•</Dot>
            <span>{region?.name ?? place.regionId}</span>
          </Meta>
        </Caption>
      </CardLink>
    </Card>
  );
};

export default FeaturedPlaceCard;
