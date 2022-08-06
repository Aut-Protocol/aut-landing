import React from "react";
import Link from "next/link";
import NextImage from "common/components/NextImage";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/Container";
import FooterArea, { Left, CopyText, Social } from "./footer.style";
import { FooterData } from "common/data";
import NewsletterForm from "common/components/NewsletterForm/NewsletterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";


const mailchimpUrl =
  "https://aut.us20.list-manage.com/subscribe/post?u=d961a0504e2d77cc544c89c33&amp;id=0599e9c37b&amp;f_id=008810e7f0";

const Footer = () => {
  const { logo, social, copyright } = FooterData;

  return (
    <FooterArea>
      <Container className="Container">
        <Left>
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
        </Left>
        <Social>
          <div className="social-links">
            {social.map(({ link, icon }, index) => (
              <Link href={link} key={`footer-social-key-${index}`}>
                <a target="_blank">
                  <NextImage src={icon} alt="social image" />
                </a>
              </Link>
            ))}
          </div>
        </Social>
      </Container>
    </FooterArea>
  );
};

export default Footer;
