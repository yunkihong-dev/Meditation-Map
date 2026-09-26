import { useState } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { MAX_HASHTAGS, mergeHashtags, splitHashtags } from "@/services/meditation/hashtags";
import { AdminInput } from "./adminStyles";

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 6px 5px 11px;
  border-radius: 999px;
  border: 1px solid ${theme.colors.primary500};
  background: rgba(75, 0, 130, 0.35);
  color: #fff;
  font-size: 13px;
`;

const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: #a1a1aa;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
  }
`;

interface AdminHashtagInputProps {
  value: string[] | undefined;
  onChange: (next: string[]) => void;
}

/**
 * 해시태그 입력 — 엔터·쉼표로 하나씩 붙이고, × 로 뺍니다.
 * 입력칸에 남은 글자는 포커스를 벗어날 때 태그로 굳혀 저장 누락을 막습니다.
 */
export default function AdminHashtagInput({ value, onChange }: AdminHashtagInputProps) {
  const tags = value ?? [];
  const [text, setText] = useState("");
  const full = tags.length >= MAX_HASHTAGS;

  const commit = () => {
    const incoming = splitHashtags(text);
    setText("");
    if (incoming.length === 0) return;
    onChange(mergeHashtags(tags, incoming));
  };

  return (
    <>
      {tags.length > 0 && (
        <Chips>
          {tags.map((tag) => (
            <Chip key={tag}>
              #{tag}
              <RemoveButton
                type="button"
                aria-label={`${tag} 태그 삭제`}
                onClick={() => onChange(tags.filter((t) => t !== tag))}
              >
                ×
              </RemoveButton>
            </Chip>
          ))}
        </Chips>
      )}
      <AdminInput
        value={text}
        disabled={full}
        placeholder={full ? `최대 ${MAX_HASHTAGS}개까지 넣을 수 있어요` : "예: 숲명상, 호흡, 템플스테이"}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          // 한글 조합 중 엔터는 조합 확정용이라 건너뜁니다.
          if (e.nativeEvent.isComposing) return;
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            commit();
          } else if (e.key === "Backspace" && text === "" && tags.length > 0) {
            onChange(tags.slice(0, -1));
          }
        }}
        onBlur={commit}
      />
    </>
  );
}
