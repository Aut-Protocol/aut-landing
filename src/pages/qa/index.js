import React from "react";
import MainWrapper from "../_main_wrapper";
import QATop from "containers/QA/QATop";
import Faq from "containers/QA/Faq";
import VideoSection from "containers/VideoSection";
import { QAData } from "common/data";

const Main = () => {
  return (
    <MainWrapper>
      <QATop />
      <Faq />
      <VideoSection {...QAData.video} />
    </MainWrapper>
  );
};
export default Main;
