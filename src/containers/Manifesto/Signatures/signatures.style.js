import styled from "styled-components";

const Section = styled.section`
  position: relative;
  z-index: 0;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h2 {
    font-size: 3.375rem;
    color: white;
    font-weight: bold;
    line-height: 1.4;
  }

  .description {
    font-size: 1.563rem;
    color: white;
    font-weight: bold;
    max-width: 45rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  .gradient {
    height: 5.188rem;
    width: 20.938rem;
    font-size: 1.125rem;
    margin: 5.625rem auto;
  }

  .list-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
  }
`;
export default Section;

export const ListItem = styled.li`
  display: flex;
  grid-gap: 3rem;
  border-bottom: 2px solid #439EDD;
  margin-bottom: 3.125rem;

  a,
  p {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 4px;
  }
  a {
    // color: rgba(52, 61, 72, 0.8);
    // font-size: 14px;
    // line-height: 36px;
    // transition: all 0.2s ease;
    text-decoration: underline;
    &:hover,
    &:focus {
      // outline: 0;
      // text-decoration: none;
      // color: #343d48;
    }
  }
`;

export const Content = styled.div`
  // text-align: center;
`;
