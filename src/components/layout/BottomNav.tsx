import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: ${({ theme }) => theme.colors.warmCream};
  border-top: 1px solid ${({ theme }) => theme.colors.primary200};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  box-shadow: 0 -2px 12px rgba(75, 0, 130, 0.06);
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text700};
  font-size: 0.75rem;
  transition: color 0.2s ease;

  &.active {
    color: ${({ theme }) => theme.colors.primary600};
    font-weight: 600;
  }

  &.active svg {
    stroke: ${({ theme }) => theme.colors.primary600};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const NavItemMap = styled(Link)<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  text-decoration: none;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.text700)};
  font-size: 0.75rem;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  transition: color 0.2s ease;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme, $active }) => ($active ? theme.colors.primary600 : "currentColor")};
  }
`;

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BlogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BottomNav = () => {
  const { pathname } = useLocation();
  const isBlogActive = pathname.startsWith("/meditation/map") || pathname.startsWith("/meditation/region") || pathname.startsWith("/blog");

  return (
    <Nav role="navigation" aria-label="하단 메뉴">
      <NavItem to="/" end>
        <HomeIcon />
        <span>홈</span>
      </NavItem>
      <NavItemMap to="/meditation/map" $active={isBlogActive}>
        <BlogIcon />
        <span>지도</span>
      </NavItemMap>
      <NavItem to="/favorites">
        <HeartIcon />
        <span>찜</span>
      </NavItem>
      <NavItem to="/profile">
        <ProfileIcon />
        <span>마이</span>
      </NavItem>
    </Nav>
  );
};

export default BottomNav;
