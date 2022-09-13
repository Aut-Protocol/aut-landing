import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";
import styled from "styled-components";

export const Section = styled.footer`
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

export const Grid = styled.div`
  display: grid;
  padding: 80px 0;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid ${rgba("#fff", 0.2)};
  @media screen and (max-width: 820px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 1219px) {
    gap: 30px 30px;
    padding: 40px 0;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
    gap: 35px 0px;
    > div {
      width: 100%;
      flex: 0 0 100%;
    }
    // grid-template-columns: repeat(2, 1fr);
  }
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 7.5rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1280px) {
  }
  @media screen and (min-width: 1366px) {
  }
  @media screen and (min-width: 1440px) {
  }
  @media screen and (max-width: 480px) {
  }

  p {
    font-family: "Avenir", sans-serif;
    font-size: 15px;
    line-height: 2;
    letter-spacing: -0.002em;
    color: white;
  }
`;

export const FooterWidget = styled.div`
  h4 {
    font-family: "Avenir", sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 1.38;
    margin: 0 0 25px;
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
  &:last-child {
    margin-right: 0;
  }
  .widgetListItem {
    a {
      cursor: pointer;
      color: ${themeGet("colors.textColor")};
      font-size: 1.313rem;
      line-height: 2.5;
      font-weight: 500;
      &:hover {
        color: ${themeGet("colors.white")};
      }
      transition: all 0.4s ease;
    }
  }
`;

export const ContactInfo = styled.div``;

export const CopyText = styled.p`
  margin: 0;
  color: #fff;
`;

export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    grid-gap: 2.5rem;
    margin: 5rem 0;

    a {
      cursor: pointer;
    }

    img {
      height: 20px;
    }
  }
`;
