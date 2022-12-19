import AboutBottom from "containers/About/AboutBottom";
import AboutDesktopSection from "containers/About/AboutDesktopSections";
import AboutTop from "containers/About/AboutTop";
import React from "react";
import MainWrapper from "../_main_wrapper";

const Main = () => {
  return (
    <MainWrapper>
      <AboutTop />
      <AboutBottom />
      <AboutDesktopSection></AboutDesktopSection>
    </MainWrapper>
  );
};
export default Main;
