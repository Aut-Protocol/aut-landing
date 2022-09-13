import styled from "styled-components";
import { variant, alignItems, boxShadow } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { buttonStyle, colorStyle, sizeStyle } from "../customVariant";
import { base } from "../base";

const ButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.8rem;
  min-width: 10rem;
  font-family: inherit;
  font-size: 2.625rem;
  border-radius: 40px;

  font-weight: 900;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.3s ease;
  border-width: 3px;
  border-style: solid;
  span.btn-text {
    // padding-left: ${themeGet("space.1", "4")}px;
    // padding-right: ${themeGet("space.1", "4")}px;
  }

  &:not([disabled]) {
    background-color: #000;
    border-color: #009ade;
    color: #fff;

    &:hover {
      background-color: #009ade;
    }
  }

  // &:not([disabled]).light {
  //   &:hover {
  //     background-color: black;
  //     border-color: white;
  //     color: white;
  //   }
  // }

  &[disabled] {
    cursor: unset;
    color: black;
    background-color: #939393;
  }

  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet("space.2", "8")}px;
      padding-right: ${themeGet("space.2", "8")}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}

  &.gradient {
    border-image: linear-gradient(
        45.57deg,
        #009fe3 0%,
        #0399de 8%,
        #0e8bd3 19%,
        #2072bf 30%,
        #3a50a4 41%,
        #5a2583 53%,
        #453f94 71%,
        #38519f 88%,
        #3458a4 100%
      )
      1;
    border-width: 3px;
    border-color: transparent;
    border-radius: 0;
    &:not(.disabled):hover {
      background: transparent
        linear-gradient(
          45.57deg,
          #009fe3 0%,
          #0399de 8%,
          #0e8bd3 19%,
          #2072bf 30%,
          #3a50a4 41%,
          #5a2583 53%,
          #453f94 71%,
          #38519f 88%,
          #3458a4 100%
        )
        0% 0%;
      border-color: transparent;
    }
  }
`;

export const LinkStyle = styled.a`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.8rem;
  min-width: 10rem;
  font-family: inherit;
  font-size: 2.625rem;
  border-radius: 40px;

  font-weight: 900;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.3s ease;
  border-width: 3px;
  border-style: solid;
  span.btn-text {
    // padding-left: ${themeGet("space.1", "4")}px;
    // padding-right: ${themeGet("space.1", "4")}px;
  }

  &:not([disabled]) {
    background-color: #000;
    border-color: #009ade;
    color: #fff;

    &:hover {
      background-color: #009ade;
    }
  }

  // &:not([disabled]).light {
  //   &:hover {
  //     background-color: black;
  //     border-color: white;
  //     color: white;
  //   }
  // }

  &[disabled] {
    cursor: unset;
    color: black;
    background-color: #939393;
  }

  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet("space.2", "8")}px;
      padding-right: ${themeGet("space.2", "8")}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}

  &.gradient {
    border-image: linear-gradient(
        45.57deg,
        #009fe3 0%,
        #0399de 8%,
        #0e8bd3 19%,
        #2072bf 30%,
        #3a50a4 41%,
        #5a2583 53%,
        #453f94 71%,
        #38519f 88%,
        #3458a4 100%
      )
      1;
    border-width: 3px;
    border-color: transparent;
    border-radius: 0;
    &:not(.disabled):hover {
      background: transparent
        linear-gradient(
          45.57deg,
          #009fe3 0%,
          #0399de 8%,
          #0e8bd3 19%,
          #2072bf 30%,
          #3a50a4 41%,
          #5a2583 53%,
          #453f94 71%,
          #38519f 88%,
          #3458a4 100%
        )
        0% 0%;
      border-color: transparent;
    }
  }
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...variant.propTypes,
};

ButtonStyle.displayName = "ButtonStyle";

export default ButtonStyle;
