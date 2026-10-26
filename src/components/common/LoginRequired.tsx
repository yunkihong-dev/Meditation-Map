import { useNavigate } from "react-router-dom";
import { Card, CardTitle, Muted, PrimaryButton } from "@/components/common/memberPageStyles";
import { useAuthStore } from "@/stores/authStore";

/** 로그인한 회원(비스태프)인지. 스태프 토큰은 /me/** 에서 인증되지 않습니다(계약 0절). */
export function useMemberSession() {
  const authReady = useAuthStore((s) => s.authReady);
  const isAuthed = useAuthStore((s) => !!s.accessToken);
  const isStaff = useAuthStore((s) => s.isStaff());
  return { authReady, isMember: isAuthed && !isStaff, isStaff };
}

export default function LoginRequired({ message }: { message?: string }) {
  const navigate = useNavigate();
  const isStaff = useAuthStore((s) => s.isStaff());
  return (
    <Card>
      <CardTitle>{isStaff ? "회원 계정으로 이용해 주세요" : "로그인이 필요해요"}</CardTitle>
      <Muted>
        {isStaff
          ? "관리자 계정은 이 화면을 쓸 수 없어요. 일반 회원 계정으로 로그인해 주세요."
          : (message ?? "로그인하면 이 기능을 쓸 수 있어요.")}
      </Muted>
      <div style={{ marginTop: 14 }}>
        <PrimaryButton type="button" onClick={() => navigate("/profile")} style={{ width: "100%" }}>
          로그인하러 가기
        </PrimaryButton>
      </div>
    </Card>
  );
}
