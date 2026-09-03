import { useLocation, useNavigate } from "react-router-dom";
import LiquidGlassTabBar, {
  type LiquidGlassTab,
} from "@/components/layout/liquid-glass-tabbar";

/** 탭 하나가 곧 경로 하나입니다. 아이콘 이름은 시안(Material Symbols) 그대로입니다. */
const TABS: (LiquidGlassTab & { to: string })[] = [
  { key: "home", label: "홈", icon: "home", to: "/" },
  // 행정구역을 먼저 고르게 하지 않고 전국 지도로 바로 들어갑니다.
  // (지역을 골라 들어가는 길은 홈 바로가기 → /meditation/map 에 그대로 있습니다.)
  { key: "map", label: "지도", icon: "map", to: "/meditation/region/all" },
  { key: "saved", label: "찜", icon: "favorite", to: "/favorites" },
  { key: "me", label: "마이", icon: "person", to: "/profile" },
];

/** 지도 탭은 지역·블로그 화면에서도 켜져 있어야 합니다. */
function activeKey(pathname: string): string {
  if (
    pathname.startsWith("/meditation/map") ||
    pathname.startsWith("/meditation/region") ||
    pathname.startsWith("/blog")
  ) {
    return "map";
  }
  if (pathname.startsWith("/favorites")) return "saved";
  if (pathname.startsWith("/profile")) return "me";
  return "home";
}

const BottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <LiquidGlassTabBar
      tabs={TABS}
      /*
       * 시안의 하단바는 bg-black/60 + backdrop-blur-xl.
       * slider 는 "쉴 때 인디케이터 진하기" 로, 0 이면 완전히 투명해서
       * 지금 어느 탭인지 아이콘 채움으로만 알 수 있습니다. 바가 어두워진 뒤로는
       * 그것만으로 잘 안 보여서, 현재 탭 자리를 한 겹 더 어둡게 눌러 둡니다.
       * rim 은 그 눌린 자리의 테두리 반사 — 경계가 드러나게 조금 올렸습니다.
       */
      glass={{ darkness: 60, blur: 24, slider: 26, rim: 55 }}
      value={activeKey(pathname)}
      onChange={(key) => {
        const tab = TABS.find((t) => t.key === key);
        if (tab) navigate(tab.to);
      }}
      aria-label="하단 메뉴"
      className="app-tabbar"
    />
  );
};

export default BottomNav;
