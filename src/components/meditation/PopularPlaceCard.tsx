import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import type { MeditationPlace } from "@/services/meditation/types";
import { listPlaceThumbnailUrl } from "@/services/meditation/listImageUrl";
import { getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "./FavoriteButton";

/**
 * 시안 메인의 보조 카드 — 왼쪽 정사각 썸네일, 오른쪽에 분류·이름·별점.
 * 큰 대표 카드(FeaturedPlaceCard) 아래에 세로로 쌓입니다.
 */
const CardWrapper = styled.div`
  position: relative;
`;

const Card = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.hairline};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.card};
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Thumb = styled.div`
  width: 96px;
  height: 96px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surfaceVariant};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
`;

const Kicker = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.primary600};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Title = styled.h3`
  margin: 0 0 6px;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.charcoal};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.warmGray};

  .material-symbols-outlined {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

const FavoriteWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  z-index: 2;
`;

interface PopularPlaceCardProps {
  place: MeditationPlace;
}

const PopularPlaceCard = ({ place }: PopularPlaceCardProps) => {
  const region = getRegionById(place.regionId);
  const kicker = place.hashtags?.[0] ?? place.venueKind ?? region?.name ?? "명상";

  return (
    <CardWrapper>
      <Card to={`/meditation/place/${place.id}`}>
        <Thumb>
          <img
            src={listPlaceThumbnailUrl(place.thumbnailUrl)}
            alt={`${place.name} 썸네일`}
            loading="lazy"
            decoding="async"
            sizes="96px"
          />
        </Thumb>
        <Body>
          <Kicker>{kicker}</Kicker>
          <Title>{place.name}</Title>
          <Rating>
            <Icon name="star" filled size={14} />
            {typeof place.rating === "number" ? place.rating.toFixed(1) : "–"}
            <span>· {region?.name ?? place.regionId}</span>
          </Rating>
        </Body>
      </Card>
      <FavoriteWrap>
        <FavoriteButton placeId={place.id} />
      </FavoriteWrap>
    </CardWrapper>
  );
};

export default PopularPlaceCard;
