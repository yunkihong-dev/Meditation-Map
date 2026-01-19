import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: linear-gradient(180deg, #ffffff 0%, ${({ theme }) => theme.colors.bg50} 100%);
  align-items: center;
  padding: 0 20px;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  z-index: 50;
  display: flex;
  justify-content: space-between;
  position: fixed;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  outline: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radii.pill};
  }
`;

const Hamburger = styled.span`
  width: 22px;
  height: 2px;
  background: ${({ theme }) => theme.colors.text900};
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text900};
  }

  &::before {
    top: -6px;
  }

  &::after {
    top: 6px;
  }
`;

const Logo = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primary700};
  transition: transform 0.2s ease;
  z-index: 1;

  &:hover {
    transform: translate(-50%, -50%) translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

const SearchNavButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 4px;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

interface AppHeaderProps {
  onOpenSidebar: () => void;
}

const AppHeader = ({ onOpenSidebar }: AppHeaderProps) => {
  const navigate = useNavigate();
  const handleSearchNavigate = () => {
    navigate("/meditation/search");
  };

  return (
    <Header>
      <IconButton type="button" onClick={onOpenSidebar} aria-label="사이드바 열기">
        <Hamburger />
      </IconButton>

      <Logo to="/">힐링명상</Logo>

      <SearchNavButton type="button" aria-label="검색" onClick={handleSearchNavigate}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.65" y1="16.65" x2="21" y2="21" />
        </svg>
      </SearchNavButton>
    </Header>
  );
};

export default AppHeader;
