import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import Icon from "@/components/common/Icon";
import { useMemberSession } from "@/components/common/LoginRequired";
import { C, TY, a, shadowMd, tColors, tAll, PRIMARY_RGB } from "@/components/centerManagement/cmKit";
import { fetchChatAvailability, startChat } from "@/services/centerChat/repositories/centerChatRepository";
import { chatErrorMessage, type ChatAvailability } from "@/services/centerChat/types";
import { isValidKakaoUrl } from "@/services/ownerPlaces/inquirySettings";
import { formatProgramPeriod } from "@/services/meditation/placeProgramStatus";
import type { MeditationPlace, PlaceProgram } from "@/services/meditation/types";
import { ApiError } from "@/services/http/apiError";
import { toast } from "@/stores/toastStore";

/*
 * 장소 상세 '문의하기'(계약 C2·C3.1, 설계 10.8) — 화면 아래에 붙는 sticky 바(라운드 8).
 * - 상세 페이지(Page)의 마지막 자식으로 두면 스크롤 내내 탭바 바로 위에 떠 있고, 끝까지 내리면 제자리(본문 맨 아래)로
 *   돌아와 마지막 내용(지도)을 가리지 않습니다. 앱 기둥(최대 480px) 안의 흐름이라 PC 에서도 기둥 폭을 넘지 않습니다.
 * - GET /places/{id}/chat-availability 가 available 일 때만 보입니다(오너 없음·숨김이면 아예 안 그림)
 * - 비로그인·스태프 → 로그인 안내(/profile)
 * - 숨김 아닌 프로그램이 있으면 바텀 시트 '어떤 프로그램에 대해 문의하시나요?'(진행 중 먼저, 지난 프로그램은 접힘,
 *   맨 아래 '프로그램 선택 없이 문의하기'), 없으면 바로 시작 → /profile/center-chats/{id}
 */

/**
 * 바 자리 — 탭바(.app-tabbar: bottom 16px+안전영역, 높이 66px = --tabbar-space) 윗변에 딱 붙입니다(겹치지 않음).
 * --tabbar-space 에 safe-area-inset-bottom 이 이미 들어 있습니다. 좌우 20px 는 상세 본문(Content) 여백과 같습니다.
 * 받침: DESIGN.md Glassmorphism(rgba(255,255,255,0.7) + backdrop blur 20px). 버튼 위아래 틈(위 10px·아래 8px)으로
 * 본문 글자가 비치지 않게 바 전체(앱 기둥 폭, 최대 480px)를 덮습니다. 받침 영역은 본문 클릭을 받지 않습니다.
 * z-index 20: 상세 헤더(10)보다 위, 탭바(100)·시트(800)·프로그램 모달(9999)보다 아래.
 */
const Bar = styled.div`
  position: sticky;
  bottom: var(--tabbar-space);
  z-index: 20;
  margin-top: 8px;
  padding: 10px 20px 8px;
  background: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
`;

/**
 * tw(pc_2 주 버튼): bg-primary hover:bg-primary/90 text-on-primary rounded-[24px] font-label-md font-bold transition-all shadow-md shadow-primary/20
 * DESIGN.md: Primary 채움 + 흰 글자, 모든 버튼 1.5rem(24px) 라운드. 바 버튼이라 폭을 꽉 채우고 높이 52px(터치 44px 이상).
 * 본문 위에 떠 있으므로 그림자는 DESIGN.md '부양'(30px blur, primary 틴트)으로 조금 더 줍니다.
 */
const Btn = styled.button`
  box-sizing: border-box;
  text-decoration: none;
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  border: 0;
  border-radius: 24px;
  background: ${C.primary};
  color: ${C.onPrimary};
  ${TY.labelMd};
  font-size: 16px;
  font-weight: 700;
  box-shadow: ${shadowMd(PRIMARY_RGB, 0.2)}, 0 8px 30px rgba(107, 70, 193, 0.25);
  cursor: pointer;
  ${tAll()};

  &:hover:not(:disabled) {
    background: ${a(C.primary, 0.9)};
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${C.primaryFixedDim};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(24px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 800;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(24, 28, 30, 0.45);
  animation: ${fadeIn} 0.2s ease both;
`;

