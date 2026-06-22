import { Navigate, Outlet } from "react-router-dom";
import { useAdminAuthStore } from "@/stores/adminAuthStore";
import { useEffect } from "react";

export default function ProtectedAdminRoute() {
  const bootstrap = useAdminAuthStore((s) => s.bootstrap);
  const ready = useAdminAuthStore((s) => s.ready);
  const authenticated = useAdminAuthStore((s) => s.authenticated);

  useEffect(() => {
    void bootstrap();
  }, [bootstrap]);

  if (!ready) return null;
  if (!authenticated) return <Navigate to="/admin/login" replace />;
  return <Outlet />;
}
