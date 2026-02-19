import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "@/components/layout/AppHeader";
import BottomNav from "@/components/layout/BottomNav";

const LayoutShell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.warmCream};
`;

const Content = styled.main`
  padding: 0 20px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);

  @media (max-width: 768px) {
    padding: 0 12px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  }
`;

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "/meditation";

  return (
    <LayoutShell>
      {isHome && <AppHeader />}
      <Content>
        <Outlet />
      </Content>
      <BottomNav />
    </LayoutShell>
  );
};

export default Layout;
