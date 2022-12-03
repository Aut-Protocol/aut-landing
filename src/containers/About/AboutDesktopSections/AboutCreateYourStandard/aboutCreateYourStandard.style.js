import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 30px;

  .container {
    z-index: 5;
  }

  ${themeGet("mediaQueries.md")} {
    margin-bottom: 100px;
    margin-top: 0;
  }

  .container {
    ${themeGet("mediaQueries.md")} {
      max-width: 800px;
    }
  }

  .container {
    ${themeGet("mediaQueries.xxl")} {
      max-width: 1000px;
    }
  }

  .no-uppercase {
    text-transform: none !important;
  }
`;

export const ImageWrapper = styled.div`
  display: none;

  ${themeGet("mediaQueries.md")} {
    display: block;
    figure {
      position: absolute;
      height: 600px;
      width: 600px;
      z-index: 0;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
  }
`;

export const TypographyWrapper = styled.div`
  ${themeGet("mediaQueries.md")} {
    max-width: 500px;
  }

  ${themeGet("mediaQueries.xxl")} {
    max-width: 700px;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${themeGet("mediaQueries.md")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
