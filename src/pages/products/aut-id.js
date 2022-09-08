import React from "react";
import MainWrapper from "../_main_wrapper";
import AutIdTop from "containers/Products/AutId/AutIdTop";
import AutIdFeatureListSection from "containers/Products/AutId/AutIdTop/AutIdFeatureList";

const Main = () => {
  return (
    <MainWrapper>
      <AutIdTop />
      <AutIdFeatureListSection />
    </MainWrapper>
  );
};
export default Main;
