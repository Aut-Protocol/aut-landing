import React from "react";
import MainWrapper from "./_main_wrapper";
import Portal from "containers/OptOut/Portal";
import ExpanderSection from "containers/OptOut/ExpanderSection";
import VideoSection from "containers/VideoSection";
import OptOutTop from "containers/OptOut/OptOutTop";
import { OptOutData } from "common/data";

const Main = () => {
  return (
    <MainWrapper>
      <OptOutTop />
      <Portal />
      <ExpanderSection />
      {/* <VideoSection {...OptOutData.video} /> */}
    </MainWrapper>
  );
};
export default Main;
