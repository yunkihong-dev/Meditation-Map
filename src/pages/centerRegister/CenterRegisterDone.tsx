import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { C, EASE, TY, a, fadeInUp, glassPanel70, pulseGlow } from "@/components/centerManagement/cmKit";

/*
 * 등록 완료 — `관리화면 예시/_3/code.html` 이식.
 * - 배경 장식 원 2개(blur 100px, opacity .2, mix-blend multiply), 체크 원 pulse-glow(@keyframes pulseGlow 2s infinite)
 * - 진입 애니메이션: 목업 스크립트(main > div 마다 opacity 0·translateY(20px) → 0.6s cubic-bezier(0.16,1,0.3,1), 100+150·i ms)
 * - 'Mindful Path' 는 앱 이름(Wellit)으로 바꿨습니다. 소유권 요청 완료일 때만 제목·첫 줄을 요청에 맞게 바꿉니다.
 */

const Stage = styled.div`
  position: relative;
  overflow: hidden;
  min-height: min(884px, 100dvh);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${C.surface};
  border-radius: 24px;
`;

/** tw: absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 z-0 */
const Blob = styled.div<{ $pos: "tl" | "br" }>`
  position: absolute;
  width: 384px;
  height: 384px;
  border-radius: 9999px;
  mix-blend-mode: multiply;
  filter: blur(100px);
  opacity: 0.2;
  z-index: 0;
  ${({ $pos }) =>
    $pos === "tl"
      ? `top: -10%; left: -10%; background: ${C.primaryContainer};`
      : `bottom: -10%; right: -10%; background: ${C.tertiaryContainer};`}
`;

