import styled from "styled-components";

const ProductListSectionWrapper = styled.section`
  padding: 5rem 0;
  @media (max-width: 990px) {
    padding: 4rem 0;
  }
  @media (max-width: 767px) {
    padding: 3rem 0;
  }
  .button_learn_more {
    background: transparent;
    color: white;
    font-size: 1.563rem;
    border: none;
  }
  .button__card {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 0;
    user-select: none;

    a {
      min-height: unset;
      min-width: unset;
      height: 100%;
      width: 100%;
    }
  }
`;

const OverlayWrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  cursor: auto;
  z-index: 9;
  border: 1px solid white;
  overflow: hidden;
  max-width: 25.25rem;
  height: 32.625rem;
`;

export { OverlayWrapper };

export default ProductListSectionWrapper;
