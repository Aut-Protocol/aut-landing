import React from "react";
import Footer from "containers/Footer";
import MainWrapper from "../_main_wrapper";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";

const Main = () => {
  return (
    <MainWrapper>
      <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
        </DrawerProvider>
      </Sticky>

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "white",
          fontFamily: "Lato",
        }}
      >
        Get Started!
      </h1>

      {/* Add you blocks here */}

      <Footer />
    </MainWrapper>
  );
};
export default Main;
