import { useCallback, useRef, useState, type ReactNode } from "react";
import {
  DEFAULT_BANNER_ALT,
  DEFAULT_BANNER_HREF,
  DEFAULT_BANNER_IMAGE,
} from "@/services/admin/bannerAdminFields";
import { Link } from "react-router-dom";
import styled from "styled-components";
import type { BannerDto } from "@/services/meditation/repositories/bannersRepository";

/**
 * 홈 중간 이미지 배너. 관리자 화면에서 올린 것을 그대로 보여 줍니다.
 * (게시 기간·on/off·순서는 서버가 이미 걸러서 순서대로 내려 줍니다.)
 *
 * 한 장이면 폭을 꽉 채우고, 여러 장이면 좌우로 넘겨 봅니다.
 *
 * 올린 광고가 없으면 기본 배너를 대신 띄웁니다. 접지 않는 이유는 두 가지입니다.
 * 배너는 화면이 그려진 뒤에 도착하는데 없을 때 접어 버리면 도착하는 순간 아래가
 * 통째로 밀리고, 광고가 빈 기간에 홈 한가운데가 휑하게 비기 때문입니다.
 */
/** 페이지 표시를 배너 위에 얹기 위한 기준 상자. */
const Frame = styled.section`
  position: relative;
`;

const Rail = styled.div`
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
  /*
   * 살짝만 둥글게. 카드(24px)만큼 깎으면 광고 소재의 네 귀퉁이가 눈에 띄게 잘리고,
   * 각지면 화면에서 이 면만 붕 떠 보입니다. 그 사이값입니다.
   */
  border-radius: 12px;
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
    /* 관리자 안내와 같은 800 × 200 비율. 이미지가 늦게 와도 자리가 안 밀립니다. */
    aspect-ratio: 4 / 1;
    object-fit: cover;
  }

  a:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary500};
    outline-offset: 2px;
  }
`;

/** 몇 번째 배너인지. 여러 장일 때만 나옵니다. */
const Counter = styled.span`
  position: absolute;
  right: 32px;
  bottom: 12px;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  pointer-events: none;
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
  const railRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  /* 한 장이 폭을 꽉 채우므로, 스크롤 거리를 한 장 폭으로 나누면 곧 몇 번째인지가 됩니다. */
  const handleScroll = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const per = el.clientWidth;
    if (per === 0) return;
    setIndex(Math.round(el.scrollLeft / per));
  }, []);

  /* 올린 광고가 없으면 기본 배너 한 장으로 자리를 채웁니다. */
  const slides =
    promos.length > 0
      ? promos
      : [
          {
            id: "__default__",
            imageUrl: DEFAULT_BANNER_IMAGE,
            alt: DEFAULT_BANNER_ALT,
            href: DEFAULT_BANNER_HREF,
          },
        ];

  return (
    <Frame aria-label={ariaLabel ?? "배너"}>
      <Rail ref={railRef} onScroll={handleScroll}>
        {slides.map((promo) => (
          <Slide key={promo.id}>
            <PromoLink href={promo.href}>
              <img src={promo.imageUrl} alt={promo.alt ?? ""} loading="lazy" decoding="async" />
            </PromoLink>
          </Slide>
        ))}
      </Rail>
      {slides.length > 1 && (
        <Counter aria-hidden="true">
          {Math.min(index + 1, slides.length)} / {slides.length}
        </Counter>
      )}
    </Frame>
  );
};

export default PromoBannerRail;
