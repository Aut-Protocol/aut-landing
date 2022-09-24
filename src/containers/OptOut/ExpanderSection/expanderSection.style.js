import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.div`
  position: relative;
  z-index: 0;
  padding-top: 18.75rem;

  h1 {
    font-size: 5.625rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 4rem;
    &.mobile-heading {
      display: none;
    }
  }

  .content {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }

  p.subtitle {
    font-size: 1.5rem;
    color: white;
    letter-spacing: 1.5px;
    font-style: normal;
    font-weight: normal;
    text-align: right;
    max-width: 49.063rem;
  }

  .image-wrapper {
    display: flex;
    .image {
      max-width: 22rem;
    }
    justify-content: center;
    align-items: center;
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
      font-size: 3rem;
      display: none;
      &.mobile-heading {
        display: block;
        margin-bottom: 0;
      }
    }

    .image-wrapper {
      margin-bottom: 5rem;
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
  grid-template-columns: 1fr 1fr;
  flex: 1;

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default SectionWrapper;
