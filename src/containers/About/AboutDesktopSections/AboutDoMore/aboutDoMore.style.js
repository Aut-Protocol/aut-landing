import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  margin-top: 30px;

  &.snap {
    ${themeGet("mediaQueries.md")} {
      margin-top: 0;
    }
  }
`;
export default Section;

export const Grid = styled.div`
  display: flex;
  align-items: space-between;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  flex-direction: column;
  grid-gap: 100px;

  ${themeGet("mediaQueries.md")} {
    flex-direction: row;
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

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  ${themeGet("mediaQueries.md")} {
    display: inherit;
    width: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${themeGet("mediaQueries.md")} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  figure {
    width: 100%;
    height: 400px;
    max-width: 400px;

    ${themeGet("mediaQueries.md")} {
      height: 600px;
      max-width: 600px;
    }

    ${themeGet("mediaQueries.xxl")} {
      height: 800px;
      max-width: 800px;
    }
  }
`;
