import { useEffect, useRef, useState, type DragEvent } from "react";
import styled, { css } from "styled-components";
import Icon from "@/components/common/Icon";
import { movePhoto } from "@/components/ownerPlaces/OwnerPhotoList";
import { C, SHADOW_SM, TY, a, shadowLg, tAll, tColors, tProp } from "@/components/centerManagement/cmKit";

/*
 * 센터 등록(신규) 사진 — `관리화면 예시/_2` 사진 그리드 + pc_1·pc_2 드롭존.
 * - 사진이 없으면 드롭존(pc_2), 있으면 번호 배지 썸네일 그리드 + "사진 추가" 타일 + 안내문(_2)
 * - 드래그로 순서 변경(드래그 중 타일: border-2 primary·shadow-lg·scale-105·img opacity-70·open_with 아이콘)
 * - 클릭하면 크게 보기(안내문 "사진을 클릭하면 크게 볼 수 있으며")
 */

/** tw(_2): grid grid-cols-2 md:grid-cols-4 gap-4 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

/**
 * tw: relative aspect-square rounded-xl overflow-hidden border border-outline-variant/30 group
 * 드래그 중 tw: border-2 border-primary shadow-lg scale-105 z-10
 */
const Tile = styled.div<{ $dragging: boolean }>`
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${a(C.outlineVariant, 0.3)};
  cursor: zoom-in;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .drag {
    /* tw: absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity */
    position: absolute;
    bottom: 8px;
    right: 8px;
    opacity: 0;
    ${tProp("opacity")};

    .material-symbols-outlined {
      /* tw: text-on-primary bg-black/20 rounded p-1 cursor-move */
      color: ${C.onPrimary};
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 4px;
      box-sizing: content-box;
      cursor: move;
    }
  }

  &:hover .drag {
    opacity: 1;
  }

  ${({ $dragging }) =>
    $dragging &&
    css`
      border: 2px solid ${C.primary};
      box-shadow: ${shadowLg()};
      transform: scale(1.05);
      z-index: 10;

      img {
        opacity: 0.7;
      }
    `}
`;

