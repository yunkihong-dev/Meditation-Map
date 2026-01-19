import { Link } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  z-index: 60;
`;

const Backdrop = styled.div<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(53, 24, 96, 0.32);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 0.25s ease;
`;

const Drawer = styled.aside<{ $open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: min(80vw, 280px);
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 20px 16px;
  transform: translateX(${({ $open }) => ($open ? "0" : "-100%")});
  transition: transform 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const CloseButton = styled.button<{ $open: boolean }>`
  position: absolute;
  top: 16px;
  right: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.bg100};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: transform 0.2s ease;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
    stroke: ${({ theme }) => theme.colors.text900};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    transition: transform 0.25s ease;
    transform: rotate(${({ $open }) => ($open ? "0deg" : "90deg")});
  }

  &:hover svg,
  &:focus-visible svg {
    transform: rotate(90deg);
  }
`;

const Menu = styled.nav`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    color: ${({ theme }) => theme.colors.text900};
    font-size: 1.4rem;
  }
`;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Overlay $open={isOpen}>
      <Backdrop $open={isOpen} onClick={onClose} />
      <Drawer $open={isOpen}>
        <CloseButton
          $open={isOpen}
          type="button"
          onClick={onClose}
          aria-label="사이드바 닫기"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </CloseButton>
        <Menu>
          <Link to="/" onClick={onClose}>
            힐링명상 홈
          </Link>
          <Link to="/meditation" onClick={onClose}>
            지역별 명상지
          </Link>
          <Link to="/meditation/search" onClick={onClose}>
            명상지 검색
          </Link>
          <Link to="/notice" onClick={onClose}>
            공지사항
          </Link>
          <Link to="/inquiry" onClick={onClose}>
            1:1문의
          </Link>
          <Link to="/service-info" onClick={onClose}>
            서비스 소개
          </Link>
        </Menu>
      </Drawer>
    </Overlay>
  );
};

export default Sidebar;
