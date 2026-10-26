import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { MemberNotificationBridge } from "@/components/notifications/NotificationBridges";

/**
 * 하단 탭 없는 회원 레이아웃 — 고객 채팅(/profile/center-chats/:threadId).
 * 입력창이 화면 아래에 붙어야 해서 Layout(늘 BottomNav 를 그림)을 쓰지 않습니다(설계 10.8). 폭은 앱과 같은 480px 기둥.
 */
const Shell = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 100dvh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface};

  @media (min-width: 520px) {
    border-left: ${({ theme }) => theme.hairline};
    border-right: ${({ theme }) => theme.hairline};
  }
`;

export default function ChatLayout() {
  return (
    <Shell>
      <MemberNotificationBridge />
      <Outlet />
    </Shell>
  );
}
