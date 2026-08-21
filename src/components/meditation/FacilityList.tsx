import { useState } from "react";
import styled from "styled-components";
import { FacilityIcon, facilityLabel } from "@/data/facilities";

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.text900};

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const IconCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.primary600};

  svg {
    width: 18px;
    height: 18px;
  }
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  margin-top: 14px;
  padding: 8px 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text700};

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }
`;

const Chevron = styled.svg<{ $open: boolean }>`
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`;

interface FacilityListProps {
  facilities: string[];
  /** 접었을 때 보여줄 개수. 2열 배치라 기본 4개면 두 줄이 됩니다. */
  collapsedCount?: number;
}

/**
 * 시설 정보 표시. 상세 화면과 관리자 미리보기가 같은 컴포넌트를 씁니다.
 *
 * 항목이 많은 곳은 시설만으로 화면이 길어지므로 두 줄까지만 펼쳐 두고 나머지는 접습니다.
 */
export default function FacilityList({ facilities, collapsedCount = 4 }: FacilityListProps) {
  const [open, setOpen] = useState(false);

  if (facilities.length === 0) return null;

  const hidden = facilities.length - collapsedCount;
  const visible = open ? facilities : facilities.slice(0, collapsedCount);

  return (
    <div>
      <Grid>
        {visible.map((item) => (
          <Item key={item}>
            <IconCircle>
              <FacilityIcon name={item} />
            </IconCircle>
            <span>{facilityLabel(item)}</span>
          </Item>
        ))}
      </Grid>

      {hidden > 0 && (
        <ToggleButton type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? "접기" : `더보기 ${hidden}개`}
          <Chevron
            $open={open}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </Chevron>
        </ToggleButton>
      )}
    </div>
  );
}
