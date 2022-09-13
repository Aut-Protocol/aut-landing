import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper,
  TopWrapper,
  BottomWrapper,
} from "./productCard.style";
import ProductCardWrapper from "./productCard.style";

const ProductCard = ({
  className,
  icon,
  title,
  button,
  description,
  iconPosition,
  additionalContent,
  wrapperStyle,
  iconStyle,
  contentStyle,
  btnWrapperStyle,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["product__card"];

  // Add icon position class
  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // check icon value and add
  const Icon = icon && (
    <IconWrapper className="icon__wrapper" {...iconStyle}>
      {icon}
    </IconWrapper>
  );

  return (
    <ProductCardWrapper
      className={addAllClasses.join(" ")}
      {...wrapperStyle}
      {...props}
    >
      <TopWrapper>
        {title}
        {Icon}
      </TopWrapper>

      {description ? (
        <Fragment>
          <ContentWrapper className="content__wrapper" {...contentStyle}>
            {description}
          </ContentWrapper>
          {additionalContent}
        </Fragment>
      ) : (
        ""
      )}

      {button ? (
        <Fragment>
          <BottomWrapper
            style={{
              borderImage:
                "linear-gradient(45.57deg, rgb(0, 159, 227) 0%, rgb(3, 153, 222) 8%, rgb(14, 139, 211) 19%, rgb(32, 114, 191) 30%, rgb(58, 80, 164) 41%, rgb(90, 37, 131) 53%, rgb(69, 63, 148) 71%, rgb(56, 81, 159) 88%, rgb(52, 88, 164) 100%) 1 / 1 / 0 stretch",
            }}
          >
            <ButtonWrapper className="button__wrapper" {...btnWrapperStyle}>
              {button}
            </ButtonWrapper>
          </BottomWrapper>
        </Fragment>
      ) : (
        ""
      )}
    </ProductCardWrapper>
  );
};

ProductCard.propTypes = {
  /** ClassName of the FeatureBlock */
  className: PropTypes.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: PropTypes.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: PropTypes.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: PropTypes.element,

  /** Set icon position of the FeatureBlock */
  iconPosition: PropTypes.oneOf(["top", "left", "right"]),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: PropTypes.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: PropTypes.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: PropTypes.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: PropTypes.object,
};

ProductCard.defaultProps = {
  iconPosition: "top",
};

export default ProductCard;
