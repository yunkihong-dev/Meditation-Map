import { Outlet } from "react-router-dom";
import styled from "styled-components";
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
  /* 시안의 배경 — 맑은 표면에서 오른쪽 아래로 갈수록 아주 옅은 보라가 번집니다. */
  background:
    radial-gradient(120% 60% at 100% 100%, rgba(107, 70, 193, 0.07), transparent 60%),
    ${({ theme }) => theme.colors.surface};

  @media (min-width: 520px) {
    border-left: ${({ theme }) => theme.hairline};
    border-right: ${({ theme }) => theme.hairline};
  }
`;

/**
 * 아래 여백은 떠 있는 탭바가 차지하는 자리(--tabbar-space)에 여유를 더해 비웁니다.
 * 좌우 여백은 --content-pad 로 내보내, 화면 안에서 가장자리까지 꽉 채워야 하는
 * 요소(붙박이 검색줄, 가로 스크롤 배너)가 이만큼 되돌려 나갈 수 있게 합니다.
 */
const Content = styled.main`
  --content-pad: 16px;
  padding: 0 var(--content-pad) calc(var(--tabbar-space) + 20px);

  @media (max-width: 768px) {
    --content-pad: 12px;
  }
`;

const Layout = () => {
  return (
    <LayoutShell>
      <Content>
        <Outlet />
      </Content>
      <BottomNav />
    </LayoutShell>
  );
};

export default Layout;
