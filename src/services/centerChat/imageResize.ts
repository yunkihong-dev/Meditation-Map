/**
 * 채팅 사진 업로드 전 축소(설계 10.8) — 긴 변 2048px 넘는 JPEG·WEBP 는 JPEG(q 0.85)로 줄입니다.
 * PNG 는 투명도를 지키려고 원본 그대로. 브라우저가 createImageBitmap·canvas 를 못 쓰면 원본.
 */
export const CHAT_IMAGE_MAX_EDGE = 2048;

export function targetSize(w: number, h: number, maxEdge = CHAT_IMAGE_MAX_EDGE): { w: number; h: number } | null {
  const edge = Math.max(w, h);
  if (edge <= maxEdge) return null;
  const r = maxEdge / edge;
  return { w: Math.round(w * r), h: Math.round(h * r) };
}

export async function downscaleImage(file: File): Promise<File> {
  if (file.type === "image/png") return file;
  if (typeof createImageBitmap !== "function" || typeof document === "undefined") return file;
  try {
    const bmp = await createImageBitmap(file);
    const size = targetSize(bmp.width, bmp.height);
    if (!size) {
      bmp.close?.();
      return file;
    }
    const canvas = document.createElement("canvas");
    canvas.width = size.w;
    canvas.height = size.h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bmp, 0, 0, size.w, size.h);
    bmp.close?.();
    const blob: Blob | null = await new Promise((res) => canvas.toBlob(res, "image/jpeg", 0.85));
    if (!blob) return file;
    const name = file.name.replace(/\.(jpe?g|webp)$/i, "") + ".jpg";
    return new File([blob], name, { type: "image/jpeg" });
  } catch {
    return file;
  }
}
