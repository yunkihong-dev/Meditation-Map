import styled from "styled-components";
import { useCatalogStore } from "@/stores/catalogStore";

const Wrap = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  background: ${({ theme }) => theme.colors.primary50};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary200};
  color: ${({ theme }) => theme.colors.text900};
`;

const Text = styled.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 0.92rem;
  line-height: 1.45;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const RetryBtn = styled.button`
  padding: 6px 12px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  cursor: pointer;
  font-family: inherit;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;

  &:hover {
    filter: brightness(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary400};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

const CloseBtn = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  display: grid;
  place-items: center;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.text700};
  cursor: pointer;
  font-size: 1.35rem;
  line-height: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary400};
    outline-offset: 2px;
  }
`;

const ServerErrorBanner = () => {
  const catalogError = useCatalogStore((s) => s.catalogError);
  const catalogReady = useCatalogStore((s) => s.catalogReady);
  const clearCatalogError = useCatalogStore((s) => s.clearCatalogError);
  const hydrate = useCatalogStore((s) => s.hydrate);

  if (!catalogError) return null;

  return (
    <Wrap role="alert" aria-live="assertive">
      <Text>{catalogError}</Text>
      <Actions>
        <RetryBtn type="button" disabled={!catalogReady} onClick={() => void hydrate()}>
          다시 시도
        </RetryBtn>
        <CloseBtn type="button" onClick={clearCatalogError} aria-label="오류 안내 닫기">
          ×
        </CloseBtn>
      </Actions>
    </Wrap>
  );
};

export default ServerErrorBanner;
