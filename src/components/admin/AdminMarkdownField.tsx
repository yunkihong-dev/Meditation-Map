import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { AdminField, AdminLabel, AdminTextarea } from "./adminStyles";

type SlashItem = {
  id: string;
  label: string;
  group: string;
  prefix: string;
  hint?: string;
};

const SLASH_ITEMS: SlashItem[] = [
  { id: "text", label: "텍스트", group: "기본 블록", prefix: "" },
  { id: "h1", label: "제목1", group: "기본 블록", prefix: "# ", hint: "#" },
  { id: "h2", label: "제목2", group: "기본 블록", prefix: "## ", hint: "##" },
  { id: "h3", label: "제목3", group: "기본 블록", prefix: "### ", hint: "###" },
  { id: "ul", label: "글머리 기호", group: "기본 블록", prefix: "- ", hint: "-" },
  { id: "ol", label: "번호 목록", group: "기본 블록", prefix: "1. ", hint: "1." },
  { id: "quote", label: "인용", group: "기본 블록", prefix: "> ", hint: ">" },
  { id: "hr", label: "구분선", group: "기본 블록", prefix: "---\n", hint: "---" },
];

const FieldWrap = styled.div`
  position: relative;
`;

const StyledTextarea = styled(AdminTextarea)<{ $minHeight: number }>`
  min-height: ${({ $minHeight }) => $minHeight}px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.55;
  resize: vertical;
`;

const SlashMenu = styled.div`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
  max-height: 240px;
  overflow-y: auto;
  border-radius: 10px;
  border: 1px solid #3f3f46;
  background: #fafafa;
  color: #18181b;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  z-index: 20;
  scrollbar-width: thin;
`;

const SlashSearch = styled.div`
  padding: 10px 12px;
  border-bottom: 1px solid #e4e4e7;
  font-size: 13px;
  color: #71717a;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    color: #18181b;
    font-weight: 500;
  }
`;

const SlashGroupLabel = styled.div`
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 600;
  color: #71717a;
`;

const SlashOption = styled.button<{ $active?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  border: none;
  background: ${({ $active }) => ($active ? "#f4f4f5" : "transparent")};
  color: #18181b;
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #f4f4f5;
  }

  kbd {
    font-size: 12px;
    color: #a1a1aa;
    font-family: inherit;
  }
`;

const SlashFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-top: 1px solid #e4e4e7;
  font-size: 12px;
  color: #71717a;

  kbd {
    font-size: 11px;
    padding: 1px 5px;
    border-radius: 4px;
    border: 1px solid #d4d4d8;
    background: #fff;
  }
`;

