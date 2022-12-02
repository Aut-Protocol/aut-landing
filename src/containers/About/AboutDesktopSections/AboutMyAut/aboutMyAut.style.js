import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;
  margin-bottom: 50px;
  margin-top: 30px;

  ${themeGet("mediaQueries.md")} {
    margin-bottom: 0;
    margin-top: 0;

    .container {
      height: 100%;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  img {
    height: 460px;
    max-width: 460px;

    ${themeGet("mediaQueries.xxl")} {
      height: 698px;
      max-width: 892px;
    }
  }
`;
export const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Section;
