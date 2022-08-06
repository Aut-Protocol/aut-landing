import BannerArea from "./index.style";
import React from "react";
import Box from "common/components/Box";
import Link from "next/link";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import { PillarsData } from "common/data";

const Pillars = ({ row, col }) => {
  const { image, title, description, link } = PillarsData;
  return (
    <>
      <BannerArea id="banner">
        <Container>
          <Box className="row" {...row}>
            <Box className="col" {...col}>
              <Heading
                className="pillars-header"
                content={title}
                fontSize="3rem"
                color="white"
                maxWidth="34rem"
              />
              <Text
                maxWidth="34rem"
                lineHeight="1.7"
                fontSize="1.125rem"
                color="white"
                style={{
                  marginBottom: "2.75rem",
                }}
                content={description}
              />
              <Link href={link.src}>
                <a
                  target="_blank"
                  href={link.src}
                  className="dark read-more-btn"
                  style={{
                    textDecoration: "underline",
                    fontSize: "1.125rem",
                    color: "white",
                  }}
                >
                  {link.label}
                </a>
              </Link>
            </Box>
            <Box className="col" {...col}>
              <NextImage src={image} />
            </Box>
          </Box>
        </Container>
      </BannerArea>
    </>
  );
};

Pillars.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
  },
  col: {
    width: "50%",
  },
};

export default Pillars;
