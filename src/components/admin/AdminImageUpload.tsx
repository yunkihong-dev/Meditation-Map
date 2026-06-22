import { useRef, useState } from "react";
import { uploadAdminImage } from "@/services/admin/adminApi";
import { AdminButton, AdminField, AdminInput, AdminLabel } from "./adminStyles";

interface AdminImageUploadProps {
  label?: string;
  value: string;
  onChange: (url: string) => void;
}

export function AdminImageUpload({ label, value, onChange }: AdminImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      onChange(await uploadAdminImage(file));
    } catch (e) {
      setError(e instanceof Error ? e.message : "업로드 실패 (MinIO 활성화·로그인 확인)");
    } finally {
      setUploading(false);
    }
  };

  return (
    <AdminField>
      {label ? <AdminLabel>{label}</AdminLabel> : null}
      <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
        <AdminInput
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="이미지 URL 또는 업로드"
        />
        <AdminButton type="button" disabled={uploading} onClick={() => inputRef.current?.click()}>
          {uploading ? "…" : "업로드"}
        </AdminButton>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) void handleFile(f);
          e.target.value = "";
        }}
      />
      {value ? (
        <img
          src={value}
          alt=""
          style={{ marginTop: 8, maxHeight: 96, maxWidth: "100%", borderRadius: 8, objectFit: "cover" }}
        />
      ) : null}
      {error ? <p style={{ margin: "6px 0 0", color: "#f87171", fontSize: 12 }}>{error}</p> : null}
    </AdminField>
  );
}

interface AdminOrderedPhotoListProps {
  photos: string[];
  onChange: (photos: string[]) => void;
  /** 1번 사진 변경 시 (대표 썸네일 동기화 등) */
  onFirstPhotoChange?: (url: string) => void;
  hint?: string;
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

/** 프로그램 imageUrl + imageUrls → 표시 순서 배열 */
export function programPhotosOrdered(imageUrl: string, imageUrls?: string[]): string[] {
  const main = imageUrl.trim();
  const extra = (imageUrls ?? []).map((u) => u.trim()).filter((u) => u && u !== main);
  return main ? [main, ...extra] : extra;
}

/** 순서 배열 → 프로그램 imageUrl(1번) + imageUrls(2번~) */
export function orderedPhotosToProgram(urls: string[]): { imageUrl: string; imageUrls: string[] } {
  const clean = urls.map((u) => u.trim()).filter(Boolean);
  return {
    imageUrl: clean[0] ?? "",
    imageUrls: clean.slice(1),
  };
}

export function AdminOrderedPhotoList({
  photos,
  onChange,
  onFirstPhotoChange,
  hint = "위에서 아래 순서대로 앱에 표시됩니다. 드래그하거나 버튼으로 순서를 바꿀 수 있습니다.",
}: AdminOrderedPhotoListProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const applyOrder = (next: string[]) => {
    onChange(next);
    onFirstPhotoChange?.(next[0] ?? "");
  };

  const addUrl = (url: string) => {
    const trimmed = url.trim();
    if (!trimmed || photos.includes(trimmed)) return;
    applyOrder([...photos, trimmed]);
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    setError(null);
    try {
      const next = [...photos];
      for (const file of Array.from(files)) {
        const url = await uploadAdminImage(file);
        if (!next.includes(url)) next.push(url);
      }
      applyOrder(next);
    } catch (e) {
      setError(e instanceof Error ? e.message : "업로드 실패");
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

  return (
    <div>
      <p style={{ margin: "0 0 12px", color: "#a1a1aa", fontSize: 13 }}>{hint}</p>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        <AdminButton type="button" disabled={uploading} onClick={() => inputRef.current?.click()}>
          {uploading ? "업로드 중…" : "+ 사진 업로드"}
        </AdminButton>
        <AdminButton
          type="button"
          $variant="ghost"
          onClick={() => {
            const url = window.prompt("이미지 URL");
            if (url) addUrl(url);
          }}
        >
          URL 추가
        </AdminButton>
      </div>
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
      {error ? <p style={{ color: "#f87171", fontSize: 12 }}>{error}</p> : null}
      {photos.length === 0 ? (
        <p style={{ color: "#a1a1aa", fontSize: 13, margin: 0 }}>등록된 사진이 없습니다.</p>
      ) : (
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {photos.map((url, i) => (
            <li
              key={`${url}-${i}`}
              draggable
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
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                padding: 10,
                borderRadius: 8,
                border: `1px solid ${dragOverIndex === i ? "#7c3aed" : "#3f3f46"}`,
                background: dragIndex === i ? "#1a1a22" : "#09090b",
                cursor: "grab",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: i === 0 ? "#4c1d95" : "#27272a",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  display: "grid",
                  placeItems: "center",
                }}
                title={i === 0 ? "1번 = 대표·먼저 표시" : `${i + 1}번`}
              >
                {i + 1}
              </span>
              <img
                src={url}
                alt=""
                style={{ width: 72, height: 54, objectFit: "cover", borderRadius: 6, flexShrink: 0 }}
                draggable={false}
              />
              <span
                style={{
                  flex: 1,
                  fontSize: 11,
                  color: "#71717a",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                title={url}
              >
                {url}
              </span>
              <div style={{ display: "flex", gap: 4, flexShrink: 0, flexWrap: "wrap" }}>
                {i > 0 ? (
                  <AdminButton
                    type="button"
                    $variant="ghost"
                    style={{ padding: "4px 8px", fontSize: 11 }}
                    onClick={() => applyOrder(movePhoto(photos, i, 0))}
                  >
                    맨 앞
                  </AdminButton>
                ) : null}
                {i > 0 ? (
                  <AdminButton
                    type="button"
                    $variant="ghost"
                    style={{ padding: "4px 8px", fontSize: 11 }}
                    onClick={() => applyOrder(movePhoto(photos, i, i - 1))}
                  >
                    ↑
                  </AdminButton>
                ) : null}
                {i < photos.length - 1 ? (
                  <AdminButton
                    type="button"
                    $variant="ghost"
                    style={{ padding: "4px 8px", fontSize: 11 }}
                    onClick={() => applyOrder(movePhoto(photos, i, i + 1))}
                  >
                    ↓
                  </AdminButton>
                ) : null}
                <AdminButton
                  type="button"
                  $variant="danger"
                  style={{ padding: "4px 8px", fontSize: 11 }}
                  onClick={() => applyOrder(photos.filter((_, j) => j !== i))}
                >
                  삭제
                </AdminButton>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

/** @deprecated AdminOrderedPhotoList 사용 */
export const AdminPhotoGallery = AdminOrderedPhotoList;
