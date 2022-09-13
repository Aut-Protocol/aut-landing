import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import { ProductList } from "common/data";
import ProductListSectionWrapper, { OverlayWrapper } from "./productList.style";
import Container from "common/components/UI/Container";
import { LinkButton } from "common/components/Button";
import ProductCard from "common/components/ProductCard";

const ProductListSection = ({
  row,
  col,
  contentStyle,
  blockWrapperStyle,
  productTitle,
  productDescription,
}) => {
  return (
    <ProductListSectionWrapper>
      <Container>
        <Box className="row" {...row} style={{ gap: "50px" }}>
          {ProductList.map((product, index) =>
            product.isActive ? (
              <Box
                className="col"
                {...col}
                key={index}
                style={{
                  borderImage:
                    "linear-gradient(45.57deg, rgb(0, 159, 227) 0%, rgb(3, 153, 222) 8%, rgb(14, 139, 211) 19%, rgb(32, 114, 191) 30%, rgb(58, 80, 164) 41%, rgb(90, 37, 131) 53%, rgb(69, 63, 148) 71%, rgb(56, 81, 159) 88%, rgb(52, 88, 164) 100%) 1 / 1 / 0 stretch",
                  borderWidth: "7px",
                  borderStyle: "solid",
                  maxWidth: "27rem",
                  height: "35rem",
                }}
              >
                <ProductCard
                  icon={<img src={product?.icon?.src} />}
                  wrapperStyle={blockWrapperStyle}
                  contentStyle={contentStyle}
                  iconPosition="right"
                  title={<Heading content={product.title} {...productTitle} />}
                  description={
                    <Text
                      content={product.description}
                      {...productDescription}
                    />
                  }
                  className="productList"
                  button={
                    <LinkButton
                      className="button_learn_more gradient"
                      title="Learn More >"
                      href={product.link}
                      target="_blank"
                    />
                  }
                />
              </Box>
            ) : (
              <OverlayWrapper
                style={{
                  maxWidth: "27rem",
                  height: "35rem",
                }}
                className="col"
                key={index}
              >
                <Box
                  className="col"
                  {...col}
                  key={index}
                  style={{
                    borderImage:
                      "linear-gradient(45.57deg, rgb(0, 159, 227) 0%, rgb(3, 153, 222) 8%, rgb(14, 139, 211) 19%, rgb(32, 114, 191) 30%, rgb(58, 80, 164) 41%, rgb(90, 37, 131) 53%, rgb(69, 63, 148) 71%, rgb(56, 81, 159) 88%, rgb(52, 88, 164) 100%) 1 / 1 / 0 stretch",
                    borderWidth: "20px",
                    borderStyle: "solid",
                    height: "100%",
                    width: "100%",
                    filter: "blur(30px)",
                    backgroundColor: "black",
                    width: "27rem",
                    height: "35rem",
                  }}
                >
                  <ProductCard
                    icon={<img src={product?.icon?.src} />}
                    wrapperStyle={blockWrapperStyle}
                    contentStyle={contentStyle}
                    title={
                      <Heading content={product.title} {...productTitle} />
                    }
                    description={
                      <Text
                        content={product.description}
                        {...productDescription}
                      />
                    }
                    className="productList inactive"
                  />
                </Box>
              </OverlayWrapper>
            )
          )}
        </Box>
      </Container>
    </ProductListSectionWrapper>
  );
};

// ProductListSection style props
ProductListSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  productTitle: PropTypes.object,
  productDescription: PropTypes.object,
};

// ProductListSection default style
ProductListSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
  },
  // ProductListSection col default style
  col: {
    width: [1, 1, 1 / 2, 1 / 3, 1 / 3],
  },
  // ProductListSection block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "20px", "20px"],
  },

  // ProductListSection content default style
  contentStyle: {
    textAlign: "center",
  },
  // ProductListSection title default style
  productTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "15px"],
    letterSpacing: "-0.025em",
    mt: ["15px", "15px", "15px", "25px"],
  },
  // ProductListSection description default style
  productDescription: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#fff",
  },
};

export default ProductListSection;