/** 시트 — 카드 24px 라운드(위쪽만), _4 glass 언어 */
const Sheet = styled.div`
  width: min(480px, 100%);
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  background: ${C.surfaceContainerLowest};
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -8px 30px rgba(107, 70, 193, 0.08);
  animation: ${slideUp} 0.25s cubic-bezier(0, 0, 0.2, 1) both;

  .grab {
    width: 40px;
    height: 4px;
    margin: 10px auto 0;
    border-radius: 9999px;
    background: ${C.outlineVariant};
  }

  h2 {
    margin: 16px 20px 4px;
    ${TY.headlineMd};
    font-size: 20px;
  }

  .sub {
    margin: 0 20px 12px;
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }

  .list {
    overflow-y: auto;
    padding: 0 16px calc(16px + env(safe-area-inset-bottom, 0px));
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Option = styled.button<{ $plain?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 16px;
  text-align: left;
  cursor: pointer;
  ${tColors()};
  ${({ $plain }) =>
    $plain
      ? css`
          border: 1px dashed ${C.outlineVariant};
          background: transparent;
          color: ${C.onSurfaceVariant};
          justify-content: center;
          ${TY.labelMd};

          &:hover {
            border-color: ${C.primary};
            color: ${C.primary};
          }
        `
      : css`
          border: 1px solid ${a(C.outlineVariant, 0.3)};
          background: ${C.surfaceContainerLowest};
          box-shadow: 0 8px 30px rgba(107, 70, 193, 0.04);

          &:hover {
            background: ${a(C.primaryContainer, 0.06)};
            border-color: ${C.primaryContainer};
          }
        `}

  .t {
    flex: 1;
    min-width: 0;

    strong {
      display: block;
      ${TY.labelMd};
      font-weight: 700;
      color: ${C.onSurface};
      overflow-wrap: anywhere;
    }

    span {
      ${TY.xs};
      color: ${C.onSurfaceVariant};
    }
  }
`;

const Chip = styled.span<{ $on: boolean }>`
  flex-shrink: 0;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 10px;
  font-weight: 700;
  background: ${({ $on }) => ($on ? C.tertiaryFixed : C.surfaceVariant)};
  color: ${({ $on }) => ($on ? C.onTertiaryFixed : C.onSurfaceVariant)};
`;

const Toggle = styled.button`
  align-self: center;
  border: 0;
  background: none;
  padding: 6px 10px;
  ${TY.labelMd};
  color: ${C.primary};
  cursor: pointer;
`;

/** 시트에 보일 프로그램 — 숨김 제외, 진행 중 먼저 */
export function sheetPrograms(programs: PlaceProgram[] | undefined): { ongoing: PlaceProgram[]; past: PlaceProgram[] } {
  const visible = (programs ?? []).filter((p) => !p.hidden);
  return { ongoing: visible.filter((p) => p.status !== "past"), past: visible.filter((p) => p.status === "past") };
}

/**
 * 카카오 심벌 — 노란 라운드 사각형 + 말풍선. 버튼은 기존 primary 를 유지하고 아이콘만 카카오로 둡니다
 * (카카오 노랑 버튼은 목업 보라 톤과 부딪히고, 상세 하단의 주 행동은 한 가지 색이어야 읽기 쉽다).
 */
export function KakaoIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden focusable="false" data-testid="kakao-icon">
      <rect width="24" height="24" rx="6" fill="#FEE500" />
      <path
        d="M12 5.6c-4.03 0-7.3 2.55-7.3 5.7 0 2.03 1.36 3.82 3.4 4.83l-.7 2.6c-.06.23.2.41.4.28l3.06-2.03c.37.04.75.06 1.14.06 4.03 0 7.3-2.55 7.3-5.74S16.03 5.6 12 5.6z"
        fill="#191919"
      />
    </svg>
  );
}

/**
 * 바 껍데기 — 무엇을 할지는 모릅니다. onPress 가 있으면 버튼, href 가 있으면 새 창 링크(rel=noopener noreferrer).
 * 채팅(C3)과 카카오톡(C16 reason=KAKAO)이 같은 바를 씁니다.
 */
export function InquiryBar({
  onPress,
  href,
  busy = false,
  label = "문의하기",
  icon = "chat",
  iconNode,
  children,
}: {
  onPress?: () => void;
  /** 외부 링크(카카오톡) — 새 창 */
  href?: string;
  busy?: boolean;
  label?: string;
  icon?: string;
  /** 머티리얼 아이콘 대신 그릴 아이콘(카카오 심벌) */
  iconNode?: ReactNode;
  /** 바에 딸린 레이어(시트 포털 등) */
  children?: ReactNode;
}) {
  const content = (
    <>
      {iconNode ?? <Icon name={icon} size={20} />}
      {label}
    </>
  );
  return (
    <Bar data-testid="chat-inquiry-bar">
      {href ? (
        <Btn as="a" href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </Btn>
      ) : (
        <Btn type="button" onClick={onPress} disabled={busy}>
          {content}
        </Btn>
      )}
      {children}
    </Bar>
  );
}

