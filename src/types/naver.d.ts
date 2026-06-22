export {};

declare global {
  interface Window {
    naver?: {
      maps: {
        LatLng: new (lat: number, lng: number) => unknown;
        Map: new (el: string | HTMLElement, options: Record<string, unknown>) => unknown;
        Marker: new (options: { position: unknown; map: unknown }) => unknown;
        Service?: {
          geocode: (
            opts: { query: string },
            cb: (
              status: string | number,
              response: { v2?: { addresses?: Array<{ x: string; y: string; roadAddress?: string; jibunAddress?: string }> } }
            ) => void
          ) => void;
          Status?: { OK: string; ERROR: string };
        };
      };
    };
    navermap_authFailure?: () => void;
  }
}
