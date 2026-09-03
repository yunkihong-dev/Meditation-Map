import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import type { MeditationPlace } from "@/services/meditation/types";
import { listPlaceThumbnailUrl } from "@/services/meditation/listImageUrl";
import { getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "./FavoriteButton";

/**
 * 시안(나의 찜 목록)의 카드 — 큰 모서리(24px), 보라로 옅게 물든 그림자,
 * 사진 위에 떠 있는 찜 버튼, 아래쪽 가는 선으로 나뉜 별점 줄.
 */
const Card = styled.article`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
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
  background: ${({ theme }) => theme.colors.surfaceVariant};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/** 사진 위 오른쪽 위 — 시안의 유리 원형 찜 버튼 자리입니다. */
const FavoriteSlot = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 10px rgba(107, 70, 193, 0.12);
`;

const Body = styled.div`
  padding: 20px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;

  span {
    padding: 4px 12px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.colors.secondaryContainer};
    color: ${({ theme }) => theme.colors.onSecondaryContainer};
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  span:nth-child(n + 3) {
    background: ${({ theme }) => theme.colors.surfaceContainer};
    color: ${({ theme }) => theme.colors.warmGray};
  }
`;

const Title = styled.h3`
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.warmGray};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.surfaceVariant};
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.outline};

  .material-symbols-outlined {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

const More = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary600};
`;

interface PlaceListItemProps {
  place: MeditationPlace;
}

const PlaceListItem = ({ place }: PlaceListItemProps) => {
  const region = getRegionById(place.regionId);

  return (
    <Card>
      <FavoriteSlot>
        <FavoriteButton placeId={place.id} />
      </FavoriteSlot>
      <CardLink to={`/meditation/place/${place.id}`}>
        <Thumbnail>
          <img
            src={listPlaceThumbnailUrl(place.thumbnailUrl)}
            alt={`${place.name} 썸네일`}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 961px) 220px, 100vw"
          />
        </Thumbnail>
        <Body>
          {place.hashtags.length > 0 && (
            <Tags>
              {place.hashtags.slice(0, 4).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </Tags>
          )}
          <Title>{place.name}</Title>
          <Location>
            <Icon name="location_on" size={16} />
            {region?.name ?? place.regionId}
          </Location>
          <Footer>
            <Rating>
              <Icon name="star" filled size={18} />
              {typeof place.rating === "number" ? place.rating.toFixed(1) : "–"}
            </Rating>
            <More>자세히 보기</More>
          </Footer>
        </Body>
      </CardLink>
    </Card>
  );
};

export default PlaceListItem;
