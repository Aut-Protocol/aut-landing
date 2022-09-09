import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;

  .gradient {
    height: 5.188rem;
    width: 20.938rem;
    font-size: 1.125rem;
    margin: 5.625rem auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 18.75rem;
  }

  h1 {
    font-size: 14rem;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  h2 {
    font-size: 10rem;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  .no-uppercase {
    text-transform: none !important;
  }

  p.subtitle {
    font-size: 3.375rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
  }

  p.subtitle2 {
    font-size: 1.563rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
  }

  p.subtitle3 {
    font-size: 1.125rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1366px) {
  }

  @media only screen and (max-width: 1280px) {
  }

  @media only screen and (max-width: 991px) {
    height: auto;
    .container {
      padding-top: 10rem;
    }

    h1 {
      padding-top: 5rem;
      font-size: 10rem;
    }

    p.subtitle {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
  }
`;
export default Section;

export const Grid = styled.div`
  gap: 0px;
  display: flex;
  align-items: space-between;
  grid-template-columns: 1fr 1fr;
  flex: 1;

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 50%;
  @media only screen and (max-width: 991px) {
    width: 100%;
    justify-content: center;
  }
`;

export const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  align-self: center;
  @media only screen and (max-width: 991px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 42rem;
`;

export const ImagePreview = styled.figure`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42rem;
  @media only screen and (max-width: 991px) {
    // display: none;
    max-height: 30rem;
    width: 100%;
    margin-top: 4rem;
  }
`;
