import React from "react";
import MainWrapper from "../_main_wrapper";
import DaoExpanderTop from "containers/Products/DaoExpander/DaoExpanderTop";
import DaoExpanderFeatureListSection from "containers/Products/DaoExpander/DaoExpanderTop/DaoExpanderFeatureList";

const Main = () => {
  return (
    <MainWrapper>
      <DaoExpanderTop />
      <DaoExpanderFeatureListSection />
    </MainWrapper>
  );
};
export default Main;
