import { useMemo } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import {
  FACILITY_GROUPS,
  FacilityIcon,
  facilityLabel,
  isKnownFacility,
  resolveFacilityKey,
} from "@/data/facilities";

const Groups = styled.div`
  display: grid;
  gap: 14px;
`;

const GroupTitle = styled.p`
  margin: 0 0 6px;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: #71717a;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 11px 7px 9px;
  border-radius: 999px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
  border: 1px solid ${({ $active }) => ($active ? theme.colors.primary500 : "#3f3f46")};
  background: ${({ $active }) => ($active ? "rgba(75, 0, 130, 0.35)" : "#09090b")};
  color: ${({ $active }) => ($active ? "#fff" : "#a1a1aa")};

  svg {
    width: 16px;
    height: 16px;
    flex: none;
    color: ${({ $active }) => ($active ? theme.colors.primary300 : "#71717a")};
  }

  &:hover {
    border-color: ${({ $active }) => ($active ? theme.colors.primary500 : "#52525b")};
  }
`;

const LegacyNote = styled.p`
  margin: 0 0 6px;
  font-size: 11px;
  color: #a16207;
`;

const RemoveChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 9px 7px 11px;
  border-radius: 999px;
  border: 1px dashed #a16207;
  background: #09090b;
  color: #d4d4d8;
  font-size: 13px;
  cursor: pointer;

  span[aria-hidden] {
    color: #71717a;
  }
`;

interface AdminFacilityPickerProps {
  value: string[] | undefined;
  onChange: (next: string[]) => void;
}

/**
 * 시설 정보 선택기.
 *
 * 전에는 쉼표로 구분한 자유 입력이었는데, 값을 매 타이핑마다 잘라 다시 합치는 구조라 쉼표
 * 자체가 입력되지 않았고, 저장된 한글 문자열은 상세 화면의 아이콘 키와도 맞지 않았습니다.
 * 목록에서 고르게 하면 두 문제가 같이 사라집니다.
 */
export default function AdminFacilityPicker({ value, onChange }: AdminFacilityPickerProps) {
  const selected = useMemo(
    () => new Set((value ?? []).map(resolveFacilityKey)),
    [value]
  );

  // 카탈로그에 없는 예전 값. 조용히 지우면 운영자가 눈치채지 못하므로 남겨서 보여줍니다.
  const legacy = useMemo(
    () => (value ?? []).filter((v) => !isKnownFacility(v)),
    [value]
  );

  const toggle = (key: string) => {
    const next = new Set(selected);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    // 카탈로그 순서를 유지하고, 알아보지 못한 예전 값은 뒤에 붙여 둡니다.
    onChange([
      ...FACILITY_GROUPS.flatMap((g) => g.items)
        .map((f) => f.key)
        .filter((k) => next.has(k)),
      ...legacy,
    ]);
  };

  const dropLegacy = (raw: string) => {
    onChange((value ?? []).filter((v) => v !== raw));
  };

  return (
    <Groups>
      {FACILITY_GROUPS.map((group) => (
        <div key={group.title}>
          <GroupTitle>{group.title}</GroupTitle>
          <Chips>
            {group.items.map((item) => {
              const active = selected.has(item.key);
              return (
                <Chip
                  key={item.key}
                  type="button"
                  $active={active}
                  aria-pressed={active}
                  onClick={() => toggle(item.key)}
                >
                  <FacilityIcon name={item.key} />
                  {item.label}
                </Chip>
              );
            })}
          </Chips>
        </div>
      ))}

      {legacy.length > 0 && (
        <div>
          <LegacyNote>
            목록에 없는 예전 입력값입니다. 상세 화면에서는 아이콘 없이 표시되니, 위에서 맞는
            항목을 고르고 지워 주세요.
          </LegacyNote>
          <Chips>
            {legacy.map((raw) => (
              <RemoveChip key={raw} type="button" onClick={() => dropLegacy(raw)}>
                {facilityLabel(raw)}
                <span aria-hidden>✕</span>
              </RemoveChip>
            ))}
          </Chips>
        </div>
      )}
    </Groups>
  );
}
