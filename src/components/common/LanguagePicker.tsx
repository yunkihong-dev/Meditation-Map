import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { LANGUAGES, SOURCE_LANG } from "@/services/i18n/googleTranslate";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`;

const Option = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 14px 16px;
  border: 1px solid
    ${({ theme, $selected }) => ($selected ? "transparent" : theme.colors.border200)};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary100 : theme.colors.white};
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary900 : theme.colors.charcoal};
  font-size: 1.5rem;
  font-weight: ${({ $selected }) => ($selected ? 600 : 500)};
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.16s ease;

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary500};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active {
      transform: none;
    }
  }
`;

const Name = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Origin = styled.span`
  flex-shrink: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.outline};
`;

interface LanguagePickerProps {
  value: string;
  onSelect: (code: string) => void;
}

/**
 * 언어 목록. 이름은 그 언어를 쓰는 사람이 읽는 표기로 적습니다 —
 * 번역이 걸리기 전에 고르는 화면이라 한국어로 적어 두면 정작 필요한 사람이 못 읽습니다.
 */
const LanguagePicker = ({ value, onSelect }: LanguagePickerProps) => (
  <List role="listbox" aria-label="언어 / Language">
    {LANGUAGES.map((lang) => {
      const selected = lang.code === value;
      return (
        <Option
          key={lang.code}
          type="button"
          role="option"
          aria-selected={selected}
          $selected={selected}
          onClick={() => onSelect(lang.code)}
        >
          <Name>{lang.label}</Name>
          {lang.code === SOURCE_LANG ? (
            <Origin>원문</Origin>
          ) : selected ? (
            <Icon name="check" size={18} />
          ) : null}
        </Option>
      );
    })}
  </List>
);

export default LanguagePicker;
