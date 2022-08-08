import BannerArea from "./index.style";
import React from "react";
import Box from "common/components/Box";
import Link from "next/link";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import { PillarsData } from "common/data";
import useWindowSize from "common/components/window-size";

const Pillars = ({ row }) => {
  const { width } = useWindowSize();
  const { mobileImage, desktopImage, title, descriptions, link } = PillarsData;
  return (
    <>
      <BannerArea id="banner">
        <Container>
          <Box className="row" {...row}>
            <Box className="col" width={width > 600 ? "50%" : "60%"}>
              <Heading
                className="pillars-header"
                content={title}
                fontSize="3rem"
                color="white"
                maxWidth="34rem"
                style={{
                  fontWeight: "500",
                  marginBottom: "2.25rem",
                }}
              />
              {descriptions.map((description) => {
                return (
                  <Text
                    maxWidth="30rem"
                    fontSize="1.25rem"
                    color="white"
                    style={{
                      marginBottom: "1.25rem",
                    }}
                    content={description}
                  />
                );
              })}
              <div
                style={{
                  marginTop: "2.75rem",
                }}
              >
                <Link href={link.src}>
                  <a
                    target="_blank"
                    href={link.src}
                    className="dark read-more-btn"
                    style={{
                      // textDecoration: "underline",
                      fontSize: "1.125rem",
                      color: "white",
                      whiteSpace: "nowrap",
                      borderBottom: "1px solid white",
                      paddingBottom: "3px",
                    }}
                  >
                    {link.label}
                  </a>
                </Link>
              </div>
            </Box>
            <Box className="col" width={width > 600 ? "50%" : "40%"}>
              {width < 600 && <NextImage src={mobileImage} />}
              {width > 600 && <NextImage src={desktopImage} />}
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
};

export default Pillars;
