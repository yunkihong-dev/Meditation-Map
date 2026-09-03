import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import MeditationMainPage from "@/pages/meditation/MeditationMainPage";
import { useAuthStore } from "@/stores/authStore";
import { dismissLanding, hasDismissedLanding } from "@/stores/landingPreference";

/**
 * 세션 확인을 기다려 주는 시간.
 *
 * 로그인 여부는 GET /me 응답이 와야 알 수 있는데, 그때까지 무작정 기다리면
 * 서버가 느리거나 죽어 있을 때 첫 화면이 흰 채로 멈춥니다. 처음 온 사람일수록
 * 그 화면을 오래 보게 되는 셈이라, 짧게만 기다리고 손님으로 보고 넘어갑니다.
 */
const AUTH_GRACE_MS = 600;

/**
 * 홈("/") 진입 게이트.
 * 로그인하지 않았고 랜딩을 지나친 적도 없다면 랜딩(/welcome)을 먼저 보여줍니다.
 * 그 외에는 기존 메인 페이지를 그대로 렌더링합니다.
 */
const GuestLandingGate = () => {
  const authReady = useAuthStore((s) => s.authReady);
  const isAuthed = useAuthStore((s) => !!s.accessToken);
  const [graceOver, setGraceOver] = useState(false);

  // 로그인한 적이 있는 브라우저라면 나중에 세션이 만료돼도 랜딩을 다시 띄우지 않습니다.
  useEffect(() => {
    if (authReady && isAuthed) dismissLanding();
  }, [authReady, isAuthed]);

  useEffect(() => {
    if (authReady) return;
    const id = setTimeout(() => setGraceOver(true), AUTH_GRACE_MS);
    return () => clearTimeout(id);
  }, [authReady]);

  /*
   * 세션 확인 전에는 잠깐만 보류합니다. 로그인 사용자가 랜딩으로 튕기지 않게 하려는
   * 것인데, 튕기더라도 랜딩이 스스로 홈으로 되돌려 보내므로(LandingPage 의
   * authReady && isAuthed 분기) 오래 붙잡아 둘 이유는 없습니다.
   */
  if (!authReady && !graceOver) return null;

  if (!isAuthed && !hasDismissedLanding()) {
    return <Navigate to="/welcome" replace />;
  }

  return <MeditationMainPage />;
};

export default GuestLandingGate;
