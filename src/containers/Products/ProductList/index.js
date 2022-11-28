import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import { ProductList } from "common/data";
import ProductListSectionWrapper, {
  ProductStyledSection,
  Content,
  Grid,
  ImagePreview,
  RightWrapper,
  GridWrapper,
} from "./productList.style";
import Container from "common/components/UI/Container";
import Button from "common/components/Button";
import ProductCard from "common/components/ProductCard";
import useWindowSize from "common/components/window-size";
import ProductSection from "common/components/ProductSection";
import videoPlaceholderImage from "common/assets/image/placeholder-video.svg";
import Image from "common/components/Image";

const ProductListSection = ({
  row,
  col,
  contentStyle,
  blockWrapperStyle,
  productTitle,
  productDescription,
}) => {
  const { width } = useWindowSize();
  return (
    <>
      {width < 992? (
        <ProductListSectionWrapper>
          <Container>
            <Box className="row" {...row} style={{ gap: "30px" }}>
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
                      width: "33rem",
                      height: "45rem",
                    }}
                  >
                    <ProductCard
                      icon={<img src={product?.icon?.src} />}
                      wrapperStyle={blockWrapperStyle}
                      contentStyle={contentStyle}
                      iconPosition="right"
                      title={
                        <Heading content={product.title} {...productTitle} />
                      }
                      description={
                        <Text
                          as="span"
                          className="product-description"
                          content={product.descriptionMobile}
                          {...productDescription}
                        />
                      }
                      className="productList"
                      button={
                        <Button
                          className="button_learn_more gradient"
                          title="Learn More >"
                          href={product.link}
                          target="_blank"
                          as="a"
                        />
                      }
                    />
                  </Box>
                ) : (
                  <></>
                  // <OverlayWrapper
                  //   style={{
                  //     width: "33rem",
                  //     height: "45rem",
                  //     maxWidth: "33rem",
                  //   }}
                  //   className="col"
                  //   key={index}
                  // >
                  //   <Box
                  //     className="col"
                  //     {...col}
                  //     key={index}
                  //     style={{
                  //       borderImage:
                  //         "linear-gradient(45.57deg, rgb(0, 159, 227) 0%, rgb(3, 153, 222) 8%, rgb(14, 139, 211) 19%, rgb(32, 114, 191) 30%, rgb(58, 80, 164) 41%, rgb(90, 37, 131) 53%, rgb(69, 63, 148) 71%, rgb(56, 81, 159) 88%, rgb(52, 88, 164) 100%) 1 / 1 / 0 stretch",
                  //       borderWidth: "20px",
                  //       borderStyle: "solid",
                  //       filter: "blur(30px)",
                  //       backgroundColor: "black",
                  //       width: "100%",
                  //       height: "100%",
                  //     }}
                  //   >
                  //     <ProductCard
                  //       icon={<img src={product?.icon?.src} />}
                  //       wrapperStyle={blockWrapperStyle}
                  //       contentStyle={contentStyle}
                  //       title={
                  //         <Heading content={product.title} {...productTitle} />
                  //       }
                  //       description={
                  //         <Text
                  //           content={product.description}
                  //           {...productDescription}
                  //         />
                  //       }
                  //       className="productList inactive"
                  //     />
                  //   </Box>
                  // </OverlayWrapper>
                )
              )}
            </Box>
          </Container>
        </ProductListSectionWrapper>
      ) : (
        <>
          {ProductList.map((product, index) =>
            product.isActive ? (
              <ProductStyledSection key={`section-${index}`}>
                <Container>
                  <Grid>
                    <Content>
                      <ProductSection
                        icon={<img src={product?.icon?.src} />}
                        wrapperStyle={blockWrapperStyle}
                        contentStyle={contentStyle}
                        iconPosition="right"
                        title={
                          <Heading content={product.title} {...productTitle} />
                        }
                        description={
                          <Text
                            as="div"
                            style={{ display: "flex", flexDirection: "column" }}
                            className="product-description"
                            content={product.description}
                            {...productDescription}
                          />
                        }
                        className="productList"
                        button={
                          <Button
                            className="button_learn_more desktop gradient"
                            title="Learn More >"
                            style={{ margin: "0" }}
                            href={product.link}
                            target="_blank"
                            as="a"
                          />
                        }
                      />
                    </Content>
                    <RightWrapper>
                      <ImagePreview>
                        <Image src={product.image} alt="" />
                      </ImagePreview>
                    </RightWrapper>
                  </Grid>
                </Container>
              </ProductStyledSection>
            ) : (
              <></>
            )
          )}
        </>
      )}
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
