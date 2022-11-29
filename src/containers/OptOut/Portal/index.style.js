import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

const PortalArea = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;

  .container {
    padding-top: 12.5rem;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: 1.5px;
    font-family: ${themeGet('fonts.primary')};
    font-weight: bold;
  }

  .portal-player {
    padding-top: 8rem;
    width: 45rem;
    height: 45rem;
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
