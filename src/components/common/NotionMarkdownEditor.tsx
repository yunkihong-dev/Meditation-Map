import { useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { MarkdownText } from "@/components/common/MarkdownText";
import { typography } from "@/styles/typography";

type BlockType = "paragraph" | "h1" | "h2" | "h3" | "bullet" | "quote";
type Block = { id: number; type: BlockType; text: string };

const PREFIX: Record<BlockType, string> = {
  paragraph: "",
  h1: "# ",
  h2: "## ",
  h3: "### ",
  bullet: "- ",
  quote: "> ",
};

let nextBlockId = 1;

function parseLine(line: string): Block {
  const patterns: Array<[BlockType, RegExp]> = [
    ["h3", /^###\s?/],
    ["h2", /^##\s?/],
    ["h1", /^#\s?/],
    ["bullet", /^-\s?/],
    ["quote", /^>\s?/],
  ];
  for (const [type, pattern] of patterns) {
    if (pattern.test(line)) {
      return { id: nextBlockId++, type, text: line.replace(pattern, "") };
    }
  }
  return { id: nextBlockId++, type: "paragraph", text: line };
}

function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.split("\n");
  return (lines.length ? lines : [""]).map(parseLine);
}

function serialize(blocks: Block[]) {
  return blocks.map((block) => `${PREFIX[block.type]}${block.text}`).join("\n");
}

const Editor = styled.div`
  min-height: 320px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.white};
  cursor: text;
`;

const BlockRow = styled.div<{ $type: BlockType }>`
  position: relative;
  min-height: 1.8em;
  margin: ${({ $type }) => ($type === "h1" ? "12px 0 6px" : $type === "h2" ? "10px 0 5px" : "2px 0")};
  padding-left: ${({ $type }) => ($type === "bullet" ? "18px" : $type === "quote" ? "14px" : "0")};
  border-left: ${({ $type }) => ($type === "quote" ? "3px solid rgba(75, 0, 130, 0.25)" : "0")};

  ${({ $type }) =>
    $type === "bullet" &&
    css`
      &::before {
        content: "•";
        position: absolute;
        left: 3px;
        top: 0.25em;
        color: ${({ theme }) => theme.colors.primary600};
      }
    `}
`;

const BlockInput = styled.textarea<{ $type: BlockType }>`
  display: block;
  width: 100%;
  min-height: 1.65em;
  padding: 0;
  border: 0;
  outline: 0;
  resize: none;
  overflow: hidden;
  background: transparent;
  color: ${({ theme }) => theme.colors.text900};
  font-family: inherit;
  line-height: 1.65;

  ${({ $type }) => {
    if ($type === "h1") return css`font-size: 1.45rem; font-weight: 800;`;
    if ($type === "h2") return css`font-size: 1.2rem; font-weight: 750;`;
    if ($type === "h3") return css`font-size: 1.05rem; font-weight: 700;`;
    return typography.body2;
  }}

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedMauve};
  }
`;

const RenderedBlock = styled.div`
  min-height: 1.65em;
  ${typography.body2};
  line-height: 1.65;
`;

const Helper = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text700};
  ${typography.caption};
`;

export default function NotionMarkdownEditor({
  value,
  onChange,
  placeholder = "내용을 입력하세요. `/` 대신 #, -, > 뒤에 공백을 입력하면 블록이 바뀝니다.",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const [blocks, setBlocks] = useState<Block[]>(() => parseMarkdown(value));
  const [focusedId, setFocusedId] = useState<number | null>(
    () => blocks[0]?.id ?? null
  );
  const pendingFocus = useRef<number | null>(null);
  const internalValue = useMemo(() => serialize(blocks), [blocks]);

  useEffect(() => {
    if (internalValue !== value) onChange(internalValue);
  }, [internalValue, onChange, value]);

  useEffect(() => {
    if (pendingFocus.current == null) return;
    const id = pendingFocus.current;
    pendingFocus.current = null;
    requestAnimationFrame(() => {
      const el = document.querySelector<HTMLTextAreaElement>(`[data-md-block="${id}"]`);
      el?.focus();
    });
  }, [blocks]);

  const updateBlock = (id: number, text: string) => {
    setBlocks((current) =>
      current.map((block) => {
        if (block.id !== id) return block;
        if (block.type === "paragraph") {
          const shortcut: Array<[string, BlockType]> = [
            ["### ", "h3"],
            ["## ", "h2"],
            ["# ", "h1"],
            ["- ", "bullet"],
            ["> ", "quote"],
          ];
          const found = shortcut.find(([prefix]) => text === prefix);
          if (found) return { ...block, type: found[1], text: "" };
        }
        return { ...block, text };
      })
    );
  };

  return (
    <>
      <Editor
        onClick={(event) => {
          if (event.target === event.currentTarget && blocks.length) {
            setFocusedId(blocks[blocks.length - 1].id);
          }
        }}
      >
        {blocks.map((block, index) => {
          const isFocused = focusedId === block.id;
          return (
            <BlockRow key={block.id} $type={block.type}>
              {isFocused ? (
                <BlockInput
                  data-md-block={block.id}
                  autoFocus
                  rows={1}
                  $type={block.type}
                  value={block.text}
                  placeholder={index === 0 ? placeholder : ""}
                  onFocus={(e) => {
                    setFocusedId(block.id);
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                  }}
                  onChange={(e) => {
                    updateBlock(block.id, e.target.value);
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      const id = nextBlockId++;
                      setBlocks((current) => {
                        const at = current.findIndex((item) => item.id === block.id);
                        const next = [...current];
                        next.splice(at + 1, 0, { id, type: "paragraph", text: "" });
                        return next;
                      });
                      setFocusedId(id);
                      pendingFocus.current = id;
                    } else if (
                      e.key === "Backspace" &&
                      block.text === "" &&
                      block.type !== "paragraph"
                    ) {
                      e.preventDefault();
                      setBlocks((current) =>
                        current.map((item) =>
                          item.id === block.id ? { ...item, type: "paragraph" } : item
                        )
                      );
                    } else if (
                      e.key === "Backspace" &&
                      block.text === "" &&
                      blocks.length > 1
                    ) {
                      e.preventDefault();
                      const previous = blocks[index - 1];
                      setBlocks((current) => current.filter((item) => item.id !== block.id));
                      if (previous) {
                        setFocusedId(previous.id);
                        pendingFocus.current = previous.id;
                      }
                    }
                  }}
                  onBlur={() => {
                    window.setTimeout(() => {
                      const active = document.activeElement;
                      if (!(active instanceof HTMLTextAreaElement && active.dataset.mdBlock)) {
                        setFocusedId(null);
                      }
                    }, 0);
                  }}
                />
              ) : (
                <RenderedBlock onClick={() => setFocusedId(block.id)}>
                  <MarkdownText
                    markdown={`${PREFIX[block.type]}${block.text}`}
                    fallback=" "
                  />
                </RenderedBlock>
              )}
            </BlockRow>
          );
        })}
      </Editor>
      <Helper>
        `# ` 제목 · `## ` 작은 제목 · `- ` 목록 · `&gt; ` 인용 · Shift+Enter 줄바꿈
      </Helper>
    </>
  );
}
