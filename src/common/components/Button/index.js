import React, { forwardRef, Fragment } from "react";
import PropTypes from "prop-types";
import ButtonStyle, { buttonStyles } from "./button.style";
import Loader from "../Loader";

const Button = forwardRef(
  (
    {
      type,
      title,
      icon,
      disabled,
      iconPosition,
      onClick,
      loader,
      loaderColor,
      isMaterial,
      isLoading,
      className,
      ...props
    },
    ref
  ) => {
    // Add all classs to an array
    const addAllClasses = ["reusecore__button"];

    // isLoading prop checking
    if (isLoading) {
      addAllClasses.push("is-loading");
    }

    // isMaterial prop checking
    if (isMaterial) {
      addAllClasses.push("is-material");
    }

    // className prop checking
    if (className) {
      addAllClasses.push(className);
    }

    // Checking button loading state
    const buttonIcon =
      isLoading !== false ? (
        <Fragment>
          {loader ? loader : <Loader loaderColor={loaderColor || "#000"} />}
        </Fragment>
      ) : (
        icon && <span className="btn-icon">{icon}</span>
      );

    // set icon position
    const position = iconPosition || "right";

    return (
      <ButtonStyle
        ref={ref}
        type={type}
        className={addAllClasses.join(" ")}
        icon={icon}
        disabled={disabled}
        icon-position={position}
        onClick={onClick}
        {...props}
        {...buttonStyles[props.size]}
      >
        {position === "left" && buttonIcon}
        {title && <span className="btn-title">{title}</span>}
        {position === "right" && buttonIcon}
      </ButtonStyle>
    );
  }
);

Button.displayName = "Button";

Button.propTypes = {
  /** ClassName of the button */
  className: PropTypes.string,

  /** Add icon */
  type: PropTypes.oneOf(["button", "submit", "reset"]),

  /** Add icon */
  icon: PropTypes.object,

  /** Add loader */
  loader: PropTypes.object,

  /** Add Material effect */
  isMaterial: PropTypes.bool,

  /** Button Loading state */
  isLoading: PropTypes.bool,

  /** Button Loading state */
  loaderColor: PropTypes.string,

  /** If true button will be disabled */
  disabled: PropTypes.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: PropTypes.oneOf(["left", "right"]),

  /** Variant change button shape */
  variant: PropTypes.oneOf([
    "outlined",
    "text",
    "roundOutlined",
    "navLink",
    "link",
    "linkUnderline",
    "formFieldAdj"
  ]),

  size: PropTypes.oneOf([
    "normal",
    "chunky",
    "square",
  ]),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "error",
    "nav",
    "primaryWithBg",
    "secondaryWithBg",
    "warningWithBg",
    "errorWithBg",
    "formFieldAdj"
  ]),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: "button",
};

export default Button;
