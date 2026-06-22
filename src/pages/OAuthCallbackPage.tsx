import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { typography } from "@/styles/typography";
import { useAuthStore } from "@/stores/authStore";
import { useFavoritesStore } from "@/stores/favoritesStore";

const Wrap = styled.div`
  min-height: 40vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  ${typography.body1};
  color: ${({ theme }) => theme.colors.text700};
`;

const OAuthCallbackPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const err = params.get("error");

    if (err) {
      navigate("/profile", { replace: true });
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

    void useAuthStore
      .getState()
      .bootstrapAuth()
      .then(() => useFavoritesStore.getState().pullFromServer())
      .finally(() => navigate("/profile", { replace: true }));
  }, [navigate, params]);

  return <Wrap>로그인 처리 중…</Wrap>;
};

export default OAuthCallbackPage;