/** tw: relative z-10 flex flex-col items-center justify-center w-full max-w-md px-margin-mobile py-xl */
const Main = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 448px;
  padding: 64px 20px;

  & > * {
    animation: ${fadeInUp} 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  ${[0, 1, 2, 3].map((i) => `& > *:nth-child(${i + 1}) { animation-delay: ${100 + i * 150}ms; }`).join("\n")}

  @media (prefers-reduced-motion: reduce) {
    & > * {
      animation: none;
    }
  }
`;

/** tw: relative mb-8 flex items-center justify-center w-32 h-32 rounded-full bg-primary-container/10 pulse-glow */
const Check = styled.div`
  position: relative;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 128px;
  border-radius: 9999px;
  background: ${a(C.primaryContainer, 0.1)};

  .glow {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    animation: ${pulseGlow} 2s infinite ease-in-out;
  }

  .grad {
    /* tw: absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-tertiary/20 backdrop-blur-md */
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: linear-gradient(to top right, ${a(C.primary, 0.2)}, ${a(C.tertiary, 0.2)});
    backdrop-filter: blur(12px);
  }

  .material-symbols-outlined {
    position: relative;
    z-index: 10;
    color: ${C.primary};
  }
`;

/** tw: text-center mb-10 space-y-4 / h1 font-display-lg text-primary tracking-tight / p font-body-lg text-on-surface-variant px-4 */
const Copy = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    margin: 0 0 16px;
    ${TY.displayLg};
    letter-spacing: -0.025em;
    color: ${C.primary};
  }

  p {
    margin: 0;
    padding: 0 16px;
    ${TY.bodyLg};
    color: ${C.onSurfaceVariant};
  }
`;

/** tw: w-full glass-panel rounded-2xl p-6 mb-12 shadow-[0_8px_30px_rgba(107,70,193,0.04)] transform transition-transform hover:-translate-y-1 duration-300 */
const Next = styled.div`
  width: 100%;
  ${glassPanel70};
  border: 1px solid rgba(107, 70, 193, 0.08);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 48px;
  box-shadow: 0 8px 30px rgba(107, 70, 193, 0.04);
  transition: transform 300ms ${EASE};

  &:hover {
    transform: translateY(-4px);
  }

  .head {
    /* tw: flex items-center space-x-3 mb-4 / icon text-secondary text-2xl / h3 text-[20px] font-semibold text-secondary */
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    color: ${C.secondary};

    h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
  }

  li + li {
    margin-top: 16px;
  }

  li > .mk {
    display: inline-flex;
    /* tw: text-sm mt-1 mr-3 */
    margin: 4px 12px 0 0;
  }

  .t {
    /* tw: font-label-md text-on-surface mb-1 */
    margin: 0 0 4px;
    ${TY.labelMd};
  }

  .d {
    /* tw: font-body-md text-sm text-on-surface-variant */
    margin: 0;
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }
`;

/** tw: w-full flex flex-col space-y-4 mt-auto */
const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
`;

/** tw: w-full bg-primary text-on-primary text-[18px] py-4 rounded-xl shadow-[0_4px_14px_0_rgba(107,70,193,0.39)]
 *  hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(107,70,193,0.23)] hover:-translate-y-0.5 transition-all duration-200 */
const Primary = styled.button`
  width: 100%;
  border: 0;
  padding: 16px 0;
  border-radius: 12px;
  background: ${C.primary};
  color: ${C.onPrimary};
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 14px 0 rgba(107, 70, 193, 0.39);
  cursor: pointer;
  transition: all 200ms ${EASE};

  &:hover {
    background: ${a(C.primary, 0.9)};
    box-shadow: 0 6px 20px rgba(107, 70, 193, 0.23);
    transform: translateY(-2px);
  }
`;

/** tw: w-full bg-secondary-fixed text-on-secondary-fixed text-[18px] py-4 rounded-xl hover:bg-secondary-fixed-dim transition-all duration-200 */
const Secondary = styled.button`
  width: 100%;
  border: 0;
  padding: 16px 0;
  border-radius: 12px;
  background: ${C.secondaryFixed};
  color: ${C.onSecondaryFixed};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms ${EASE};

  &:hover {
    background: ${C.secondaryFixedDim};
  }
`;

interface Props {
  kind: "claim" | "create";
  onHome: () => void;
  onRegister: () => void;
  onProfile: () => void;
  onClaims: () => void;
}

export default function CenterRegisterDone({ kind, onHome, onRegister, onProfile, onClaims }: Props) {
  const claim = kind === "claim";
  return (
    <Stage data-testid="register-done">
      <Blob $pos="tl" aria-hidden />
      <Blob $pos="br" aria-hidden />
      <Main>
        <Check>
          <span className="glow" aria-hidden />
          <span className="grad" aria-hidden />
          <Icon name="check_circle" filled size={64} />
        </Check>
        <Copy>
          <h1>{claim ? "요청 완료!" : "등록 완료!"}</h1>
          <p>
            {claim ? "센터 운영자님의 멋진 활동을 기대합니다." : "전문가님의 멋진 활동을 기대합니다."}
            <br />
            Wellit과 함께 평온한 여정을 만들어가요.
          </p>
        </Copy>
        <Next>
          <div className="head">
            <Icon name="pending_actions" />
            <h3>다음 단계</h3>
          </div>
          <ul>
            <li>
              <span className="mk" style={{ color: C.primaryContainer }}>
                <Icon name="radio_button_checked" size={14} />
              </span>
              <div>
                <p className="t" style={{ color: C.onSurface }}>
                  관리자 승인 대기
                </p>
                <p className="d">제출하신 정보는 관리자 검토 후 최대 48시간 이내에 승인됩니다.</p>
              </div>
            </li>
            <li>
              <span className="mk" style={{ color: C.outline }}>
                <Icon name="radio_button_unchecked" size={14} />
              </span>
              <div>
                <p className="t" style={{ color: C.outline }}>
                  {claim ? "센터 관리 시작" : "프로필 활성화"}
                </p>
                <p className="d">
                  {claim
                    ? "승인이 완료되면 내 센터 관리에서 센터 정보를 직접 수정할 수 있습니다."
                    : "승인이 완료되면 앱 내에서 전문가 프로필이 사용자들에게 노출됩니다."}
                </p>
              </div>
            </li>
          </ul>
        </Next>
        <Actions>
          <Primary type="button" onClick={onHome}>
            홈 화면으로
          </Primary>
          <Secondary type="button" onClick={claim ? onClaims : onRegister}>
            {claim ? "신청 내역 보기" : "내 센터 등록하기"}
          </Secondary>
          <Secondary type="button" onClick={onProfile}>
            내 프로필 확인
          </Secondary>
        </Actions>
      </Main>
    </Stage>
  );
}
