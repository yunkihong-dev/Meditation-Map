# LiquidGlassTabBar

iOS 26 Liquid Glass 스타일 하단 탭바. React 19 + TypeScript, **런타임 의존성 없음**.

인디케이터는 하나입니다. 쉴 때는 알약, 움직일 때는 유리로 변합니다.

## 넣는 법

`liquid-glass-tabbar/` 폴더를 통째로 복사하고, 배럴(`index.ts`)에서 가져다 씁니다.

```tsx
import LiquidGlassTabBar, { icons, type LiquidGlassTab } from './liquid-glass-tabbar';

const TABS: LiquidGlassTab[] = [
  { key: 'home',  label: '홈',     d: icons.home  },
  { key: 'class', label: '클래스', d: icons.play  },
  { key: 'map',   label: '지도',   d: icons.map   },
  { key: 'saved', label: '찜',     d: icons.heart },
  { key: 'me',    label: '마이',   d: icons.user  },
];

function App() {
  const [tab, setTab] = useState('home');
  return (
    <LiquidGlassTabBar
      tabs={TABS} value={tab} onChange={setTab}
      style={{ position: 'fixed', left: 12, right: 12, bottom: 16, zIndex: 50 }}
    />
  );
}
```

CSS 는 컴포넌트가 스스로 import 합니다 (`import './LiquidGlassTabBar.css'`).
번들러가 CSS import 를 처리해야 합니다 — Vite / Next / CRA 모두 기본 지원합니다.

## 파일

| 파일 | 역할 |
|---|---|
| `index.ts` | 배럴 — 이것만 import 하면 됩니다 |
| `LiquidGlassTabBar.tsx` | 컴포넌트 본체 |
| `LiquidGlassTabBar.css` | 스타일 (컴포넌트가 자동 import) |
| `icons.ts` | 기본 아이콘 path 5개 |
| `example.tsx` | 사용 예시 |

위치는 컴포넌트가 정하지 않습니다. `style` 이나 `className` 으로 직접 잡으세요.

```tsx
style={{ position: 'fixed', left: 12, right: 12, bottom: 16, zIndex: 50 }}
```

## props

| prop | 기본값 | 설명 |
|---|---|---|
| `tabs` | — | `{ key, label, d }[]`. `d` 는 24×24 viewBox 기준 path |
| `value` / `defaultValue` | — | controlled / uncontrolled |
| `onChange` | — | `(key, index) => void` |
| `mode` | `'onmove'` | `onmove` 는 움직이는 동안 유리, 도착하면 까만 배경. `always` 는 유리가 항상 떠 있음 |
| `glass` | 아래 표 | 재질·모션 값 |

### glass 옵션

| 키 | 기본값 | 범위 | 설명 |
|---|---|---|---|
| `refract` | 21 | 0–300 | 굴절 세기 |
| `chroma` | 12 | 0–100 | 파장 분산(색수차) |
| `scatter` | 20 | 0–150 | 빛의 산란 |
| `blur` | 7 | px | 바 배경 블러 |
| `saturate` | 171 | % | 바 배경 채도 |
| `darkness` | 10 | 0–100 | 바 어둡기 |
| `rim` | 40 | 0–150 | 테두리 반사 |
| `size` | 108 | % | 유리일 때 지름 (바 높이 대비) |
| `ratio` | 130 | % | 가로 비율 |
| `slider` | 0 | 0–80 | 쉴 때 까만 진하기 |
| `restWidth` | 91 | 20–100 | 쉴 때 좌우 폭 % (탭과 유리 중 좁은 쪽 대비) |
| `restHeight` | 85 | 20–100 | 쉴 때 위아래 높이 % (바와 유리 중 낮은 쪽 대비) |
| `morphMs` | 200 | ms | 까만 ↔ 유리 전환 시간 |
| `moveMs` | 640 | ms | 이동 시간 |
| `jelly` | 26 | 0–100 | 젤리 변형 |
| `handoff` | 32 | 10–95 | 이동의 몇 % 지점에서 유리를 걷을지 |
| `height` | 66 | px | 바 높이 |

값을 눈으로 맞춰보려면 `../index.html` 을 브라우저로 여세요. 같은 값들을 슬라이더로 조절할 수 있습니다.

