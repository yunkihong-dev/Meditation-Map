import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { C, TY, a, tColors } from "@/components/centerManagement/cmKit";
import type { ChatThread, ChatViewer } from "@/services/centerChat/types";
import { formatRelativeTime } from "@/services/notifications/format";

/*
 * 대화 목록 한 줄 — 고객 '센터 문의' 목록과 오너 문의함이 함께 씁니다.
 * pc_3 '최근 활동' 항목 언어: p-4 rounded-xl hover:bg-surface-variant/30 transition-colors, 원형 아이콘 40px
 */

const Row = styled.button<{ $active: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border: 0;
  border-radius: 12px;
  background: ${({ $active }) => ($active ? a(C.primaryContainer, 0.1) : "transparent")};
  text-align: left;
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${({ $active }) => ($active ? a(C.primaryContainer, 0.1) : a(C.surfaceVariant, 0.3))};
  }

  .thumb {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    overflow: hidden;
    background: ${C.surfaceVariant};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${C.outline};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .avatar {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    background: ${a(C.primaryContainer, 0.2)};
    color: ${C.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    ${TY.labelMd};
    font-weight: 700;
  }

  .body {
    flex: 1;
    min-width: 0;
  }

  .top {
    display: flex;
    align-items: center;
    gap: 6px;

    strong {
      min-width: 0;
      ${TY.labelMd};
      font-weight: 700;
      color: ${C.onSurface};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    time {
      margin-left: auto;
      flex-shrink: 0;
      ${TY.xs};
      color: ${C.outline};
    }
  }

  .program {
    display: inline-block;
    margin-top: 4px;
    padding: 2px 8px;
    border-radius: 9999px;
    background: ${C.tertiaryFixed};
    color: ${C.onTertiaryFixed};
    font-size: 11px;
    font-weight: 700;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .preview {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;

    p {
      flex: 1;
      min-width: 0;
      margin: 0;
      ${TY.sm};
      color: ${C.onSurfaceVariant};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .badge {
    flex-shrink: 0;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 9999px;
    background: ${C.error};
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dot {
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background: ${C.primary};
  }

  .blocked {
    flex-shrink: 0;
    padding: 2px 8px;
    border-radius: 9999px;
    background: ${C.surfaceVariant};
    color: ${C.onSurfaceVariant};
    font-size: 11px;
    font-weight: 700;
  }
`;

export function previewText(t: ChatThread): string {
  const m = t.lastMessage;
  if (!m) return "";
  if (m.deleted) return "삭제된 메시지";
  if (m.preview) return m.preview;
  if (m.imageCount > 0) return `사진 ${m.imageCount}장`;
  return "";
}

interface Props {
  thread: ChatThread;
  viewer: ChatViewer;
  active?: boolean;
  onOpen: () => void;
}

export default function ThreadRow({ thread: t, viewer, active = false, onOpen }: Props) {
  const title = viewer === "owner" ? t.customer.displayName : (t.place.name ?? "삭제된 장소");
  return (
    <Row type="button" $active={active} aria-current={active ? "true" : undefined} onClick={onOpen} data-testid={`thread-${t.id}`}>
      {viewer === "owner" ? (
        <span className="avatar" aria-hidden>
          {t.customer.displayName.slice(0, 1)}
        </span>
      ) : (
        <span className="thumb" aria-hidden>
          {t.place.thumbnailUrl ? <img src={t.place.thumbnailUrl} alt="" loading="lazy" /> : <Icon name="storefront" />}
        </span>
      )}
      <span className="body">
        <span className="top">
          <strong>{title}</strong>
          {viewer === "owner" && t.unanswered && t.status !== "BLOCKED" && <span className="dot" aria-label="미답변" />}
          {t.lastMessage && <time dateTime={t.lastMessage.createdAt}>{formatRelativeTime(t.lastMessage.createdAt)}</time>}
        </span>
        {viewer === "owner" && t.place.name && <span style={{ fontSize: 12, color: C.outline }}>{t.place.name}</span>}
        {t.program && <span className="program">{t.program.title ?? "프로그램"}</span>}
        <span className="preview">
          <p>{previewText(t)}</p>
          {t.status === "BLOCKED" && <span className="blocked">차단됨</span>}
          {t.unreadCount > 0 && (
            <span className="badge" aria-label={`안 읽은 메시지 ${t.unreadCount}개`}>
              {t.unreadCount > 99 ? "99+" : t.unreadCount}
            </span>
          )}
        </span>
      </span>
    </Row>
  );
}
