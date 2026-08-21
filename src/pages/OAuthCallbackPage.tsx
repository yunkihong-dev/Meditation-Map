import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { typography } from "@/styles/typography";
import { useAuthStore } from "@/stores/authStore";
import { useFavoritesStore } from "@/stores/favoritesStore";
import { dismissLanding } from "@/stores/landingPreference";

const Wrap = styled.div`
  min-height: 40vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  ${typography.body1};
  color: ${({ theme }) => theme.colors.text700};
`;

const ErrorBox = styled.div`
  max-width: 26rem;
  text-align: center;
  display: grid;
  gap: 1rem;
`;

const Title = styled.h1`
  ${typography.title};
  color: ${({ theme }) => theme.colors.text900};
`;

const Detail = styled.p`
  ${typography.caption};
  color: ${({ theme }) => theme.colors.warmGray};
  word-break: break-all;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

const Button = styled.button`
  ${typography.body2};
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  cursor: pointer;
`;

const OAuthCallbackPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [failure, setFailure] = useState<{ code: string; detail: string } | null>(null);

  useEffect(() => {
    const err = params.get("error");

    // 실패는 조용히 넘기지 않는다. 어디로 튕겼는지 모른 채 처음 화면으로
    // 돌아가면 사용자도, 나중에 원인을 찾는 사람도 알 방법이 없다.
    if (err) {
      setFailure({ code: err, detail: params.get("error_detail") ?? "" });
      console.error("[oauth] 로그인 실패", err, params.get("error_detail"));
      return;
    }

    const oauthSignupTicket = params.get("oauthSignupTicket");
    if (oauthSignupTicket) {
      const signupEmail = params.get("email") ?? "";
      const qs = new URLSearchParams({
        signupOAuth: "1",
        oauthSignupTicket,
        email: signupEmail,
      });
      const picture = params.get("picture");
      if (picture) qs.set("picture", picture);
      navigate(`/profile?${qs.toString()}`, { replace: true });
      return;
    }

    // 소셜 로그인까지 마쳤으면 이 브라우저에서 랜딩을 다시 띄우지 않습니다.
    dismissLanding();
    void useAuthStore
      .getState()
      .bootstrapAuth()
      .then(() => useFavoritesStore.getState().pullFromServer())
      .finally(() => navigate("/profile", { replace: true }));
  }, [navigate, params]);

  if (failure) {
    return (
      <Wrap>
        <ErrorBox>
          <Title>로그인하지 못했어요</Title>
          <p>소셜 로그인 처리 중 문제가 생겼습니다. 다시 시도해 주세요.</p>
          {failure.detail && <Detail>{failure.detail}</Detail>}
          <Actions>
            <Button onClick={() => navigate("/welcome", { replace: true })}>
              다시 로그인
            </Button>
            <Button onClick={() => navigate("/", { replace: true })}>홈으로</Button>
          </Actions>
        </ErrorBox>
      </Wrap>
    );
  }

  return <Wrap>로그인 처리 중…</Wrap>;
};

export default OAuthCallbackPage;
