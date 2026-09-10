import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import type { MeditationPlace } from "@/services/meditation/types";
import { listPlaceThumbnailUrl } from "@/services/meditation/listImageUrl";
import { getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "./FavoriteButton";

/**
 * 목록 카드. 시트 안에서 여러 장이 이어 보여야 하는 자리라 한 장을 낮게 유지합니다.
 * 이름 · 지역 · 태그 세 줄이면 충분하고, 별점·"자세히 보기" 같은 줄을 더 얹으면
 * 사진만 큰 카드가 되어 한 화면에 한 곳 반밖에 안 들어옵니다.
 */
const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.card};
  border: ${({ theme }) => theme.hairline};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
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
  height: 140px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceVariant};

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
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.warmGray};
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
  flex: 1;
  min-width: 0;
  font-size: 1.2rem;

  span {
    background: ${({ theme }) => theme.colors.secondaryContainer};
    color: ${({ theme }) => theme.colors.onSecondaryContainer};
    padding: 4px 10px;
    border-radius: ${({ theme }) => theme.radii.pill};
  }
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FavoriteSlot = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

interface PlaceListItemProps {
  place: MeditationPlace;
}

const PlaceListItem = ({ place }: PlaceListItemProps) => {
  const region = getRegionById(place.regionId);

  return (
    <Card>
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
          <Title>{place.name}</Title>
          <Meta>
            <Location>
              <Icon name="location_on" size={16} />
              {region?.name ?? place.regionId}
            </Location>
          </Meta>
          <TagRow>
            <Tags>
              {place.hashtags.slice(0, 4).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </Tags>
            <FavoriteSlot>
              <FavoriteButton placeId={place.id} />
            </FavoriteSlot>
          </TagRow>
        </Body>
      </CardLink>
    </Card>
  );
};

export default PlaceListItem;
