import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { theme } from "common/theme";

const SectionWrapper = styled.section`
  position: relative;
  z-index: 0;
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

export const LeftWrapper = styled.div`
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

export const Grid = styled.div`
  display: flex;
  align-items: space-between;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  flex-direction: column;
  margin-bottom: 50px;

  ${themeGet("mediaQueries.md")} {
    flex-direction: row;
    max-height: 400px;\
    margin-bottom: 0;
  }

  ${themeGet("mediaQueries.xxl")} {
    max-height: 600px;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  img {
    height: 400px;
    max-width: 400px;

    ${themeGet("mediaQueries.md")} {
      height: 518px;
      max-width: 662px;
    }

    ${themeGet("mediaQueries.xxl")} {
      height: 698px;
      max-width: 892px;
    }
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

export default SectionWrapper;
