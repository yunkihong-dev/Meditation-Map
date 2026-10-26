/**
 * 문의 방식(계약 C14·C16) — 장소별 '우리 채팅' / '카카오톡'.
 * 링크 규칙은 BE `centerchat/domain/InquirySettingsPolicy.java:30-31` 정규식과 같아야 한다(앞뒤 공백만 제거, 500자 이하).
 * 문구도 BE `details.fields` 문구와 같게 둔다 — 클라이언트에서 막든 서버에서 막든 같은 말이 보이게.
 */
import { rec, str, strOrNull } from "@/services/http/apiError";

export type InquiryMode = "CHAT" | "KAKAO";
export type KakaoType = "OPEN_CHAT" | "CHANNEL";

export interface InquirySettings {
  placeId: string;
  mode: InquiryMode;
  kakaoType: KakaoType | null;
  kakaoUrl: string | null;
  updatedAt: string | null;
}

/** 편집 중인 값 — 링크 칸은 빈 문자열로 둔다 */
export interface InquiryDraft {
  mode: InquiryMode;
  kakaoType: KakaoType | null;
  kakaoUrl: string;
}

/** PUT 본문(전체 교체) */
export interface InquiryPutBody {
  mode: InquiryMode;
  kakaoType: KakaoType | null;
  kakaoUrl: string | null;
}

export type InquiryField = "mode" | "kakaoType" | "kakaoUrl";

export const KAKAO_URL_PLACEHOLDER: Record<KakaoType, string> = {
  OPEN_CHAT: "https://open.kakao.com/o/…",
  CHANNEL: "https://pf.kakao.com/…",
};

const MAX_URL_LENGTH = 500;
const PATTERNS: Record<KakaoType, RegExp> = {
  OPEN_CHAT: /^https:\/\/open\.kakao\.com\/o\/[A-Za-z0-9_-]{1,64}$/,
  CHANNEL: /^https:\/\/pf\.kakao\.com\/[A-Za-z0-9_-]{1,64}(\/chat)?$/,
};

const URL_MESSAGE: Record<KakaoType, string> = {
  OPEN_CHAT: "https://open.kakao.com/o/… 형식의 오픈채팅 링크여야 합니다.",
  CHANNEL: "https://pf.kakao.com/… 형식의 카카오톡 채널 링크여야 합니다.",
};

export function kakaoTypeOf(v: unknown): KakaoType | null {
  return v === "OPEN_CHAT" || v === "CHANNEL" ? v : null;
}

export function parseInquirySettings(raw: unknown): InquirySettings {
  const o = rec(raw);
  return {
    placeId: str(o.placeId),
    mode: o.mode === "KAKAO" ? "KAKAO" : "CHAT",
    kakaoType: kakaoTypeOf(o.kakaoType),
    kakaoUrl: strOrNull(o.kakaoUrl),
    updatedAt: strOrNull(o.updatedAt),
  };
}

/** BE validUrl 과 같은 판정(앞뒤 공백 제거 후) */
export function isValidKakaoUrl(type: KakaoType | null, url: string | null | undefined): boolean {
  if (!type || url == null) return false;
  const u = url.trim();
  if (!u || u.length > MAX_URL_LENGTH) return false;
  return PATTERNS[type].test(u);
}

/** BE InquirySettingsPolicy.parse 와 같은 키·문구. 빈 객체면 통과 */
export function validateInquiryDraft(d: InquiryDraft): Partial<Record<InquiryField, string>> {
  const errors: Partial<Record<InquiryField, string>> = {};
  if (d.mode !== "KAKAO") return errors;
  if (!d.kakaoType) errors.kakaoType = "OPEN_CHAT 또는 CHANNEL 이어야 합니다.";
  const url = d.kakaoUrl.trim();
  if (!url) errors.kakaoUrl = "필수입니다.";
  else if (d.kakaoType && !isValidKakaoUrl(d.kakaoType, url)) errors.kakaoUrl = URL_MESSAGE[d.kakaoType];
  return errors;
}

/**
 * PUT 본문. KAKAO 는 공백 제거한 링크. CHAT 은 형식이 맞는 링크가 있으면 함께 보내 보관한다(다시 KAKAO 로 바꿀 때 재입력 불필요, C14).
 * 반쯤 쓴 링크면 둘 다 null(서버는 CHAT 에서도 보낸 링크를 검증해 400 을 낸다).
 */
export function buildInquiryPut(d: InquiryDraft): InquiryPutBody {
  const url = d.kakaoUrl.trim();
  if (d.mode === "KAKAO") return { mode: "KAKAO", kakaoType: d.kakaoType, kakaoUrl: url || null };
  return isValidKakaoUrl(d.kakaoType, url) ? { mode: "CHAT", kakaoType: d.kakaoType, kakaoUrl: url } : { mode: "CHAT", kakaoType: null, kakaoUrl: null };
}

export function draftOf(s: InquirySettings | null): InquiryDraft {
  return { mode: s?.mode ?? "CHAT", kakaoType: s?.kakaoType ?? null, kakaoUrl: s?.kakaoUrl ?? "" };
}

/** 서버 값과 비교한 변경 여부(PUT 본문 기준 — 공백만 다른 것은 변경 아님) */
export function inquiryDirty(server: InquirySettings | null, d: InquiryDraft): boolean {
  if (!server) return false;
  const a = buildInquiryPut(d);
  const b = buildInquiryPut(draftOf(server));
  return a.mode !== b.mode || a.kakaoType !== b.kakaoType || a.kakaoUrl !== b.kakaoUrl;
}
