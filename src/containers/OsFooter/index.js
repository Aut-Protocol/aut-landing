import React from "react";
import { FooterData } from "common/data";
import AutOSLogo from "common/assets/AutOSLogoV2.svg";
import DiscordLogo from "common/assets/image/discord-icon.svg";
import XLogo from "common/assets/image/twitter-icon.svg";

import NewsletterForm from "common/components/NewsletterForm/NewsletterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Container from "common/components/Container";
import {
  AboutUs,
  ContactInfo,
  FooterWidget,
  Grid,
  Social,
  OsFooterSection,
  FooterWidgetItem,
  SocialLinks,
  ColumnWrapper,
  ColumnTitle,
  Links,
} from "./footer.style";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import Logo from "common/components/UIElements/Logo";
import Typography from "common/components/Typography";
import Button from "common/components/Button";
import Image from "common/components/Image";
import Link from "common/components/Link";

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

export const SocialWrapper = ({ socialStyles, socialLinksStyles }) => {
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
export const LinkWrapper = ({ item }) => {
  return (
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

const OsFooter = () => {
  const { logo, copyright, widgets, mailchimpUrl } = FooterData;

  return (
    <OsFooterSection as="footer">
      <Container
        style={{
          padding: "30px",
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
      </Container>
    </OsFooterSection>
  );
};

export default OsFooter;
