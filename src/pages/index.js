import React from "react";
import MainWrapper from "./_main_wrapper";
import Portal from "containers/OptOut/Portal";
import ExpanderSection from "containers/OptOut/ExpanderSection";
import VideoSection from "containers/VideoSection";
import OptOutTop from "containers/OptOut/OptOutTop";
import { OptOutData } from "common/data";
import SnapWrapper from "./_snap_wrapper";

const Main = () => {
  return (
    <SnapWrapper>
      <OptOutTop />
      <Portal />
      <ExpanderSection />
      {/* <VideoSection {...OptOutData.video} /> */}
    </SnapWrapper>
  );
};
export default Main;
