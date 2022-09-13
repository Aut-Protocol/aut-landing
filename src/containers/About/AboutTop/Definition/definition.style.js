import styled from "styled-components";

const Section = styled.div`
  position: relative;
  z-index: 0;
  text-align: left;

  .container {
    padding-top: 0;
  }

  h2 {
    font-size: 4rem;
  }

  p.sub {
    font-size: 3rem;
    color: #6fa1c3;
    font-weight: bold;
    line-height: 1.4;
    margin-left: 4px;
  }

  p.pron {
    font-size: 1.125rem;
    color: #6fa1c3;
    letter-spacing: 1.5px;
  }

  p.white {
    color: white;
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
    p.sub {
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

export const SameLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

export const DefinitionItem = styled.div`
  letter-spacing: 1.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  grid-gap: 1rem;
`;

export const DefinitionBox = styled.div`
  width: 38rem;
  @media only screen and (max-width: 991px) {
    width: 35rem;
  }
  padding: 2rem 2.5rem 1rem 2.5rem;
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
