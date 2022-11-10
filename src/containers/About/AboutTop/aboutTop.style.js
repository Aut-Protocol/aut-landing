import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding-top: 18.5rem;
  }

  p.heading {
    font-size: 4rem;
    color: white;
    font-weight: bold;
    letter-spacing: 1.5px;
    text-align: center;
  }

  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: left;
    margin-bottom: 3rem;
  }

  p.subtitle {
    font-size: 3.375rem;
    color: white;
    font-weight: bold;
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
    h1 {
      font-size: 5rem;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
    h1 {
      font-size: 6rem;
    }
  }
`;
export default Section;

export const Content = styled.div`
  display: flex;
  grid-gap: 3rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentHalf = styled.div`
  flex: 1;

  &.right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
