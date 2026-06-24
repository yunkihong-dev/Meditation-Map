import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { adminLogin } from "@/services/admin/adminApi";
import { useAdminAuthStore } from "@/stores/adminAuthStore";
import { toast } from "@/stores/toastStore";
import { AdminButton, AdminCard, AdminField, AdminInput, AdminLabel } from "@/components/admin/adminStyles";

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0f0f12;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 22px;
  color: #fff;
`;

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const bootstrap = useAdminAuthStore((s) => s.bootstrap);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await adminLogin(loginId.trim(), password);
      await bootstrap();
      if (!useAdminAuthStore.getState().authenticated) {
        toast.error("스태프(ADMIN/DEV/EMPLOYEE) 계정만 접근할 수 있습니다.");
        return;
      }
      navigate("/admin", { replace: true });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "로그인에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <AdminCard style={{ width: "100%", maxWidth: 400 }}>
        <Title>Admin 로그인</Title>
        <form onSubmit={onSubmit}>
          <AdminField>
            <AdminLabel>아이디</AdminLabel>
            <AdminInput value={loginId} onChange={(e) => setLoginId(e.target.value)} autoComplete="username" required />
          </AdminField>
          <AdminField>
            <AdminLabel>비밀번호</AdminLabel>
            <AdminInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required />
          </AdminField>
          <AdminButton $variant="primary" type="submit" disabled={loading} style={{ width: "100%", marginTop: 8 }}>
            {loading ? "로그인 중…" : "로그인"}
          </AdminButton>
        </form>
      </AdminCard>
    </Page>
  );
}
