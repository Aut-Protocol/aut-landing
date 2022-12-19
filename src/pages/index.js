import React from "react";
import Portal from "containers/OptOut/Portal";
import ExpanderSection from "containers/OptOut/ExpanderSection";
import OptOutTop from "containers/OptOut/OptOutTop";
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
