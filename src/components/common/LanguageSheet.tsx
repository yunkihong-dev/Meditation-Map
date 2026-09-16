import {
  type KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled, { keyframes } from "styled-components";
import Icon from "@/components/common/Icon";
import { LANGUAGES, SOURCE_LANG } from "@/services/i18n/googleTranslate";

/**
 * 언어 고르기 시트 — 드럼(휠) 방식.
 *
 * 가운데 띠에 놓인 것이 지금 고른 언어입니다. 손으로 드르륵 굴리면 가운데 오는 것으로
 * 바뀌고, 아래 버튼으로 확정합니다. 목록을 쭉 늘어놓는 것보다 한 자리에서
 * 굴려 찾는 편이 낯선 문자 속에서 제 언어를 찾기 쉽고, 화면도 짧게 끝납니다.
 *
 * 굴리는 건 네이티브 스크롤 + scroll-snap 입니다. 손에 그대로 붙고, 관성도 브라우저가
 * 맞춰 줍니다. 여기서는 어느 줄이 가운데인지만 읽어 글자 크기·기울기를 바꿉니다.
 *
 * onClose 를 주면 바깥을 눌러 닫을 수 있고, 안 주면 하나를 고를 때까지 머뭅니다
 * (첫 진입처럼 반드시 골라야 하는 자리).
 */

/** 한 줄 높이. 가운데 띠와 스크롤 위치 계산이 모두 이 값에 묶여 있습니다. */
const ITEM_H = 48;
/** 한 번에 보이는 줄 수. 가운데가 있어야 하므로 홀수. */
const VISIBLE = 5;
const WHEEL_H = ITEM_H * VISIBLE;
/** 첫 줄·마지막 줄도 가운데까지 올 수 있게 위아래에 비워 두는 높이 */
const EDGE = ITEM_H * ((VISIBLE - 1) / 2);

const dimIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const sheetUp = keyframes`
  from { transform: translateY(24px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Dim = styled.div`
  position: fixed;
  inset: 0;
  z-index: 130;
  background: rgba(24, 28, 30, 0.45);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${dimIn} 0.2s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Sheet = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg} ${({ theme }) => theme.radii.lg} 0 0;
  box-shadow: 0 -12px 40px rgba(107, 70, 193, 0.18);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  animation: ${sheetUp} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Handle = styled.div`
  flex-shrink: 0;
  padding: 10px 0 6px;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    width: 42px;
    height: 5px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary200};
  }
`;

const Head = styled.div`
  flex-shrink: 0;
  padding: 4px 20px 8px;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.charcoal};
  }

  p {
    margin: 4px 0 0;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.warmGray};
  }
`;

const Wheel = styled.div`
  position: relative;
  flex-shrink: 0;
  height: ${WHEEL_H}px;
  margin: 4px 20px 0;
`;

/** 가운데 띠. 스크롤과 무관하게 제자리에 있고, 줄들이 그 위를 지나갑니다. */
const Band = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: ${EDGE}px;
  height: ${ITEM_H}px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primary100};
  pointer-events: none;