export default function ChatInquiryButton({ place }: { place: MeditationPlace }) {
  const navigate = useNavigate();
  const { authReady, isMember } = useMemberSession();
  const [avail, setAvail] = useState<ChatAvailability | null>(null);
  const [sheet, setSheet] = useState(false);
  const [showPast, setShowPast] = useState(false);
  const [busy, setBusy] = useState(false);
  const progs = useMemo(() => sheetPrograms(place.programs), [place.programs]);
  const hasPrograms = progs.ongoing.length + progs.past.length > 0;

  useEffect(() => {
    let cancelled = false;
    setAvail(null);
    fetchChatAvailability(place.id)
      .then((r) => {
        if (!cancelled) setAvail(r);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [place.id]);

  // C16 분기: reason "KAKAO" → 카카오톡 링크(로그인 불필요, 형식이 맞을 때만), null+available → 채팅, 그 외(NO_OWNER·HIDDEN 등) → 숨김
  if (avail?.reason === "KAKAO") {
    if (!avail.kakaoUrl || !isValidKakaoUrl(avail.kakaoType, avail.kakaoUrl)) return null;
    return <InquiryBar href={avail.kakaoUrl.trim()} label="카카오톡으로 문의하기" iconNode={<KakaoIcon />} />;
  }
  if (!authReady || !avail || !avail.available || avail.reason != null) return null;

  const start = async (programId: string | null) => {
    setBusy(true);
    try {
      const t = await startChat(place.id, programId);
      setSheet(false);
      navigate(`/profile/center-chats/${encodeURIComponent(t.id)}`);
    } catch (e) {
      const err = e instanceof ApiError ? e : null;
      if (err?.code === "CENTER_CHAT_UNAVAILABLE") {
        // C17 — 그사이 카카오톡으로 바뀌었을 수 있다. availability 를 다시 읽어 바를 맞춘다
        setSheet(false);
        const r = await fetchChatAvailability(place.id).catch(() => null);
        if (r) setAvail(r);
        if (r?.reason === "KAKAO") {
          toast.info("이 센터는 지금 카카오톡으로 문의를 받고 있어요.");
          return;
        }
      }
      toast.error(chatErrorMessage(err?.code ?? null, "문의를 시작하지 못했어요."));
    } finally {
      setBusy(false);
    }
  };

  const onClick = () => {
    if (!isMember) {
      toast.info("로그인하면 센터에 문의할 수 있어요.");
      navigate("/profile");
      return;
    }
    if (hasPrograms) setSheet(true);
    else void start(null);
  };

  const option = (p: PlaceProgram) => (
    <Option key={p.id} type="button" disabled={busy} onClick={() => void start(p.id)}>
      <span className="t">
        <strong>{p.title || "(제목 없음)"}</strong>
        <span>{formatProgramPeriod(p.startDate, p.endDate) ?? (p.kind === "event" ? "행사" : "상시 프로그램")}</span>
      </span>
      <Chip $on={p.status !== "past"}>{p.status === "past" ? "종료" : "진행중"}</Chip>
    </Option>
  );

  return (
    <InquiryBar onPress={onClick} busy={busy}>
      {/*
       * 시트는 body 로 띄웁니다. sticky+z-index 바 안에 두면 바의 쌓임 맥락(20)에 갇혀
       * 탭바(100)가 시트 위로 올라옵니다.
       */}
      {sheet &&
        createPortal(
        <Backdrop onClick={() => setSheet(false)}>
          <Sheet role="dialog" aria-label="문의할 프로그램 선택" onClick={(e) => e.stopPropagation()}>
            <span className="grab" aria-hidden />
            <h2>어떤 프로그램에 대해 문의하시나요?</h2>
            <p className="sub">{place.name}</p>
            <div className="list">
              {progs.ongoing.map(option)}
              {progs.past.length > 0 &&
                (showPast ? (
                  progs.past.map(option)
                ) : (
                  <Toggle type="button" onClick={() => setShowPast(true)}>
                    지난 프로그램 {progs.past.length}개 보기
                  </Toggle>
                ))}
              <Option type="button" $plain disabled={busy} onClick={() => void start(null)}>
                프로그램 선택 없이 문의하기
              </Option>
            </div>
          </Sheet>
        </Backdrop>,
          document.body
        )}
    </InquiryBar>
  );
}

