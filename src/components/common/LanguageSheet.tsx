import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Icon from "@/components/common/Icon";
import { LANGUAGES, SOURCE_LANG } from "@/services/i18n/googleTranslate";

/**
 * 언어 고르기 시트.
 *
 * 화면 아래에서 올라오는 목록입니다. 손으로 끌어 올리고 내리며 찾습니다 —
 * 격자로 펼쳐 놓는 것보다 한 줄씩 훑는 편이 낯선 문자에서 자기 언어를 찾기 쉽습니다.
 *
 * onClose 를 주면 바깥을 눌러 닫을 수 있고, 안 주면 하나를 고를 때까지 머뭅니다
 * (첫 진입처럼 반드시 골라야 하는 자리).
 */

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
  max-height: 72dvh;
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
  padding: 4px 20px 12px;

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

/** 여기가 끌어 올리고 내리는 자리입니다. 네이티브 스크롤이라 손에 그대로 붙습니다. */
const List = styled.ul`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  list-style: none;
  margin: 0;
  padding: 0 12px 12px;
`;

const Row = styled.button<{ $selected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 12px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary100 : "transparent"};
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary900 : theme.colors.charcoal};
  font-size: 1.7rem;
  font-weight: ${({ $selected }) => ($selected ? 600 : 500)};
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease;

  &:active {
    background: ${({ theme, $selected }) =>
      $selected ? theme.colors.primary100 : theme.colors.surfaceLow};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary500};
    outline-offset: -2px;
  }
`;

const Origin = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.outline};
`;

interface LanguageSheetProps {
  value: string;
  onSelect: (code: string, label: string) => void;
  /** 주면 바깥을 눌러 닫을 수 있습니다. */
  onClose?: () => void;
  title?: string;
  description?: string;
}

const LanguageSheet = ({
  value,
  onSelect,
  onClose,
  title = "언어 / Language",
  description,
}: LanguageSheetProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  /* 지금 언어가 목록 아래쪽이면 열자마자 그 근처가 보이도록 데려옵니다. */
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>('[aria-selected="true"]');
    el?.scrollIntoView({ block: "center" });
  }, []);

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
        <List ref={listRef} role="listbox" aria-label={title}>
          {LANGUAGES.map((lang) => {
            const selected = lang.code === value;
            return (
              <li key={lang.code}>
                <Row
                  type="button"
                  role="option"
                  aria-selected={selected}
                  $selected={selected}
                  onClick={() => onSelect(lang.code, lang.label)}
                >
                  <span>{lang.label}</span>
                  {lang.code === SOURCE_LANG ? (
                    <Origin>원문</Origin>
                  ) : selected ? (
                    <Icon name="check" size={20} />
                  ) : null}
                </Row>
              </li>
            );
          })}
        </List>
      </Sheet>
    </Dim>
  );
};

export default LanguageSheet;
