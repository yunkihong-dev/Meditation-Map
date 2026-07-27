import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logoImg from "@/assets/logo.png";
import kakaoImg from "@/assets/kakao.png";
import naverImg from "@/assets/naver.png";
import googleImg from "@/assets/google.png";
import { typography } from "@/styles/typography";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import { apiFetch, useAuthStore } from "@/stores/authStore";
import { useFavoritesStore } from "@/stores/favoritesStore";
import { dismissLanding } from "@/stores/landingPreference";
import { toast } from "@/stores/toastStore";

/* ─────────────────────────  애니메이션  ───────────────────────── */

const floatOrb = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(18px, -24px) scale(1.06); }
  66% { transform: translate(-14px, 16px) scale(0.96); }
`;

const breathe = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 18px 48px rgba(75, 0, 130, 0.18); }
  50% { transform: scale(1.06); box-shadow: 0 26px 64px rgba(75, 0, 130, 0.28); }
`;

const breatheRing = keyframes`
  0%, 100% { transform: scale(0.9); opacity: 0.55; }
  50% { transform: scale(1.25); opacity: 0; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scrollCue = keyframes`
  0% { transform: translateY(0); opacity: 0.9; }
  50% { transform: translateY(8px); opacity: 0.4; }
  100% { transform: translateY(0); opacity: 0.9; }
`;

const shimmer = keyframes`
  to { background-position: 200% center; }
`;

/* ─────────────────────────  스크롤 리빌 훅  ───────────────────────── */

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─────────────────────────  레이아웃  ───────────────────────── */

const Page = styled.div`
  position: relative;
  min-height: 100dvh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 12% 8%, rgba(168, 139, 202, 0.22), transparent 42%),
    radial-gradient(circle at 88% 4%, rgba(245, 216, 208, 0.55), transparent 40%),
    ${({ theme }) => theme.colors.warmCream};
  color: ${({ theme }) => theme.colors.text900};
`;

const Orb = styled.span<{ $size: number; $top: string; $left: string; $delay: string; $color: string }>`
  position: absolute;
  z-index: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  border-radius: 50%;
  background: ${({ $color }) => $color};
  filter: blur(42px);
  opacity: 0.5;
  animation: ${floatOrb} 16s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 480px);
  margin: 0 auto;
  padding: 0 22px calc(40px + env(safe-area-inset-bottom, 0px));
  box-sizing: border-box;
`;

/* ── Hero ── */

const Hero = styled.section`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(48px + env(safe-area-inset-top, 0px)) 0 40px;
`;

const LogoWrap = styled.div`
  position: relative;
  width: 128px;
  height: 128px;
  display: grid;
  place-items: center;
  animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

const LogoRing = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary200};
  animation: ${breatheRing} 4.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const LogoCircle = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.white};
  animation: ${breathe} 4.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  img {
    width: 74px;
    height: 74px;
    object-fit: contain;
  }
`;

const Eyebrow = styled.p`
  margin: 26px 0 0;
  ${typography.caption};
  font-weight: 700;
  letter-spacing: 0.14em;
  color: ${({ theme }) => theme.colors.primary400};
  animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
`;

const HeroTitle = styled.h1`
  margin: 12px 0 0;
  font-size: clamp(3.4rem, 11vw, 4.6rem);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.03em;
  background: linear-gradient(
    100deg,
    ${({ theme }) => theme.colors.primary600} 0%,
    ${({ theme }) => theme.colors.primary400} 45%,
    ${({ theme }) => theme.colors.dustyRose} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation:
    ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.18s both,
    ${shimmer} 6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: ${fadeUp} 0.7s ease 0.18s both;
  }
`;

const HeroSub = styled.p`
  margin: 18px 0 0;
  max-width: 320px;
  ${typography.body1};
  color: ${({ theme }) => theme.colors.text700};
  animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.28s both;
