import styled from "styled-components";
import type { Category, MeditationFilters, SortBy } from "@/services/meditation/types";

const Panel = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary100};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  font-size: 1.1rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button<{ $active?: boolean }>`
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.border200)};
  padding: 6px 12px;
  font-size: 1rem;
  background: ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.white)};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const ResetButton = styled.button`
  margin-top: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.bg100};
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

interface FilterPanelProps {
  filters: MeditationFilters;
  availableTags: string[];
  onChangeKeyword: (keyword: string) => void;
  onChangeCategory: (value: Category) => void;
  onToggleTag: (tag: string) => void;
  onChangeSortBy: (value: SortBy) => void;
  onReset: () => void;
}

const KeywordInput = styled.input`
  width: 100%;
  padding: 11px 14px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  font-size: 1rem;
  outline: none;
  color: ${({ theme }) => theme.colors.text900};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary400};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary100};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text700};
    opacity: 0.85;
  }
`;

const KeywordHint = styled.span`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.text700};
  line-height: 1.4;
`;

const FilterPanel = ({
  filters,
  availableTags,
  onChangeKeyword,
  onChangeCategory,
  onToggleTag,
  onChangeSortBy,
  onReset,
}: FilterPanelProps) => {
  const categories: { label: string; value: Category }[] = [
    { label: "전체", value: "all" },
    { label: "템플스테이", value: "템플스테이" },
    { label: "명상센터", value: "명상센터" },
    { label: "프리랜서(공간없음)", value: "프리랜서(공간없음)" },
    { label: "힐링명상", value: "힐링명상" },
    { label: "기타", value: "기타" },
  ];

  return (
    <Panel>
      <Section>
        <Label>검색</Label>
        <KeywordInput
          type="search"
          enterKeyHint="search"
          autoComplete="off"
          placeholder="이름, 주소, 기관명, 태그, 소개글…"
          value={filters.keyword}
          onChange={(e) => onChangeKeyword(e.target.value)}
          aria-label="검색어"
        />
        <KeywordHint>띄어쓰기로 여러 단어를 넣으면 모두 포함되는 장소만 보여요.</KeywordHint>
      </Section>

      <Section>
        <Label>카테고리</Label>
        <TagList>
          {categories.map((category) => (
            <Chip
              key={category.value}
              type="button"
              $active={filters.category === category.value}
              onClick={() => onChangeCategory(category.value)}
            >
              {category.label}
            </Chip>
          ))}
        </TagList>
      </Section>

      <Section>
        <Label>해시태그</Label>
        <TagList>
          {availableTags.map((tag) => (
            <Chip
              key={tag}
              type="button"
              $active={filters.tags.includes(tag)}
              onClick={() => onToggleTag(tag)}
            >
              #{tag}
            </Chip>
          ))}
        </TagList>
      </Section>

      <Section>
        <Label>정렬</Label>
        <Select
          value={filters.sortBy}
          onChange={(event) => onChangeSortBy(event.target.value as SortBy)}
        >
          <option value="recommend">추천순</option>
          <option value="name">이름순</option>
        </Select>
      </Section>

      <ResetButton type="button" onClick={onReset}>
        필터 초기화
      </ResetButton>
    </Panel>
  );
};

export default FilterPanel;
