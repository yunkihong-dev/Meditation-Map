import { useCallback, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { formatFiveStarRow } from "@/services/meditation/starRating";

const DEFAULT_PAGE_SIZE = 5;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${fadeIn} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`;

const Sheet = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(92dvh, 720px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({ theme }) => theme.radii.lg};
    max-width: 440px;
    max-height: min(85dvh, 640px);
  }
`;

const SheetHeader = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
`;

const HeaderText = styled.div`
  min-width: 0;
`;

const SheetTitle = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text900};
`;

const SheetSubtitle = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text700};
`;

const CloseBtn = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.bg100};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.text900};
`;

const SheetBody = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px calc(24px + env(safe-area-inset-bottom, 0px));
`;

const ReviewEntry = styled.article`
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const AuthorLine = styled.p`
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text900};
`;

const FullText = styled.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text700};
  white-space: pre-wrap;
  word-break: break-word;
`;

const PaginationBar = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({ theme }) => theme.colors.primary100};
  background: ${({ theme }) => theme.colors.white};
`;

const PageNavBtn = styled.button`
  min-width: 72px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary700};
  font-size: 0.88rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.primary50};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const PageIndicator = styled.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text700};
  min-width: 4.5em;
  text-align: center;
`;

export interface ReviewListItem {
  author: string;
  body: string;
  rating?: number;
}

export interface ReviewsListSheetProps {
  open: boolean;
  onClose: () => void;
  heading?: string;
  reviews: ReviewListItem[];
  /** 한 페이지에 보일 후기 수 (기본 5). 데이터는 `reviews` 배열 전체를 JSON 등에서 주입합니다. */
  pageSize?: number;
}

const ReviewsListSheet = ({
  open,
  onClose,
  heading = "후기",
  reviews,
  pageSize: pageSizeProp,
}: ReviewsListSheetProps) => {
  const pageSize = pageSizeProp ?? DEFAULT_PAGE_SIZE;
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!open) {
      setPage(1);
      return;
    }
    setPage(1);
  }, [open, reviews]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.stopPropagation();
      onClose();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const count = reviews.length;
  const totalPages = count === 0 ? 0 : Math.ceil(count / pageSize);
  const safePage = totalPages === 0 ? 1 : Math.min(page, totalPages);

  const pageSlice = useMemo(() => {
    if (count === 0) return [];
    const start = (safePage - 1) * pageSize;
    return reviews.slice(start, start + pageSize);
  }, [reviews, count, safePage, pageSize]);

  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  if (!open) return null;

  const subtitle =
    count === 0
      ? "등록된 후기가 없어요."
      : totalPages > 1
        ? `총 ${count}건 · ${pageSize}건씩 보기`
        : `총 ${count}건`;

  return (
    <Overlay role="presentation" onClick={onOverlayClick}>
      <Sheet
        role="dialog"
        aria-modal="true"
        aria-labelledby="reviews-list-sheet-title"
        onClick={(e) => e.stopPropagation()}
      >
        <SheetHeader>
          <HeaderText>
            <SheetTitle id="reviews-list-sheet-title">{heading}</SheetTitle>
            <SheetSubtitle>{subtitle}</SheetSubtitle>
          </HeaderText>
          <CloseBtn type="button" onClick={onClose} aria-label="닫기">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </CloseBtn>
        </SheetHeader>
        <SheetBody>
          {count === 0
            ? null
            : pageSlice.map((r, i) => {
                const ratingPart =
                  r.rating != null ? ` · ${formatFiveStarRow(r.rating)}` : "";
                const globalIdx = (safePage - 1) * pageSize + i;
                return (
                  <ReviewEntry key={`${r.author}-${globalIdx}`}>
                    <AuthorLine>
                      {r.author}
                      {ratingPart}
                    </AuthorLine>
                    <FullText>{r.body}</FullText>
                  </ReviewEntry>
                );
              })}
        </SheetBody>
        {count > 0 && totalPages > 1 && (
          <PaginationBar>
            <PageNavBtn
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage <= 1}
            >
              이전
            </PageNavBtn>
            <PageIndicator>
              {safePage} / {totalPages}
            </PageIndicator>
            <PageNavBtn
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage >= totalPages}
            >
              다음
            </PageNavBtn>
          </PaginationBar>
        )}
      </Sheet>
    </Overlay>
  );
};

export default ReviewsListSheet;
