import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { typography } from "@/styles/typography";

/** 제목과 내용을 한 줄로 합칠 때 쓰는 구분자. 공개 화면에는 이 형태 그대로 나갑니다. */
const SEPARATOR = " · ";

/** 서버가 항목 하나를 120자까지 받으므로 둘을 합쳐도 넘지 않게 잡았습니다. */
const TITLE_MAX = 60;
const DETAIL_MAX = 55;
const MAX_ROWS = 20;

interface Row {
  title: string;
  detail: string;
}

function decode(values: string[]): Row[] {
  return values.map((raw) => {
    const at = raw.indexOf(SEPARATOR);
    if (at < 0) return { title: raw, detail: "" };
    return { title: raw.slice(0, at), detail: raw.slice(at + SEPARATOR.length) };
  });
}

function encode(rows: Row[]): string[] {
  return rows
    .map(({ title, detail }) => {
      const t = title.trim();
      const d = detail.trim();
      if (!t) return d;
      if (!d) return t;
      return `${t}${SEPARATOR}${d}`;
    })
    .filter(Boolean);
}

const Rows = styled.div`
  display: grid;
  gap: 10px;
`;

const RowCard = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr) auto;

    input:first-child {
      grid-column: 1 / -1;
    }
  }
`;

const RowInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 13px;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text900};
  ${typography.body2};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedMauve};
  }
`;

const RemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 38px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.colors.primary200};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text700};
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
    border-color: ${({ theme }) => theme.colors.primary600};
  }
`;

const AddButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 12px 0;
  border: 1px dashed ${({ theme }) => theme.colors.primary200};
  border-radius: 12px;
  background: none;
  color: ${({ theme }) => theme.colors.text700};
  cursor: pointer;
  ${typography.body2};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme.colors.primary600};
    color: ${({ theme }) => theme.colors.primary600};
  }
`;

interface CredentialListFieldProps {
  value: string[];
  onChange: (next: string[]) => void;
  titlePlaceholder: string;
  detailPlaceholder: string;
  addLabel: string;
}

/**
 * 이력 항목 입력기. 항목 하나가 제목 + 내용 한 쌍이고, 필요한 만큼 줄을 늘려 씁니다.
 *
 * 전에는 줄바꿈으로 구분하는 textarea 였는데, 입력할 때마다 문자열을 잘라 배열로 만들고 다시
 * 합쳐 되돌리는 구조였습니다. 그 과정에서 줄마다 trim 이 걸려 낱말 사이 공백을 넣을 수 없었고,
 * 조합 중인 한글도 매 글자마다 값이 갈아끼워져 자모가 흩어졌습니다.
 *
 * 그래서 편집하는 동안에는 부모가 준 값을 다시 읽지 않고 이 컴포넌트가 가진 행 상태만 씁니다.
 * 밖에서 값이 새로 들어올 때(프로필을 처음 불러왔을 때)만 맞춥니다.
 */
export default function CredentialListField({
  value,
  onChange,
  titlePlaceholder,
  detailPlaceholder,
  addLabel,
}: CredentialListFieldProps) {
  const [rows, setRows] = useState<Row[]>(() => {
    const decoded = decode(value);
    return decoded.length > 0 ? decoded : [{ title: "", detail: "" }];
  });

  // 마지막으로 부모에게 올려보낸 값. 되돌아온 값이 이것과 같으면 내 행 상태를 건드리지 않습니다.
  const emittedRef = useRef<string>(value.join("\n"));

  useEffect(() => {
    const incoming = value.join("\n");
    if (incoming === emittedRef.current) return;
    emittedRef.current = incoming;
    const decoded = decode(value);
    setRows(decoded.length > 0 ? decoded : [{ title: "", detail: "" }]);
  }, [value]);

  const commit = (next: Row[]) => {
    setRows(next);
    const encoded = encode(next);
    emittedRef.current = encoded.join("\n");
    onChange(encoded);
  };

  const patch = (index: number, key: keyof Row, text: string) => {
    commit(rows.map((row, i) => (i === index ? { ...row, [key]: text } : row)));
  };

  const remove = (index: number) => {
    const next = rows.filter((_, i) => i !== index);
    commit(next.length > 0 ? next : [{ title: "", detail: "" }]);
  };

  return (
    <div>
      <Rows>
        {rows.map((row, index) => (
          <RowCard key={index}>
            <RowInput
              value={row.title}
              maxLength={TITLE_MAX}
              placeholder={titlePlaceholder}
              onChange={(e) => patch(index, "title", e.target.value)}
            />
            <RowInput
              value={row.detail}
              maxLength={DETAIL_MAX}
              placeholder={detailPlaceholder}
              onChange={(e) => patch(index, "detail", e.target.value)}
            />
            <RemoveButton
              type="button"
              aria-label={`${index + 1}번째 항목 삭제`}
              onClick={() => remove(index)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </RemoveButton>
          </RowCard>
        ))}
      </Rows>

      <AddButton
        type="button"
        disabled={rows.length >= MAX_ROWS}
        onClick={() => setRows([...rows, { title: "", detail: "" }])}
      >
        {addLabel} +
      </AddButton>
    </div>
  );
}
