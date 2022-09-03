import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  z-index: 0;

  padding-top: 100px;

  h1 {
    font-size: 235px;
    line-height: 1.1;
  }

  svg {
    max-width: 500px;
  }

  @media only screen and (max-width: 1600px) {
    h1 {
      font-size: 160px;
    }

    svg {
      max-width: 450px;
    }
  }

  @media only screen and (max-width: 1440px) {
    h1 {
      font-size: 150px;
    }

    svg {
      max-width: 420px;
    }
  }

  @media only screen and (max-width: 1366px) {
    h1 {
      font-size: 140px;
    }

    svg {
      max-width: 400px;
    }
  }


  // @media only screen and (max-width: 1280px) {
  //   padding-top: 100px;
  // }
  // @media only screen and (max-width: 768px) {
  //   padding-top: 80px;
  // }
  // @media only screen and (max-width: 667px) {
  //   padding-top: 60px;
  // }
`;
export default Section;

export const Grid = styled.div`
  gap: 0px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  @media only screen and (max-width: 991px) {
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  @media only screen and (max-width: 425px) {
    max-width: 100%;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.55;
    letter-spacing: -0.2px;
    margin-bottom: 25px;
    @media only screen and (max-width: 991px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 820px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  p {
    font-size: 17px;
    line-height: 2.06;
    margin-bottom: 0;
  }
`;


export const AppPreview = styled.figure`
  margin: 0;
  // svg {
  //   max-width: 500px;
  // }
  // @media only screen and (max-width: 991px) {
  //   svg {
  //     max-width: 410px;
  //   }
  // }
  // @media only screen and (max-width: 667px) {
  // }
`;
