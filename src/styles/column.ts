import { css } from "styled-components";

/**
 * 앱은 모바일 한 벌입니다. 넓은 화면에서는 늘리지 않고 가운데 기둥으로 세웁니다.
 * (Layout 의 LayoutShell 과 같은 폭. 관리자 화면만 예외로 PC 폭을 씁니다.)
 *
 * 문제는 position: fixed 인 것들입니다. 기둥 안에 있어도 fixed 는 뷰포트를 기준으로
 * 놓이므로, left: 0 / right: 0 으로 두면 기둥을 무시하고 화면 끝까지 퍼집니다.
 * 지도·시트·서랍·랜딩이 그랬습니다. 여기 있는 것들로 기둥 안에 가둡니다.
 */
export const COLUMN_MAX_PX = 480;

/**
 * 가로를 채우는 fixed 요소를 기둥 안에 가둡니다.
 *
 * transform: translateX(-50%) 로 가운데를 맞추지 않습니다. transform 은 안쪽 fixed
 * 요소의 기준을 바꿔 버리고, 눌림 애니메이션(scale) 과 겹치면 서로 덮어씁니다.
 * left/right 를 0 으로 열고 max-width + margin 으로 가운데를 잡으면 transform 을
 * 비워 둘 수 있습니다. (탭바가 이미 이 방식입니다.)
 */
export const fixedInColumn = css`
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${COLUMN_MAX_PX}px;
  margin-inline: auto;
`;

/**
 * 기둥의 오른쪽/왼쪽 가장자리에서 px 만큼 안쪽에 붙입니다.
 * 화면이 기둥보다 좁으면 그냥 px, 넓으면 기둥 가장자리 기준으로 계산됩니다.
 * "내 위치" 버튼처럼 한쪽 모서리에 붙는 fixed 요소용입니다.
 */
export const edgeInColumn = (px: number) =>
  `max(${px}px, calc(50% - ${COLUMN_MAX_PX / 2 - px}px))`;
