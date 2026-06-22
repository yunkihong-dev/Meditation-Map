import { useState } from "react";
import styled from "styled-components";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import { apiFetch, useAuthStore } from "@/stores/authStore";

const Page = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({ theme }) => theme.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Card = styled.div`
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const Form = styled.form`
  display: grid;
  gap: 16px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text700};
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.border200};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
  resize: vertical;
`;

const Submit = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 12px 20px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Hint = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Message = styled.p<{ $variant?: "error" | "ok" }>`
  margin: 12px 0 0;
  font-size: 0.95rem;
  color: ${({ theme, $variant }) =>
    $variant === "error" ? "#b91c1c" : theme.colors.primary700};
`;

const InquiryPage = () => {
  const sessionEmail = useAuthStore((s) => s.email);
  const [email, setEmail] = useState(sessionEmail ?? "");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    if (!getMeditationApiBaseUrl()) {
      setMsg({ text: "지금은 전송할 수 없어요. 잠시 후 다시 시도해 주세요.", ok: false });
      return;
    }
    if (!email.trim() || !subject.trim() || !body.trim()) {
      setMsg({ text: "이메일, 제목, 내용을 모두 입력해 주세요.", ok: false });
      return;
    }
    setBusy(true);
    try {
      const res = await apiFetch("/inquiries", {
        method: "POST",
        body: JSON.stringify({
          email: email.trim(),
          subject: subject.trim(),
          body: body.trim(),
        }),
      });
      if (!res.ok) {
        setMsg({ text: "전송에 실패했습니다.", ok: false });
        return;
      }
      setSubject("");
      setBody("");
      setMsg({ text: "문의가 접수되었습니다. 빠르게 답변드릴게요.", ok: true });
    } catch {
      setMsg({ text: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.", ok: false });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Page>
      <Title>1:1 문의</Title>
      <Subtitle>궁금한 점을 남겨주시면 빠르게 답변드릴게요.</Subtitle>

      <Card>
        <Hint>이메일: support@healingmeditation.kr</Hint>
        <Hint>운영시간: 평일 09:00 - 18:00</Hint>

        <Form onSubmit={(e) => void handleSubmit(e)}>
          <div>
            <Label htmlFor="inquiry-email">회신 받을 이메일</Label>
            <Input
              id="inquiry-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <Label htmlFor="inquiry-subject">제목</Label>
            <Input
              id="inquiry-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="문의 제목"
            />
          </div>
          <div>
            <Label htmlFor="inquiry-body">내용</Label>
            <TextArea
              id="inquiry-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="문의 내용을 자유롭게 적어 주세요."
            />
          </div>
          <Submit type="submit" disabled={busy}>
            {busy ? "전송 중…" : "문의 보내기"}
          </Submit>
          {msg && (
            <Message $variant={msg.ok ? "ok" : "error"} role="status">
              {msg.text}
            </Message>
          )}
        </Form>
      </Card>
    </Page>
  );
};

export default InquiryPage;
