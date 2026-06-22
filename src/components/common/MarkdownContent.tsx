import styled from "styled-components";

/** 마크다운 렌더 공통 스타일 (상세·미리보기) */
export const MarkdownContent = styled.div`
  p {
    margin: 0 0 0.5em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 0.95em;
    margin-bottom: 0.35em;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: "•";
    }
  }

  ol {
    counter-reset: md-ol;

    li {
      counter-increment: md-ol;

      &::before {
        content: counter(md-ol) ".";
        font-size: 0.92em;
      }
    }
  }

  blockquote {
    margin: 0 0 0.5em;
    padding-left: 0.75em;
    border-left: 3px solid rgba(75, 0, 130, 0.25);
    color: inherit;
    opacity: 0.9;
  }

  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    margin: 0.75em 0;
  }

  h1,
  h2,
  h3 {
    margin: 0 0 0.4em;
    font-weight: 700;
    line-height: 1.35;
  }

  h1 {
    font-size: 1.15em;
  }

  h2 {
    font-size: 1.05em;
  }

  h3 {
    font-size: 1em;
  }

  strong {
    font-weight: 600;
  }
`;
