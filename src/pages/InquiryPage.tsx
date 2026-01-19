import styled from "styled-components";

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

const Card = styled.div`
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const InquiryPage = () => {
  return (
    <Page>
      <Title>1:1 문의</Title>
      <Subtitle>궁금한 점을 남겨주시면 빠르게 답변드릴게요.</Subtitle>

      <Card>
        <p>이메일: support@healingmeditation.kr</p>
        <p>운영시간: 평일 09:00 - 18:00</p>
      </Card>
    </Page>
  );
};

export default InquiryPage;
