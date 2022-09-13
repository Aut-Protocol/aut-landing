import React from "react";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import SectionWrapper, { Grid } from "./expanderSection.style";
import Heading from "common/components/Heading";
import Link from "next/link";
import { OptOutData } from "common/data";

const ExpanderSection = () => {
  const { image, title, description, link } = OptOutData.expander;
  return (
    <SectionWrapper id="expander">
      <Container>
        <Grid>
          <div className="image-wrapper">
            <div className="image">
              <NextImage src={image} alt="Expander Image" />
            </div>
            <Heading className="mobile-heading" as="h1" content={title} />
          </div>
          <div className="content">
            <Heading as="h1" content={title} />
            <Text className="subtitle" content={description} />
            <Link href={link.path}>
              <a
                target="_blank"
                href={link.path}
                className="dark read-more-btn"
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  textDecoration: 'underline',
                  whiteSpace: "nowrap",
                  textAlign: "right"
                }}
              >
                {link.title}
              </a>
            </Link>
          </div>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ExpanderSection;
