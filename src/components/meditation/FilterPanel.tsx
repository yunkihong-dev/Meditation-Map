import styled from "styled-components";
import type { MeditationFilters, SortBy } from "@/services/meditation/types";

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

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  font-size: 1.1rem;
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
  onChangeKeyword: (value: string) => void;
  onToggleTag: (tag: string) => void;
  onChangeSortBy: (value: SortBy) => void;
  onReset: () => void;
}

const FilterPanel = ({
  filters,
  availableTags,
  onChangeKeyword,
  onToggleTag,
  onChangeSortBy,
  onReset,
}: FilterPanelProps) => {
  return (
    <Panel>
      <Section>
        <Label>Search</Label>
        <Input
          type="text"
          placeholder="Search by name or address"
          value={filters.keyword}
          onChange={(event) => onChangeKeyword(event.target.value)}
        />
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
