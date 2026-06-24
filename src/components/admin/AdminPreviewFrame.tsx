import { useRef, useState, type ReactNode } from "react";
import styled from "styled-components";
import { theme as appTheme } from "@/styles/theme";

/**
 * 관리자 미리보기 공통 프레임: 카드 + 섹션 헤더(액센트 바) + 우측 배율표시/초기화 +
 * 좌하단 드래그 핸들로 zoom(글자 포함 전체) 조절. children 이 확대 대상.
 */

const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2.4;

const Shell = styled.div`
  position: sticky;
  top: 16px;
`;

const Card = styled.div`
  background: linear-gradient(180deg, #1b1b1f 0%, #161619 100%);
  border: 1px solid #2a2a30;
  border-radius: 16px;
  padding: 14px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 24px rgba(0, 0, 0, 0.22);
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`;

const BarTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #e4e4e7;

  &::before {
    content: "";
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: ${appTheme.colors.primary500};
  }
`;

const ZoomInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
  font-variant-numeric: tabular-nums;
`;

const ResetButton = styled.button`
  padding: 3px 8px;
  border-radius: 7px;
  font-size: 11px;
  cursor: pointer;
  border: 1px solid #3f3f46;
  background: transparent;
  color: #a1a1aa;

  &:hover {
    color: #fff;
    border-color: #52525b;
  }
`;

const FrameWrap = styled.div`
  position: relative;
  width: max-content;
`;

const Grip = styled.div`
  position: absolute;
  left: -4px;
  bottom: -4px;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: ${appTheme.colors.primary600};
  border: 2px solid #0f0f12;
  cursor: nesw-resize;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 13px;
  touch-action: none;
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;

interface AdminPreviewFrameProps {
  title?: string;
  /** 헤더와 프레임 사이에 들어가는, 확대되지 않는 컨트롤 (예: 모드 탭) */
  controls?: ReactNode;
  children: ReactNode;
}

export default function AdminPreviewFrame({ title = "미리보기", controls, children }: AdminPreviewFrameProps) {
  const [zoom, setZoom] = useState(1);
  const dragRef = useRef<{ x: number; y: number; zoom: number } | null>(null);

  const onGripDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as Element).setPointerCapture?.(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, zoom };
  };
  const onGripMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    // 좌하단 핸들: 왼쪽으로(또는 아래로) 당기면 확대
    const delta = (dragRef.current.x - e.clientX + (e.clientY - dragRef.current.y)) / 2;
    const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, dragRef.current.zoom + delta * 0.004));
    setZoom(next);
  };
  const onGripUp = (e: React.PointerEvent) => {
    dragRef.current = null;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  return (
    <Shell>
      <Card>
        <HeaderRow>
          <BarTitle>{title}</BarTitle>
          <ZoomInfo>
            {Math.round(zoom * 100)}%
            <ResetButton type="button" onClick={() => setZoom(1)}>
              초기화
            </ResetButton>
          </ZoomInfo>
        </HeaderRow>
        {controls}
        <FrameWrap>
          <div style={{ zoom }}>{children}</div>
          <Grip
            role="slider"
            aria-label="미리보기 크기 조절"
            onPointerDown={onGripDown}
            onPointerMove={onGripMove}
            onPointerUp={onGripUp}
          >
            ⤢
          </Grip>
        </FrameWrap>
      </Card>
    </Shell>
  );
}
