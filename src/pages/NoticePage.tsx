import { useMemo, useState } from "react";
import styled from "styled-components";
import noticesData from "@/data/notices.json";

const Page = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px 64px;
  color: ${({ theme }) => theme.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px 48px;
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

const NoticePage = () => {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(noticesData[0]?.id ?? null);
  const [page, setPage] = useState(1);
  const pageSize = 6;

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
      <Subtitle>힐링명상에서 전하는 소식을 확인하세요.</Subtitle>

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
