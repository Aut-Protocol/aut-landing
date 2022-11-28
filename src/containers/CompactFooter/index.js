import React from "react";
import { FooterData } from "common/data";
import NewsletterForm from "common/components/NewsletterForm/NewsletterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Image from "common/components/Image";
import NextLink from "next/link";
import Text from "common/components/Text";
import {
  AboutUs,
  ContactInfo,
  FooterWidget,
  Grid,
  Social,
  Section,
  QuickLinks,
} from "./compact-footer.style";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const CompactFooter = () => {
  const { logo, social, copyright, compactWidgets, mailchimpUrl } = FooterData;
  return (
    <Section>
      <Grid>
        <AboutUs>
          <Image src={logo.src} alt="Aut Logo" />
          <Social className="mobile">
            <div className="social-links">
              {social.map(({ link, icon, name }, index) => (
                <Tooltip
                  placement="top"
                  key={`footer-social-key-${index}`}
                  overlay={name}
                >
                  <a href={link} target="_blank">
                    <Image src={icon} alt="social image" />
                  </a>
                </Tooltip>
              ))}
            </div>
          </Social>
          <Text className="copyright" content={copyright} />
        </AboutUs>
        <QuickLinks>
          {compactWidgets.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul className="compact-list">
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <NextLink href={item.link} shallow>
                      <a target={item.target}>{item.title}</a>
                    </NextLink>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
        </QuickLinks>

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
        <Social>
          <div className="social-links">
            {social.map(({ link, icon, name }, index) => (
              <Tooltip
                placement="top"
                key={`footer-social-key-${index}`}
                overlay={name}
              >
                <a href={link} target="_blank">
                  <Image src={icon} alt="social image" />
                </a>
              </Tooltip>
            ))}
          </div>
        </Social>
      </Grid>
    </Section>
  );
};

export default CompactFooter;
