import React from "react";
import NextImage from "common/components/NextImage";
import { FooterData } from "common/data";
import NewsletterForm from "common/components/NewsletterForm/NewsletterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const mailchimpUrl =
  "https://aut.us20.list-manage.com/subscribe/post?u=d961a0504e2d77cc544c89c33&amp;id=0599e9c37b&amp;f_id=008810e7f0";
import Image from "common/components/Image";
import Link from "common/components/Link";
import NextLink from "next/link";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import {
  AboutUs,
  ContactInfo,
  FooterWidget,
  Grid,
  Social,
  Section,
} from "./footer.style";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const Footer = () => {
  const { logo, social, copyright, widgets } = FooterData;
  return (
    <Section>
      <Container>
        <Grid>
          <AboutUs>
            <Image src={logo.src} alt="Aut Logo" />
            <Social>
              <div className="social-links">
                {social.map(({ link, icon, name }, index) => (
                  <Tooltip
                    placement="top"
                    key={`footer-social-key-${index}`}
                    overlay={name}
                  >
                    <a href={link} target="_blank">
                      <NextImage src={icon} alt="social image" />
                    </a>
                  </Tooltip>
                ))}
              </div>
            </Social>
            <Text content={copyright} />
          </AboutUs>
          {widgets.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <NextLink href={item.link} shallow>
                      {item.title}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
          <ContactInfo>
            <MailchimpSubscribe
              url={mailchimpUrl}
              render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                  <NewsletterForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                );
              }}
            />
          </ContactInfo>
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
