import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;

  ${themeGet("mediaQueries.md")} {
    margin-bottom: 7About0px;
  }
`;
export default Section;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  margin-bottom: 50px;

  ${themeGet("mediaQueries.md")} {
    display: none;
  }
`;

export const ContentImage = styled.div`
  justify-content: center;
  align-items: center;
  display: none;

  ${themeGet("mediaQueries.md")} {
    display: flex;

    img {
      height: 470px;
      width: 232px;
    }
  }

  ${themeGet("mediaQueries.xxl")} {
    img {
      height: 723px;
      width: 357px;
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${themeGet("mediaQueries.md")} {
    flex-direction: row;
  }
`;

export const ContentHalf = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
