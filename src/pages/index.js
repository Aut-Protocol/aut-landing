import React from "react";
import Footer from "containers/Footer";
import MainWrapper from "./_main_wrapper";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";
import Portal from "containers/OptOut/Portal";
import ExpanderSection from "containers/OptOut/ExpanderSection";
import VideoSection from "containers/VideoSection";
import OptOutTop from "containers/OptOut/OptOutTop";

const Main = () => {
  return (
    <MainWrapper>
      <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
        </DrawerProvider>
      </Sticky>

      <OptOutTop />
      <Portal />
      <ExpanderSection />
      <VideoSection />
      <Footer />
    </MainWrapper>
  );
};
export default Main;
