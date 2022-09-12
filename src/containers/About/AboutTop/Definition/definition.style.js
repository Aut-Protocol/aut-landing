import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  text-align: left;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h2 {
    font-size: 4rem;
  }

  p.sub {
    font-size: 3rem;
    color: #6fa1c3;
    font-weight: bold;
    line-height: 1.4;
  }

  p.pron {
    font-size: 1.125rem;
    color: #6fa1c3;
    letter-spacing: 0.3rem;
  }

  p.pronWhite {
    font-size: 1.125rem;
    color: white;
    letter-spacing: 0.3rem;
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

export const DefinitionTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const PluralContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

export const DefinitionBox = styled.div`
  border-style: solid;
  border-width: 0.3rem;
  border-image: linear-gradient(
      45.57deg,
      #009fe3 0%,
      #0399de 8%,
      #0e8bd3 19%,
      #2072bf 30%,
      #3a50a4 41%,
      #5a2583 53%,
      #453f94 71%,
      #38519f 88%,
      #3458a4 100%
    )
    1;
`;

export const Content = styled.div``;
