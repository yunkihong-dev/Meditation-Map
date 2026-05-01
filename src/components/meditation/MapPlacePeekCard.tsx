import { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import FavoriteButton from "@/components/meditation/FavoriteButton";
import { getRegionById } from "@/services/meditation/meditationService";
import type { MeditationPlace } from "@/services/meditation/types";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const backdropFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Backdrop = styled.button`
  position: fixed;
  inset: 0;
  z-index: 113;
  border: none;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.28);
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  animation: ${backdropFadeIn} 0.52s cubic-bezier(0.25, 0.85, 0.3, 1) forwards;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: -4px;
  }
`;

const CardWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 115;
  padding: 0 12px;
  /* 하단 탭(56px) 바로 위 */
  padding-bottom: calc(8px + 56px + env(safe-area-inset-bottom, 0px));
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 961px) {
    padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  }
`;

const Card = styled.div`
  pointer-events: auto;
  display: flex;
  gap: 14px;
  width: 100%;
  max-width: 440px;
  padding: 14px;
  cursor: pointer;
  text-align: left;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  box-shadow: 0 -4px 28px rgba(0, 0, 0, 0.12), 0 8px 32px rgba(75, 0, 130, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  animation: ${slideUp} 0.42s cubic-bezier(0.25, 0.8, 0.25, 1) both;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary400};
    outline-offset: 2px;
  }
`;

const Thumb = styled.div`
  flex-shrink: 0;
  width: 92px;
  height: 92px;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  padding-right: 36px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

const Title = styled.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text900};
  line-height: 1.35;
`;

const FavAbsolute = styled.div`
  position: absolute;
  top: -2px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RatingLine = styled.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text700};

  .star {
    color: #e8b923;
    margin-right: 4px;
  }
`;

const Subline = styled.div`
  font-size: 0.86rem;
  color: ${({ theme }) => theme.colors.text700};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DetailHint = styled.span`
  margin-top: auto;
  padding-top: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary600};
`;

interface MapPlacePeekCardProps {
  place: MeditationPlace;
  onClose: () => void;
  onOpenDetail: () => void;
}

const MapPlacePeekCard = ({ place, onClose, onOpenDetail }: MapPlacePeekCardProps) => {
  const region = getRegionById(place.regionId);
  const venue = place.venueKind ?? "명상지";
  const subline = [region?.name, place.hashtags[0] ?? venue].filter(Boolean).join(" · ");

  const onCardClick = useCallback(() => {
    onOpenDetail();
  }, [onOpenDetail]);

  const stop = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  const onKeyCard = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick();
    }
  };

  return (
    <>
      <Backdrop type="button" onClick={onClose} aria-label="닫기" />
      <CardWrap>
        <Card
          role="button"
          tabIndex={0}
          onClick={onCardClick}
          onKeyDown={onKeyCard}
          aria-label={`${place.name} 상세 페이지로 이동`}
        >
          <Thumb>
            <img src={place.thumbnailUrl} alt="" draggable={false} />
          </Thumb>
          <Body>
            <TitleRow>
              <Title>{place.name}</Title>
            </TitleRow>
            <FavAbsolute onClick={stop} onPointerDown={stop}>
              <FavoriteButton placeId={place.id} />
            </FavAbsolute>
            {(place.rating != null || place.reviewCount != null) && (
              <RatingLine>
                {place.rating != null && (
                  <>
                    <span className="star" aria-hidden>
                      ★
                    </span>
                    {place.rating.toFixed(1)}
                  </>
                )}
                {place.reviewCount != null && (
                  <span>
                    {place.rating != null ? " · " : ""}후기 {place.reviewCount}
                  </span>
                )}
              </RatingLine>
            )}
            <Subline>{subline}</Subline>
            <Desc>{place.shortDescription}</Desc>
            <DetailHint>탭하여 상세 보기 →</DetailHint>
          </Body>
        </Card>
      </CardWrap>
    </>
  );
};

export default MapPlacePeekCard;
