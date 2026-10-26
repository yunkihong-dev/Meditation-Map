import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import {
  AdminContent,
  AdminMain,
  AdminNavLink,
  AdminShell,
  AdminSidebar,
  AdminSidebarHead,
  AdminTopBar,
  AdminButton,
} from "./adminStyles";
import { useAdminAuthStore } from "@/stores/adminAuthStore";
import { useAuthStore } from "@/stores/authStore";
import { useAdminNotificationStore } from "@/stores/notificationStore";
import { AdminNotificationBridge } from "@/components/notifications/NotificationBridges";
import NotificationBell from "@/components/notifications/NotificationBell";
import { badgeText } from "@/services/notifications/format";

const links = [
  { to: "/admin", label: "트래픽 현황", end: true },
  { to: "/admin/places", label: "명상지·센터" },
  { to: "/admin/experts", label: "전문가" },
  { to: "/admin/notices", label: "공지" },
  { to: "/admin/banners", label: "광고" },
  { to: "/admin/interests", label: "관심사" },
  { to: "/admin/notifications", label: "알림", badge: true },
  { to: "/admin/place-claims", label: "소유 신청" },
  { to: "/admin/broadcasts", label: "광고 발송" },
  // 대화 신고 — DC3: ADMIN·EMPLOYEE 만(DEV 는 메뉴 숨김)
  { to: "/admin/chat-reports", label: "대화 신고", roles: ["ADMIN", "EMPLOYEE"] },
];

/** 안읽은 관리자 알림 수 배지 */
function UnreadBadge() {
  const text = badgeText(useAdminNotificationStore((s) => s.unreadCount));
  if (!text) return null;
  return (
    <span
      aria-label={`읽지 않은 알림 ${text}개`}
      style={{
        marginLeft: 8,
        minWidth: 18,
        padding: "1px 6px",
        borderRadius: 999,
        background: "#dc2626",
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
      }}
    >
      {text}
    </span>
  );
}

const DESKTOP_QUERY = "(min-width: 900px)";

export default function AdminLayout() {
  // 좁은 화면에서는 서랍이 화면을 통째로 덮으므로 닫힌 채로 시작합니다.
  const [open, setOpen] = useState(
    () => typeof window === "undefined" || window.matchMedia(DESKTOP_QUERY).matches
  );
  const navigate = useNavigate();
  const adminLogout = useAdminAuthStore((s) => s.logout);
  const role = useAdminAuthStore((s) => s.role);

  const isDesktop = () =>
    typeof window === "undefined" || window.matchMedia(DESKTOP_QUERY).matches;

  const closeOnMobile = useCallback(() => {
    if (!isDesktop()) setOpen(false);
  }, []);

  // 넓은 화면으로 돌아오면 다시 펼칩니다. 좁아지면 접습니다.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent) => setOpen(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOnMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeOnMobile]);

  /**
   * 관리자와 앱은 쿠키가 따로입니다(mm_admin_access_token / mm_access_token).
   * 관리자에서 로그아웃했는데 앱에 그대로 로그인돼 있으면 나간 것처럼 보이지 않으므로
   * 양쪽을 함께 끊습니다.
   */
  const logoutBoth = () => {
    void Promise.allSettled([adminLogout(), useAuthStore.getState().logout()]).then(() =>
      navigate("/admin/login", { replace: true })
    );
  };

  return (
    <AdminShell>
      <AdminNotificationBridge />
      <AdminSidebar $open={open}>
        <AdminSidebarHead>
          <span>명상맵 Admin</span>
          <button type="button" aria-label="메뉴 닫기" onClick={() => setOpen(false)}>
            ✕
          </button>
        </AdminSidebarHead>
        <nav>
          {links.filter((l) => !("roles" in l) || (l.roles as string[]).includes(role ?? "")).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              style={{ textDecoration: "none" }}
              onClick={closeOnMobile}
            >
              {({ isActive }) => (
                <AdminNavLink as="span" $active={isActive}>
                  {l.label}
                  {"badge" in l && l.badge && <UnreadBadge />}
                </AdminNavLink>
              )}
            </NavLink>
          ))}
        </nav>
      </AdminSidebar>
      <AdminMain>
        <AdminTopBar>
          <AdminButton
            $variant="ghost"
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            메뉴
          </AdminButton>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <NotificationBell scope="admin" />
            <AdminButton $variant="ghost" type="button" onClick={() => navigate("/")}>
              앱으로
            </AdminButton>
            <AdminButton $variant="ghost" type="button" onClick={logoutBoth}>
              로그아웃
            </AdminButton>
          </div>
        </AdminTopBar>
        <AdminContent>
          <Outlet />
        </AdminContent>
      </AdminMain>
    </AdminShell>
  );
}