`;

/**
 * 굴리는 자리. 위아래 끝은 가려서 드럼이 안으로 말려 들어가는 것처럼 보이게 합니다.
 * 위아래 여백은 padding 이 아니라 가짜 요소로 둡니다 — 스크롤 컨테이너의 아래 padding 은
 * 브라우저에 따라 스크롤 범위에 안 잡히는 일이 있습니다.
 */
const Scroller = styled.ul`
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  perspective: 600px;
  outline: none;
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 24%, #000 76%, transparent);
  mask-image: linear-gradient(to bottom, transparent, #000 24%, #000 76%, transparent);

  &::-webkit-scrollbar {
    display: none;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    height: ${EDGE}px;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.primary500};
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

/**
 * $offset: 가운데에서 몇 줄 떨어졌는지(위는 음수). 멀수록 작고 흐리고 기울어집니다.
 * 글자 크기는 안 바꿉니다 — 크기가 변하면 줄이 흔들려 스냅이 어긋납니다. scale 로만.
 */
const Item = styled.li<{ $offset: number }>`
  height: ${ITEM_H}px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  scroll-snap-align: center;
  font-size: 1.7rem;
  font-weight: ${({ $offset }) => ($offset === 0 ? 600 : 500)};
  color: ${({ theme, $offset }) =>
    $offset === 0
      ? theme.colors.primary900
      : Math.abs($offset) === 1
        ? theme.colors.warmGray
        : theme.colors.outline};
  opacity: ${({ $offset }) => (Math.abs($offset) === 0 ? 1 : Math.abs($offset) === 1 ? 0.8 : 0.5)};
  transform: ${({ $offset }) => {
    const step = Math.max(-3, Math.min(3, $offset));
    const scale = 1.06 - Math.abs(step) * 0.06;
    return `rotateX(${step * -18}deg) scale(${scale})`;
  }};
  transition: transform 0.14s ease, opacity 0.14s ease, color 0.14s ease;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }
`;

const Origin = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.outline};
`;

/** 확정 버튼. 가운데 있는 언어 이름을 그대로 보여 줘 무엇을 고르는지 한 번 더 확인시킵니다. */
const Confirm = styled.button`
  margin: 14px 20px 16px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;

  &:active {
    transform: scale(0.98);
    opacity: 0.92;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary900};
    outline-offset: 2px;
  }
`;

interface LanguageSheetProps {
  value: string;
  onSelect: (code: string, label: string) => void;
  /** 주면 바깥을 눌러 닫을 수 있습니다. */
  onClose?: () => void;
  title?: string;
  description?: string;
}

const clampIndex = (i: number) => Math.max(0, Math.min(LANGUAGES.length - 1, i));

const LanguageSheet = ({
  value,
  onSelect,
  onClose,
  title = "언어 / Language",
  description,
}: LanguageSheetProps) => {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const rafRef = useRef<number | null>(null);
  const [index, setIndex] = useState(() =>
    clampIndex(Math.max(0, LANGUAGES.findIndex((lang) => lang.code === value)))
  );

  /* 열리자마자 지금 언어가 가운데 오도록. 그리기 전에 맞춰야 튀지 않습니다. */
  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTop = index * ITEM_H;
    // 첫 자리만 맞추면 됩니다. 이후는 손이 움직입니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 스크롤마다 가운데 줄을 읽습니다. 프레임당 한 번이면 충분합니다. */
  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = scrollerRef.current;
      if (!el) return;
      setIndex(clampIndex(Math.round(el.scrollTop / ITEM_H)));
    });
  }, []);

  const scrollToIndex = (i: number, smooth = true) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ top: clampIndex(i) * ITEM_H, behavior: smooth ? "smooth" : "auto" });
  };

  const confirm = () => {
    const lang = LANGUAGES[index];
    onSelect(lang.code, lang.label);
  };

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      scrollToIndex(index - 1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      scrollToIndex(index + 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      confirm();
    }
  };

  const current = LANGUAGES[index];

  return (
    <Dim onClick={onClose} role="presentation">
      <Sheet
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <Handle aria-hidden="true" />
        <Head>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </Head>

        <Wheel>
          <Band aria-hidden="true" />
          {/* translate="no": 언어 이름은 그 언어로 적혀 있어야 하므로 번역 위젯이 손대지 않게 */}
          <Scroller
            ref={scrollerRef}
            role="listbox"
            aria-label={title}
            aria-activedescendant={`lang-option-${current.code}`}
            tabIndex={0}
            translate="no"
            onScroll={handleScroll}
            onKeyDown={onKeyDown}
          >
            {LANGUAGES.map((lang, i) => (
              <Item
                key={lang.code}
                id={`lang-option-${lang.code}`}
                role="option"
                aria-selected={i === index}
                $offset={i - index}
                onClick={() => scrollToIndex(i)}
              >
                <span>{lang.label}</span>
                {lang.code === SOURCE_LANG && <Origin>원문</Origin>}
              </Item>
            ))}
          </Scroller>
        </Wheel>

        <Confirm type="button" onClick={confirm} translate="no">
          <Icon name="check" size={20} />
          {current.label}
        </Confirm>
      </Sheet>
    </Dim>
  );
};

export default LanguageSheet;
