import {
  useCallback, useEffect, useId, useLayoutEffect, useRef, useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import './LiquidGlassTabBar.css';

/** 서버 렌더링에서는 useEffect 로 떨어집니다 (Next.js 경고 방지). */
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/* ────────────────────────────────────────────────────────────
   타입
   ──────────────────────────────────────────────────────────── */

export type LiquidGlassTab = {
  key: string;
  label: string;
  /** 24×24 viewBox 기준 path 데이터. 선/채움 두 상태에 같은 path를 씁니다. */
  d: string;
};

export type LiquidGlassOptions = {
  /** 굴절 세기 0–300 */              refract?: number;
  /** 파장 분산(색수차) 0–100 */      chroma?: number;
  /** 빛의 산란 0–150 */              scatter?: number;
  /** 바 배경 블러 px */              blur?: number;
  /** 바 배경 채도 % */               saturate?: number;
  /** 바 어둡기 0–100 */              darkness?: number;
  /** 테두리 반사 0–150 */            rim?: number;
  /** 유리일 때 지름, 바 높이 대비 % */ size?: number;
  /** 가로 비율 % */                  ratio?: number;
  /** 쉴 때 진하기 0–80. 낮을수록 뒤가 비칩니다 */ slider?: number;
  /** 쉴 때 좌우 폭 % — 탭과 유리 중 좁은 쪽 대비. 키우면 넓어집니다 20–100 */ restWidth?: number;
  /** 쉴 때 위아래 높이 % — 바와 유리 중 낮은 쪽 대비. 키우면 커집니다 20–100 */ restHeight?: number;
  /** 까만 ↔ 유리 전환 시간 ms */      morphMs?: number;
  /** 이동 시간 ms */                 moveMs?: number;
  /** 젤리 변형 0–100 */              jelly?: number;
  /** 젤리 속도 ms — 클수록 느리고 무겁습니다 200–900 */ jellyMs?: number;
  /** 이동의 몇 % 지점에서 유리를 걷을지 10–95 */ handoff?: number;
  /** 바 높이 px */                   height?: number;
};

export type LiquidGlassTabBarProps = {
  tabs: LiquidGlassTab[];
  /** controlled — 선택된 탭의 key */
  value?: string;
  /** uncontrolled 초기값 */
  defaultValue?: string;
  onChange?: (key: string, index: number) => void;
  /**
   * onmove — 인디케이터가 움직이는 동안만 유리로 변합니다. 쉴 때는 까만 알약이고,
   *          누르고 있는 동안에는 유리인 채로 남습니다 (기본).
   * always — 항상 유리 상태를 유지합니다.
   */
  mode?: 'onmove' | 'always';
  glass?: LiquidGlassOptions;
  className?: string;
  style?: CSSProperties;
  'aria-label'?: string;
};

const DEFAULTS: Required<LiquidGlassOptions> = {
  refract: 21, chroma: 12, scatter: 20, blur: 7, saturate: 171, darkness: 10,
  rim: 40, size: 108, ratio: 130, slider: 0, restWidth: 91, restHeight: 85,
  morphMs: 200, moveMs: 640, jelly: 26, jellyMs: 470, handoff: 32, height: 66,
};

/** 반동 없는 감속. 되돌아오는 구간이 없어 끝에서 튕기지 않습니다. */
const EASE_MOVE = 'cubic-bezier(.33,.72,.16,1)';

/**
 * 이동 속도를 눌림으로 바꿉니다. 탭이든 드래그든 **같은 함수**를 쓰기 때문에
 * 두 경우의 도중 모션이 완전히 같습니다. 빠를수록 양옆으로 길어지고 납작해집니다.
 */
const squashFor = (v: number, jm: number) =>
  Math.min(jm * 0.22, jm * (0.04 + Math.abs(v) / 110));

/**
 * 눌림이 속도에 즉각 반응하면 요란합니다. 한 프레임에 이만큼만 따라가 둔탁하게.
 * 젤리 속도(jellyMs)가 길수록 더 굼뜨게 따라갑니다.
 */
const squashLag = (jellyMs: number) =>
  Math.min(0.4, Math.max(0.04, 16 / (jellyMs * 0.35)));

/**
 * 멈출 때 출렁임 — 위아래로 부풀었다가 감쇠하며 제자리로.
 * 드래그 중 눌려 있던 상태에서 이어지도록 시작 scale 을 받습니다.
 */
const wobbleFrames = (j: number, from: string) => [
  { scale: from, offset: 0, easing: 'cubic-bezier(.25,.8,.35,1)' },
  { scale: `${(1 - 0.06 * j).toFixed(3)} ${(1 + 0.18 * j).toFixed(3)}`, offset: 0.36,
    easing: 'cubic-bezier(.4,0,.35,1)' },
  { scale: `${(1 + 0.03 * j).toFixed(3)} ${(1 - 0.06 * j).toFixed(3)}`, offset: 0.70,
    easing: 'ease-out' },
  { scale: '1 1', offset: 1 },
];

/** getComputedStyle 의 scale 은 "1" 또는 "1.06 0.94" 로 나옵니다. 항상 두 값으로. */
const readScale = (el: HTMLElement) => {
  const v = getComputedStyle(el).scale.trim();
  if (!v || v === 'none') return '1 1';
  const p = v.split(/\s+/);
  return p.length === 1 ? `${p[0]} ${p[0]}` : `${p[0]} ${p[1]}`;
};

/**
 * 굴절 맵. 가운데는 중립 회색(#808000 → R·G 모두 128)이라 왜곡이 없고,
 * 바깥으로 갈수록 R은 좌우, G는 위아래 변위가 커집니다.
 */
const MAP =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E" +
  "%3Cdefs%3E%3ClinearGradient id='x' x1='0' y1='0' x2='1' y2='0'%3E" +
  "%3Cstop offset='0' stop-color='%23000'/%3E%3Cstop offset='1' stop-color='%23f00'/%3E%3C/linearGradient%3E" +
  "%3ClinearGradient id='y' x1='0' y1='0' x2='0' y2='1'%3E" +
  "%3Cstop offset='0' stop-color='%23000'/%3E%3Cstop offset='1' stop-color='%230f0'/%3E%3C/linearGradient%3E%3C/defs%3E" +
  "%3Crect width='200' height='200' fill='%23000'/%3E" +
  "%3Crect width='200' height='200' fill='url(%23x)' style='mix-blend-mode:screen'/%3E" +
  "%3Crect width='200' height='200' fill='url(%23y)' style='mix-blend-mode:screen'/%3E" +
  "%3Crect x='46' y='40' width='108' height='120' rx='54' fill='%23808000' style='filter:blur(26px)'/%3E%3C/svg%3E";

const DRAG_MIN = 10; // 이보다 작게 움직이면 드래그가 아니라 '탭'

/* ────────────────────────────────────────────────────────────
   컴포넌트
   ──────────────────────────────────────────────────────────── */

export default function LiquidGlassTabBar({
  tabs, value, defaultValue, onChange, mode = 'onmove',
  glass, className, style, 'aria-label': ariaLabel = '주요 메뉴',
}: LiquidGlassTabBarProps) {
  const o = { ...DEFAULTS, ...glass };

  const barRef = useRef<HTMLElement>(null);
  const indRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [active, setActive] = useState(
    () => Math.max(0, tabs.findIndex(t => t.key === (value ?? defaultValue))),
  );
  const [lit, setLit] = useState(active);
  const [pressed, setPressed] = useState(false);
  const [glassUp, setGlassUp] = useState(mode === 'always');
  const [rest, setRest] = useState({ x: 0.66, y: 0.73 });

  /* 애니메이션 중 매 프레임 읽어야 하는 값은 state 대신 ref 로 둡니다. */
  const activeRef = useRef(active);
  const litRef = useRef(active);
  const indX = useRef(0);
  const glassOn = useRef(mode === 'always');
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drag = useRef<{ id: number; startX: number; moved: boolean } | null>(null);
  const squashRAF = useRef<number | null>(null);

  const filterId = `lgtb-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const reduce = () =>
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 치수 ──────────────────────────────────────────────── */
  const indW = useCallback(() => {
    const h = barRef.current ? barRef.current.offsetHeight : o.height;
    return Math.round(h * o.size / 100 * o.ratio / 100);
  }, [o.height, o.size, o.ratio]);

  const xOf = useCallback((i: number) => {
    const t = tabRefs.current[i];
    if (!t) return 0;
    return Math.round(t.offsetLeft + t.offsetWidth / 2 - indW() / 2);
  }, [indW]);

  const nearest = useCallback((cx: number) => {
    let best = 0, dist = Infinity;
    tabRefs.current.forEach((t, i) => {
      if (!t) return;
      const c = Math.abs(t.offsetLeft + t.offsetWidth / 2 - cx);
      if (c < dist) { dist = c; best = i; }
    });
    return best;
  }, []);
  const nearestRef = useRef(nearest);
  nearestRef.current = nearest;

  const tabAt = (clientX: number) => {
    const bar = barRef.current;
    return bar ? nearest(clientX - bar.getBoundingClientRect().left) : 0;
  };

  /** 인디케이터가 지나는 탭을 즉시 켭니다. */
  const light = useCallback((i: number) => {
    if (i === litRef.current) return;
    litRef.current = i;
    setLit(i);
  }, []);

  /**
   * 이동하는 동안 인디케이터의 실제 위치를 매 프레임 읽어 지나가는 탭을 켭니다.
   * 도착 탭만 켜면 중간 탭들이 건너뛰어져 훑고 지나가는 느낌이 나지 않습니다.
   */
  const trackLit = useCallback((el: HTMLElement, target: number) => {
    const step = () => {
      if (!el.isConnected) return;
      const x = parseFloat(getComputedStyle(el).translate) || 0;
      light(nearestRef.current(x + el.offsetWidth / 2));
      if (el.getAnimations().some(a => a.playState === 'running')) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    /* rAF 가 멈춘 상황(백그라운드 탭 등)에서도 최종 상태는 반드시 남도록 */
    Promise.allSettled(el.getAnimations().map(a => a.finished)).then(() => light(target));
  }, [light]);

  const select = useCallback((i: number) => {
    if (i === activeRef.current) return;
    activeRef.current = i;
    setActive(i);
    onChange?.(tabs[i].key, i);
  }, [onChange, tabs]);

  /** 취소 시점의 값이 인라인으로 굳는 것까지 감안해 애니메이션을 걷어냅니다. */
  const takeOver = () => {
    const el = indRef.current;
    if (!el) return;
    el.getAnimations().forEach(a => {
      try { a.commitStyles(); } catch { /* 대기 중이면 던집니다 — 무시 */ }
      a.cancel();
    });
  };

  /** translate 애니메이션은 건드리지 않고 scale 만 걷어냅니다. */
  const cancelScale = (el: HTMLElement) => {
    el.getAnimations().forEach(a => {
      if (a.effect && (a.effect as KeyframeEffect).getKeyframes()[0]?.scale !== undefined) a.cancel();
    });
  };

  /** 멈추면 위아래로 한 번 부풀었다 감쇠하며 제자리로 */
  const wobble = useCallback(() => {
    const el = indRef.current;
    if (!el || reduce()) return;
    const j = o.jelly / 100;
    if (j <= 0) return;
    const from = readScale(el);
    cancelScale(el);
    const a = el.animate(wobbleFrames(j, from), { duration: o.jellyMs, easing: 'linear', fill: 'forwards' });
    a.finished.then(() => { el.style.scale = '1 1'; a.cancel(); }).catch(() => { /* 취소됨 */ });
  }, [o.jelly, o.jellyMs]);

  /**
   * 인디케이터의 실제 위치를 매 프레임 읽어 속도를 구하고 눌림에 반영합니다.
   * 위치가 왜 바뀌는지(탭 애니메이션인지 손가락인지)는 보지 않기 때문에
   * 두 경우의 모션이 자동으로 동일해집니다. 속도가 잦아들면 출렁임으로 마무리합니다.
   */
  const startSquash = useCallback(() => {
    const el = indRef.current;
    if (!el || squashRAF.current !== null) return;
    if (reduce() || o.jelly <= 0) return;
    const jm = o.jelly / 100;
    const lag = squashLag(o.jellyMs);
    let lastX: number | null = null, lastT = 0, calm = 0, kSmooth = 0;

    const step = () => {
      const x = parseFloat(getComputedStyle(el).translate) || 0;
      const now = performance.now();
      let v = 0;
      if (lastX !== null) v = (x - lastX) / Math.max(8, now - lastT) * 16;
      lastX = x; lastT = now;

      kSmooth += (squashFor(v, jm) - kSmooth) * lag;          // 저역통과 — 무게감
      el.style.scale = `${(1 + kSmooth).toFixed(3)} ${(1 - kSmooth * 0.85).toFixed(3)}`;

      if (Math.abs(v) > 0.4) calm = 0;
      else if (!calm) calm = now;

      const moving = el.getAnimations().some(a =>
        (a.effect as KeyframeEffect).getKeyframes()[0]?.translate !== undefined
        && a.playState === 'running');
      if ((!drag.current && !moving) || (calm && now - calm > 90)) {
        squashRAF.current = null;
        wobble();
        return;
      }
      squashRAF.current = requestAnimationFrame(step);
    };
    squashRAF.current = requestAnimationFrame(step);
  }, [o.jelly, o.jellyMs, wobble]);

  const stopSquash = () => {
    if (squashRAF.current !== null) { cancelAnimationFrame(squashRAF.current); squashRAF.current = null; }
  };

  /* ── 겉모습 전환 (까만 알약 ↔ 유리) ─────────────────────── */
  const showGlass = useCallback(() => {
    if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; }
    if (glassOn.current) return;
    glassOn.current = true;
    setGlassUp(true);
  }, []);

  /**
   * 도착 전에 유리를 걷습니다. 예약 시점에 아직 누르고 있으면 걷지 않습니다 —
   * 들고 있는 동안은 유리(돋보기)로 남고, 뗄 때 다시 예약합니다.
   */
  const scheduleHide = useCallback((delay: number) => {
    if (mode === 'always') return;
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      hideTimer.current = null;
      if (drag.current) return;
      glassOn.current = false;
      setGlassUp(false);
      light(activeRef.current);
    }, delay);
  }, [mode, light]);

  /* ── 이동 ──────────────────────────────────────────────── */

  /**
   * 인디케이터를 탭 i 로 옮깁니다.
   *
   * translate 와 scale 을 서로 다른 애니메이션으로 돌립니다. 하나의 transform 에
   * 넣고 키프레임을 쪼개면 구간 경계마다 속도가 0으로 떨어져 "걸리는" 느낌이 납니다.
   * 위치는 키프레임 한 쌍 + 반동 없는 감속 곡선 하나로만 갑니다.
   */
  const moveTo = useCallback((i: number, fromX?: number) => {
    const el = indRef.current;
    if (!el) return 0;
    const cur = readScale(el);          // 드래그로 눌려 있던 상태에서 이어붙인다
    el.getAnimations().forEach(a => a.cancel());
    el.style.scale = cur;               // 취소로 값이 튀지 않게 현재 눌림을 인라인으로 고정
    const from = fromX ?? indX.current;
    const to = xOf(i);
    indX.current = to;

    const soft = reduce();
    const dur = soft ? Math.round(o.moveMs * 0.6) : o.moveMs;
    if (Math.abs(to - from) < 1) { el.style.translate = `${to}px`; return 0; }

    el.animate(
      [{ translate: `${from}px` }, { translate: `${to}px` }],
      { duration: dur, easing: EASE_MOVE, fill: 'forwards' },
    );
    return dur;
  }, [xOf, o.moveMs, o.jelly]);

  /* ── 배치 ──────────────────────────────────────────────── */
  const layout = useCallback(() => {
    const bar = barRef.current, el = indRef.current, tab = tabRefs.current[0];
    if (!bar || !el || !tab) return;
    el.getAnimations().forEach(a => a.cancel());

    /* 쉴 때는 바 안에 들어가는 까만 알약이 되도록 껍데기를 줄입니다. */
    const h = bar.offsetHeight;
    const d = Math.round(h * o.size / 100);
    /* 기준은 "탭과 유리 중 좁은 쪽". 탭이 유리보다 넓을 때 탭 기준으로만 재면
       상한(scale 1)에 걸려 값이 먹통이 됩니다. 값을 키우면 알약이 커집니다. */
    const w = indW();
    const clamp = (v: number) => Math.min(1, Math.max(0.05, v));
    setRest({
      x: clamp((o.restWidth / 100) * Math.min(tab.offsetWidth, w) / w),
      y: clamp((o.restHeight / 100) * Math.min(h, d) / d),
    });

    indX.current = xOf(activeRef.current);
    el.style.translate = `${indX.current}px`;
    el.style.scale = '1 1';
    litRef.current = activeRef.current;
    setLit(activeRef.current);
  }, [xOf, indW, o.size, o.restWidth, o.restHeight]);

  useIsoLayoutEffect(layout, [layout, tabs.length, o.height, o.ratio]);

  useEffect(() => {
    const on = () => layout();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [layout]);

  useEffect(() => () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (squashRAF.current !== null) cancelAnimationFrame(squashRAF.current);
  }, []);

  /* controlled: 바깥에서 value 가 바뀌면 따라갑니다 */
  useEffect(() => {
    if (value === undefined) return;
    const i = tabs.findIndex(t => t.key === value);
    if (i < 0 || i === activeRef.current) return;
    activeRef.current = i;
    setActive(i);
    showGlass();
    const dur = moveTo(i);
    if (dur && indRef.current) trackLit(indRef.current, i); else light(i);
    scheduleHide(dur ? Math.round(dur * o.handoff / 100) : 260);
  }, [value, tabs, moveTo, showGlass, scheduleHide, trackLit, light, o.handoff]);

  /* ── 포인터 ────────────────────────────────────────────── */
  const begin = (i: number) => {
    const from = activeRef.current;
    select(i);
    takeOver();
    showGlass();                                    // 움직이는 동안은 유리
    const dur = i === from ? 0 : moveTo(i);
    if (dur && indRef.current) { trackLit(indRef.current, i); startSquash(); } else light(i);
    scheduleHide(dur ? Math.round(dur * o.handoff / 100) : 260);
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLElement>) => {
    setPressed(true);
    drag.current = { id: e.pointerId, startX: e.clientX, moved: false };
    try { barRef.current?.setPointerCapture(e.pointerId); } catch { /* 이미 놓인 포인터 */ }
    begin(tabAt(e.clientX));
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    const d = drag.current, bar = barRef.current, el = indRef.current;
    if (!d || !bar || !el || e.pointerId !== d.id) return;
    if (!d.moved) {
      if (Math.abs(e.clientX - d.startX) < DRAG_MIN) return;  // 손떨림은 무시
      d.moved = true;
      takeOver();
      showGlass();                                  // 끄는 동안에도 유리
    }
    startSquash();                                  // 탭과 완전히 같은 눌림 루프
    const left = bar.getBoundingClientRect().left;
    const w = indW();
    /* 첫 탭 · 마지막 탭 위치를 벗어나지 않게 딱 잘라냅니다 (고무줄 없음) */
    const lo = xOf(0), hi = xOf(tabRefs.current.length - 1);
    const x = Math.max(lo, Math.min(hi, e.clientX - left - w / 2));
    indX.current = x;
    el.style.translate = `${x}px`;

    const i = nearest(e.clientX - left);
    light(i);
    select(i);
  };

  const endDrag = (e: ReactPointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d || e.pointerId !== d.id) return;
    drag.current = null;
    setPressed(false);
    try { barRef.current?.releasePointerCapture(e.pointerId); } catch { /* noop */ }

    if (d.moved) {
      const i = nearest(indX.current + indW() / 2);
      select(i);
      const dur = moveTo(i);
      if (dur && indRef.current) { trackLit(indRef.current, i); startSquash(); }
      else { light(i); stopSquash(); wobble(); }   // 제자리에서 놓으면 출렁임만
      scheduleHide(dur ? Math.round(dur * o.handoff / 100) : 160);
    } else if (!hideTimer.current) {
      scheduleHide(160);                            // 꾹 눌렀다 뗀 경우
    }
  };

  const onKeyDown = (e: ReactKeyboardEvent, i: number) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    begin(i);
  };

  /* ── 굴절 강도: R·G·B 를 서로 다르게 밀어 파장 분산을 만든다 ── */
  const base = o.refract / 1000, c = o.chroma / 100;
  const scales = [base, base * (1 + c * 0.55), base * (1 + c * 1.15)];
  const skinFilter = base > 0
    ? `url(#${filterId}) brightness(1.16) saturate(1.25)`
    : 'brightness(1.16) saturate(1.25)';

  const vars = {
    '--lgtb-h': `${o.height}px`,
    '--lgtb-blur': `${o.blur}px`,
    '--lgtb-sat': `${o.saturate}%`,
    '--lgtb-dark': o.darkness / 100,
    '--lgtb-rim': o.rim / 100,
    '--lgtb-d': `${Math.round(o.height * o.size / 100)}px`,
    '--lgtb-r': o.ratio / 100,
    '--lgtb-slider': o.slider / 100,
    '--lgtb-rest-x': rest.x,
    '--lgtb-rest-y': rest.y,
    '--lgtb-scatter': o.scatter / 100,
    '--lgtb-morph': `${o.morphMs}ms`,
    ...style,
  } as CSSProperties;

  return (
    <nav
      ref={barRef}
      className={['lgtb', className].filter(Boolean).join(' ')}
      style={vars}
      data-mode={mode}
      data-pressed={pressed}
      data-glass={glassUp}
      role="tablist"
      aria-label={ariaLabel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* 인디케이터 하나. 쉴 때는 까만 알약, 이동 중에는 유리로 변합니다. */}
      <div ref={indRef} className="lgtb-ind" aria-hidden="true">
        <div
          className="lgtb-skin"
          style={{
            backdropFilter: glassUp ? skinFilter : undefined,
            WebkitBackdropFilter: glassUp ? skinFilter : undefined,
          } as CSSProperties}
        >
          <span className="lgtb-bloom" />
          <span className="lgtb-prism" />
        </div>
      </div>

      {tabs.map((t, i) => (
        <button
          key={t.key}
          ref={el => { tabRefs.current[i] = el; }}
          type="button"
          role="tab"
          className="lgtb-tab"
          aria-selected={i === active}
          data-lit={i === lit}
          onKeyDown={e => onKeyDown(e, i)}
        >
          <span className="lgtb-ico">
            <svg className="lgtb-line" viewBox="0 0 24 24" aria-hidden="true"><path d={t.d} /></svg>
            <svg className="lgtb-solid" viewBox="0 0 24 24" aria-hidden="true"><path d={t.d} /></svg>
          </span>
          <span>{t.label}</span>
        </button>
      ))}

      <svg className="lgtb-defs" aria-hidden="true">
        <filter
          id={filterId}
          primitiveUnits="objectBoundingBox"
          x="0" y="0" width="1" height="1"
          colorInterpolationFilters="sRGB"
        >
          <feImage preserveAspectRatio="none" x="0" y="0" width="1" height="1" result="map" href={MAP} />
          {(['R', 'G', 'B'] as const).map((ch, k) => (
            <feDisplacementMap
              key={ch}
              in="SourceGraphic" in2="map"
              scale={scales[k]}
              xChannelSelector="R" yChannelSelector="G"
              result={`p${ch}`}
            />
          ))}
          <feColorMatrix in="pR" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="cR" />
          <feColorMatrix in="pG" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="cG" />
          <feColorMatrix in="pB" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="cB" />
          <feBlend in="cR" in2="cG" mode="screen" result="cRG" />
          <feBlend in="cRG" in2="cB" mode="screen" />
        </filter>
      </svg>
    </nav>
  );
}
