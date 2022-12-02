import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;
  margin-bottom: 50px;
  margin-top: 30px;

  ${themeGet("mediaQueries.md")} {
    height: 100vh;
    margin-bottom: 0;
    margin-top: 0;

    .container {
      height: 100%;
    }
  }

`;
export default Section;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  ${themeGet("mediaQueries.md")} {
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentHalf = styled.div`
  flex: 1;

  &.right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
