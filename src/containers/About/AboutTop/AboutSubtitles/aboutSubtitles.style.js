import styled from "styled-components";

const Section = styled.div`
  position: relative;
  z-index: 0;
  text-align: left;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 0;
    padding-top: 5rem;
  }

  h3 {
    font-size: 1.875rem;
    line-height: 1.1;
    letter-spacing: 1.5px;
  }

  h4.subtitle {
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
  }

  .description {
    font-size: 1.125rem;
    color: white;
    letter-spacing: 1.5px;
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
    .container {
      padding-bottom: 4rem;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
  }
`;
export default Section;

export const Content = styled.div`
  // text-align: center;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;
