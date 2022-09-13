import React from "react";
import MainWrapper from "../_main_wrapper";
import ManifestoTop from "containers/Manifesto/ManifestoTop";
import ManifestoChapters from "containers/Manifesto/Chapters";
import ManifestoSignatures from "containers/Manifesto/Signatures";
import ComingSoonManifest from "containers/Manifesto/ManifestoOld";

const Main = () => {
  return (
    <MainWrapper>
      {/* <ManifestoTop />
      <ManifestoChapters />
      <ManifestoSignatures /> */}
      <ComingSoonManifest />
    </MainWrapper>
  );
};
export default Main;
