import styled from "styled-components";

const ProductListSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  .container {
    padding-top: 12rem;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 991px) {
    .container {
      padding-top: 10rem;
    }
  }

  @media only screen and (max-width: 624px) {
  }

  .button_learn_more {
    background: transparent;
    color: white;
    font-size: 1.563rem;
    border: none;
  }

  .product__card {
    position: relative;
    height: 100%;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 0;
    &.inactive {
      user-select: none;
    }

    .product-description {
      font-size: 1.5rem;
      flex-direction: column;
      display: flex;
    }

    a {
      min-height: unset;
      min-width: unset;
      height: 100%;
      width: 100%;
    }
  }
`;

const ProductStyledSection = styled.section`
  position: relative;
  z-index: 0;

  .gradient {
    height: 5.188rem;
    width: 20.938rem;
    font-size: 1.125rem;
    margin: 5.625rem auto;

    &.desktop {
      height: 5.15rem;
      width: 16.62rem;
      font-size: 1.25rem;
      margin: 5.625rem auto;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 12.5rem;
  }

  h1 {
    font-size: 6.875rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 4.375rem;
  }

  .no-uppercase {
    text-transform: none !important;
  }
`;

export const Grid = styled.div`
  grid-gap: 4rem;
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
  // width: 50%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 42rem;
`;

export const ImagePreview = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  svg {
    height: 42rem;
    max-width: 42rem;
  }
  @media only screen and (max-width: 991px) {
    svg {
      height: 30rem;
      max-width: 30rem;
    }
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    svg {
      height: 25rem;
      max-width: 25rem;
    }
    width: 100%;
  }
`;

const OverlayWrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  cursor: auto;
  z-index: 9;
  // border: 1px solid white;
  overflow: hidden;
  max-width: 25.25rem;
  height: 32.625rem;
`;

export { OverlayWrapper, ProductStyledSection };

export default ProductListSectionWrapper;
