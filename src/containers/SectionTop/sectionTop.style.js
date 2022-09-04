import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h1 {
    padding-top: 10rem;
    font-size: 14rem;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  p.subtitle {
    font-size: 3.375rem;
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
      padding-top: 0;
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
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  flex: 1;

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div``;

export const ImagePreview = styled.figure`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 37.5rem;
  max-width: 37.5rem;
  @media only screen and (max-width: 991px) {
    // display: none;
    max-height: 30rem;
    max-width: 30rem;
    margin-top: 4rem;
  }
`;
