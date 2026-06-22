export type NoticeDraft = {
  category: string;
  title: string;
  date: string;
  summary: string;
  body: string;
  bullets: string;
  footer: string;
};

export function emptyNoticeDraft(): NoticeDraft {
  return {
    category: "공지",
    title: "",
    date: new Date().toISOString().slice(0, 10),
    summary: "",
    body: "",
    bullets: "",
    footer: "",
  };
}

export function draftFromPayload(payload: Record<string, unknown>): NoticeDraft {
  const details = payload.details as
    | { paragraphs?: string[]; bullets?: string[]; footer?: string }
    | undefined;
  return {
    category: String(payload.category ?? "공지"),
    title: String(payload.title ?? ""),
    date: String(payload.date ?? ""),
    summary: String(payload.summary ?? ""),
    body: (details?.paragraphs ?? []).join("\n\n"),
    bullets: (details?.bullets ?? []).join("\n"),
    footer: String(details?.footer ?? ""),
  };
}

export function payloadFromDraft(draft: NoticeDraft): Record<string, unknown> {
  const paragraphs = draft.body
    .split(/\n{2,}/)
    .map((line) => line.trim())
    .filter(Boolean);
  const bullets = draft.bullets
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const details: Record<string, unknown> = {
    paragraphs: paragraphs.length > 0 ? paragraphs : [draft.summary.trim() || draft.title.trim() || "내용"],
  };
  if (bullets.length > 0) details.bullets = bullets;
  if (draft.footer.trim()) details.footer = draft.footer.trim();

  return {
    category: draft.category.trim() || "공지",
    title: draft.title.trim(),
    date: draft.date.trim(),
    summary: draft.summary.trim(),
    details,
  };
}
