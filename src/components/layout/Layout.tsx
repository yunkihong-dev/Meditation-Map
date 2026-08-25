import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "@/components/layout/AppHeader";
import BottomNav from "@/components/layout/BottomNav";

/**
 * 앱은 모바일 한 벌만 만듭니다. 넓은 화면에서는 늘리지 않고 가운데 기둥으로 세웁니다.
 * 화면 폭마다 다른 배치를 따로 맞추지 않아도 되고, 실제로 쓰는 곳과 같은 모양이 됩니다.
 */
const LayoutShell = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.warmCream};

  @media (min-width: 520px) {
    border-left: 1px solid ${({ theme }) => theme.colors.primary100};
    border-right: 1px solid ${({ theme }) => theme.colors.primary100};
  }
`;

/** 아래 여백은 떠 있는 탭바가 차지하는 자리(--tabbar-space)에 여유를 더해 비웁니다. */
const Content = styled.main`
  padding: 0 16px calc(var(--tabbar-space) + 20px);
  background: ${({ theme }) => theme.colors.warmCream};

  @media (max-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
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
