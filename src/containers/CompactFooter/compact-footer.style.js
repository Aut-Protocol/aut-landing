import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";
import styled from "styled-components";

export const Section = styled.footer`
  padding-top: 2rem;
  @media only screen and (max-width: 991px) {
    padding-top: 80px;
  }
`;

export const Grid = styled.div`
  display: grid;
  padding-top: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  border-top: 1px solid ${rgba("#fff", 0.2)};
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1920px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 35px 0px;
    > div {
      width: 100%;
      flex: 0 0 100%;
    }
    border-top: none;
    margin-top: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .copyright {
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.7);
  }

  img {
    max-width: 7.5rem;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  p {
    font-family: 'FractulRegular', sans-serif;
    font-size: 15px;
    line-height: 2;
    letter-spacing: -0.002em;
    color: white;
  }
`;

export const FooterWidget = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 601px) {
    .compact-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  h4 {
    font-family: 'FractulRegular', sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 1.38;

    margin: 0 0 25px;

    @media only screen and (min-width: 601px) {
      text-align: start;
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

export const QuickLinks = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ContactInfo = styled.div`
  h4 {
    @media only screen and (min-width: 601px) {
      text-align: start;
    }
  }
`;

export const CopyText = styled.p`
  margin: 0;
  color: #fff;
`;

export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 30%;

  &.mobile {
    display: none;
  }

  .social-links {
    display: flex;
    align-items: center;
    grid-gap: 2.5rem;
    flex-direction: column;

    a {
      cursor: pointer;
    }

    img {
      height: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    display: none;
    &.mobile {
      display: inherit;

      .social-links {
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        flex-direction: row;
      }
    }
  }
`;
