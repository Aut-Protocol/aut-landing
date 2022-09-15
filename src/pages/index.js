import React, { useEffect } from "react";
import MainWrapper from "./_main_wrapper";
import Portal from "containers/OptOut/Portal";
import ExpanderSection from "containers/OptOut/ExpanderSection";
import VideoSection from "containers/VideoSection";
import OptOutTop from "containers/OptOut/OptOutTop";
import { OptOutData } from "common/data";
import { Init } from "@aut-protocol/d-aut";

const Main = () => {
  useEffect(() => {
    console.log("document: ", document);
    Init();
  }, []);
  return (
    <MainWrapper>
      <d-aut
        id="sw-auth"
        network="mumbai"
        button-type="simple"
        dao-expander="0x6bBE078Be00Ca7D59dab4eA1a297514497f86ab8"
      />

      <OptOutTop />
      <Portal />
      <ExpanderSection />
      {/* <VideoSection {...OptOutData.video} /> */}
    </MainWrapper>
  );
};
export default Main;
