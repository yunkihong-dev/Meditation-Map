import { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { AdminInput } from "@/components/admin/adminStyles";

const Wrap = styled.div`
  position: relative;
`;

const PaddedInput = styled(AdminInput)`
  padding-right: 52px;
`;

const Toggle = styled.button`
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #a1a1aa;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #7c5cbf;
    outline-offset: 1px;
  }
`;

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

/** 관리자 화면 비밀번호 입력 — 오른쪽 버튼으로 입력값을 보이거나 숨긴다. */
export default function AdminPasswordInput(props: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <Wrap>
      <PaddedInput {...props} type={visible ? "text" : "password"} />
      <Toggle
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "비밀번호 숨기기" : "비밀번호 보기"}
        aria-pressed={visible}
      >
        {visible ? "숨기기" : "보기"}
      </Toggle>
    </Wrap>
  );
}
