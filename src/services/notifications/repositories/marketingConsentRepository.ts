/**
 * 광고성 알림 수신 동의 (D3, BE 계약 변경 C1 — GET/PUT /me/marketing-consent).
 * 광고(AD) 알림은 동의한 회원에게만 발송됩니다. 회원 쿠키 인증.
 */
import { apiFetch } from "@/stores/authStore";
import { bool, readJson, rec, strOrNull } from "@/services/http/apiError";

export interface MarketingConsent {
  pushAgreed: boolean;
  agreedAt: string | null;
  revokedAt: string | null;
}

export function parseMarketingConsent(raw: unknown): MarketingConsent {
  const o = rec(raw);
  return { pushAgreed: bool(o.pushAgreed), agreedAt: strOrNull(o.agreedAt), revokedAt: strOrNull(o.revokedAt) };
}

export async function fetchMarketingConsent(): Promise<MarketingConsent> {
  return parseMarketingConsent(await readJson(await apiFetch("/me/marketing-consent")));
}

export async function updateMarketingConsent(pushAgreed: boolean): Promise<MarketingConsent> {
  const res = await apiFetch("/me/marketing-consent", {
    method: "PUT",
    body: JSON.stringify({ pushAgreed }),
  });
  return parseMarketingConsent(await readJson(res));
}