## 구조

인디케이터는 **하나**입니다. 까만 알약과 유리가 별개 요소가 아니라, 같은 요소의 두 가지 상태입니다.

```
.lgtb-ind    위치와 젤리 변형만 담당 (JS 애니메이션)
  .lgtb-skin 겉모습만 담당 (CSS 트랜지션)
             쉴 때  → scale 축소 + 까만 배경
             이동 중 → scale 1 + 유리(굴절·산란·정반사 테두리)
```

두 변형을 **서로 다른 요소**에 건 이유는, 젤리 `scale` 과 까만↔유리 `scale` 이
같은 요소에 있으면 서로 덮어쓰기 때문입니다.

## 조작

| 동작 | 결과 |
|---|---|
| 탭 | 인디케이터가 유리로 변해 그 탭까지 미끄러지고, 도착 전에 다시 까만 알약이 됨 |
| 끌기 | 유리인 채로 손가락을 따라옴 |
| 누른 채 유지 | 유리로 남음 (돋보기) |
| 손 떼기 | 탭에 정착하며 까만 알약으로 돌아옴 |

아이콘 채움은 선택 여부가 아니라 **인디케이터가 지금 어느 탭 위에 있는지**로 결정됩니다.
이동 중에는 지나가는 탭이 차례로 켜졌다 꺼지고, 차오름 애니메이션 없이 즉시 전환됩니다.

이동에는 스프링 반동이 없습니다 — 되돌아오는 구간 없는 감속 곡선 하나(`cubic-bezier(.33,.72,.16,1)`)로만 갑니다.
젤리는 스쿼시 & 스트레치 2단계입니다: 가는 중엔 양옆으로 길어지고 납작해졌다가(t≈0.20),
도착하면 반대로 눌리며 솟았다가(t≈0.52) 원래대로. `scale` 은 `translate` 와 별개
애니메이션으로 돌립니다 — 한 `transform` 에 묶으면 키프레임 경계마다 속도가 0으로
떨어져 이동이 중간에 걸리는 느낌이 납니다.

## 기본값

기본값은 플레이그라운드에서 직접 맞춘 값입니다. 그대로 쓰면 됩니다.

`slider: 0` 이라 쉴 때는 인디케이터가 보이지 않고, 아이콘 색만으로 현재 탭이 표시됩니다.
까만 알약을 보이게 하려면 `slider` 를 10~30 사이로 올리세요.

`moveMs: 640` 은 레퍼런스 GIF 를 분석해 잰 값입니다 — 23.8fps, 인디케이터가 움직이는
구간이 프레임 81~96(16프레임) ≈ 670ms. 나머지 치수(`size: 108`, `ratio: 145`)는
고해상도 캡처에서 눈으로 잰 비율이라 정확한 수치는 아닙니다.

모서리는 항상 알약(높이의 절반)으로 고정입니다 — 조절 옵션은 없습니다.

## 아이콘

`d` 는 24×24 기준 path 문자열입니다. 선 상태와 채움 상태에 **같은 path** 를 쓰므로,
집 아이콘의 문처럼 안쪽을 뚫어야 하면 서브패스를 하나 더 두면 됩니다
(`fill-rule: evenodd` 로 구멍이 납니다). `icons.ts` 의 다섯 개를 참고하세요.

## 브라우저

굴절과 파장 분산은 `backdrop-filter: url()` 을 지원하는 **Chrome·Edge** 에서만 보입니다.
Safari·Firefox 에서는 블러 + 산란 프린지 + 정반사 테두리 + 모션이 남고,
그 상태로도 완성돼 보이도록 값을 맞춰 두었습니다.

`@property` (아이콘 색 차오름) 는 Chrome 85+, Safari 16.4+, Firefox 128+ 필요.
미지원 브라우저에서는 색이 부드럽게 차오르는 대신 즉시 켜집니다.

## 접근성

`prefers-reduced-motion` 에서 모션을 **없애지 않고 줄입니다**. 탭 인디케이터의 이동은
"어디로 갔는지" 자체를 알려주는 필수 모션이라, 튕김·늘어남만 빼고 지속시간을 줄입니다.
