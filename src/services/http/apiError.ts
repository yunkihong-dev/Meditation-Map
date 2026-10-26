/**
 * BE 오류 본문(`ApiErrorResponse`: `{ code, message, details? }`)을 읽어 들인 예외.
 *
 * 화면은 `code`로 분기하고(409 PLACE_ALREADY_OWNED 등), 사람에게는 `message`를 보여 줍니다.
 * 미인증 401은 본문이 `{"error":"UNAUTHORIZED"}`라 code 대신 error 키를 함께 봅니다.
 */
export class ApiError extends Error {
  readonly status: number;
  readonly code: string | null;
  /** 400 VALIDATION_FAILED · PLACE_OWNER_FIELD_NOT_ALLOWED 의 `details.fields` */
  readonly fields: string[];
  /** `details.fields` 가 맵일 때 키별 서버 문구(정규화한 최상위 키 → 첫 문구). 배열이면 비어 있다 */
  readonly fieldMessages: Record<string, string>;

  constructor(status: number, code: string | null, message: string, fields: string[] = [], fieldMessages: Record<string, string> = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.fields = fields;
    this.fieldMessages = fieldMessages;
  }
}

function asRecord(v: unknown): Record<string, unknown> | null {
  return v != null && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : null;
}

/**
 * `details.fields` 는 두 모양으로 옵니다(QA Q2).
 * - 배열: `["address","hidden"]` (PLACE_OWNER_FIELD_NOT_ALLOWED)
 * - 맵: `{"name":"…","photos[0]":"…","programs[0].id":"…"}` (VALIDATION_FAILED)
 * 맵이면 키를 읽고, 둘 다 `photos[0]`·`programs[0].id` 를 최상위 키(`photos`·`programs`)로 잘라 중복을 없앱니다.
 */
export function normalizeFieldKeys(raw: unknown): string[] {
  let keys: string[] = [];
  if (Array.isArray(raw)) keys = raw.filter((f): f is string => typeof f === "string");
  else {
    const m = asRecord(raw);
    if (m) keys = Object.keys(m);
  }
  const out: string[] = [];
  for (const k of keys) {
    const top = k.split(/[.[]/, 1)[0].trim();
    if (top && !out.includes(top)) out.push(top);
  }
  return out;
}

/** 응답 본문 텍스트 → ApiError. JSON이 아니어도 터지지 않습니다. */
export function apiErrorFrom(status: number, text: string): ApiError {
  let code: string | null = null;
  let message = "";
  let fields: string[] = [];
  const fieldMessages: Record<string, string> = {};
  if (text) {
    try {
      const j = asRecord(JSON.parse(text));
      if (j) {
        if (typeof j.code === "string") code = j.code;
        else if (typeof j.error === "string") code = j.error;
        if (typeof j.message === "string") message = j.message;
        const details = asRecord(j.details);
        if (details) {
          fields = normalizeFieldKeys(details.fields);
          const m = asRecord(details.fields);
          if (m) {
            for (const [k, v] of Object.entries(m)) {
              const top = k.split(/[.[]/, 1)[0].trim();
              if (top && typeof v === "string" && !(top in fieldMessages)) fieldMessages[top] = v;
            }
          }
        }
      }
    } catch {
      // JSON 이 아니면 원문을 메시지로 쓰지 않습니다(HTML 오류 페이지가 토스트에 뜨지 않게).
    }
  }
  if (!message) message = status === 401 ? "로그인이 필요해요." : "요청을 처리하지 못했어요.";
  return new ApiError(status, code, message, fields, fieldMessages);
}

/** 성공이면 JSON(204면 undefined), 실패면 ApiError 를 던집니다. 타입 검증은 호출하는 쪽 파서가 합니다. */
export async function readJson(res: Response): Promise<unknown> {
  if (!res.ok) throw apiErrorFrom(res.status, await res.text().catch(() => ""));
  if (res.status === 204) return undefined;
  const text = await res.text();
  if (!text) return undefined;
  return JSON.parse(text) as unknown;
}

export async function expectOk(res: Response): Promise<void> {
  if (!res.ok) throw apiErrorFrom(res.status, await res.text().catch(() => ""));
}

/** 사람에게 보여 줄 메시지. ApiError 가 아니면 기본 문구. */
export function errorMessage(e: unknown, fallback = "요청을 처리하지 못했어요."): string {
  if (e instanceof ApiError) return e.message || fallback;
  return fallback;
}

// ── 런타임 파싱 도우미 ─────────────────────────────────────
// 응답을 `as`로 캐스팅하고 끝내지 않습니다. 키가 빠지거나 타입이 다르면 기본값으로 떨어뜨립니다.

export function rec(v: unknown): Record<string, unknown> {
  return asRecord(v) ?? {};
}

export function str(v: unknown, fallback = ""): string {
  if (typeof v === "string") return v;
  if (typeof v === "number" && Number.isFinite(v)) return String(v);
  return fallback;
}

export function strOrNull(v: unknown): string | null {
  if (typeof v === "string") return v === "" ? null : v;
  if (typeof v === "number" && Number.isFinite(v)) return String(v);
  return null;
}

export function num(v: unknown, fallback = 0): number {
  return typeof v === "number" && Number.isFinite(v) ? v : fallback;
}

export function bool(v: unknown, fallback = false): boolean {
  return typeof v === "boolean" ? v : fallback;
}

export function arr(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}
