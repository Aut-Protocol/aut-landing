import { themeGet } from "@styled-system/theme-get";
import { base } from "common/components/base";
import { rgba } from "polished";
import styled from "styled-components";
import { alignItems, display, flexDirection, gridGap, gridTemplateColumns, justifyContent } from "styled-system";

export const Section = styled.footer`
  margin-top: 200px;
  @media only screen and (min-width: 992px) {
   
  &.snap {
    scroll-snap-align: start;
    height: 30vh;
    display: flex;
    align-items: flex-end;
  }

  padding-top: 120px;
  @media only screen and (max-width: 1440px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 90px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const Grid = styled("div")`
  display: grid;
  border-top: 1px solid ${themeGet('color.offWhite')};
  // // padding: 80px 0;
  // grid-template-columns: 1fr 1fr 1fr 0.5fr;
  // border-top: 1px solid ${rgba("#fff", 0.2)};
  // @media screen and (max-width: 1219px) {
  //   gap: 30px 30px;
  //   grid-template-columns: repeat(3, 1fr);
  // }
  // @media only screen and (max-width: 600px) {
  //   display: flex;
  //   flex-wrap: wrap;
  //   gap: 35px 0px;
  //   > div {
  //     width: 100%;
  //     flex: 0 0 100%;
  //   }
  // }
  ${base}
  ${gridTemplateColumns}
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${alignItems}
`;

export const FooterWidgetItem = styled("li")`
  &:last-child {
    margin-bottom: 0;
  }
  a {
    text-transform: inherit;
    color: ${themeGet("colors.textColor")};
    &:hover {
      color: ${themeGet("colors.white")};
    }
  }
  ${base};
`;

export const FooterWidget = styled.div`
  display: flex;
  flex-direction: column;
  &:last-child {
    margin-right: 0;
  }
  ${display}
`;

export const ContactInfo = styled.div``;

export const CopyText = styled.p`
  margin: 0;
  color: #fff;
`;

export const Social = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 30%;

  ${base}
  ${alignItems}
  ${justifyContent}
`;

export const SocialLinks = styled("div")`
  display: flex;
  align-items: center;

  ${base}
  ${gridGap}
  ${flexDirection}
`;
