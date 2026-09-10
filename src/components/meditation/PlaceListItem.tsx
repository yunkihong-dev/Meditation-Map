import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import type { MeditationPlace } from "@/services/meditation/types";
import { listPlaceThumbnailUrl } from "@/services/meditation/listImageUrl";
import { getRegionById } from "@/services/meditation/meditationService";
import FavoriteButton from "./FavoriteButton";

/**
 * 목록 카드 — 왼쪽 사진, 오른쪽 정보.
 *
 * 시트 안에서 여러 곳을 한눈에 훑는 자리라 가로로 눕힙니다. 사진을 위에 크게 얹으면
 * 한 장이 화면 절반을 먹어 두 곳도 채 안 보였습니다.
 */
const Card = styled.article`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 14px;
  padding: 12px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
`;

const CardLink = styled(Link)`
  display: flex;
  align-items: stretch;
  gap: 14px;
  flex: 1;
  min-width: 0;
  text-decoration: none;
  color: inherit;
`;

const Thumbnail = styled.div`
  width: 96px;
  height: 96px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surfaceVariant};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  /* 찜 버튼이 오른쪽 위에 얹히므로 제목이 그 아래로 파고들지 않게 자리를 비웁니다. */
  padding-right: 32px;
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.charcoal};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 3px;
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.warmGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/** 아래줄 — 태그와 별점. 남는 높이를 밀어내 카드 바닥에 붙입니다. */
const Bottom = styled.div`
  margin-top: auto;
  padding-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;

const Tags = styled.div`
  display: flex;
  gap: 4px;
  flex: 1;
  min-width: 0;
  overflow: hidden;

  span {
    flex-shrink: 0;
    padding: 3px 9px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.colors.secondaryContainer};
    color: ${({ theme }) => theme.colors.onSecondaryContainer};
    font-size: 1.1rem;
    font-weight: 500;
    white-space: nowrap;
  }
`;

const Rating = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.warmGray};

  .material-symbols-outlined {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

const FavoriteSlot = styled.div`
  position: absolute;
  top: 8px;
  right: 6px;
  z-index: 2;
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
            sizes="96px"
          />
        </Thumbnail>
        <Body>
          <Title>{place.name}</Title>
          <Location>
            <Icon name="location_on" size={15} />
            {region?.name ?? place.regionId}
          </Location>
          <Bottom>
            <Tags>
              {place.hashtags.slice(0, 2).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </Tags>
            <Rating>
              <Icon name="star" filled size={16} />
              {typeof place.rating === "number" ? place.rating.toFixed(1) : "–"}
            </Rating>
          </Bottom>
        </Body>
      </CardLink>
      <FavoriteSlot>
        <FavoriteButton placeId={place.id} />
      </FavoriteSlot>
    </Card>
  );
};

export default PlaceListItem;
