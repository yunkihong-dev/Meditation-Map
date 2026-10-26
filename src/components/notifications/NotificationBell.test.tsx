import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { theme } from "@/styles/theme";
import type { AppNotification } from "@/services/notifications/types";

/**
 * 헤더 종 → 알림 패널(라운드 3·4 사용자 정정).
 * 보장하는 것: 종을 누르면 패널이 열리고(aria-expanded·aria-controls·포커스), 다시 누르기·바깥 클릭·ESC 로 닫힘.
 * 항목을 누르면 읽음 API 호출 + 패널 닫힘 + linkUrl(있으면) 또는 /notifications/:id(없으면)로 이동.
 * SSE 로 들어온 알림(스토어 receive)이 열린 패널 맨 위에 바로 보이고 배지가 오른다.
 * 보장하지 않는 것: 실제 BE 응답(레포지토리를 모킹), 화면 위치·넘침(시각 확인 몫).
 */

const repo = vi.hoisted(() => ({
  fetchNotifications: vi.fn(),
  markNotificationRead: vi.fn(),
  markAllNotificationsRead: vi.fn(),
  fetchUnreadCount: vi.fn(),
}));

vi.mock("@/services/notifications/repositories/notificationsRepository", () => ({
  ...repo,
  NOTIFICATION_PAGE_SIZE: 20,
  notificationStreamUrl: () => null,
}));

import NotificationBell from "@/components/notifications/NotificationBell";
import { useMemberNotificationStore } from "@/stores/notificationStore";

function n(id: string, linkUrl: string | null, read = false): AppNotification {
  return {
    id,
    type: linkUrl ? "PLACE_CLAIM_APPROVED" : "AD",
    title: `알림 ${id}`,
    body: `본문 ${id}`,
    linkUrl,
    refType: null,
    refId: null,
    read,
    readAt: null,
    createdAt: "2026-10-07T03:00:00.000Z",
  };
}

function Where() {
  const loc = useLocation();
  return <div data-testid="where">{loc.pathname}</div>;
}

function renderBell() {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={["/"]}>
        <div data-testid="outside">밖</div>
        <NotificationBell scope="me" />
        <Routes>
          <Route path="*" element={<Where />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

beforeEach(() => {
  useMemberNotificationStore.getState().reset();
  useMemberNotificationStore.getState().setUnreadCount(2);
  repo.fetchNotifications.mockResolvedValue({
    items: [n("12", "/profile/places/12/edit"), n("11", null)],
    nextCursor: null,
  });
  repo.markNotificationRead.mockImplementation(async (_s: string, id: string) => ({ id, read: true, unreadCount: 1 }));
});

const bell = () => screen.getByRole("button", { name: /^알림(, 읽지 않은 알림 \d+개)?$/ });

describe("NotificationBell", () => {
  it("종을 누르면 패널이 열리고 포커스가 옮겨가며, 다시 누르면 닫힌다", async () => {
    renderBell();
    expect(bell()).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(bell());
    const dialog = await screen.findByRole("dialog", { name: "알림" });
    expect(bell()).toHaveAttribute("aria-expanded", "true");
    expect(bell()).toHaveAttribute("aria-controls", dialog.id);
    expect(document.activeElement).toBe(dialog);
    expect(await screen.findByText("알림 12")).toBeInTheDocument();
    expect(repo.fetchNotifications).toHaveBeenCalledWith("me", null);
    fireEvent.click(bell());
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("바깥 클릭과 ESC 로 닫힌다(ESC 는 종으로 포커스 복귀)", async () => {
    renderBell();
    fireEvent.click(bell());
    await screen.findByRole("dialog");
    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(bell());
    await screen.findByRole("dialog");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.activeElement).toBe(bell());
  });

  it("패널 안 클릭은 닫지 않는다", async () => {
    renderBell();
    fireEvent.click(bell());
    const dialog = await screen.findByRole("dialog");
    fireEvent.mouseDown(dialog);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("linkUrl 이 있는 항목: 읽음 호출 → 닫힘 → 그 대상으로 이동", async () => {
    renderBell();
    fireEvent.click(bell());
    fireEvent.click(await screen.findByText("알림 12"));
    expect(repo.markNotificationRead).toHaveBeenCalledWith("me", "12");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByTestId("where")).toHaveTextContent("/profile/places/12/edit");
  });

  it("linkUrl 이 없는 항목(광고 등): 알림 상세 /notifications/:id 로 이동", async () => {
    renderBell();
    fireEvent.click(bell());
    fireEvent.click(await screen.findByText("알림 11"));
    expect(repo.markNotificationRead).toHaveBeenCalledWith("me", "11");
    expect(screen.getByTestId("where")).toHaveTextContent("/notifications/11");
  });

  it("열린 패널에 SSE 새 알림이 맨 위에 바로 붙고 배지가 오른다", async () => {
    renderBell();
    fireEvent.click(bell());
    await screen.findByText("알림 12");
    await waitFor(() => expect(useMemberNotificationStore.getState().loaded).toBe(true));
    act(() => {
      useMemberNotificationStore.getState().receive(n("13", null));
    });
    const rows = screen.getAllByText(/^알림 1\d$/);
    expect(rows[0]).toHaveTextContent("알림 13");
    expect(bell()).toHaveAccessibleName("알림, 읽지 않은 알림 3개");
  });

  it("빈 상태와 하단 '전체 보기'", async () => {
    repo.fetchNotifications.mockResolvedValue({ items: [], nextCursor: null });
    renderBell();
    fireEvent.click(bell());
    expect(await screen.findByText("아직 받은 알림이 없어요.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "전체 보기" }));
    expect(screen.getByTestId("where")).toHaveTextContent(/^\/notifications$/);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
