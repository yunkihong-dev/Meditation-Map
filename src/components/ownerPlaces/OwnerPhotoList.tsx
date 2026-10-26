import { useRef, useState } from "react";
import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { uploadAdminImage } from "@/services/admin/adminApi";
import { ErrorText } from "@/components/common/memberPageStyles";
import { C, SHADOW_SM, TY, a, tAll, tColors, tProp } from "@/components/centerManagement/cmKit";

/*
 * 회원(오너) 화면용 사진 목록 — `관리화면 예시/pc_4` "센터 사진 관리".
 * - 번호 배지(1이 대표), 끌어다 놓아 순서 변경(HTML5 drag & drop), 키보드·터치용 앞으로 버튼, 빼기
 * - 마지막 칸은 점선 "사진 추가" 타일(POST /storage/objects, 회원 쿠키)
 * 순서는 photos 배열 순서이고 photos 는 오너 PATCH 허용 키입니다.
 */

/** tw(pc_4): grid grid-cols-2 md:grid-cols-4 gap-4 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

/** tw: relative group aspect-square rounded-xl overflow-hidden border border-outline-variant */
const Tile = styled.div<{ $dragging: boolean; $over: boolean }>`
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ $over }) => ($over ? C.primary : C.outlineVariant)};
  opacity: ${({ $dragging }) => ($dragging ? 0.4 : 1)};
  cursor: grab;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }

  /* tw: absolute inset-0 bg-on-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center */
  .overlay {
    position: absolute;
    inset: 0;
    background: ${a(C.onBackground, 0.4)};
    opacity: 0;
    ${tProp("opacity")};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .overlay,
  &:focus-within .overlay {
    opacity: 1;
  }
`;

/** tw: absolute top-2 left-2 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center font-label-md shadow-sm z-10 */
const Num = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: ${C.primary};
  color: ${C.onPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  ${TY.labelMd};
  box-shadow: ${SHADOW_SM};
`;

/** tw: bg-surface-container-lowest text-error p-2 rounded-full hover:bg-error-container transition-colors (아이콘 text-[20px] delete) */
const DeleteBtn = styled.button`
  border: 0;
  padding: 8px;
  border-radius: 9999px;
  background: ${C.surfaceContainerLowest};
  color: ${C.error};
  display: flex;
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${C.errorContainer};
  }
`;

/** 키보드·터치용 순서 이동 — 목업에 없는 시각 요소라 포커스될 때만 보입니다(드래그를 못 쓰는 환경의 대체 수단) */
const MoveBtn = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;

  &:focus-visible {
    width: auto;
    height: auto;
    padding: 4px 8px;
    clip: auto;
    border-radius: 9999px;
    background: ${C.surfaceContainerLowest};
    color: ${C.primary};
  }
`;

/** tw: aspect-square rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-on-surface-variant
 *  hover:bg-surface-container-low hover:border-primary transition-all group (아이콘 text-[32px] mb-2·라벨 group-hover:text-primary transition-colors) */
const AddTile = styled.button`
  aspect-ratio: 1;
  border-radius: 12px;
  border: 2px dashed ${C.outlineVariant};
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${C.onSurfaceVariant};
  cursor: pointer;
  ${tAll()};

  .material-symbols-outlined {
    margin-bottom: 8px;
    ${tColors()};
  }

  .lbl {
    ${TY.labelMd};
    ${tColors()};
  }

  &:hover:not(:disabled) {
    background: ${C.surfaceContainerLow};
    border-color: ${C.primary};

    .material-symbols-outlined,
    .lbl {
      color: ${C.primary};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/** from 칸의 사진을 to 칸으로 옮긴 새 배열 */
export function movePhoto(photos: string[], from: number, to: number): string[] {
  if (from === to || from < 0 || to < 0 || from >= photos.length || to >= photos.length) return photos;
  const next = [...photos];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

interface Props {
  photos: string[];
  onChange: (photos: string[]) => void;
  max: number;
  /** 번호 배지(1 = 대표) */
  markFirst?: boolean;
  label?: string;
}

export default function OwnerPhotoList({ photos, onChange, max, markFirst = true, label = "사진" }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragFrom, setDragFrom] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  const add = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const room = max - photos.length;
    if (room <= 0) return;
    setUploading(true);
    setError(null);
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files).slice(0, room)) {
        uploaded.push(await uploadAdminImage(file));
      }
      onChange([...photos, ...uploaded].slice(0, max));
    } catch {
      setError("사진을 올리지 못했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const endDrag = () => {
    setDragFrom(null);
    setDragOver(null);
  };

  return (
    <div>
      <Grid role="list" aria-label={label}>
        {photos.map((url, i) => (
          <Tile
            key={`${url}-${i}`}
            role="listitem"
            draggable
            $dragging={dragFrom === i}
            $over={dragOver === i && dragFrom !== i}
            onDragStart={(e) => {
              setDragFrom(i);
              e.dataTransfer.effectAllowed = "move";
              e.dataTransfer.setData("text/plain", String(i));
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(i);
            }}
            onDrop={(e) => {
              e.preventDefault();
              const from = dragFrom ?? Number.parseInt(e.dataTransfer.getData("text/plain"), 10);
              if (Number.isFinite(from)) onChange(movePhoto(photos, from, i));
              endDrag();
            }}
            onDragEnd={endDrag}
          >
            <img src={url} alt={`${label} ${i + 1}`} loading="lazy" />
            {markFirst && <Num aria-hidden>{i + 1}</Num>}
            <span className="overlay">
              <DeleteBtn
                type="button"
                aria-label={`${label} ${i + 1} 빼기`}
                onClick={() => onChange(photos.filter((_, j) => j !== i))}
              >
                <Icon name="delete" size={20} />
              </DeleteBtn>
            </span>
            {i > 0 && (
              <MoveBtn type="button" aria-label={`${label} ${i + 1} 앞으로`} onClick={() => onChange(movePhoto(photos, i, i - 1))}>
                앞으로
              </MoveBtn>
            )}
          </Tile>
        ))}
        {photos.length < max && (
          <AddTile type="button" disabled={uploading} onClick={() => inputRef.current?.click()}>
            <Icon name="add_photo_alternate" size={32} />
            <span className="lbl">{uploading ? "올리는 중…" : "사진 추가"}</span>
          </AddTile>
        )}
      </Grid>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => void add(e.target.files)}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
