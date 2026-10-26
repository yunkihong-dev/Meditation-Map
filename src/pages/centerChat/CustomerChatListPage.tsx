import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/common/Icon";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import { BackButton, Empty, ErrorText, GhostButton, MemberPage, PageHead, PageTitle } from "@/components/common/memberPageStyles";
import ThreadRow from "@/components/centerChat/ThreadRow";
import { keyOf, useCenterChatStore } from "@/stores/centerChatStore";

/**
 * 내 센터 문의 목록 — /profile/center-chats (계약 C3.2·C8).
 * 운영팀 1:1 문의(/inquiry)와 헷갈리지 않게 고객 쪽 문구는 '센터 문의'입니다.
 */
export default function CustomerChatListPage() {
  const navigate = useNavigate();
  const { authReady, isMember } = useMemberSession();
  const list = useCenterChatStore((s) => s.lists.customer);
  const threads = useCenterChatStore((s) => s.threads);

  useEffect(() => {
    if (isMember) void useCenterChatStore.getState().loadThreads("customer");
  }, [isMember]);

  const items = list.ids.map((id) => threads[keyOf("customer", id)]).filter(Boolean);

  return (
    <MemberPage data-testid="center-chat-list">
      <PageHead>
        <BackButton type="button" aria-label="뒤로" onClick={() => navigate(-1)}>
          <Icon name="arrow_back" size={22} />
        </BackButton>
        <PageTitle>센터 문의</PageTitle>
      </PageHead>
      {!authReady ? null : !isMember ? (
        <LoginRequired message="로그인하면 센터에 보낸 문의를 볼 수 있어요." />
      ) : (
        <>
          {list.error && <ErrorText role="alert">{list.error}</ErrorText>}
          {list.loaded && items.length === 0 && (
            <Empty>
              아직 센터에 보낸 문의가 없어요.
              <br />
              장소 상세에서 '문의하기'를 눌러 센터에 직접 물어보세요.
            </Empty>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {items.map((t) => (
              <ThreadRow key={t.id} thread={t} viewer="customer" onOpen={() => navigate(`/profile/center-chats/${encodeURIComponent(t.id)}`)} />
            ))}
          </div>
          {list.nextCursor && (
            <div style={{ marginTop: 12, display: "flex" }}>
              <GhostButton
                type="button"
                style={{ flex: 1 }}
                disabled={list.loading}
                onClick={() => void useCenterChatStore.getState().loadThreads("customer", {}, true)}
              >
                {list.loading ? "불러오는 중…" : "더 보기"}
              </GhostButton>
            </div>
          )}
        </>
      )}
    </MemberPage>
  );
}
