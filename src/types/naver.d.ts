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
            opts: { address: string },
            cb: (
              status: string,
              response: { result?: { items?: Array<{ point: { x: number; y: number } }> } }
            ) => void
          ) => void;
          Status?: { OK: string; ERROR: string };
        };
      };
    };
    navermap_authFailure?: () => void;
  }
}
