import {
  type DragEvent as ReactDragEvent,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { uploadAdminImage } from "@/services/admin/adminApi";
import { AdminField, AdminLabel } from "./adminStyles";

/** 밀려나는 타일이 제자리를 찾아가는 시간. 손에서 놓은 뒤 정착에도 같은 값을 씁니다. */
const SLIDE_MS = 180;
/** 이 거리를 넘겨야 드래그로 봅니다. 삭제 버튼 클릭이 드래그로 오인되지 않게 합니다. */
const DRAG_THRESHOLD_PX = 4;

const Grid = styled.div<{ $fileDragOver?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 12px;
  padding: 8px;
  margin: -8px;
  transition: background 0.12s, box-shadow 0.12s;
  background: ${({ $fileDragOver }) => ($fileDragOver ? "rgba(124, 58, 237, 0.1)" : "transparent")};
  box-shadow: ${({ $fileDragOver }) =>
    $fileDragOver ? "inset 0 0 0 2px #7c3aed" : "inset 0 0 0 2px transparent"};
`;

const Tile = styled.div<{ $dragging?: boolean; $sliding?: boolean }>`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: grab;
  touch-action: none;
  user-select: none;
  border: 2px solid ${({ $dragging }) => ($dragging ? "#a78bfa" : "transparent")};
  z-index: ${({ $dragging }) => ($dragging ? 5 : 1)};
  box-shadow: ${({ $dragging }) => ($dragging ? "0 10px 24px rgba(0, 0, 0, 0.55)" : "none")};
  transition: ${({ $sliding }) =>
    $sliding ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none"};

  &:active {
    cursor: grabbing;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
`;

const CoverBadge = styled.span`
  position: absolute;
  left: 6px;
  bottom: 6px;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  pointer-events: none;
`;

const RemoveBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(127, 29, 29, 0.9);
  }
`;

const AddTile = styled.button<{ $fileDragOver?: boolean }>`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  border: 2px dashed ${({ $fileDragOver }) => ($fileDragOver ? "#7c3aed" : "#52525b")};
  background: ${({ $fileDragOver }) => ($fileDragOver ? "rgba(124, 58, 237, 0.14)" : "#111114")};
  color: ${({ $fileDragOver }) => ($fileDragOver ? "#c4b5fd" : "#a1a1aa")};
  font-size: 28px;
  cursor: pointer;
  flex-shrink: 0;
  display: grid;
  place-items: center;

  &:hover:not(:disabled) {
    border-color: #7c3aed;
    color: #c4b5fd;
    background: rgba(124, 58, 237, 0.08);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const Hint = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`;

const ErrorText = styled.p`
  margin: 6px 0 0;
  color: #f87171;
  font-size: 12px;
`;

/** OS에서 파일을 끌어온 드래그인지 (내부 순서변경과 구분) */
function isFileDrag(e: ReactDragEvent): boolean {
  return Array.from(e.dataTransfer.types).includes("Files");
}

function movePhoto(photos: string[], from: number, to: number): string[] {
  if (from === to || from < 0 || to < 0 || from >= photos.length || to >= photos.length) {
    return photos;
  }
  const next = [...photos];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

interface Slot {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

/** 포인터가 어느 칸 위에 있는지. 칸 사이 여백에 있으면 중심이 가장 가까운 칸으로 봅니다. */
function slotAtPoint(slots: Slot[], x: number, y: number): number {
  const hit = slots.findIndex((s) => x >= s.left && x <= s.right && y >= s.top && y <= s.bottom);
  if (hit >= 0) return hit;

  let best = 0;
  let bestDist = Infinity;
  slots.forEach((s, i) => {
    const cx = (s.left + s.right) / 2;
    const cy = (s.top + s.bottom) / 2;
    const d = (cx - x) ** 2 + (cy - y) ** 2;
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  });
  return best;
}

/**
 * 드래그 중 각 타일이 앉을 칸. 집어 든 타일이 from 에서 to 로 가면 사이에 있는 타일들이
 * 한 칸씩 밀립니다. 1번을 들고 2번 위로 가면 2번이 1번 자리로 내려오는 그 움직임입니다.
 */
function projectedSlot(index: number, from: number, to: number): number {
  if (index === from) return to;
  if (from < to && index > from && index <= to) return index - 1;
  if (to < from && index >= to && index < from) return index + 1;
  return index;
}

interface DragState {
  from: number;
  to: number;
  dx: number;
  dy: number;
  /** 손을 뗀 뒤 목적지 칸으로 미끄러져 들어가는 중 */
  settling: boolean;
  /** 드래그를 시작할 때 잰 칸 좌표. 정착 애니메이션이 끝날 때까지 필요합니다. */
  slots: Slot[];
}

interface AdminPhotoGridUploadProps {
  label?: string;
  photos: string[];
  onChange: (photos: string[]) => void;
  maxPhotos?: number;
  hint?: string;
}

/** 당근마켓 스타일 — 그리드 썸네일 + 다중 업로드 + 끌어서 순서 변경 */
export function AdminPhotoGridUpload({
  label = "사진",
  photos,
  onChange,
  maxPhotos = 10,
  hint = "첫 번째 사진이 대표·목록 썸네일입니다. 파일을 끌어다 놓으면 업로드되고, 사진을 집어 옮기면 순서가 바뀝니다.",
}: AdminPhotoGridUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileDragOver, setFileDragOver] = useState(false);
  const [drag, setDrag] = useState<DragState | null>(null);

  // 드래그 시작 시점에 한 번 재고, 그 뒤로는 이 좌표를 기준으로만 판단합니다.
  // 타일이 눈앞에서 밀려나도 "칸"은 제자리에 있어야 목적지가 흔들리지 않습니다.
  const gesture = useRef<{
    pointerId: number;
    from: number;
    startX: number;
    startY: number;
    slots: Slot[];
    active: boolean;
  } | null>(null);
  const settleTimer = useRef<number | null>(null);
  // 목적지 칸. onChange 를 state 갱신 함수 안에서 부르지 않으려고 따로 들고 있습니다.
  const toRef = useRef(0);

  useEffect(
    () => () => {
      if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    },
    []
  );

  const applyOrder = (next: string[]) => onChange(next.slice(0, maxPhotos));

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    const room = maxPhotos - photos.length;
    if (room <= 0) {
      setError(`사진은 최대 ${maxPhotos}장까지 등록할 수 있습니다.`);
      return;
    }
    setUploading(true);
    setError(null);
    try {
      const next = [...photos];
      for (const file of Array.from(files).slice(0, room)) {
        const url = await uploadAdminImage(file);
        if (!next.includes(url)) next.push(url);
      }
      applyOrder(next);
    } catch (e) {
      setError(e instanceof Error ? e.message : "업로드 실패 (MinIO·로그인 확인)");
    } finally {
      setUploading(false);
    }
  };

  const measureSlots = (): Slot[] => {
    const grid = gridRef.current;
    if (!grid) return [];
    return Array.from(grid.querySelectorAll<HTMLElement>("[data-photo-tile]")).map((el) => {
      const r = el.getBoundingClientRect();
      return { left: r.left, top: r.top, right: r.right, bottom: r.bottom };
    });
  };

  const onTilePointerDown = (index: number) => (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    // 삭제 버튼을 누른 것이라면 드래그로 삼지 않습니다.
    if ((e.target as HTMLElement).closest("button")) return;
    if (photos.length < 2) return;

    const slots = measureSlots();
    if (slots.length !== photos.length) return;

    gesture.current = {
      pointerId: e.pointerId,
      from: index,
      startX: e.clientX,
      startY: e.clientY,
      slots,
      active: false,
    };
    toRef.current = index;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onTilePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    if (!g || g.pointerId !== e.pointerId) return;

    const dx = e.clientX - g.startX;
    const dy = e.clientY - g.startY;
    if (!g.active) {
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return;
      g.active = true;
    }

    const to = slotAtPoint(g.slots, e.clientX, e.clientY);
    toRef.current = to;
    setDrag({ from: g.from, to, dx, dy, settling: false, slots: g.slots });
  };

  const endGesture = (e: ReactPointerEvent<HTMLDivElement>) => {
    const g = gesture.current;
    if (!g || g.pointerId !== e.pointerId) return;
    gesture.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    if (!g.active) {
      setDrag(null);
      return;
    }

    // 손을 뗀 자리에서 순간이동시키지 않고 목적지 칸까지 미끄러뜨립니다.
    const to = toRef.current;
    const target = g.slots[to];
    const origin = g.slots[g.from];
    setDrag({
      from: g.from,
      to,
      dx: target.left - origin.left,
      dy: target.top - origin.top,
      settling: true,
      slots: g.slots,
    });

    settleTimer.current = window.setTimeout(() => {
      settleTimer.current = null;
      applyOrder(movePhoto(photos, g.from, to));
      setDrag(null);
    }, SLIDE_MS);
  };

  const tileTransform = (index: number): string | undefined => {
    if (!drag) return undefined;
    if (index === drag.from) {
      return `translate3d(${drag.dx}px, ${drag.dy}px, 0) scale(${drag.settling ? 1 : 1.06})`;
    }
    const { slots } = drag;
    const target = projectedSlot(index, drag.from, drag.to);
    if (target === index) return undefined;
    return `translate3d(${slots[target].left - slots[index].left}px, ${
      slots[target].top - slots[index].top
    }px, 0)`;
  };

  const canAdd = photos.length < maxPhotos;

  const handleFileDragOver = (e: ReactDragEvent) => {
    if (!isFileDrag(e) || !canAdd) return;
    e.preventDefault();
    setFileDragOver(true);
  };

  const handleFileDragLeave = (e: ReactDragEvent) => {
    // 그리드 밖으로 완전히 나갔을 때만 해제
    if (e.currentTarget.contains(e.relatedTarget as Node | null)) return;
    setFileDragOver(false);
  };

  const handleFileDrop = (e: ReactDragEvent) => {
    if (!isFileDrag(e)) return;
    e.preventDefault();
    setFileDragOver(false);
    void handleFiles(e.dataTransfer.files);
  };

  return (
    <AdminField>
      <AdminLabel>{label}</AdminLabel>
      <Grid
        ref={gridRef}
        $fileDragOver={fileDragOver}
        onDragOver={handleFileDragOver}
        onDragLeave={handleFileDragLeave}
        onDrop={handleFileDrop}
      >
        {photos.map((url, i) => {
          const dragging = drag?.from === i;
          // 대표 배지는 지금 눈에 보이는 순서를 따라갑니다.
          const shownIndex = drag ? projectedSlot(i, drag.from, drag.to) : i;
          return (
            <Tile
              key={url}
              data-photo-tile
              $dragging={dragging}
              $sliding={!dragging || drag?.settling}
              style={{ transform: tileTransform(i) }}
              onPointerDown={onTilePointerDown(i)}
              onPointerMove={onTilePointerMove}
              onPointerUp={endGesture}
              onPointerCancel={endGesture}
            >
              <img src={url} alt="" draggable={false} />
              {shownIndex === 0 ? <CoverBadge>대표</CoverBadge> : null}
              <RemoveBtn
                type="button"
                aria-label="사진 삭제"
                onClick={() => applyOrder(photos.filter((_, j) => j !== i))}
              >
                ×
              </RemoveBtn>
            </Tile>
          );
        })}
        {canAdd ? (
          <AddTile
            type="button"
            disabled={uploading}
            $fileDragOver={fileDragOver}
            onClick={() => inputRef.current?.click()}
            aria-label="사진 추가"
          >
            {uploading ? "…" : "+"}
          </AddTile>
        ) : null}
      </Grid>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) =>
          void handleFiles(e.target.files).finally(() => {
            e.target.value = "";
          })
        }
      />
      <Hint>{hint}</Hint>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </AdminField>
  );
}
