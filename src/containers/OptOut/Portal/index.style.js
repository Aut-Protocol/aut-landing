import styled from "styled-components";

const PortalArea = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  
  .container {
    padding-top: 18.75rem;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
    letter-spacing: 4px;
  }

  .portal-player {
    padding-top: 8rem;
    width: 50rem;
    height: 50rem;
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
      padding-top: 10rem;
    }
    
    .portal-player {
      padding-top: 5rem;
      width: 35rem;
      height: 35rem;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 667px) {
  }
`;

export default PortalArea;
