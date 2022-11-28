import React from "react";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import SectionWrapper, { Grid } from "./expanderSection.style";
import Heading from "common/components/Heading";
import { OptOutData } from "common/data";
import CompactFooter from "containers/CompactFooter";
import Button from "common/components/Button";
import Image from "common/components/Image";

const ExpanderSection = () => {
  const { image, title, description, link } = OptOutData.expander;
  return (
    <SectionWrapper id="expander" className="snap">
      <Container>
        <Grid>
          <div className="image-wrapper">
            <div className="image">
              <Image src={image} alt="Expander Image" height="550px" />
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
            <Button
              className="rounded-button"
              title={link.title}
              href={link.path}
              target="_blank"
              as="a"
            />
          </div>
        </Grid>
        <CompactFooter />
      </Container>
    </SectionWrapper>
  );
};

export default ExpanderSection;
