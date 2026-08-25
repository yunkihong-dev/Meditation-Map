import { useLocation, useNavigate } from "react-router-dom";
import LiquidGlassTabBar, {
  icons,
  type LiquidGlassTab,
} from "@/components/layout/liquid-glass-tabbar";

/** 탭 하나가 곧 경로 하나입니다. */
const TABS: (LiquidGlassTab & { to: string })[] = [
  { key: "home", label: "홈", d: icons.home, to: "/" },
  { key: "map", label: "지도", d: icons.map, to: "/meditation/map" },
  { key: "saved", label: "찜", d: icons.heart, to: "/favorites" },
  { key: "me", label: "마이", d: icons.user, to: "/profile" },
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
