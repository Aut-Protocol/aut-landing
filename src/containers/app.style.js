import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const Wobble_Vertical = keyframes`
  16.65% {
    transform: translateY(8px);
  }
  33.3% {
    transform: translateY(-6px);
  }
  49.95% {
    transform: translateY(4px);
  }
  66.6% {
    transform: translateY(-2px);
  }
  83.25% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
  }
`;

const shake = keyframes`
  16%{
      transform:skew(-14deg)
  }
  33%{
      transform:skew(12deg)
  }
  49%{
      transform:skew(-8deg)
  }
  66%{
      transform:skew(6deg)
  }
  83%{
      transform:skew(-4deg)
  }
`;

const Hvr_Ripple_Out = keyframes`
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --wobbleVertical: ${Wobble_Vertical} 1s ease-in-out;
    --shakeAnim: ${shake} 600ms ease-in-out;
    --HvrRippleOut: ${Hvr_Ripple_Out} 1s ease-in-out;
  }

  body {
    background-color: #141414;
    color: ${themeGet("colors.textColor")};
    font-family: 'Avenir', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Avenir', serif;
    color: ${themeGet("colors.headingColor")};
  }

  input, textarea {
    font-family: 'Avenir', sans-serif;
  }

  button {
    font-family: 'Avenir', sans-serif;
  }

  section {
    position: relative;
    @media only screen and (min-width: 992px) {
      scroll-snap-align: start;
      height: 100vh;
    }

  }

  .main-container {
    @media only screen and (min-width: 992px) {

    height: 100vh;
    scrollSnapType: y mandatory;
    scrollPadding: 10px;
    overflowY: scroll;
    }
  }

  .sass_app_dark_navbar {
    background-color: #141414;
    // border-bottom: 1px solid #707070;
    box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.384);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    height: 10.5rem;
    display: flex;

    .container {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .mainMenuWrapper {
      // flex: 1 1 100%;

      .navbar-buttons {
        padding-left: 26px;
        .gradient {
          font-size: 1.5rem;
          width: 16rem;
          height: 4.688rem;
          box-shadow: 2px 2px 4px rgba(255, 255, 255, 0.384);
        }

        @media (max-width: 990px) {
          display: none;
        }
      }

      @media (max-width: 991px) {
        // flex: 0 0 auto;
        // margin-left: auto;
      }
    }
    .nav-logo {
      > img {
        transition: 0.25s ease-in-out;
        max-width: 110px;
        @media only screen and (min-width: 990px) and (max-width: 991px) {
          max-width: 90px;
        }
      }
    }
    .main_menu {
      margin-left: 45px;
      @media only screen and (min-width: 990px) and (max-width: 991px) {
        margin-left: 15px;
      }
      li {
        display: inline-flex;
        padding-left: 13px;
        padding-right: 13px;
        @media (max-width: 1024px) {
          padding-left: 8px;
          padding-right: 8px;
        }
        @media only screen and (min-width: 990px) and (max-width: 991px) {
          padding-left: 4px;
          padding-right: 4px;
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: ${themeGet("colors.primary")};
          }
        }

        & a.is-current {
          color: ${themeGet("colors.primary")};
        }
        a {
          color: ${themeGet("colors.white")};
          font-size: 2rem;
          line-height: 2.2;
          padding: 5px;
          transition: 0.15s ease-in-out;
          letter-spacing: 1.5px;
          @media only screen and (min-width: 990px) and (max-width: 991px) {
            padding: 3px;
          }
          &:hover {
            color: ${themeGet("colors.primary")};
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }

    .reusecore-drawer__handler {
      @media (min-width: 992px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
          background-color: ${themeGet("colors.white")};
        }
      }
    }
  }

  .sticky-logo.nav-logo {
    img, a {
      cursor: pointer;
    }

    img {
      position: absolute;
    }
  }

  .sticky-nav-active {
    .sass_app_dark_navbar {
      padding: 15px 0;
      background-color: #111111;
      // background: rgba(255, 255, 255, 0.2);
      // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      // backdrop-filter: blur(2px);
      // border-bottom-color: ${rgba("#fff", 0.2)};
    }
    .main-logo {
      opacity: 0;
      visibility: hidden;
    }
    .sticky-logo {
      opacity: 1;
      
      visibility: visible;
      transition: 0.25s ease-in-out;

      img {
        max-width: 70px;
      }
     
    }
    .main_menu li a {
      color: ${themeGet("colors.white")};
    }
    .main_menu li:hover a,
    .main_menu li.is-current a,
    .main_menu li a.is-current {
      color: ${themeGet("colors.primary")};
    }
    .reusecore-drawer__handler {
      .hamburgMenu__bar {
        > span {
          background-color: ${themeGet("colors.white")};
        }
      }
    }
    .navbar_button_one {
      background-color: transparent;
    }
  }


  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet("colors.white", "#ffffff")} !important;
    &.alt {
      background-color: ${themeGet("colors.primary", "#10ac84")} !important;
      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;
    }
  }
  .reuseModalHolder {
    border: 0 !important;
    background-color: transparent !important;
    &.search-modal,
    &.video-modal {
      background-color: rgba(255, 255, 255, 0.96) !important;
      overflow-y: auto !important;
      .innerRndComponent {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        iframe {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.8) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
    &.video-modal {
      background-color: transparent !important;
    }
    .innerRndComponent {
      padding-right: 0 !important;
    }
  }
  .reuseModalCloseBtn {
    cursor: pointer !important;
  }

  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }

  .reuseModalHolder.login-modal{
    @media (min-width: 768px) {
      top: 0!important;
      left: 0!important;
      max-width: 100%!important;
      max-height: 100%!important;
    }
  }

  .drawer-content-wrapper{
    right: -1px;
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: ${themeGet("colors.primary")};
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${themeGet("colors.primary")};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }

            &.is-current {
              color: ${themeGet("colors.primary")};
              &:before{
                opacity: 1;
              }
            }
          }
          &.is-current {
            a {
              color: ${themeGet("colors.primary")};
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 26px;
      color: ${themeGet("colors.black")};
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
    }
  }

  .PhoneInputCountry {
    --PhoneInputCountrySelectArrow-color: ${themeGet("colors.white")};
    --PhoneInputCountrySelectArrow-opacity: 1;
  }
`;

