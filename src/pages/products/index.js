import React from "react";
import Footer from "containers/Footer";
import MainWrapper from "../_main_wrapper";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";
import ProductsTop from "containers/Products/ProductsTop";
import ProductListSection from "containers/Products/ProductList";

const Main = () => {
  return (
    <MainWrapper>
      <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
        </DrawerProvider>
      </Sticky>

  

      {/* Add you blocks here */}
      <ProductsTop />
      <ProductListSection />

      <Footer />
    </MainWrapper>
  );
};
export default Main;
