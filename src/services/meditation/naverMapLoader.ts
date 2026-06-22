/** 네이버 지도 JS API 로드 (geocoder 서브모듈 포함). */
function hasMapApi(): boolean {
  return Boolean((window.naver as { maps?: { Map?: unknown } } | undefined)?.maps?.Map);
}

function hasGeocoder(): boolean {
  const svc = (window.naver as { maps?: { Service?: { geocode?: unknown } } } | undefined)?.maps?.Service;
  return typeof svc?.geocode === "function";
}

function existingMapScript(): HTMLScriptElement | null {
  return document.querySelector('script[src*="oapi.map.naver.com"]');
}

function scriptIncludesGeocoder(script: HTMLScriptElement): boolean {
  return script.src.includes("geocoder");
}

async function waitFor(
  predicate: () => boolean,
  label: string,
  timeoutMs = 25000
): Promise<void> {
  if (predicate()) return;
  await new Promise<void>((resolve, reject) => {
    const t0 = Date.now();
    const id = window.setInterval(() => {
      if (predicate()) {
        window.clearInterval(id);
        resolve();
      } else if (Date.now() - t0 > timeoutMs) {
        window.clearInterval(id);
        reject(new Error(`${label} 로드 시간 초과`));
      }
    }, 50);
  });
}

async function injectNaverMapsScript(key: string): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const cb = `__naverMapsCb_${Date.now()}`;
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
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(key)}&submodules=geocoder&callback=${cb}`;
    document.head.appendChild(script);
  });
}

/** geocoder 없이 로드된 스크립트가 있으면 geocoder를 쓸 수 없어 새로고침이 필요합니다. */
function warnIfGeocoderBlocked(): boolean {
  const script = existingMapScript();
  if (!script || scriptIncludesGeocoder(script) || !hasMapApi()) return false;
  return !hasGeocoder();
}

async function ensureNaverMapsLoaded(ncpKeyId: string | undefined): Promise<boolean> {
  const key = ncpKeyId?.trim();
  if (!key) return false;

  if (hasMapApi() && hasGeocoder()) return true;

  if (warnIfGeocoderBlocked()) {
    throw new Error(
      "지도 API가 geocoder 없이 로드되었습니다. 페이지를 새로고침한 뒤 다시 검색해 주세요."
    );
  }

  const script = existingMapScript();
  if (script && scriptIncludesGeocoder(script)) {
    try {
      await waitFor(() => hasMapApi() && hasGeocoder(), "Naver Maps(geocoder)");
      return hasMapApi() && hasGeocoder();
    } catch {
      return false;
    }
  }

  if (script && !scriptIncludesGeocoder(script)) {
    script.remove();
  }

  await injectNaverMapsScript(key);
  try {
    await waitFor(() => hasMapApi() && hasGeocoder(), "Naver Maps(geocoder)");
    return true;
  } catch {
    return false;
  }
}

export async function ensureNaverMapsCore(ncpKeyId: string | undefined): Promise<boolean> {
  try {
    return await ensureNaverMapsLoaded(ncpKeyId);
  } catch {
    return false;
  }
}

export async function ensureNaverMapsGeocoder(ncpKeyId: string | undefined): Promise<boolean> {
  return ensureNaverMapsLoaded(ncpKeyId);
}
