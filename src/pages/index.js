import React from "react";
import ComingSoon from "containers/ComingSoon";
import Pillars from "containers/Pillars";
import Footer from "containers/Footer";
import MainWrapper from "./_main_wrapper";

const Main = () => {
  return (
    <MainWrapper>
      <ComingSoon />
      <Pillars />
      <Footer />
    </MainWrapper>
  );
};
export default Main;