`;

const ScrollCue = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  ${typography.caption};
  color: ${({ theme }) => theme.colors.primary400};
  animation: ${fadeUp} 0.7s ease 0.4s both;

  span:last-child {
    font-size: 1.8rem;
    line-height: 1;
    animation: ${scrollCue} 1.8s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    span:last-child {
      animation: none;
    }
  }
`;

/* ── Feature sections ── */

const Section = styled.section`
  padding: 56px 0;
`;

const SectionEyebrow = styled.p`
  margin: 0 0 10px;
  ${typography.caption};
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.primary400};
`;

const SectionTitle = styled.h2`
  margin: 0;
  ${typography.h3};
  color: ${({ theme }) => theme.colors.text900};
`;

const SectionLead = styled.p`
  margin: 22px 0 30px;
  ${typography.body1};
  color: ${({ theme }) => theme.colors.text700};
`;

const RevealCard = styled.div<{ $inView: boolean; $delay?: number }>`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(28px)")};
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${({ $delay = 0 }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(75, 0, 130, 0.07);
  box-shadow: 0 10px 30px rgba(75, 0, 130, 0.06);
  backdrop-filter: blur(6px);

  & + & {
    margin-top: 14px;
  }
`;

const FeatureIcon = styled.div<{ $from: string; $to: string }>`
  flex: 0 0 auto;
  width: 62px;
  height: 62px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-size: 2.6rem;
  background: linear-gradient(140deg, ${({ $from }) => $from}, ${({ $to }) => $to});
  box-shadow: 0 8px 20px rgba(75, 0, 130, 0.14);
`;

const FeatureText = styled.div`
  min-width: 0;

  strong {
    display: block;
    ${typography.body1};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text900};
  }

  span {
    display: block;
    margin-top: 5px;
    ${typography.body2};
    color: ${({ theme }) => theme.colors.text700};
  }
`;

/* ── Stats band ── */

const StatsBand = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 24px 12px;
  border-radius: 24px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary600}, ${({ theme }) => theme.colors.primary400});
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 16px 36px rgba(75, 0, 130, 0.24);
`;

const Stat = styled.div`
  text-align: center;

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.22);
  }

  strong {
    display: block;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  span {
    display: block;
    margin-top: 6px;
    ${typography.caption};
    color: rgba(255, 255, 255, 0.82);
  }
`;

/* ── Auth CTA ── */

const AuthSection = styled.section`
  padding: 20px 0 8px;
  text-align: center;
`;

const AuthTitle = styled.h2`
  margin: 0;
  ${typography.title};
`;

const AuthDesc = styled.p`
  margin: 10px 0 26px;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text700};
`;

const AuthCard = styled.div`
  padding: 26px 22px 22px;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(75, 0, 130, 0.08);
  box-shadow: 0 20px 50px rgba(75, 0, 130, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  ${typography.body2};
  padding: 15px 22px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text700};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary400};
    transform: translateY(-1px);
  }
`;

const PrimaryButton = styled.button`
  width: 100%;
  margin-top: 4px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary300};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 20px;
  ${typography.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  margin: 22px 0 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary200};
  }
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`;

const socialCircle = `
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: transform 0.16s ease;
`;

const SocialAnchor = styled.a`
  ${socialCircle}
  &:hover { transform: translateY(-3px); }
`;

const SocialButton = styled.button`
  ${socialCircle}
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const SocialIcon = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`;

const SignUpRow = styled.div`
  margin: 24px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  ${typography.body2};
  color: ${({ theme }) => theme.colors.text900};
`;

const SignUpLink = styled.button`
  border: none;
  padding: 0;
  background: none;
  font: inherit;
  color: ${({ theme }) => theme.colors.primary300};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary400};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const BrowseButton = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 12px 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary600};
  ${typography.buttonMd};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    transform: translateY(-1px);
  }
