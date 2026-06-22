import { useEffect, useState } from "react";
import styled from "styled-components";
import RegionMap from "@/components/meditation/RegionMap";
import { KOREA_REGIONS } from "@/data/koreaRegions";
import { typography } from "@/styles/typography";
import { updateMyProfile, type MeProfile } from "@/services/profile/profileApi";

const INTEREST_OPTIONS = [
  "힐링명상",
  "템플스테이",
  "행사",
  "마음챙김",
  "숲 명상",
  "아트명상",
  "호흡",
  "숙박 프로그램",
];

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: end center;
  background: rgba(29, 16, 38, 0.46);
`;

const Sheet = styled.section`
  width: min(100%, 620px);
  max-height: 88dvh;
  overflow-y: auto;
  padding: 20px 20px calc(24px + env(safe-area-inset-bottom, 0px));
  border-radius: 26px 26px 0 0;
  background: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const Title = styled.h2`
  margin: 0;
  ${typography.title};
`;

const Close = styled.button`
  border: 0;
  background: transparent;
  ${typography.body1};
  cursor: pointer;
`;

const Field = styled.div`
  display: block;
  margin-top: 20px;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 8px;
  ${typography.body2};
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: 12px;
  ${typography.body2};
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const RegionMapBox = styled.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.primary50};
`;

const RegionStatus = styled.p`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.caption};
`;

const Chip = styled.button<{ $selected: boolean }>`
  padding: 8px 11px;
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.primary600 : theme.colors.primary200};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary600 : theme.colors.white};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.white : theme.colors.text700)};
  ${typography.caption};
  cursor: pointer;
`;

const Save = styled.button`
  width: 100%;
  margin-top: 28px;
  padding: 15px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary600};
  color: white;
  ${typography.buttonMd};
  cursor: pointer;
`;

const ErrorText = styled.p`
  margin: 12px 0 0;
  color: #c5221f;
  ${typography.caption};
`;

export default function ProfileEditModal({
  open,
  profile,
  onClose,
  onSaved,
}: {
  open: boolean;
  profile: MeProfile;
  onClose: () => void;
  onSaved: (profile: MeProfile) => void;
}) {
  const [displayName, setDisplayName] = useState("");
  const [regionIds, setRegionIds] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setDisplayName(profile.displayName || profile.username.split("@")[0] || "");
    setRegionIds(profile.regionIds ?? []);
    setInterests(profile.interests ?? []);
    setError(null);
  }, [open, profile]);

  if (!open) return null;

  const toggle = (value: string, values: string[], set: (next: string[]) => void) => {
    set(values.includes(value) ? values.filter((v) => v !== value) : [...values, value]);
  };

  return (
    <Overlay onMouseDown={onClose}>
      <Sheet role="dialog" aria-modal="true" onMouseDown={(e) => e.stopPropagation()}>
        <Header>
          <Title>프로필 수정</Title>
          <Close type="button" onClick={onClose} aria-label="닫기">×</Close>
        </Header>
        <Field>
          <Label>이름</Label>
          <Input
            value={displayName}
            maxLength={80}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="화면에 표시할 이름"
          />
        </Field>
        <Field>
          <Label>주 활동 지역</Label>
          <RegionMapBox>
            <RegionMap
              activeRegionIds={regionIds}
              maxMapHeight="min(42dvh, 420px)"
              onSelectRegion={(regionId) => toggle(regionId, regionIds, setRegionIds)}
            />
          </RegionMapBox>
          <RegionStatus>
            지도에서 활동 지역을 선택해 주세요. 선택된 지역을 다시 누르면 해제됩니다.
          </RegionStatus>
          <Chips>
            {KOREA_REGIONS.filter((region) => regionIds.includes(region.id)).map((region) => (
              <Chip
                key={region.id}
                type="button"
                $selected
                onClick={() => toggle(region.id, regionIds, setRegionIds)}
              >
                {region.name} ×
              </Chip>
            ))}
          </Chips>
        </Field>
        <Field>
          <Label>관심사</Label>
          <Chips>
            {INTEREST_OPTIONS.map((interest) => (
              <Chip
                key={interest}
                type="button"
                $selected={interests.includes(interest)}
                onClick={() => toggle(interest, interests, setInterests)}
              >
                {interest}
              </Chip>
            ))}
          </Chips>
        </Field>
        {error && <ErrorText>{error}</ErrorText>}
        <Save
          type="button"
          disabled={busy || !displayName.trim()}
          onClick={() => {
            setBusy(true);
            setError(null);
            void updateMyProfile({ displayName: displayName.trim(), regionIds, interests })
              .then((next) => {
                onSaved(next);
                onClose();
              })
              .catch((e) => setError(e instanceof Error ? e.message : "저장하지 못했어요."))
              .finally(() => setBusy(false));
          }}
        >
          {busy ? "저장 중…" : "저장하기"}
        </Save>
      </Sheet>
    </Overlay>
  );
}
