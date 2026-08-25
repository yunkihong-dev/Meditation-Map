/**
 * Liquid Glass Tab Bar
 *
 * 하단 탭바 하나짜리 모듈. React 19 + TypeScript, 런타임 의존성 없음.
 * 폴더째 프로젝트로 복사한 뒤 이 파일만 import 하면 됩니다.
 *
 *   import LiquidGlassTabBar, { icons, type LiquidGlassTab } from './liquid-glass-tabbar';
 *
 * 값을 눈으로 맞춰보려면 ../index.html 을 브라우저로 여세요.
 */
export { default } from './LiquidGlassTabBar';
export { default as LiquidGlassTabBar } from './LiquidGlassTabBar';
export type {
  LiquidGlassTab,
  LiquidGlassOptions,
  LiquidGlassTabBarProps,
} from './LiquidGlassTabBar';
export { icons, type IconName } from './icons';
