import { ContentWrapper } from "containers/app.style";
import Footer from "containers/Footer";
import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
      <Footer />
    </ContentWrapper>
  );
};

export default MainWrapper;
