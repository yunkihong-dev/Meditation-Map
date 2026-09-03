import React from "react";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { useFavoritesStore } from "@/stores/favoritesStore";

/**
 * 시안의 favorite 아이콘. 가변 폰트의 FILL 축을 0↔1 로 옮기며 채워지므로,
 * 예전처럼 선/채움 SVG 두 장을 겹쳐 두지 않아도 같은 전환이 납니다.
 */
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
  color: ${({ theme, $active }) => ($active ? theme.colors.error : "inherit")};
  transition: color 0.35s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.error};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

interface FavoriteButtonProps {
  placeId: string;
}

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
      <Icon name="favorite" filled={active} size={20} />
    </Button>
  );
};

export default FavoriteButton;
