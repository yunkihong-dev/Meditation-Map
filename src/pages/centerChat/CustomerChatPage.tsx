import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import ChatHeader from "@/components/centerChat/ChatHeader";
import ChatRoom from "@/components/centerChat/ChatRoom";
import { ApiError } from "@/services/http/apiError";
import { keyOf, useCenterChatStore } from "@/stores/centerChatStore";
import { toast } from "@/stores/toastStore";

/** 고객 채팅 — /profile/center-chats/:threadId (계약 C3, 하단 탭 없는 ChatLayout) */
export default function CustomerChatPage() {
  const navigate = useNavigate();
  const { threadId = "" } = useParams();
  const { authReady, isMember } = useMemberSession();
  const thread = useCenterChatStore((s) => s.threads[keyOf("customer", threadId)]);
  const [report, setReport] = useState(false);

  useEffect(() => {
    if (!isMember || !threadId) return;
    const st = useCenterChatStore.getState();
    st.openThread("customer", threadId).catch((e) => {
      // 내 대화가 아니거나 없는 대화 → 목록으로(계약 C0: 404)
      if (e instanceof ApiError && e.status === 404) {
        toast.error("더 이상 볼 수 없는 대화예요.");
        navigate("/profile/center-chats", { replace: true });
      } else toast.error("대화를 불러오지 못했어요.");
    });
    return () => useCenterChatStore.getState().closeThread("customer", threadId);
  }, [isMember, threadId, navigate]);

  if (!authReady) return null;
  if (!isMember) return <LoginRequired message="로그인하면 센터와 대화할 수 있어요." />;

  return (
    <ChatRoom
      viewer="customer"
      threadId={threadId}
      header={<ChatHeader thread={thread} viewer="customer" onBack={() => navigate(-1)} onReport={() => setReport(true)} />}
      reportOpen={report}
      onReportClose={() => setReport(false)}
    />
  );
}
