import React from "react";
import Footer from "containers/Footer";
import MainWrapper from "../_main_wrapper";
import Roadmap from "containers/Roadmap";
import RoadmapTop from "containers/Roadmap/RoadmapTop";

const Main = () => {
  return (
    <MainWrapper>
      <RoadmapTop />
      <Roadmap />
    </MainWrapper>
  );
};
export default Main;
