import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.div`
  position: relative;
  z-index: 0;
  padding-top: 18.75rem;

  h1 {
    font-size: 7rem;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  p.subtitle {
    font-size: 1rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
    letter-spacing: 2px;
  }

  .image-wrapper {
    display: flex;
    .image {
      max-width: 22rem;
    }
    align-items: center;
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1366px) {
  }

  @media only screen and (max-width: 991px) {
    padding-top: 10rem;

    h1 {
      font-size: 4rem;
    }
  }

  @media only screen and (max-width: 1280px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
  }
`;

export const Grid = styled.div`
  gap: 0px;
  display: grid;
  align-items: center;
  grid-template-columns: 70% 1fr;
  flex: 1;

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default SectionWrapper;
