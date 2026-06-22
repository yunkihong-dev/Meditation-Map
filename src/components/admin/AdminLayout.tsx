import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AdminContent,
  AdminMain,
  AdminNavLink,
  AdminShell,
  AdminSidebar,
  AdminTopBar,
  AdminButton,
} from "./adminStyles";
import { useAdminAuthStore } from "@/stores/adminAuthStore";

const links = [
  { to: "/admin", label: "트래픽 현황", end: true },
  { to: "/admin/places", label: "명상지·센터" },
  { to: "/admin/experts", label: "전문가" },
  { to: "/admin/notices", label: "공지" },
];

export default function AdminLayout() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const logout = useAdminAuthStore((s) => s.logout);

  return (
    <AdminShell>
      <AdminSidebar $open={open}>
        <div style={{ padding: "16px", fontWeight: 700, fontSize: 15 }}>명상맵 Admin</div>
        <nav>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <AdminNavLink as="span" $active={isActive}>
                  {l.label}
                </AdminNavLink>
              )}
            </NavLink>
          ))}
        </nav>
      </AdminSidebar>
      <AdminMain>
        <AdminTopBar>
          <AdminButton $variant="ghost" type="button" onClick={() => setOpen((v) => !v)}>
            메뉴
          </AdminButton>
          <div style={{ display: "flex", gap: 8 }}>
            <AdminButton $variant="ghost" type="button" onClick={() => navigate("/")}>
              앱으로
            </AdminButton>
            <AdminButton
              $variant="ghost"
              type="button"
              onClick={() => {
                void logout().then(() => navigate("/admin/login"));
              }}
            >
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