export const ContentWrapper = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-padding: 10px;
  overflow-y: scroll;
`;

export const AppWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }

  .sticky-active {
    .navbar {
      padding: 20px 0 21px;
      background-color: ${themeGet("colors.white", "#ffffff")};
      @media only screen and (max-width: 1366px) {
        padding: 15px 0 16px;
      }
      .mobile-menu {
        top: 72px;
      }
    }
  }
`;

export const SectionHeader = styled.header`
  max-width: 550px;
  width: 100%;
  margin: 0 auto 85px;
  text-align: center;
  @media only screen and (max-width: 1600px) {
    margin-bottom: 60px;
  }
  p {
    font-weight: normal;
    line-height: 2;
    margin-bottom: 12px;
    color: ${themeGet("colors.textColor", "#343D48")};
  }
  h2 {
    font-size: 1.75rem;
    line-height: 1.3;
    font-weight: 500;
    color: ${themeGet("colors.headingColor", "#0F2137")};
    margin-bottom: 18px;
    letter-spacing: -0.5px;
    @media only screen and (max-width: 1600px) {
      letter-spacing: -0.7px;
      margin-bottom: 12px;
    }
    @media only screen and (max-width: 991px) {
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
  &.section-header-two {
    text-align: left;
    margin-top: -10px;
    margin-bottom: 40px;
    h2 {
      font-size: 2.5rem;
      line-height: 1.35;
      margin-bottom: 25px;
      letter-spacing: -0.5px;
    }
  }
`;

export const GradientWrapper = styled.section`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    180deg,
    rgba(246, 247, 249, 0) 0%,
    #f3f7fb 36.35%
  );
`;

export default GlobalStyle;
