/**
 * Vitest 전역 셋업. `vite.config.ts` 의 `test.setupFiles` 가 테스트 파일마다 먼저 실행한다.
 *
 * - jest-dom 매처(`toBeInTheDocument` 등)를 `expect` 에 붙인다. 화면 렌더 테스트를 쓸 때 필요하다.
 * - 각 테스트 뒤에 DOM 과 모킹을 정리한다. 이걸 빼면 앞 테스트가 만든 DOM·스텁이 다음 테스트로
 *   새어 나가 "단독으로는 통과하는데 같이 돌리면 깨지는" 테스트가 생긴다.
 */
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});
