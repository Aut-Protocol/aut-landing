import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;
  margin-bottom: 50px;
  margin-top: 30px;

  ${themeGet("mediaQueries.md")} {
    margin-bottom: 100px;
    margin-top: 100px;

    .container {
      height: 100%;

      svg {
        overflow: visible;
      }
    }
  }
`;


export const CircleWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;

export const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Section;
