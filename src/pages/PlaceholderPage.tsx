import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 48px 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text700};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text900};
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin-bottom: 24px;
`;

const BackLink = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.primary600};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
  }
`;

interface PlaceholderPageProps {
  title: string;
  message: string;
}

const PlaceholderPage = ({ title, message }: PlaceholderPageProps) => {
  const navigate = useNavigate();
  return (
    <Page>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <BackLink type="button" onClick={() => navigate(-1)}>
        이전으로
      </BackLink>
    </Page>
  );
};

export default PlaceholderPage;
