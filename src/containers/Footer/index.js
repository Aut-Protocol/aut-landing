// const Footer = () => {
//   const { logo, social, copyright } = FooterData;

//   return (
//     <FooterArea>
//       <Container className="Container">
//         <Left>
//           <MailchimpSubscribe
//             url={mailchimpUrl}
//             render={(props) => {
//               const { subscribe, status, message } = props || {};
//               return (
//                 <NewsletterForm
//                   status={status}
//                   message={message}
//                   onValidated={(formData) => subscribe(formData)}
//                 />
//               );
//             }}
//           />
//         </Left>
//         <Social>
//           <div className="social-links">
//             {social.map(({ link, icon }, index) => (
//               <Link href={link} key={`footer-social-key-${index}`}>
//                 <a target="_blank">
//                   <NextImage src={icon} alt="social image" />
//                 </a>
//               </Link>
//             ))}
//           </div>
//         </Social>
//       </Container>
//     </FooterArea>
//   );
// };

// export default Footer;

import React from "react";
import NextImage from "common/components/NextImage";
import Logo from "common/components/UIElements/Logo";
import { FooterData } from "common/data";
import NewsletterForm from "common/components/NewsletterForm/NewsletterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const mailchimpUrl =
  "https://aut.us20.list-manage.com/subscribe/post?u=d961a0504e2d77cc544c89c33&amp;id=0599e9c37b&amp;f_id=008810e7f0";
import Heading from "common/components/Heading";
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

const Footer = () => {
  const { logo, social, copyright, widgets } = FooterData;
  return (
    <Section>
      <Container>
        <Grid>
          <AboutUs>
            <Image src={logo.src} alt="Web App Creative" />
            <Text content={copyright} />
          </AboutUs>
          {widgets.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <NextLink href={item.link} shallow>
                      <Link>{item.title}</Link>
                    </NextLink>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
          <ContactInfo>
            {/* <Heading as="h4" content={footer.contactInfo.title} /> */}
            {/* <MailchimpSubscribe
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
            /> */}
          </ContactInfo>

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
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
