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
    $active ? "#e11d48" : theme.colors.text700};
  border-radius: ${({ theme }) => theme.radii.pill};

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    color: #e11d48;
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </Button>
  );
};

export default FavoriteButton;
