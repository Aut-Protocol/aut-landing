import React from "react";
import Footer from "containers/Footer";
import MainWrapper from "../_main_wrapper";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";
import QATop from "containers/QA/QATop";
import Faq from "containers/QA/Faq";
import VideoSection from "containers/VideoSection";
import { QAData } from "common/data";
import SectionTop from "containers/SectionTop";
import SectionHeading from "containers/QA/SectionHeading";

const Main = () => {
  return (
    <MainWrapper>
      <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
        </DrawerProvider>
      </Sticky>
      <QATop />
      <Faq />
      <SectionHeading
        title="Lorem ipsum dolor sit amet, consetetur"
        subtitle="Lorem ipsum dolor sit amet"
      ></SectionHeading>
      <VideoSection {...QAData.video} />
      <Footer />
    </MainWrapper>
  );
};
export default Main;