/** tw: absolute top-2 left-2 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center text-xs font-bold shadow-sm */
const Num = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: ${C.primary};
  color: ${C.onPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  ${TY.xs};
  font-weight: 700;
  box-shadow: ${SHADOW_SM};
`;

/** tw: absolute top-2 right-2 w-6 h-6 bg-surface/80 backdrop-blur-sm text-on-surface rounded-full … hover:bg-error hover:text-on-error transition-colors */
const Remove = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 9999px;
  background: ${a(C.surface, 0.8)};
  backdrop-filter: blur(4px);
  color: ${C.onSurface};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${C.error};
    color: ${C.onError};
  }
`;

/** tw: absolute inset-0 flex items-center justify-center + text-primary text-3xl open_with */
const Moving = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${C.primary};
`;

/** tw: aspect-square border-2 border-dashed border-outline-variant/50 rounded-xl flex flex-col items-center justify-center gap-1
 *  hover:bg-primary-container/10 hover:border-primary transition-all cursor-pointer group */
const AddTile = styled.button`
  aspect-ratio: 1;
  border: 2px dashed ${a(C.outlineVariant, 0.5)};
  border-radius: 12px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  ${tAll()};

  .material-symbols-outlined,
  span {
    color: ${C.outline};
  }

  span:last-child {
    ${TY.xs};
    ${TY.labelMd};
    font-size: 12px;
  }

  &:hover {
    background: ${a(C.primaryContainer, 0.1)};
    border-color: ${C.primary};

    .material-symbols-outlined,
    span {
      color: ${C.primary};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/** tw: font-body-md text-xs text-outline flex items-center gap-1 */
const Info = styled.p`
  margin: 16px 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  line-height: 16px;
  color: ${C.outline};
`;

/** tw(pc_2): border-2 border-dashed border-outline-variant/50 rounded-[16px] p-8 text-center hover:bg-surface-container/30 transition-colors cursor-pointer group */
const Drop = styled.label<{ $over: boolean }>`
  display: block;
  border: 2px dashed ${a(C.outlineVariant, 0.5)};
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  ${tColors()};
  background: ${({ $over }) => ($over ? a(C.surfaceContainer, 0.3) : "transparent")};

  &:hover {
    background: ${a(C.surfaceContainer, 0.3)};
  }

  .circle {
    /* tw: w-16 h-16 mx-auto bg-surface-variant/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-container/20 transition-colors */
    width: 64px;
    height: 64px;
    margin: 0 auto 16px;
    border-radius: 9999px;
    background: ${a(C.surfaceVariant, 0.3)};
    display: flex;
    align-items: center;
    justify-content: center;
    ${tColors()};

    .material-symbols-outlined {
      /* tw: text-outline group-hover:text-primary transition-colors */
      color: ${C.outline};
      ${tColors()};
    }
  }

  &:hover .circle {
    background: ${a(C.primaryContainer, 0.2)};

    .material-symbols-outlined {
      color: ${C.primary};
    }
  }

  .t1 {
    /* tw: font-label-md text-label-md text-on-surface mb-1 */
    margin: 0 0 4px;
    ${TY.labelMd};
    color: ${C.onSurface};
  }

  .t2 {
    /* tw: font-body-md text-sm text-outline */
    margin: 0;
    ${TY.sm};
    color: ${C.outline};
  }

  input {
    display: none;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(24, 28, 30, 0.7);
  cursor: zoom-out;

  img {
    max-width: min(90vw, 1200px);
    max-height: 85vh;
    border-radius: 12px;
    object-fit: contain;
  }
`;

interface Props {
  photos: string[];
  onChange: (photos: string[]) => void;
  max: number;
  uploading: boolean;
  onAddFiles: (files: FileList | null) => void;
}

export default function RegisterPhotoGrid({ photos, onChange, max, uploading, onAddFiles }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const [dragFrom, setDragFrom] = useState<number | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept="image/*"
      multiple
      hidden
      disabled={uploading}
      onChange={(e) => {
        onAddFiles(e.target.files);
        e.target.value = "";
      }}
    />
  );

  if (photos.length === 0) {
    const onDrop = (e: DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      setOver(false);
      onAddFiles(e.dataTransfer.files);
    };
    return (
      <Drop
        $over={over}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={onDrop}
      >
        <span className="circle">
          <Icon name="add_photo_alternate" />
        </span>
        <p className="t1">{uploading ? "올리는 중…" : "클릭하여 업로드하거나 파일을 드래그하세요"}</p>
        <p className="t2">JPG, PNG up to 10MB</p>
        {fileInput}
      </Drop>
    );
  }

  return (
    <div>
      <Grid role="list" aria-label="센터 사진">
        {photos.map((url, i) => (
          <Tile
            key={`${url}-${i}`}
            role="listitem"
            draggable
            $dragging={dragFrom === i}
            onClick={() => setPreview(url)}
            onDragStart={(e) => {
              setDragFrom(i);
              e.dataTransfer.effectAllowed = "move";
              e.dataTransfer.setData("text/plain", String(i));
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const from = dragFrom ?? Number.parseInt(e.dataTransfer.getData("text/plain"), 10);
              if (Number.isFinite(from)) onChange(movePhoto(photos, from, i));
              setDragFrom(null);
            }}
            onDragEnd={() => setDragFrom(null)}
          >
            <img src={url} alt={`센터 사진 ${i + 1}`} />
            <Num aria-hidden>{i + 1}</Num>
            {dragFrom === i ? (
              <Moving aria-hidden>
                <Icon name="open_with" size={30} />
              </Moving>
            ) : (
              <>
                <Remove
                  type="button"
                  aria-label={`센터 사진 ${i + 1} 삭제`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(photos.filter((_, j) => j !== i));
                  }}
                >
                  <Icon name="close" size={14} />
                </Remove>
                <span className="drag" aria-hidden>
                  <Icon name="drag_indicator" />
                </span>
              </>
            )}
          </Tile>
        ))}
        {photos.length < max && (
          <AddTile type="button" disabled={uploading} onClick={() => inputRef.current?.click()}>
            <Icon name="add_a_photo" />
            <span>{uploading ? "올리는 중…" : "사진 추가"}</span>
          </AddTile>
        )}
      </Grid>
      {fileInput}
      <Info>
        <Icon name="info" size={14} />
        사진을 클릭하면 크게 볼 수 있으며, 드래그하여 순서를 변경할 수 있습니다.
      </Info>
      {preview && (
        <Lightbox role="dialog" aria-label="사진 크게 보기" onClick={() => setPreview(null)}>
          <img src={preview} alt="센터 사진 크게 보기" />
        </Lightbox>
      )}
    </div>
  );
}
