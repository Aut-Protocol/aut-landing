import { createGlobalStyle } from "styled-components";
import AutLogo from "common/assets/image/noise.svg";

const ResetCSS = createGlobalStyle`
  ::selection {
    background: #ffffff;
    color: #262626;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  .rc-tooltip.button-tooltip  {
    opacity: 1;
    .rc-tooltip-inner {
      position: relative;
      padding: 14px;
      background: rgba(255,255,255, .5) url(${AutLogo.src}) 0% 0% no-repeat padding-box;
      mix-blend-mode: overlay;
      opacity: 1;
      background-position: center;
      background-size: cover;
    }

    .rc-tooltip-arrow {
        display: none;    
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
`;
export default ResetCSS;
