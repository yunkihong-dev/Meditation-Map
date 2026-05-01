/** 네이버 지도 JS API 로드 (기본 맵만; geocoder 서브모듈 없음). */
export async function ensureNaverMapsCore(ncpKeyId: string | undefined): Promise<boolean> {
  const key = ncpKeyId?.trim();
  if (!key) return false;

  const naverWin = window.naver as { maps?: { Map?: unknown } } | undefined;
  if (naverWin?.maps?.Map) return true;

  const waitForMap = () =>
    new Promise<void>((resolve, reject) => {
      const t0 = Date.now();
      const id = window.setInterval(() => {
        const w = window.naver as { maps?: { Map?: unknown } } | undefined;
        if (w?.maps?.Map) {
          window.clearInterval(id);
          resolve();
        } else if (Date.now() - t0 > 25000) {
          window.clearInterval(id);
          reject(new Error("Naver Maps 로드 시간 초과"));
        }
      }, 50);
    });

  if (document.querySelector('script[src*="oapi.map.naver.com"]')) {
    try {
      await waitForMap();
      return true;
    } catch {
      return false;
    }
  }

  await new Promise<void>((resolve, reject) => {
    const cb = `__naverMapCb_${Date.now()}`;
    (window as unknown as Record<string, () => void>)[cb] = () => {
      resolve();
      delete (window as unknown as Record<string, unknown>)[cb];
    };
    const script = document.createElement("script");
    script.async = true;
    script.onerror = () => {
      delete (window as unknown as Record<string, unknown>)[cb];
      reject(new Error("Naver Maps 스크립트 로드 실패"));
    };
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(key)}&callback=${cb}`;
    document.head.appendChild(script);
  });

  return true;
}
