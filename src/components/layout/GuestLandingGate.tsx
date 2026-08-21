import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import MeditationMainPage from "@/pages/meditation/MeditationMainPage";
import { useAuthStore } from "@/stores/authStore";
import { dismissLanding, hasDismissedLanding } from "@/stores/landingPreference";

/**
 * 홈("/") 진입 게이트.
 * 로그인하지 않았고 랜딩을 지나친 적도 없다면 랜딩(/welcome)을 먼저 보여줍니다.
 * 그 외에는 기존 메인 페이지를 그대로 렌더링합니다.
 */
const GuestLandingGate = () => {
  const authReady = useAuthStore((s) => s.authReady);
  const isAuthed = useAuthStore((s) => !!s.accessToken);

  // 로그인한 적이 있는 브라우저라면 나중에 세션이 만료돼도 랜딩을 다시 띄우지 않습니다.
  useEffect(() => {
    if (authReady && isAuthed) dismissLanding();
  }, [authReady, isAuthed]);

  // 세션 부트스트랩 전에는 판단을 보류 — 로그인 사용자가 잠깐 랜딩으로 튕기는 것을 방지
  if (!authReady) return null;

  if (!isAuthed && !hasDismissedLanding()) {
    return <Navigate to="/welcome" replace />;
  }

  return <MeditationMainPage />;
};

export default GuestLandingGate;
