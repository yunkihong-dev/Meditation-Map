import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import noticesData from "@/data/notices.json";

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

const SearchBox = styled.form`
  margin: 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 16px;
  display: grid;
  gap: 8px;
`;

const SearchLabel = styled.label`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const SearchRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`;

const SearchInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border200};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 12px;
  font-size: 1.1rem;
`;

const SearchButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 0 18px;
  font-size: 1.1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const List = styled.div`
  display: grid;
  gap: 12px;
`;

const Row = styled.button<{ $active?: boolean }>`
  width: 100%;
  text-align: left;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 16px;
  display: grid;
  gap: 10px;
  cursor: pointer;
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadow.soft : "none")};
`;

const RowTop = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
`;

const Category = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary700};
  font-weight: 600;
`;

const RowTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

const RowDate = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text700};
`;

const Details = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border200};
  padding-top: 12px;
  display: grid;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text700};
  line-height: 1.6;
`;

const BulletList = styled.ul`
  padding-left: 18px;
  display: grid;
  gap: 6px;
`;

const TtsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const TtsButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  background: ${({ theme }) => theme.colors.primary50};
  color: ${({ theme }) => theme.colors.primary700};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary100};
  }
`;

const LangToggle = styled.div`
  display: flex;
  gap: 4px;

  button {
    padding: 6px 10px;
    border: 1px solid ${({ theme }) => theme.colors.border200};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;

    &.active {
      background: ${({ theme }) => theme.colors.primary100};
      border-color: ${({ theme }) => theme.colors.primary300};
      color: ${({ theme }) => theme.colors.primary700};
    }
  }
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const PageButton = styled.button<{ $active?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.border200};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary600 : theme.colors.white};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`;

type TtsLang = "ko-KR" | "en-US";

const NoticePage = () => {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(noticesData[0]?.id ?? null);
  const [page, setPage] = useState(1);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [ttsLang, setTtsLang] = useState<TtsLang>("ko-KR");
  const [preferRemote, setPreferRemote] = useState(false); // Google 등 온라인 음성 (네트워크 필요)
  const pageSize = 6;

  const speakText = useCallback(
    (text: string, noticeId: string) => {
      if (!("speechSynthesis" in window)) {
        alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");
        return;
      }
      window.speechSynthesis.cancel();

      const voices = window.speechSynthesis.getVoices();
      const langPrefix = ttsLang.split("-")[0];
      const matching = voices.filter((v) => v.lang.startsWith(langPrefix));
      const local = matching.filter((v) => v.localService);
      const remote = matching.filter((v) => !v.localService);
      const preferred = preferRemote && remote.length
        ? remote[0]
        : local[0] ?? matching[0]; // 기본: 로컬 우선. preferRemote 시 Google 등 온라인 음성

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = ttsLang;
      utterance.rate = 0.95;
      if (preferred) utterance.voice = preferred;

      utterance.onstart = () => setSpeakingId(noticeId);
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = (e) => {
        setSpeakingId(null);
        console.warn("TTS error:", e);
      };
      window.speechSynthesis.speak(utterance);
    },
    [ttsLang, preferRemote]
  );

  // Chrome: voices 비동기 로드 → 미리 트리거
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const load = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = load;
    load();
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const filtered = useMemo(() => {
    const lower = query.trim().toLowerCase();
    if (!lower) return noticesData;
    return noticesData.filter((notice) => {
      const haystack = [
        notice.title,
        notice.summary,
        ...notice.details.paragraphs,
        ...(notice.details.bullets ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(lower);
    });
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setPage(1);
  };

  return (
    <Page>
      <Title>공지사항</Title>
      <Subtitle>전국 힐링명상지도에서 전하는 소식을 확인하세요.</Subtitle>

      <SearchBox onSubmit={handleSearch}>
        <SearchLabel htmlFor="notice-search">공지사항 검색</SearchLabel>
        <SearchRow>
          <SearchInput
            id="notice-search"
            type="text"
            placeholder="검색어를 입력해주세요."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <SearchButton type="submit">검색</SearchButton>
        </SearchRow>
      </SearchBox>

      <List>
        {pageItems.map((notice) => {
          const isOpen = openId === notice.id;
          return (
            <Row
              key={notice.id}
              type="button"
              $active={isOpen}
              onClick={() => setOpenId(isOpen ? null : notice.id)}
            >
              <RowTop>
                <Category>{notice.category}</Category>
                <RowTitle>{notice.title}</RowTitle>
                <RowDate>{notice.date}</RowDate>
              </RowTop>
              {isOpen && (
                <Details>
                  <TtsRow>
                    <TtsButton
                      type="button"
                      onClick={(e) => {
                      e.stopPropagation();
                      if (speakingId === notice.id) {
                        window.speechSynthesis.cancel();
                        return;
                      }
                      const text = [
                        notice.title,
                        notice.summary,
                        ...notice.details.paragraphs,
                        ...(notice.details.bullets ?? []),
                        notice.details.footer,
                      ]
                        .filter(Boolean)
                        .join(". ");
                      speakText(text, notice.id);
                    }}
                  >
                    {speakingId === notice.id ? (
                      <>멈추기</>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                        음성으로 들으기
                      </>
                    )}
                    </TtsButton>
                    <LangToggle>
                      <button
                        type="button"
                        className={ttsLang === "ko-KR" ? "active" : ""}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTtsLang("ko-KR");
                        }}
                      >
                        한국어
                      </button>
                      <button
                        type="button"
                        className={ttsLang === "en-US" ? "active" : ""}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTtsLang("en-US");
                        }}
                      >
                        English
                      </button>
                      <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.85rem", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={preferRemote}
                          onChange={(e) => {
                            e.stopPropagation();
                            setPreferRemote(e.target.checked);
                          }}
                        />
                        고품질(온라인)
                      </label>
                    </LangToggle>
                  </TtsRow>
                  <p>{notice.summary}</p>
                  {notice.details.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  {notice.details.bullets?.length > 0 && (
                    <BulletList>
                      {notice.details.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </BulletList>
                  )}
                  <p>{notice.details.footer}</p>
                </Details>
              )}
            </Row>
          );
        })}
      </List>

      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={`page-${index + 1}`}
            type="button"
            $active={currentPage === index + 1}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
    </Page>
  );
};

export default NoticePage;
