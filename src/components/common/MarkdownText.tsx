import ReactMarkdown from "react-markdown";
import { MarkdownContent } from "./MarkdownContent";

interface MarkdownTextProps {
  markdown?: string;
  fallback?: React.ReactNode;
}

export function MarkdownText({ markdown, fallback = null }: MarkdownTextProps) {
  const text = markdown?.trim();
  if (!text) return <>{fallback}</>;
  return (
    <MarkdownContent>
      <ReactMarkdown>{text}</ReactMarkdown>
    </MarkdownContent>
  );
}
