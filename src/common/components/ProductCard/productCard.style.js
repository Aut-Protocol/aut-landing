import styled from "styled-components";
import {
  color,
  width,
  height,
  display,
  space,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
  position,
  overflow,
  fontSize,
  textAlign,
} from "styled-system";

// FeatureBlock wrapper style
const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  // &.icon_left {
  //   display: flex;
  //   .icon__wrapper {
  //     flex-shrink: 0;
  //   }
  // }
  // &.icon_right {
  //   display: flex;
  //   flex-direction: row-reverse;
  //   .content__wrapper {
  //     text-align: right;
  //   }
  //   .icon__wrapper {
  //     flex-shrink: 0;
  //   }
  // }

  /* styled system prop support */
  ${display}
  ${width}
  ${height}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}

  justify-content: space-between;
`;

// Icon wrapper style
const IconWrapper = styled.div`
  ${display}
  ${width}
  ${height}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
  ${fontSize}
  display: flex;
`;

// Content wrapper style
const ContentWrapper = styled.div`
  ${width}
  ${space}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  padding: 0 20px;
  flex: 1;

  p {
    font-size: 1.125rem;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  grid-gap: 10px;
  font-size: 2.188rem;
  margin: 0;

  h2 {
    margin: 0;
    font-size: 2.188rem;
  }

  img {
    height: 2.5rem;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: center;
  height: 15%;
  padding: 0;
  border-top: 3px;
  border-style: solid;
  border-bottom: none;
  border-right: none;
  border-left: none;
  width: 100%;
`;

// Button wrapper style
const ButtonWrapper = styled.div`
  ${space}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}
  height: 100%;
  width: 100%;
  display: flex;
`;

export {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper,
  TopWrapper,
  BottomWrapper,
};
export default ProductCardWrapper;
