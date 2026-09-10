import {
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * 배너 이미지 자르기.
 *
 * 올린 사진이 배너 비율과 다르면 홈에서 object-fit: cover 로 잘립니다. 그 잘리는 자리를
 * 서버가 아니라 올리는 사람이 정하게 하는 화면입니다. 여기서 정한 그대로 내보내므로,
 * 홈에서 다시 잘릴 일이 없습니다.
 *
 * 라이브러리를 쓰지 않고 직접 그립니다. 필요한 동작이 끌기·확대 둘뿐이라
 * 의존성을 하나 더 늘릴 만큼은 아닙니다.
 */

/**
 * 1 = 틀을 꽉 채우는 크기(cover). 그보다 작게도 줄일 수 있게 열어 둡니다.
 * 세로로 긴 사진이나 로고처럼, 잘라내기보다 통째로 넣고 여백을 두는 편이 나은 소재가 있습니다.
 */
const MIN_ZOOM = 0.2;
const MAX_ZOOM = 4;

/** 사진을 줄였을 때 드러나는 뒷배경. 앱 팔레트에서 골랐습니다. */
const BACKGROUNDS = [
  { label: "연보라", value: "#E9D8FD" },
  { label: "라벤더", value: "#D6BCFA" },
  { label: "흰색", value: "#FFFFFF" },
  { label: "표면", value: "#F7FAFC" },
  { label: "먹빛", value: "#211631" },
];

interface Props {
  /** 편집할 원본 파일 */
  file: File;
  /** 내보낼 가로 픽셀 */
  outputWidth: number;
  /** 내보낼 세로 픽셀 */
  outputHeight: number;
  onCancel: () => void;
  onDone: (cropped: File) => void;
}

export default function AdminImageCropper({
  file,
  outputWidth,
  outputHeight,
  onCancel,
  onDone,
}: Props) {
  const aspect = outputWidth / outputHeight;

  const frameRef = useRef<HTMLDivElement>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [frame, setFrame] = useState({ w: 0, h: 0 });
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [background, setBackground] = useState(BACKGROUNDS[0].value);
  const [busy, setBusy] = useState(false);
  const drag = useRef<{ id: number; x: number; y: number } | null>(null);

  /* 원본 읽기 */
  useEffect(() => {
    const url = URL.createObjectURL(file);
    const el = new Image();
    el.onload = () => setImg(el);
    el.src = url;
    return () => URL.revokeObjectURL(url);
  }, [file]);

  /* 미리보기 틀의 실제 픽셀 크기 — 확대·이동 한계를 여기 기준으로 잽니다. */
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const measure = () => setFrame({ w: el.clientWidth, h: el.clientWidth / aspect });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [aspect]);

  /**
   * zoom 1 = 틀을 꽉 채우는 크기(cover). 그래서 어떤 배율에서도 빈 곳이 생기지 않습니다.
   */
  const baseScale = img && frame.w ? Math.max(frame.w / img.width, frame.h / img.height) : 1;
  const drawnW = img ? img.width * baseScale * zoom : 0;
  const drawnH = img ? img.height * baseScale * zoom : 0;

  /**
   * 이동 범위를 가둡니다.
   * 사진이 틀보다 크면 가장자리 너머로는 못 밀고(여백이 새지 않게),
   * 작으면 틀 안에서만 움직입니다(밖으로 나가 사라지지 않게).
   */
  const clampOffset = useCallback(
    (next: { x: number; y: number }) => {
      const maxX = Math.abs(drawnW - frame.w) / 2;
      const maxY = Math.abs(drawnH - frame.h) / 2;
      return {
        x: Math.min(maxX, Math.max(-maxX, next.x)),
        y: Math.min(maxY, Math.max(-maxY, next.y)),
      };
    },
    [drawnW, drawnH, frame.w, frame.h]
  );

  useEffect(() => setOffset((o) => clampOffset(o)), [clampOffset]);

  const onPointerDown = (e: ReactPointerEvent) => {
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    drag.current = { ...d, x: e.clientX, y: e.clientY };
    setOffset((o) => clampOffset({ x: o.x + dx, y: o.y + dy }));
  };

  const endDrag = (e: ReactPointerEvent) => {
    if (drag.current?.id === e.pointerId) drag.current = null;
  };

  const onWheel = (e: ReactWheelEvent) => {
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z - e.deltaY * 0.002)));
  };

  /** 화면에서 보이는 그대로를 목표 픽셀로 다시 그려 내보냅니다. */
  const exportCrop = async () => {
    if (!img || !frame.w) return;
    setBusy(true);
    try {
      const canvas = document.createElement("canvas");
      canvas.width = outputWidth;
      canvas.height = outputHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("캔버스를 만들지 못했습니다");

      // 사진을 줄였을 때 드러나는 자리. JPEG 은 투명을 담지 못하므로 반드시 칠해야 합니다.
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, outputWidth, outputHeight);

      // 미리보기 틀 → 출력 픽셀 배율. 보이는 구도가 그대로 유지됩니다.
      const k = outputWidth / frame.w;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        img,
        (outputWidth - drawnW * k) / 2 + offset.x * k,
        (outputHeight - drawnH * k) / 2 + offset.y * k,
        drawnW * k,
        drawnH * k
      );

      const blob = await new Promise<Blob | null>((res) =>
        // 사진이 대부분이라 JPEG. 품질 0.9 면 눈에 띄는 손실 없이 용량이 크게 줄어듭니다.
        canvas.toBlob(res, "image/jpeg", 0.9)
      );
      if (!blob) throw new Error("이미지를 만들지 못했습니다");

      const base = file.name.replace(/\.[^.]+$/, "");
      onDone(new File([blob], `${base}-${outputWidth}x${outputHeight}.jpg`, { type: "image/jpeg" }));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="배너 이미지 자르기"
      onClick={onCancel}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.6)",
        display: "grid",
        placeItems: "center",
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(720px, 100%)",
          background: "#18181b",
          border: "1px solid #3f3f46",
          borderRadius: 14,
          padding: 20,
          color: "#fff",
        }}
      >
        <h3 style={{ margin: "0 0 4px", fontSize: 16 }}>배너 이미지 자르기</h3>
        <p style={{ margin: "0 0 16px", color: "#a1a1aa", fontSize: 13, lineHeight: 1.6 }}>
          끌어서 위치를 잡고, 휠이나 아래 막대로 키우거나 줄입니다. 줄이면 드러나는 자리는
          아래에서 고른 배경색으로 채웁니다. 지금 보이는 그대로{" "}
          <strong style={{ color: "#e4e4e7" }}>
            {outputWidth} × {outputHeight}
          </strong>{" "}
          으로 저장됩니다.
        </p>

        {/* 자르기 틀 */}
        <div
          ref={frameRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onWheel={onWheel}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: `${outputWidth} / ${outputHeight}`,
            overflow: "hidden",
            borderRadius: 8,
            background,
            cursor: drag.current ? "grabbing" : "grab",
            touchAction: "none",
            userSelect: "none",
          }}
        >
          {img && (
            <img
              src={img.src}
              alt=""
              draggable={false}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: drawnW,
                height: drawnH,
                transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
                maxWidth: "none",
              }}
            />
          )}

          {/*
           * 안전 영역. 배너는 기기 폭에 따라 좌우가 조금씩 더 잘립니다.
           * 글자와 로고를 이 안에 두면 어느 화면에서도 살아남습니다.
           */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "12% 8%",
              border: "1px dashed rgba(255,255,255,0.45)",
              borderRadius: 4,
              pointerEvents: "none",
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "8%",
              bottom: "12%",
              transform: "translateY(120%)",
              color: "rgba(255,255,255,0.55)",
              fontSize: 11,
              pointerEvents: "none",
            }}
          >
            점선 안 = 안전 영역 (글자·로고는 여기 안에)
          </span>
        </div>

        {/* 확대 */}
        <label style={{ display: "flex", alignItems: "center", gap: 10, margin: "16px 0 8px" }}>
          <span style={{ fontSize: 13, color: "#a1a1aa", flexShrink: 0 }}>크기</span>
          <input
            type="range"
            min={MIN_ZOOM}
            max={MAX_ZOOM}
            step={0.01}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            style={{ flex: 1 }}
          />
          <span style={{ fontSize: 12, color: "#71717a", width: 40, textAlign: "right" }}>
            {zoom.toFixed(1)}×
          </span>
        </label>

        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 16px" }}>
          <span style={{ fontSize: 13, color: "#a1a1aa", flexShrink: 0 }}>배경</span>
          <div style={{ display: "flex", gap: 6 }}>
            {BACKGROUNDS.map((bg) => (
              <button
                key={bg.value}
                type="button"
                title={bg.label}
                aria-label={bg.label}
                aria-pressed={background === bg.value}
                onClick={() => setBackground(bg.value)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 6,
                  background: bg.value,
                  cursor: "pointer",
                  border:
                    background === bg.value ? "2px solid #a78bfa" : "1px solid rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
          {/* 팔레트에 없는 색이 필요할 때 — 소재 배경과 정확히 맞춰야 하는 경우가 있습니다. */}
          <label
            style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#71717a" }}
          >
            직접
            <input
              type="color"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              style={{
                width: 26,
                height: 26,
                padding: 0,
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 6,
                background: "none",
                cursor: "pointer",
              }}
            />
          </label>
        </div>

        <ul style={{ margin: "0 0 16px", paddingLeft: 18, color: "#71717a", fontSize: 12, lineHeight: 1.7 }}>
          <li>가로가 긴 사진일수록 잘리는 곳이 적습니다.</li>
          <li>글자가 든 이미지는 점선 안에 두세요. 좁은 기기에서 가장자리가 더 잘립니다.</li>
          <li>세로로 긴 사진·로고는 줄여서 넣고 배경으로 채우는 편이 낫습니다.</li>
          <li>원본이 {outputWidth}px보다 작으면 확대할수록 흐려집니다.</li>
        </ul>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button
            type="button"
            onClick={onCancel}
            style={{
              padding: "9px 16px",
              borderRadius: 8,
              border: "1px solid #3f3f46",
              background: "transparent",
              color: "#e4e4e7",
              cursor: "pointer",
            }}
          >
            취소
          </button>
          <button
            type="button"
            disabled={!img || busy}
            onClick={() => void exportCrop()}
            style={{
              padding: "9px 16px",
              borderRadius: 8,
              border: "none",
              background: "#7c3aed",
              color: "#fff",
              cursor: img && !busy ? "pointer" : "not-allowed",
              opacity: img && !busy ? 1 : 0.6,
            }}
          >
            {busy ? "만드는 중…" : "이대로 올리기"}
          </button>
        </div>
      </div>
    </div>
  );
}
