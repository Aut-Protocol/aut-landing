import React from "react";
import { ContentWrapper } from "containers/app.style";
import Footer from "containers/Footer";

const MainWrapper = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
      <Footer />
    </ContentWrapper>
  );
};

export default MainWrapper;
