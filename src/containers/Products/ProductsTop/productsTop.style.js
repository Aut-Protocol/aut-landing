const { default: themeGet } = require("@styled-system/theme-get");
import styled from "styled-components";

export const ProductTopSectionWrapper = styled.section`
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
    height: 100vh;
    margin-bottom: 0;
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

export const Content = styled.div`
  flex: 1;
  width: 100%;
  justify-content: center;

  ${themeGet("mediaQueries.md")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  display: none;
  ${themeGet("mediaQueries.md")} {
    display: inline-grid;
    figure {
      position: absolute;
      height: 100vh;
      width: 100vw;
      z-index: 0;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
  }
`;
