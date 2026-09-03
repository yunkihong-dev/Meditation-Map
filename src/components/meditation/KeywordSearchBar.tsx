import { FormEvent } from "react";
import styled from "styled-components";
import Icon from "@/components/common/Icon";

/**
 * 시안의 검색 입력 — 테두리 없이 흰 면에 보라로 옅게 물든 그림자,
 * 포커스가 오면 테두리 대신 은은한 링이 켜집니다.
 */
const Bar = styled.form<{ $layout: "main" | "region" }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  /* 홈(main)은 붙박이 검색줄이 바깥 여백을 잡으므로 스스로는 띄우지 않습니다. */
  margin: ${({ $layout }) => ($layout === "main" ? "0" : "0 0 16px")};
  padding: 12px 44px 12px 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  border-radius: ${({ theme, $layout }) =>
    $layout === "main" ? theme.radii.lg : theme.radii.md};
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.04);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:focus-within {
    border-color: rgba(107, 70, 193, 0.3);
    box-shadow: 0 4px 20px rgba(107, 70, 193, 0.1), 0 0 0 3px rgba(107, 70, 193, 0.12);
  }
`;

const SearchIcon = styled.span`
  color: ${({ theme }) => theme.colors.outline};
  display: grid;
  place-items: center;
  flex-shrink: 0;
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
    color: ${({ theme }) => theme.colors.border200};
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
      <SearchIcon>
        <Icon name="search" size={20} />
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
          <Icon name="close" size={18} />
        </ClearButton>
      ) : null}
    </Bar>
  );
};

export default KeywordSearchBar;
