import React from "react";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import SectionWrapper, { Grid } from "./expanderSection.style";
import Heading from "common/components/Heading";
import Link from "next/link";
import { OptOutData } from "common/data";
import CompactFooter from "containers/CompactFooter";
import { LinkButton } from "common/components/Button";

const ExpanderSection = () => {
  const { image, title, description, link } = OptOutData.expander;
  return (
    <SectionWrapper id="expander" className="snap">
      <Container>
        <Grid>
          <div className="image-wrapper">
            <div className="image">
              <NextImage src={image} alt="Expander Image" height="550px" />
            </div>
            <Heading className="mobile-heading" as="h1" content={title} />
          </div>
          <div className="content">
            <Heading
              as="h1"
              style={{
                fontSize: "5rem",
                textTransform: "uppercase",
                fontWeight: "normal",
                textAlign: "left",
                marginBottom: "2rem",
              }}
              content={title}
            />
            <Text
              className="subtitle"
              content={description}
              style={{ textAlign: "left" }}
            />
            <LinkButton
              className="rounded-button"
              title={link.title}
              href={link.path}
              target="_blank"
            />
          </div>
        </Grid>
        <CompactFooter />
      </Container>
    </SectionWrapper>
  );
};

export default ExpanderSection;
