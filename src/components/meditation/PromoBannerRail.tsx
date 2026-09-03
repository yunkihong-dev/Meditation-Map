import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import type { BannerDto } from "@/services/meditation/repositories/bannersRepository";

/**
 * 홈 중간 이미지 배너. 관리자 화면에서 올린 것을 그대로 보여 줍니다.
 * (게시 기간·on/off·순서는 서버가 이미 걸러서 순서대로 내려 줍니다.)
 *
 * 한 장이면 폭을 꽉 채우고, 여러 장이면 좌우로 넘겨 봅니다.
 * 이미지가 늦게 와도 자리가 밀리지 않도록 비율을 미리 잡아 둡니다.
 */
const Rail = styled.section`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin-inline: -20px;
  padding: 0 20px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  border: ${({ theme }) => theme.hairline};
  box-shadow: ${({ theme }) => theme.shadow.card};
  background: ${({ theme }) => theme.colors.surfaceContainer};

  /* 링크가 있든 없든 안쪽은 같은 모양입니다. */
  > * {
    display: block;
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 7;
    object-fit: cover;
  }

  a:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary500};
    outline-offset: 2px;
  }
`;

/** 앱 안 경로는 라우터로, 바깥 주소는 새 창으로 엽니다. */
function PromoLink({ href, children }: { href?: string; children: ReactNode }) {
  if (!href) return <span>{children}</span>;
  if (/^https?:\/\//i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  return <Link to={href}>{children}</Link>;
}

interface PromoBannerRailProps {
  promos: BannerDto[];
  "aria-label"?: string;
}

const PromoBannerRail = ({ promos, "aria-label": ariaLabel }: PromoBannerRailProps) => {
  // 넣은 배너가 없으면 자리도 만들지 않습니다 — 빈 상자가 남지 않게.
  if (promos.length === 0) return null;

  return (
    <Rail aria-label={ariaLabel ?? "배너"}>
      {promos.map((promo) => (
        <Slide key={promo.id}>
          <PromoLink href={promo.href}>
            <img src={promo.imageUrl} alt={promo.alt ?? ""} loading="lazy" decoding="async" />
          </PromoLink>
        </Slide>
      ))}
    </Rail>
  );
};

export default PromoBannerRail;