const Hint = styled.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
`;

type SlashMenuState = {
  slashStart: number;
  query: string;
  selected: number;
};

function lineStartAt(value: string, index: number): number {
  return value.lastIndexOf("\n", index - 1) + 1;
}

function detectSlash(value: string, cursor: number): SlashMenuState | null {
  const lineStart = lineStartAt(value, cursor);
  const line = value.slice(lineStart, cursor);
  const slashIdx = line.lastIndexOf("/");
  if (slashIdx < 0) return null;

  const beforeSlash = line.slice(0, slashIdx);
  if (beforeSlash.trim() !== "") return null;

  const query = line.slice(slashIdx + 1);
  if (query.includes(" ") || query.includes("\n")) return null;

  return { slashStart: lineStart + slashIdx, query, selected: 0 };
}

function applySlashItem(value: string, slashStart: number, cursor: number, prefix: string) {
  const lineStart = lineStartAt(value, slashStart);
  const next = value.slice(0, lineStart) + prefix + value.slice(cursor);
  return { next, nextCursor: lineStart + prefix.length };
}

interface AdminMarkdownFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: number;
  hint?: string;
}

export default function AdminMarkdownField({
  label,
  value,
  onChange,
  placeholder,
  minHeight = 100,
  hint = "/ 를 입력하면 마크다운 블록을 선택할 수 있습니다.",
}: AdminMarkdownFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [menu, setMenu] = useState<SlashMenuState | null>(null);

  const filteredItems = useMemo(() => {
    if (!menu) return [];
    const q = menu.query.trim().toLowerCase();
    if (!q) return SLASH_ITEMS;
    return SLASH_ITEMS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.id.includes(q) ||
        (item.hint?.toLowerCase().includes(q) ?? false)
    );
  }, [menu]);

  const closeMenu = useCallback(() => setMenu(null), []);

  const applyItem = useCallback(
    (item: SlashItem) => {
      const el = textareaRef.current;
      if (!menu || !el) return;

      const cursor = el.selectionStart ?? value.length;
      const { next, nextCursor } = applySlashItem(value, menu.slashStart, cursor, item.prefix);
      onChange(next);
      closeMenu();

      requestAnimationFrame(() => {
        el.focus();
        el.setSelectionRange(nextCursor, nextCursor);
      });
    },
    [closeMenu, menu, onChange, value]
  );

  const syncMenu = useCallback((nextValue: string, cursor: number) => {
    const detected = detectSlash(nextValue, cursor);
    if (!detected) {
      setMenu(null);
      return;
    }
    setMenu((prev) => {
      const selected = prev && prev.slashStart === detected.slashStart ? prev.selected : 0;
      return { ...detected, selected };
    });
  }, []);

  useEffect(() => {
    if (!menu) return;
    if (filteredItems.length === 0) {
      setMenu(null);
      return;
    }
    if (menu.selected >= filteredItems.length) {
      setMenu({ ...menu, selected: filteredItems.length - 1 });
    }
  }, [filteredItems.length, menu]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = e.target.value;
    const cursor = e.target.selectionStart ?? next.length;
    onChange(next);
    syncMenu(next, cursor);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!menu || filteredItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setMenu((prev) =>
        prev ? { ...prev, selected: Math.min(prev.selected + 1, filteredItems.length - 1) } : prev
      );
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setMenu((prev) => (prev ? { ...prev, selected: Math.max(prev.selected - 1, 0) } : prev));
      return;
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      applyItem(filteredItems[menu.selected]);
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
    }
  };

  const handleClick = () => {
    const el = textareaRef.current;
    if (!el) return;
    syncMenu(value, el.selectionStart ?? value.length);
  };

  let lastGroup = "";

  return (
    <AdminField>
      <AdminLabel>{label}</AdminLabel>
      <FieldWrap>
        <StyledTextarea
          ref={textareaRef}
          $minHeight={minHeight}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          onBlur={() => window.setTimeout(closeMenu, 120)}
          placeholder={placeholder}
          spellCheck={false}
        />
        {menu && filteredItems.length > 0 && (
          <SlashMenu onMouseDown={(e) => e.preventDefault()}>
            <SlashSearch>
              /<span>{menu.query || "검색어를 입력하세요"}</span>
            </SlashSearch>
            {filteredItems.map((item, idx) => {
              const showGroup = item.group !== lastGroup;
              lastGroup = item.group;
              return (
                <div key={item.id}>
                  {showGroup ? <SlashGroupLabel>{item.group}</SlashGroupLabel> : null}
                  <SlashOption
                    type="button"
                    $active={menu.selected === idx}
                    onMouseEnter={() => setMenu((prev) => (prev ? { ...prev, selected: idx } : prev))}
                    onClick={() => applyItem(item)}
                  >
                    <span>{item.label}</span>
                    {item.hint ? <kbd>{item.hint}</kbd> : null}
                  </SlashOption>
                </div>
              );
            })}
            <SlashFooter>
              <span>메뉴 닫기</span>
              <kbd>esc</kbd>
            </SlashFooter>
          </SlashMenu>
        )}
      </FieldWrap>
      <Hint>{hint}</Hint>
    </AdminField>
  );
}
