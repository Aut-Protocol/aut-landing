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
const ButtonCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  &.icon_left {
    display: flex;
    .icon__wrapper {
      flex-shrink: 0;
    }
  }
  &.icon_right {
    display: flex;
    flex-direction: row-reverse;
    .content__wrapper {
      text-align: right;
    }
    .icon__wrapper {
      flex-shrink: 0;
    }
  }

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
`;

// Content wrapper style
const ContentWrapper = styled.div`
  ${width}
  ${space}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
  text-align: start;
  padding: 0 20px;

  p {
    font-size: 1.125rem;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35%;
  padding-top: 20px;
  font-size: 2.188rem;

  h2 {
    margin-top: 15px;
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
  padding: 0 20px;
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
export default ButtonCardWrapper;
