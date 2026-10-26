import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Icon from "@/components/common/Icon";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import ChatHeader from "@/components/centerChat/ChatHeader";
import ChatRoom from "@/components/centerChat/ChatRoom";
import ThreadRow from "@/components/centerChat/ThreadRow";
import { C, TY, a, inputPc4, tColors } from "@/components/centerManagement/cmKit";
import { useOwnerDesktop } from "@/hooks/useMediaQuery";
import { ApiError } from "@/services/http/apiError";
import { fetchMyPlaces } from "@/services/ownerPlaces/repositories/ownerPlacesRepository";
import type { MyPlaceItem } from "@/services/ownerPlaces/types";
import { fetchInquirySettings } from "@/services/ownerPlaces/repositories/inquirySettingsRepository";
import { keyOf, useCenterChatStore } from "@/stores/centerChatStore";
import { toast } from "@/stores/toastStore";

/*
 * 오너 문의함 — /center/inquiries(/:threadId) (계약 C4·C8).
 * 목업이 없어 센터 관리 화면 언어(pc_3·pc_4 카드 24px·소프트 그림자·입력 12px·주/보조 버튼)를 따릅니다.
 * PC(≥1024px): 좌 360px 목록(장소 필터 — 2곳 이상일 때만, '미답변만') + 우 대화. 모바일: 목록 → 대화 전체 화면.
 * 필터는 URL(?placeId=&unanswered=1)과 맞춥니다(대시보드 '신규 문의' 카드가 이 URL 로 옵니다).
 */

/** tw(pc_4): header mb-10 / h1 font-display-lg / p font-body-lg */
const Head = styled.header`
  margin-bottom: 24px;

  h1 {
    margin: 0 0 8px;
    ${TY.displayLg};
    color: ${C.onBackground};
  }

  p {
    margin: 0;
    ${TY.bodyLg};
    color: ${C.onSurfaceVariant};
  }
`;

/** pc_4 카드: bg-surface-container-lowest rounded-[24px] shadow-[0px_30px_60px_-15px_…] border border-outline-variant/30 */
const card = css`
  background: ${C.surfaceContainerLowest};
  border-radius: 24px;
  box-shadow: 0px 30px 60px -15px rgba(107, 70, 193, 0.04);
  border: 1px solid ${a(C.outlineVariant, 0.3)};
`;

/**
 * 카카오톡 모드 안내(C14·C17) — 새 문의는 카카오톡으로 가지만 진행 중 대화는 여기서 계속 답한다.
 * pc_4 카드 언어 + primary 옅은 채움(경고가 아니라 안내라 error 색을 쓰지 않음).
 */
const ModeBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  padding: 14px 18px;
  border-radius: 16px;
  border: 1px solid ${a(C.primaryContainer, 0.25)};
  background: ${a(C.primaryContainer, 0.06)};
  color: ${C.onSurface};
  ${TY.bodyMd};

  .ic {
    color: ${C.primary};
    flex-shrink: 0;
  }

  .msg {
    flex: 1;
    min-width: 200px;
  }

  .msg strong {
    font-weight: 700;
  }

  button {
    border: 0;
    padding: 8px 16px;
    border-radius: 12px;
    background: ${C.secondaryContainer};
    color: ${C.onSecondaryContainer};
    ${TY.labelMd};
    white-space: nowrap;
    cursor: pointer;
    ${tColors()};

    &:hover {
      background: ${C.surfaceContainerHighest};
    }
  }
`;

const Split = styled.div<{ $banner?: boolean }>`
  display: grid;
  grid-template-columns: 360px minmax(0, 1fr);
  gap: 24px;
  height: calc(100vh - 64px - 64px - 104px - ${({ $banner }) => ($banner ? "72px" : "0px")});
  min-height: 520px;
`;

const ListPanel = styled.section`
  ${card};
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`;

const ChatPanel = styled.section`
  ${card};
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Filters = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid ${a(C.outlineVariant, 0.3)};

  select {
    ${inputPc4};
    padding: 8px 12px;
    flex: 1 1 100%;
  }
`;

/** 필터 칩 — 사이드바 탭 활성 언어(bg-primary-container text-on-primary-container) */
const Chip = styled.button<{ $on: boolean }>`
  padding: 8px 14px;
  border-radius: 9999px;
  border: 1px solid ${({ $on }) => ($on ? C.primaryContainer : C.outlineVariant)};
  background: ${({ $on }) => ($on ? C.primaryContainer : C.surfaceContainerLowest)};
  color: ${({ $on }) => ($on ? C.onPrimaryContainer : C.onSurfaceVariant)};
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${({ $on }) => ($on ? C.primaryContainer : a(C.surfaceVariant, 0.5))};
  }
