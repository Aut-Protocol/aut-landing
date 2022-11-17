import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.section`
  position: relative;
  z-index: 0;

  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 3rem;
    &.mobile-heading {
      display: none;
    }
  }

  .container {
    padding-top: 18.75rem;
    text-align: center;

    @media only screen and (max-height: 720px) {
      padding-top: 12.5rem;
    }

    @media only screen and (max-width: 991px) {
      padding-top: 10rem;
    }

   
  }

  .content {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  p.subtitle {
    font-size: 1.5rem;
    color: white;
    letter-spacing: 1.5px;
    font-style: normal;
    font-weight: normal;
    text-align: right;
  }

  .rounded-button {
    background: transparent;
    font-weight: normal;
    font-size: 1.5rem;
    padding: 1rem;
    border: 3px solid rgb(0, 159, 227);
    border-radius: 50px;
    text-transform: uppercase;
    color: white;
    letter-spacing: 3px;
    align-self: center;
    margin-top: 2rem;
  }

  .image-wrapper {
    display: flex;
    .image {
      max-width: 22rem;
    }
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1366px) {
  }

  @media only screen and (max-width: 991px) {
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
  grid-template-columns: 4fr 6fr;
  flex: 1;

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default SectionWrapper;
