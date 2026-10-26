import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { C, TY, a, tColors } from "@/components/centerManagement/cmKit";
import type { ChatThread, ChatViewer } from "@/services/centerChat/types";

/*
 * 대화 머리 — 고객은 장소 썸네일·이름, 오너는 고객 표시 이름. 프로그램 칩, 오른쪽 '신고하기'.
 * _6/_4 헤더 언어: bg-surface/70 backdrop-blur-xl shadow-sm shadow-primary/5, 아이콘 버튼 hover:opacity-80 active:scale-95
 */
const Bar = styled.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 64px;
  padding: 8px 12px;
  background: ${a(C.surface, 0.7)};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 1px 2px 0 rgba(83, 42, 168, 0.05);

  .thumb {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
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
    border-radius: 9999px;
    background: ${a(C.primaryContainer, 0.2)};
    color: ${C.primary};
    ${TY.labelMd};
    font-weight: 700;
  }

  .t {
    flex: 1;
    min-width: 0;

    strong {
      display: block;
      ${TY.labelMd};
      font-size: 16px;
      font-weight: 700;
      color: ${C.onSurface};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      display: inline-block;
      margin-top: 2px;
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
  }
`;

const IconBtn = styled.button`
  flex-shrink: 0;
  display: flex;
  padding: 8px;
  border: 0;
  border-radius: 9999px;
  background: transparent;
  color: ${C.primary};
  cursor: pointer;
  transition-property: opacity, transform;
  transition-duration: 150ms;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ReportBtn = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: ${C.onSurfaceVariant};
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${a(C.primary, 0.05)};
  }
`;

interface Props {
  thread: ChatThread | undefined;
  viewer: ChatViewer;
  onBack?: () => void;
  onReport: () => void;
}

export default function ChatHeader({ thread, viewer, onBack, onReport }: Props) {
  const title = !thread ? "" : viewer === "owner" ? thread.customer.displayName : (thread.place.name ?? "삭제된 장소");
  return (
    <Bar>
      {onBack && (
        <IconBtn type="button" aria-label="뒤로" onClick={onBack}>
          <Icon name="arrow_back" />
        </IconBtn>
      )}
      {viewer === "owner" ? (
        <span className="thumb avatar" aria-hidden>
          {title.slice(0, 1)}
        </span>
      ) : (
        <span className="thumb" aria-hidden>
          {thread?.place.thumbnailUrl ? <img src={thread.place.thumbnailUrl} alt="" /> : <Icon name="storefront" />}
        </span>
      )}
      <div className="t">
        <strong>{title}</strong>
        {viewer === "owner" && thread?.place.name && <small style={{ fontSize: 12, color: C.outline }}>{thread.place.name} </small>}
        {thread?.program && <span>{thread.program.title ?? "프로그램"}</span>}
      </div>
      <ReportBtn type="button" onClick={onReport} disabled={!thread?.lastMessage}>
        <Icon name="flag" size={18} />
        신고하기
      </ReportBtn>
    </Bar>
  );
}

