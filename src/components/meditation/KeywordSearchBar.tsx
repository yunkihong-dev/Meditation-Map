import { FormEvent } from "react";
import styled, { css } from "styled-components";

const Bar = styled.form<{ $layout: "main" | "region" }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  padding: 12px 44px 12px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: 0 2px 8px rgba(75, 0, 130, 0.06);
  transition: width 0.35s ease, max-width 0.35s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  ${({ $layout }) =>
    $layout === "main"
      ? css`
          width: 75%;
          max-width: 420px;
          margin-bottom: 20px;

          &:focus-within {
            width: 100%;
            max-width: 100%;
            border-color: ${({ theme }) => theme.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.12);
          }
        `
      : css`
          width: 100%;
          max-width: 100%;
          margin-bottom: 16px;

          &:focus-within {
            border-color: ${({ theme }) => theme.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.1);
          }
        `}
`;

const SearchIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary600};
  display: grid;
  place-items: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font-size: 1.05rem;
  outline: none;
  color: ${({ theme }) => theme.colors.text900};

  /* type="search" 시 WebKit 기본 X — 커스텀 ClearButton 과 중복 제거 */
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  &::-ms-clear {
    display: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text700};
    opacity: 0.85;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text700};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.pill};

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    color: ${({ theme }) => theme.colors.text900};
  }
`;

export interface KeywordSearchBarProps {
  value: string;
  onChange: (keyword: string) => void;
  placeholder: string;
  /** 메인 홈용: 좁았다가 포커스 시 넓어짐 */
  layout?: "main" | "region";
  id?: string;
  "aria-label"?: string;
}

const KeywordSearchBar = ({
  value,
  onChange,
  placeholder,
  layout = "region",
  id,
  "aria-label": ariaLabel,
}: KeywordSearchBarProps) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Bar $layout={layout} onSubmit={onSubmit}>
      <SearchIcon aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.65" y1="16.65" x2="21" y2="21" />
        </svg>
      </SearchIcon>
      <Input
        id={id}
        type="search"
        enterKeyHint="search"
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel ?? "검색어"}
      />
      {value ? (
        <ClearButton type="button" onClick={() => onChange("")} aria-label="검색어 삭제">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </ClearButton>
      ) : null}
    </Bar>
  );
};

export default KeywordSearchBar;
