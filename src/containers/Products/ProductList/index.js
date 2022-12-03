import React from "react";
import PropTypes from "prop-types";
import { ProductList } from "common/data";
import ProductListSectionWrapper, {
  Content,
  Grid,
  ImagePreview,
  ProductsWrapper,
  RightWrapper,
} from "./productList.style";
import Container from "common/components/Container";
import Button from "common/components/Button";
import ProductSection from "common/components/ProductSection";
import Typography from "common/components/Typography";
import Image from "common/components/Image";

const ProductListSection = ({ contentStyle, blockWrapperStyle }) => {
  return (
    <>
      <ProductsWrapper>
        {ProductList.map((product, index) =>
          product.isActive ? (
            <ProductListSectionWrapper key={`section-${index}`}>
              <Container>
                <Grid>
                  <Content>
                    <ProductSection
                      icon={
                        <Image
                          height={{
                            _: "36px",
                            xxl: "50px",
                          }}
                          width={{
                            _: "36px",
                            xxl: "50px",
                          }}
                          src={product?.icon?.src}
                          alt="Icon Image"
                        />
                      }
                      wrapperStyle={blockWrapperStyle}
                      contentStyle={contentStyle}
                      iconPosition="right"
                      title={
                        <Typography
                          m="0"
                          color="white"
                          as="h3"
                          fontWeight="normal"
                        >
                          {product?.title}
                        </Typography>
                      }
                      description={
                        <Typography
                          m="0"
                          color="white"
                          as="subtitle2"
                          textAlign="left"
                          fontWeight="normal"
                        >
                          {product?.description}
                        </Typography>
                      }
                      className="productList"
                      button={
                        <Button
                          title="Learn More"
                          href={product.link}
                          target="_blank"
                          as="a"
                          variant="roundOutlined"
                          fontWeight="bold"
                          size="normal"
                          colors="primary"
                          mt={{
                            _: "33px",
                            md: "40px",
                            xxl: "56px",
                          }}
                        />
                      }
                    />
                  </Content>
                  <RightWrapper>
                    <ImagePreview>
                      <Image src={product.image} alt="Product Image" />
                    </ImagePreview>
                  </RightWrapper>
                </Grid>
              </Container>
            </ProductListSectionWrapper>
          ) : (
            <></>
          )
        )}
      </ProductsWrapper>
    </>
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
