/**
 * Google 웹사이트 번역 위젯 연동.
 *
 * 화면 문구를 언어별로 따로 쓰지 않고, 원문(한국어) 위에 Google 번역을 얹는 방식입니다.
 * 번역 상태는 googtrans 쿠키(`/원문/대상`)에 담기고, 위젯이 그 쿠키를 읽어 페이지를 고칩니다.
 *
 * 한계 — 미리 알고 쓰는 편이 낫습니다.
 *  - 기계 번역이라 문장이 어색할 수 있고, 고유명사·프로그램명이 엉뚱하게 바뀌기도 합니다.
 *  - 이 위젯은 Google 이 공식 문서를 내린 오래된 스크립트입니다. 언제 멈출지 보장이 없습니다.
 *  - 위젯이 DOM 의 글자를 직접 갈아 끼우기 때문에 React 와 부딪힙니다(아래 patchDomForTranslate 참고).
 */

export const SOURCE_LANG = "ko";

export interface LanguageOption {
  /** Google 번역 언어 코드 */
  code: string;
  /** 그 언어를 쓰는 사람이 읽을 이름 */
  label: string;
}

/** 첫 줄(한국어)은 번역하지 않는 원문입니다. */
export const LANGUAGES: LanguageOption[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "zh-CN", label: "简体中文" },
  { code: "zh-TW", label: "繁體中文" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ไทย" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
];

export function isSupportedLanguage(code: string): boolean {
  return LANGUAGES.some((lang) => lang.code === code);
}

export function languageLabel(code: string): string {
  return LANGUAGES.find((lang) => lang.code === code)?.label ?? code;
}

const SCRIPT_ID = "mm-google-translate";
const CONTAINER_ID = "google_translate_element";
const CALLBACK = "__mmGoogleTranslateInit";
const COOKIE = "googtrans";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

type TranslateGlobal = {
  google?: {
    translate?: {
      TranslateElement?: new (options: Record<string, unknown>, container: string) => unknown;
    };
  };
} & Record<string, unknown>;

/* ── 쿠키 ────────────────────────────────────────────────
   Google 은 호스트 쿠키와 상위 도메인 쿠키 어느 쪽이든 읽습니다.
   www 와 apex 를 오가는 배포가 있어 둘 다 씁니다. */

function cookieHosts(): (string | null)[] {
  if (typeof location === "undefined") return [null];
  const host = location.hostname;
  // localhost·IP 는 domain 속성을 붙이면 브라우저가 거부합니다.
  if (!host.includes(".") || /^[\d.]+$/.test(host)) return [null];
  return [null, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
}

function writeGoogTrans(target: string): void {
  if (typeof document === "undefined") return;
  const value = `/${SOURCE_LANG}/${target}`;
  for (const domain of cookieHosts()) {
    document.cookie =
      `${COOKIE}=${value}; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax` +
      (domain ? `; domain=${domain}` : "");
  }
}

function clearGoogTrans(): void {
  if (typeof document === "undefined") return;
  for (const domain of cookieHosts()) {
    document.cookie =
      `${COOKIE}=; path=/; max-age=0; SameSite=Lax` + (domain ? `; domain=${domain}` : "");
  }
}

/* ── React 와의 충돌 완화 ──────────────────────────────── */

let domPatched = false;

/**
 * 번역 위젯은 React 가 관리하는 글자 노드를 자기 것(<font>)으로 바꿔 끼웁니다.
 * 그 뒤 React 가 원래 노드를 지우려 하면 "부모가 다르다" 며 NotFoundError 로 화면 전체가
 * 흰 화면이 됩니다. 널리 쓰이는 우회 — 부모가 어긋난 경우엔 지우지 않고 넘어갑니다.
 *
 * 번역을 실제로 켤 때만 겁니다. 한국어로 쓰는 사용자에게는 아무 영향이 없습니다.
 */
function patchDomForTranslate(): void {
  if (domPatched || typeof Node === "undefined") return;
  domPatched = true;

  const removeChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };

  const insertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(
    this: Node,
    node: T,
    child: Node | null
  ): T {
    if (child && child.parentNode !== this) return node;
    return insertBefore.call(this, node, child) as T;
  };
}

/* ── 위젯 ────────────────────────────────────────────────*/

function ensureContainer(): void {
  if (document.getElementById(CONTAINER_ID)) return;
  const el = document.createElement("div");
  el.id = CONTAINER_ID;
  // 위젯 UI 는 쓰지 않고 코드로만 몰기 때문에 눈에서 치웁니다.
  el.setAttribute("aria-hidden", "true");
  document.body.appendChild(el);
}

/** 위젯 스크립트를 한 번만 붙입니다. */
export function loadGoogleTranslate(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(SCRIPT_ID)) return;

  patchDomForTranslate();
  ensureContainer();

  const w = window as unknown as TranslateGlobal;
  w[CALLBACK] = () => {
    const TranslateElement = w.google?.translate?.TranslateElement;
    if (!TranslateElement) return;
    new TranslateElement({ pageLanguage: SOURCE_LANG, autoDisplay: false }, CONTAINER_ID);
  };

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = `https://translate.google.com/translate_a/element.js?cb=${CALLBACK}`;
  script.async = true;
  document.head.appendChild(script);
}

/** 위젯이 만든 숨은 선택 상자. 있으면 새로고침 없이 바로 바꿀 수 있습니다. */
function translateCombo(): HTMLSelectElement | null {
  if (typeof document === "undefined") return null;
  return document.querySelector<HTMLSelectElement>("select.goog-te-combo");
}

/**
 * 저장된 언어를 페이지에 적용합니다.
 *
 * 한국어면 아무것도 하지 않습니다 — 원문이 곧 한국어라 위젯을 띄울 이유가 없습니다.
 * 그 외에는 쿠키를 심고 위젯을 불러오면, 위젯이 뜨면서 쿠키대로 번역합니다.
 */
export function applySavedLanguage(code: string): void {
  if (code === SOURCE_LANG || !isSupportedLanguage(code)) return;
  writeGoogTrans(code);
  loadGoogleTranslate();
}

/**
 * 사용자가 언어를 바꿨을 때.
 *
 * 위젯이 이미 떠 있으면 선택 상자를 몰아 그 자리에서 바꾸고,
 * 아직이면(=한국어로 쓰던 중) 쿠키만 심고 새로고침합니다. 위젯은 뜰 때 한 번만
 * 페이지 전체를 훑기 때문에, 붙자마자 바꾸면 절반만 번역되는 일이 있습니다.
 */
export function changeLanguage(code: string): void {
  if (!isSupportedLanguage(code)) return;

  if (code === SOURCE_LANG) {
    // 원문으로 되돌리는 건 위젯이 깔끔하게 해 주지 못합니다. 쿠키를 지우고 다시 그립니다.
    clearGoogTrans();
    if (typeof location !== "undefined") location.reload();
    return;
  }

  writeGoogTrans(code);

  const combo = translateCombo();
  if (combo) {
    combo.value = code;
    combo.dispatchEvent(new Event("change"));
    return;
  }

  if (typeof location !== "undefined") location.reload();
}
