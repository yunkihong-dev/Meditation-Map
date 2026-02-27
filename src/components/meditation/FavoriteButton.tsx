import React from "react";
import styled from "styled-components";
import { useFavoritesStore } from "@/stores/favoritesStore";

const Button = styled.button<{ $active?: boolean }>`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme, $active }) =>
    $active ? "#e11d48" : theme.colors.text900};
  transition: color 0.35s ease;

  &:hover {
    color: #e11d48;
    background: transparent;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const HeartWrap = styled.span`
  position: relative;
  display: inline-flex;
  width: 19px;
  height: 19px;
`;

const HeartOutline = styled.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
`;

const HeartFill = styled.svg<{ $active?: boolean }>`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: currentColor;
  stroke: none;
  pointer-events: none;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.35s ease;
`;

interface FavoriteButtonProps {
  placeId: string;
}

const HEART_PATH =
  "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z";

const FavoriteButton = ({ placeId }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const active = isFavorite(placeId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(placeId);
  };

  return (
    <Button
      type="button"
      $active={active}
      onClick={handleClick}
      aria-label={active ? "찜 해제" : "찜하기"}
    >
      <HeartWrap>
        <HeartOutline viewBox="0 0 24 24">
          <path d={HEART_PATH} />
        </HeartOutline>
        <HeartFill viewBox="0 0 24 24" $active={active}>
          <path d={HEART_PATH} />
        </HeartFill>
      </HeartWrap>
    </Button>
  );
};

export default FavoriteButton;
