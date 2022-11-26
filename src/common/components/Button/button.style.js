import styled from "styled-components";
import { variant, alignItems, boxShadow } from "styled-system";
import { buttonStyle, colorStyle, sizeStyle } from "../customVariant";
import { themeGet } from "@styled-system/theme-get";
import { base } from "../base";

export const buttonStyles = {
  normal: {
    fontFamily: "FractulAltLight",
    letterSpacing: "0.01em",
    fontSize: ["14px", "16px", "16px", "16px", "20px"],
    paddingTop: ["8px", "12px", "14px", "14px", "22px"],
    paddingBottom: ["8px", "12px", "14px", "14px", "22px"],
    paddingLeft: ["16px", "32px", "40px", "48px", "90px"],
    paddingRight: ["16px", "32px", "40px", "48px", "90px"],
  },
  chunky: {
    fontFamily: "FractulAltLight",
    letterSpacing: "0.01em",
    fontSize: ["14px", "16px", "18px", "20px", "24px"],
    paddingTop: ["16px", "16px", "24px", "24px", "40px"],
    paddingBottom: ["16px", "16px", "24px", "24px", "40px"],
    paddingLeft: ["16px", "32px", "40px", "48px", "90px"],
    paddingRight: ["16px", "32px", "40px", "48px", "90px"],
  },
  square: {
    fontFamily: "FractulAltLight",
    letterSpacing: "0.01em",
    borderRadius: 0,
    fontSize: ["14px", "16px", "16px", "16px", "20px"],
    paddingTop: ["16px", "16px", "18px", "20px", "22px"],
    paddingBottom: ["16px", "16px", "18px", "20px", "22px"],
    paddingLeft: ["17px", "18px", "22px", "24px", "30px"],
    paddingRight: ["17px", "18px", "22px", "24px", "30px"],
  },
};

const ButtonStyle = styled("button")`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  background-color: ${themeGet("colors.transparent")};

  &[disabled],
  &[disabled]:hover {
    cursor: unset;
    background-color: ${themeGet("colors.transparent")};
    color: ${themeGet("colors.textDisabled")};
    border-color: ${themeGet("colors.borderDisabled")};
  }

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

  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...variant.propTypes,
};

ButtonStyle.displayName = "ButtonStyle";

export default ButtonStyle;
