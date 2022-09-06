import React from "react";
import Footer from "containers/Footer";
import MainWrapper from "../_main_wrapper";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";
import Roadmap from "containers/Roadmap";
import RoadmapTop from "containers/Roadmap/RoadmapTop";

const Main = () => {
  return (
    <MainWrapper>
      <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
        </DrawerProvider>
      </Sticky>

      <RoadmapTop />
      <Roadmap />

      {/* Add you blocks here */}

      <Footer />
    </MainWrapper>
  );
};
export default Main;