`;

/* ─────────────────────────  데이터  ───────────────────────── */

const FEATURES = [
  {
    icon: "🗺️",
    from: "#c9b8e0",
    to: "#a88bca",
    title: "지도로 찾는 명상 공간",
    desc: "내 주변 명상 공간과 프로그램을 지도에서 한눈에 둘러보세요.",
  },
  {
    icon: "🧘",
    from: "#f5d8d0",
    to: "#c9a090",
    title: "검증된 전문가 클래스",
    desc: "믿을 수 있는 전문가의 클래스와 리트릿을 직접 살펴보고 예약하세요.",
  },
  {
    icon: "📖",
    from: "#e6dcf0",
    to: "#7a5aab",
    title: "나만의 명상 기록",
    desc: "마음에 드는 공간을 찜하고, 나의 명상 여정을 차곡차곡 기록하세요.",
  },
] as const;

/* ─────────────────────────  컴포넌트  ───────────────────────── */

const LandingPage = () => {
  const navigate = useNavigate();
  const authReady = useAuthStore((s) => s.authReady);
  const isAuthed = useAuthStore((s) => !!s.accessToken);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const oauthApiBase = getMeditationApiBaseUrl() ?? "";

  const features = useInView<HTMLDivElement>();
  const stats = useInView<HTMLDivElement>();
  const auth = useInView<HTMLDivElement>();

  // 이미 로그인한 사용자는 랜딩을 건너뛰고 홈으로
  if (authReady && isAuthed) {
    return <Navigate to="/" replace />;
  }

  const browseAsGuest = () => {
    dismissLanding();
    navigate("/");
  };

  const goSignup = () => navigate("/profile?start=signup");

  const handleLogin = async () => {
    if (!getMeditationApiBaseUrl()) {
      toast.error("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");
      return;
    }
    const em = loginEmail.trim();
    if (!em || !loginPassword) {
      toast.error("이메일과 비밀번호를 입력해 주세요.");
      return;
    }
    setBusy(true);
    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: em, password: loginPassword }),
      });
      if (!res.ok) {
        let code = "";
        try {
          const j = (await res.json()) as { error?: string };
          code = j.error ?? "";
        } catch {
          /* ignore */
        }
        toast.error(
          code === "INVALID_CREDENTIALS"
            ? "이메일 또는 비밀번호를 확인해 주세요."
            : "로그인에 실패했습니다."
        );
        return;
      }
      await useAuthStore.getState().setSession();
      await useFavoritesStore.getState().pullFromServer();
      setLoginPassword("");
      navigate("/");
    } catch {
      toast.error("잠시 후 다시 시도해 주세요.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Page>
      <Orb $size={220} $top="-40px" $left="-60px" $delay="0s" $color="rgba(168,139,202,0.5)" />
      <Orb $size={180} $top="30dvh" $left="70%" $delay="3s" $color="rgba(245,216,208,0.7)" />
      <Orb $size={200} $top="120dvh" $left="-40px" $delay="6s" $color="rgba(201,160,144,0.4)" />

      <Container>
        {/* Hero */}
        <Hero>
          <LogoWrap>
            <LogoRing />
            <LogoCircle>
              <img src={logoImg} alt="명상 웰니스 지도 로고" />
            </LogoCircle>
          </LogoWrap>
          <Eyebrow>MEDITATION WELLNESS MAP</Eyebrow>
          <HeroTitle>명상 웰니스 지도</HeroTitle>
          <HeroSub>내 마음이 쉬어갈 공간을 지도 위에서 찾아보세요. 가까운 명상, 지금 여기에서.</HeroSub>
          <ScrollCue>
            <span>아래로 밀어보세요</span>
            <span>⌄</span>
          </ScrollCue>
        </Hero>

        {/* Features */}
        <Section ref={features.ref}>
          <RevealCard $inView={features.inView}>
            <SectionEyebrow>WHY 명상 웰니스 지도</SectionEyebrow>
            <SectionTitle>바쁜 하루 속, 쉼을 찾는 가장 쉬운 방법</SectionTitle>
            <SectionLead>흩어져 있던 명상 공간과 전문가 프로그램을 한곳에 모았어요.</SectionLead>
          </RevealCard>
          {FEATURES.map((f, i) => (
            <RevealCard key={f.title} $inView={features.inView} $delay={0.12 + i * 0.12}>
              <FeatureRow>
                <FeatureIcon $from={f.from} $to={f.to}>
                  {f.icon}
                </FeatureIcon>
                <FeatureText>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </FeatureText>
              </FeatureRow>
            </RevealCard>
          ))}
        </Section>

        {/* Stats */}
        <Section ref={stats.ref} style={{ paddingTop: 0 }}>
          <RevealCard $inView={stats.inView}>
            <StatsBand>
              <Stat>
                <strong>120+</strong>
                <span>명상 공간</span>
              </Stat>
              <Stat>
                <strong>40+</strong>
                <span>전문가 클래스</span>
              </Stat>
              <Stat>
                <strong>17</strong>
                <span>지역 커버</span>
              </Stat>
            </StatsBand>
          </RevealCard>
        </Section>

        {/* Auth CTA */}
        <Section ref={auth.ref} style={{ paddingBottom: 12 }}>
          <RevealCard $inView={auth.inView}>
            <AuthSection>
              <AuthTitle>지금 바로 시작해보세요</AuthTitle>
              <AuthDesc>로그인하고 나에게 딱 맞는 명상 공간을 찾아보세요.</AuthDesc>
              <AuthCard>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void handleLogin();
                  }}
                >
                  <Input
                    type="email"
                    placeholder="이메일"
                    aria-label="이메일"
                    autoComplete="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="비밀번호"
                    aria-label="비밀번호"
                    autoComplete="current-password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <PrimaryButton type="submit" disabled={busy}>
                    {busy ? "처리 중…" : "로그인하기"}
                  </PrimaryButton>
                </Form>

                <Divider>또는</Divider>

                <SocialRow>
                  {oauthApiBase ? (
                    <SocialAnchor
                      href={`${oauthApiBase}/oauth2/authorization/kakao`}
                      aria-label="카카오로 로그인"
                    >
                      <SocialIcon src={kakaoImg} alt="" />
                    </SocialAnchor>
                  ) : (
                    <SocialButton type="button" disabled aria-label="카카오로 로그인 (API 주소 필요)">
                      <SocialIcon src={kakaoImg} alt="" />
                    </SocialButton>
                  )}
                  {oauthApiBase ? (
                    <SocialAnchor
                      href={`${oauthApiBase}/oauth2/authorization/naver`}
                      aria-label="네이버로 로그인"
                    >
                      <SocialIcon src={naverImg} alt="" />
                    </SocialAnchor>
                  ) : (
                    <SocialButton type="button" disabled aria-label="네이버로 로그인 (API 주소 필요)">
                      <SocialIcon src={naverImg} alt="" />
                    </SocialButton>
                  )}
                  {oauthApiBase ? (
                    <SocialAnchor
                      href={`${oauthApiBase}/oauth2/authorization/google`}
                      aria-label="구글로 로그인"
                    >
                      <SocialIcon src={googleImg} alt="" />
                    </SocialAnchor>
                  ) : (
                    <SocialButton type="button" disabled aria-label="구글로 로그인 (API 주소 필요)">
                      <SocialIcon src={googleImg} alt="" />
                    </SocialButton>
                  )}
                </SocialRow>

                <SignUpRow>
                  <span>아직 회원이 아니신가요?</span>
                  <SignUpLink type="button" onClick={goSignup}>
                    회원가입
                  </SignUpLink>
                </SignUpRow>
              </AuthCard>

              <BrowseButton type="button" onClick={browseAsGuest}>
                먼저 둘러볼래요
              </BrowseButton>
            </AuthSection>
          </RevealCard>
        </Section>
      </Container>
    </Page>
  );
};

export default LandingPage;
