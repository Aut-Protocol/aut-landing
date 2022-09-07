import React from "react";
import Footer from "containers/Footer";
import MainWrapper from "../_main_wrapper";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";
import ManifestoTop from "containers/Manifesto/ManifestoTop";
import ManifestoChapters from "containers/Manifesto/Chapters";
import ManifestoSignatures from "containers/Manifesto/Signatures";
import Web3AutProvider from "common/components/ProviderFactory/components/Web3Provider";

const Main = () => {
  return (
    <MainWrapper>
      <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
        </DrawerProvider>
      </Sticky>

      <ManifestoTop />
      <ManifestoChapters />
      <ManifestoSignatures />

      <Footer />
    </MainWrapper>
  );
};
export default Main;
