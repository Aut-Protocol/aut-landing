import React from "react";
import { FooterData } from "common/data";
import AutOSLogo from "common/assets/AutOSLogoV2.svg";
import DiscordLogo from "common/assets/image/discord-icon.svg";
import XLogo from "common/assets/image/twitter-icon.svg";
import Container from "common/components/Container";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import Typography from "common/components/Typography";
import Button from "common/components/Button";
import Image from "common/components/Image";
import Link from "common/components/Link";
import {
  Social,
  SocialLinks,
  OsFooterSection,
  Grid,
  AboutUs,
  ColumnWrapper,
  ColumnTitle,
} from "./footer.style";
import { useScroll, useTransform } from "framer-motion";
import Box from "common/components/Box";

const socials = [
  {
    link: "https://twitter.com/opt_aut",
    icon: XLogo,
    name: "X",
  },
  {
    link: "http://discord.gg/aXJFGgcvUk",
    icon: DiscordLogo,
    name: "Discord",
  },
];

const developerLinks = [
  {
    title: "Github",
    target: "_blank",
    link: "https://github.com/Aut-Labs",
  },
  {
    title: "Docs",
    target: "_blank",
    link: "https://docs.aut.id",
  },
];
const firstLinks = [
  {
    title: "Āut Labs",
    target: "_blank",
    link: "https://aut.id",
  },
  {
    title: "Manifesto",
    target: "_blank",
    link: "https://manifesto.aut.id",
  },
  {
    title: "Nova Showcase",
    target: "_blank",
    link: "https://showcase.aut.id",
  },
];

const productSuite = [
  {
    title: "Āut Expander",
    target: "_blank",
    link: "https:/expander.aut.id",
  },
  {
    title: "dĀut",
    target: "_blank",
    link: "https:/aut.id",
  },
];

export const SocialWrapper = ({ socialStyles, socialLinksStyles }: any) => {
  return (
    <Social {...socialStyles}>
      <SocialLinks {...socialLinksStyles}>
        {socials.map(({ link, icon, name }, index) => (
          <Tooltip
            placement="top"
            key={`footer-social-key-${index}`}
            overlay={name}
          >
            <a href={link} target="_blank" rel="noreferrer">
              <Image
                height={{
                  _: "18px",
                  md: "18px",
                  xxl: "18px",
                }}
                width={{
                  _: "18px",
                  md: "18px",
                  xxl: "18px",
                }}
                src={icon.src}
                alt="social image"
              />
            </a>
          </Tooltip>
        ))}
      </SocialLinks>
    </Social>
  );
};
export const LinkWrapper = ({ item }: any) => {
  return (
    // @ts-ignore
    <Link legacyBehavior href={item.link}>
      <Button
        title={item.title}
        variant="text"
        colors="nav"
        as="a"
        target={item.target}
        href={item.link}
        style={{
          fontSize: "16px",
          textTransform: "none",
          color: "#F0F5FF",
          height: "50px",
          fontFamily: "var(--fractul-regular)",
        }}
      />
    </Link>
  );
};

const OsFooter = ({ parentRef }) => {
  const { logo, copyright, widgets, mailchimpUrl } = FooterData;
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end end"],
  });

  const footerTranslateY = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  return (
    <OsFooterSection
      style={{
        bottom: 0,
        y: footerTranslateY,
      }}
    >
      <Container
        style={{
          padding: "30px",
          height: "50vh",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        noGutter
      >
        <Grid
          gridTemplateColumns={{
            _: "1fr",
            md: "2fr 1fr 1fr 1fr",
          }}
        >
          <AboutUs
            alignItems={{
              _: "start",
            }}
          >
            <Image
              src={AutOSLogo}
              alt="Aut Logo"
              height="50px"
              style={{
                marginBottom: "15px",
              }}
            />
            <Typography as="body" color="white">
              Native, role-based Membership & Governance for Web3 Communities
            </Typography>
            <SocialWrapper
              style={{
                alignSelf: "flex-end",
              }}
              socialStyles={{
                display: {
                  _: "none",
                  md: "inherit",
                },
                alignItems: "center",
              }}
              socialLinksStyles={{
                gridGap: {
                  _: "10px",
                  md: "10px",
                  xxl: "10px",
                },
                flexDirection: {
                  _: "row",
                },
              }}
            />
          </AboutUs>
          <ColumnWrapper>
            <ColumnTitle>Links</ColumnTitle>
            {firstLinks.map((item, index) => (
              <LinkWrapper item={item} key={index}></LinkWrapper>
            ))}
          </ColumnWrapper>

          <ColumnWrapper>
            <ColumnTitle>For Developers</ColumnTitle>
            {developerLinks.map((item, index) => (
              <LinkWrapper item={item} key={index}></LinkWrapper>
            ))}
          </ColumnWrapper>
          <ColumnWrapper>
            <ColumnTitle>Product Suite</ColumnTitle>
            {productSuite.map((item, index) => (
              <LinkWrapper item={item} key={index}></LinkWrapper>
            ))}
          </ColumnWrapper>
        </Grid>

        <Box
          className="bottom-nav-new"
          flexBox
          flexDirection={{
            _: "column",
            sm: "row",
          }}
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            color="white"
            as="body"
            textAlign="center"
            margin={{
              _: "0px 0px 10px 0px",
              sm: "unset",
            }}
          >
            Made with &#128293; by Āut Labs
          </Typography>
        </Box>
      </Container>
    </OsFooterSection>
  );
};

export default OsFooter;