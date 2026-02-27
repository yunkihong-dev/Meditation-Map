import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary50} 0%, ${({ theme }) => theme.colors.warmCream} 100%);
`;

const Title3D = styled.div`
  font-size: clamp(5rem, 18vw, 10rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primary300} 0%, ${({ theme }) => theme.colors.primary500} 40%, ${({ theme }) => theme.colors.primary600} 70%, ${({ theme }) => theme.colors.primary800} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 2px rgba(75, 0, 130, 0.25))
          drop-shadow(0 4px 4px rgba(75, 0, 130, 0.15))
          drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
  transform: perspective(200px) rotateX(5deg);
  margin-bottom: 16px;
`;

const Oops = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary700};
  margin: 0 0 8px;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary400};
  margin: 0 0 32px;
  text-align: center;
  line-height: 1.5;
`;

const HomeButton = styled.button`
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary600};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary700};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Title3D>404</Title3D>
      <Oops>Oops!</Oops>
      <Message>페이지를 찾을 수 없습니다.</Message>
      <HomeButton type="button" onClick={() => navigate("/")}>
        홈으로
      </HomeButton>
    </Page>
  );
};

export default NotFoundPage;
