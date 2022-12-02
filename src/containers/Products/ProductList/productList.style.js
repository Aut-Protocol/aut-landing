import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const ProductListSectionWrapper = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 50px;

  ${themeGet("mediaQueries.md")} {
    padding-top: 100px;
  }
  .no-uppercase {
    text-transform: none !important;
  }
`;

export const ProductsWrapper = styled.div`
  margin-bottom: 50px;
  ${themeGet("mediaQueries.md")} {
    margin-bottom: 100px;
  }
`;

export const Grid = styled.div`
  grid-gap: 100px;
  display: flex;
  align-items: space-between;
  grid-template-columns: 1fr 1fr;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
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

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  img {
    height: 274px;
    width: 488px;

    ${themeGet("mediaQueries.md")} {
      height: 274px;
      width: 488px;
    }

    ${themeGet("mediaQueries.xxl")} {
      height: 377px;
      width: 671px;
    }
  }
`;

export default ProductListSectionWrapper;
