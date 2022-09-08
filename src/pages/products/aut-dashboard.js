import React from "react";
import Footer from "containers/Footer";
import MainWrapper from "../_main_wrapper";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";
import ProductsDashboardTop from "containers/Products/AutDashboard/AutDashboardTop";

const Main = () => {
  return (
    <MainWrapper>
      <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
        </DrawerProvider>
      </Sticky>

      {/* Add you blocks here */}

      <ProductsDashboardTop />
      <Footer />
    </MainWrapper>
  );
};
export default Main;
