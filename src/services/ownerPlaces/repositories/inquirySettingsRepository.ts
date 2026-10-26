/** 문의 방식 설정 API (계약 C14) — GET/PUT /me/places/{placeId}/inquiry-settings. 회원 쿠키 인증 */
import { apiFetch } from "@/stores/authStore";
import { readJson } from "@/services/http/apiError";
import { parseInquirySettings, type InquiryPutBody, type InquirySettings } from "@/services/ownerPlaces/inquirySettings";

export async function fetchInquirySettings(placeId: string): Promise<InquirySettings> {
  return parseInquirySettings(await readJson(await apiFetch(`/me/places/${encodeURIComponent(placeId)}/inquiry-settings`)));
}

export async function putInquirySettings(placeId: string, body: InquiryPutBody): Promise<InquirySettings> {
  const res = await apiFetch(`/me/places/${encodeURIComponent(placeId)}/inquiry-settings`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  return parseInquirySettings(await readJson(res));
}
