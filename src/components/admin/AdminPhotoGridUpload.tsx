import { useRef, useState } from "react";
import styled from "styled-components";
import { uploadAdminImage } from "@/services/admin/adminApi";
import { AdminField, AdminLabel } from "./adminStyles";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tile = styled.div<{ $dragOver?: boolean; $dragging?: boolean }>`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid
    ${({ $dragOver, $dragging }) => ($dragOver ? "#a78bfa" : $dragging ? "#52525b" : "transparent")};
  opacity: ${({ $dragging }) => ($dragging ? 0.55 : 1)};
  cursor: grab;

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

const AddTile = styled.button`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  border: 2px dashed #52525b;
  background: #111114;
  color: #a1a1aa;
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

function movePhoto(photos: string[], from: number, to: number): string[] {
  if (from === to || from < 0 || to < 0 || from >= photos.length || to >= photos.length) {
    return photos;
  }
  const next = [...photos];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

interface AdminPhotoGridUploadProps {
  label?: string;
  photos: string[];
  onChange: (photos: string[]) => void;
  maxPhotos?: number;
  hint?: string;
}

/** 당근마켓 스타일 — 그리드 썸네일 + 다중 업로드 */
export function AdminPhotoGridUpload({
  label = "사진",
  photos,
  onChange,
  maxPhotos = 10,
  hint = "첫 번째 사진이 대표·목록 썸네일입니다. 드래그로 순서를 바꿀 수 있습니다.",
}: AdminPhotoGridUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

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

  const finishDrag = (toIndex: number) => {
    if (dragIndex === null) return;
    applyOrder(movePhoto(photos, dragIndex, toIndex));
    setDragIndex(null);
    setDragOverIndex(null);
  };

  const canAdd = photos.length < maxPhotos;

  return (
    <AdminField>
      <AdminLabel>{label}</AdminLabel>
      <Grid>
        {photos.map((url, i) => (
          <Tile
            key={`${url}-${i}`}
            draggable
            $dragging={dragIndex === i}
            $dragOver={dragOverIndex === i}
            onDragStart={() => setDragIndex(i)}
            onDragEnd={() => {
              setDragIndex(null);
              setDragOverIndex(null);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOverIndex(i);
            }}
            onDragLeave={() => setDragOverIndex((prev) => (prev === i ? null : prev))}
            onDrop={(e) => {
              e.preventDefault();
              finishDrag(i);
            }}
          >
            <img src={url} alt="" />
            {i === 0 ? <CoverBadge>대표</CoverBadge> : null}
            <RemoveBtn
              type="button"
              aria-label="사진 삭제"
              onClick={() => applyOrder(photos.filter((_, j) => j !== i))}
            >
              ×
            </RemoveBtn>
          </Tile>
        ))}
        {canAdd ? (
          <AddTile type="button" disabled={uploading} onClick={() => inputRef.current?.click()} aria-label="사진 추가">
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
