import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;
  letter-spacing: 0.2rem;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h1 {
    font-size: 14rem;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  p.heading {
    font-size: 4rem;
    color: white;
    font-weight: bold;
    letter-spacing: 0.2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  p.subtitle {
    font-size: 3rem;
    color: white;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }

  p.subtitleMobile {
    display: none;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    letter-spacing: 0.2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  p.paragraphHeading {
    font-size: 2rem;
    color: white;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }

  p.description {
    font-size: 1.125rem;
    color: white;
    letter-spacing: 0.2rem;
    margin-bottom: 1rem;
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
    p.heading {
      font-size: 3rem;
    }

    p.subtitle {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    p.subtitle {
      display: none;
    }

    p.subtitleMobile {
      display: block;
      font-size: 2rem;
      text-align: center;
    }
  }

  @media only screen and (max-width: 667px) {
  }
`;
export default Section;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 8rem;

  @media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentHalf = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;
