import React from "react";
import MainWrapper from "../_main_wrapper";
import ProductsTop from "containers/Products/ProductsTop";
import ProductListSection from "containers/Products/ProductList";
import Typography from "common/components/Typography";

const Main = () => {
  return (
    <MainWrapper>
      <ProductsTop />
      <Typography as="h1">test title</Typography>
      <ProductListSection />
    </MainWrapper>
  );
};
export default Main;