`;

const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px;
`;

const Placeholder = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${C.onSurfaceVariant};
  ${TY.bodyMd};

  .circle {
    width: 64px;
    height: 64px;
    border-radius: 9999px;
    background: ${a(C.primaryContainer, 0.1)};
    color: ${C.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Empty = styled.p`
  margin: 24px 16px;
  text-align: center;
  ${TY.sm};
  color: ${C.onSurfaceVariant};
`;

const MoreBtn = styled.button`
  display: block;
  margin: 8px auto;
  border: 0;
  padding: 8px 16px;
  border-radius: 12px;
  background: ${C.secondaryContainer};
  color: ${C.onSecondaryContainer};
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${C.surfaceContainerHighest};
  }
`;

const MobilePage = styled.div`
  padding: 24px 0 0;

  .pad {
    padding: 0 20px;
  }
`;

const MobileChat = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export default function CenterInquiriesPage() {
  const navigate = useNavigate();
  const desktop = useOwnerDesktop();
  const { threadId } = useParams();
  const [params, setParams] = useSearchParams();
  const { authReady, isMember } = useMemberSession();
  const list = useCenterChatStore((s) => s.lists.owner);
  const threads = useCenterChatStore((s) => s.threads);
  const thread = useCenterChatStore((s) => (threadId ? s.threads[keyOf("owner", threadId)] : undefined));
  const [places, setPlaces] = useState<MyPlaceItem[]>([]);
  const [report, setReport] = useState(false);

  const placeId = params.get("placeId");
  const unanswered = params.get("unanswered") === "1";
  const qs = params.toString() ? `?${params.toString()}` : "";
  // 대화를 열 때의 이동용 — 필터를 바꿔도 대화를 다시 열지 않도록 ref 로 최신 값만 읽습니다
  const qsRef = useRef(qs);
  qsRef.current = qs;

  useEffect(() => {
    if (!isMember) return;
    fetchMyPlaces()
      .then(setPlaces)
      .catch(() => undefined);
  }, [isMember]);

  // 장소별 문의 방식(C14) — 카카오톡인 장소가 있으면 상단 안내
  const [kakaoIds, setKakaoIds] = useState<string[]>([]);
  useEffect(() => {
    if (places.length === 0) return;
    let cancelled = false;
    void Promise.allSettled(places.map((p) => fetchInquirySettings(p.placeId))).then((rs) => {
      if (cancelled) return;
      setKakaoIds(places.filter((_, i) => { const r = rs[i]; return r.status === "fulfilled" && r.value.mode === "KAKAO"; }).map((p) => p.placeId));
    });
    return () => {
      cancelled = true;
    };
  }, [places]);
  const bannerPlaces = places.filter((p) => kakaoIds.includes(p.placeId) && (!placeId || p.placeId === placeId));
  const banner =
    bannerPlaces.length > 0 ? (
      <ModeBanner role="status" aria-label="문의 방식 안내">
        <Icon className="ic" name="info" size={22} />
        <span className="msg">
          {places.length >= 2 && <strong>{bannerPlaces.map((p) => p.name).join(", ")} · </strong>}
          현재 새 문의는 카카오톡으로 받고 있어요. 진행 중인 대화는 계속 답변할 수 있어요.
        </span>
        {bannerPlaces.map((p) => (
          <button
            key={p.placeId}
            type="button"
            aria-label={bannerPlaces.length > 1 ? `${p.name} 설정으로 가기` : "설정으로 가기"}
            onClick={() => navigate(`/profile/places/${encodeURIComponent(p.placeId)}/edit#owner-inquiry`)}
          >
            {bannerPlaces.length > 1 ? `${p.name} 설정` : "설정으로 가기"}
          </button>
        ))}
      </ModeBanner>
    ) : null;

  useEffect(() => {
    if (!isMember) return;
    void useCenterChatStore.getState().loadThreads("owner", { placeId, unanswered });
  }, [isMember, placeId, unanswered]);

  useEffect(() => {
    if (!isMember || !threadId) return;
    useCenterChatStore
      .getState()
      .openThread("owner", threadId)
      .catch((e) => {
        if (e instanceof ApiError && e.status === 404) {
          // 오너가 아니게 된 뒤 옛 알림으로 들어온 경우(계약 C8)
          toast.error("더 이상 볼 수 없는 대화예요");
          navigate(`/center/inquiries${qsRef.current}`, { replace: true });
        } else toast.error("대화를 불러오지 못했어요.");
      });
    return () => useCenterChatStore.getState().closeThread("owner", threadId);
  }, [isMember, threadId, navigate]);

  const setFilter = (next: { placeId?: string | null; unanswered?: boolean }) => {
    const p = new URLSearchParams(params);
    const pid = next.placeId === undefined ? placeId : next.placeId;
    const un = next.unanswered === undefined ? unanswered : next.unanswered;
    if (pid) p.set("placeId", pid);
    else p.delete("placeId");
    if (un) p.set("unanswered", "1");
    else p.delete("unanswered");
    setParams(p, { replace: true });
  };

  const items = list.ids.map((id) => threads[keyOf("owner", id)]).filter(Boolean);
  const openPath = (id: string) => `/center/inquiries/${encodeURIComponent(id)}${qs}`;

  const listBody = (
    <>
      <Filters>
        {places.length >= 2 && (
          <select aria-label="장소" value={placeId ?? ""} onChange={(e) => setFilter({ placeId: e.target.value || null })}>
            <option value="">모든 장소</option>
            {places.map((p) => (
              <option key={p.placeId} value={p.placeId}>
                {p.name}
              </option>
            ))}
          </select>
        )}
        <Chip type="button" $on={!unanswered} aria-pressed={!unanswered} onClick={() => setFilter({ unanswered: false })}>
          전체
        </Chip>
        <Chip type="button" $on={unanswered} aria-pressed={unanswered} onClick={() => setFilter({ unanswered: true })}>
          미답변만
        </Chip>
      </Filters>
      <Scroll role="list" aria-label="문의 목록">
        {list.error && <Empty role="alert">{list.error}</Empty>}
        {list.loaded && items.length === 0 && <Empty>{unanswered ? "답변을 기다리는 문의가 없어요." : "아직 받은 문의가 없어요."}</Empty>}
        {items.map((t) => (
          <ThreadRow key={t.id} thread={t} viewer="owner" active={t.id === threadId} onOpen={() => navigate(openPath(t.id))} />
        ))}
        {list.nextCursor && (
          <MoreBtn type="button" disabled={list.loading} onClick={() => void useCenterChatStore.getState().loadThreads("owner", {}, true)}>
            {list.loading ? "불러오는 중…" : "더 보기"}
          </MoreBtn>
        )}
      </Scroll>
    </>
  );

  if (!authReady) return null;
  if (!isMember) return <LoginRequired message="로그인하면 센터로 온 문의를 볼 수 있어요." />;

  const room = threadId ? (
    <ChatRoom
      viewer="owner"
      threadId={threadId}
      header={
        <ChatHeader
          thread={thread}
          viewer="owner"
          onBack={desktop ? undefined : () => navigate(`/center/inquiries${qs}`)}
          onReport={() => setReport(true)}
        />
      }
      reportOpen={report}
      onReportClose={() => setReport(false)}
    />
  ) : null;

  if (desktop) {
    return (
      <div data-testid="center-inquiries" data-layout="desktop">
        <Head>
          <h1>1:1 문의</h1>
          <p>고객이 센터에 보낸 문의를 확인하고 답변하세요.</p>
        </Head>
        {banner}
        <Split $banner={!!banner}>
          <ListPanel>{listBody}</ListPanel>
          <ChatPanel>
            {room ?? (
              <Placeholder>
                <span className="circle">
                  <Icon name="forum" size={32} />
                </span>
                대화를 선택하세요
              </Placeholder>
            )}
          </ChatPanel>
        </Split>
      </div>
    );
  }

  if (room) return <MobileChat data-testid="center-inquiries" data-layout="mobile">{room}</MobileChat>;

  return (
    <MobilePage data-testid="center-inquiries" data-layout="mobile">
      <div className="pad">
        <Head>
          <h1 style={{ fontSize: 28 }}>1:1 문의</h1>
          <p style={{ fontSize: 16 }}>고객이 센터에 보낸 문의를 확인하고 답변하세요.</p>
        </Head>
        {banner}
      </div>
      {listBody}
    </MobilePage>
  );
}
