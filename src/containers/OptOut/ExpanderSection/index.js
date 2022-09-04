import React from "react";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import SectionWrapper, { ContentWrapper, Grid } from "./expanderSection.style";
import expanderImage from "common/assets/image/expander.svg";
import Heading from "common/components/Heading";
import Link from "next/link";

const ExpanderSection = () => {
  return (
    <SectionWrapper id="expander">
      <Container>
        <Grid>
          <div className="image-wrapper">
            <div className="image">
              <NextImage src={expanderImage} alt="Expander Image" />
            </div>
            <Heading
              className="mobile-heading"
              as="h1"
              content={
                <>
                  Expand <br /> Your <br /> DAO <br /> Today
                </>
              }
            />
          </div>
          <div className="content">
            {/* <Heading className="desktop-heading" as="h1" content="Expand Your DAO Today" /> */}
            <Text
              className="subtitle"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "
            />
            <Link href="">
              <a
                target="_blank"
                href=""
                className="dark read-more-btn"
                style={{
                  fontSize: "1.125rem",
                  color: "white",
                  whiteSpace: "nowrap",
                  borderBottom: "1px solid white",
                  paddingBottom: "1px",
                }}
              >
                Link to Expander Page
              </a>
            </Link>
          </div>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ExpanderSection;
