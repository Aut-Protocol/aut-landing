import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;
  line-height: normal;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 18.75rem;
  }

  h1 {
    font-size: 6.875rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    text-align: left;
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
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentHalf = styled.div`
  flex: 1;
`;
