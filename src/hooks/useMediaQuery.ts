import { useEffect, useState } from "react";

/** 내 장소 관리(오너) 화면만 이 폭부터 데스크톱 레이아웃으로 그립니다. 앱의 나머지는 모바일 기둥 그대로. */
export const OWNER_DESKTOP_QUERY = "(min-width: 1024px)";

function matches(query: string): boolean {
  return typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia(query).matches
    : false;
}

export function useMediaQuery(query: string): boolean {
  const [value, setValue] = useState(() => matches(query));
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setValue(e.matches);
    setValue(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return value;
}

export function useOwnerDesktop(): boolean {
  return useMediaQuery(OWNER_DESKTOP_QUERY);
}
