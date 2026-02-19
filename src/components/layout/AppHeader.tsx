import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "@/assets/logo.png";

const Header = styled.header`
  position: relative;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  background: ${({ theme }) => theme.colors.warmCream};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

const TitleBlock = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primary600};
  margin: 0;
  line-height: 1.3;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary400};
  margin: 2px 0 0;
`;

const Spacer = styled.div`
  width: 48px;
  flex-shrink: 0;
`;

const AppHeader = () => (
  <Header>
    <LogoLink to="/">
      <LogoImg src={logoImg} alt="명상 지도 로고" />
    </LogoLink>
    <TitleBlock>
      <Title>명상 지도</Title>
      <Subtitle>국내 명상지를 찾아보세요</Subtitle>
    </TitleBlock>
    <Spacer />
  </Header>
);

export default AppHeader;
