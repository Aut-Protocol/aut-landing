import themeGet from "@styled-system/theme-get";
import styled from "styled-components";
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
} from "styled-system";

const NavbarStyle = styled.nav`
  /* Navbar default style goes here */
  display: flex;
  align-items: center;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.25s ease-in-out;
  z-index: 200;
  overflow: hidden;
  
  left: 50%;
  transform: translateX(-50%);

  ${themeGet("mediaQueries.md")} {
    border-radius: 72px;
    max-width: 70%;
  }

  ${themeGet("mediaQueries.xl")} {
    border-radius: 72px;
    max-width: 45%;
  }

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    z-index: -1;
    
    background: rgba(240, 245, 255, 0.01);
    filter: blur(12px);
    backdrop-filter: blur(12px);
  }

  // &:before {
  //   content: " ";
  //   opacity: .25;
  // }

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .mainMenuWrapper {
    .navbar-buttons {
      @media (max-width: 990px) {
        display: none;
      }
    }

    @media (max-width: 991px) {
      // flex: 0 0 auto;
      // margin-left: auto;
    }
  }
  .main_menu {
    li {
      display: inline-flex;
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
        transition: 0.15s ease-in-out;

        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.33px;
        text-transform: unset;
        
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

  .sticky-logo.nav-logo {
    img,
    a {
      cursor: pointer;
    }

    // img {
    //   position: absolute;
    // }
  }

  .sticky-nav-active {
    // .sass_app_dark_navbar {
    //   padding: 15px 0;
    //   background-color: #111111;
    // }

    // .main-logo {
    //   opacity: 0;
    //   visibility: hidden;
    // }
    // .sticky-logo {

    // }
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
  }

  &.light {
    transition: 0.15s ease-in-out;
    .main_menu li a {
      color: ${themeGet("colors.nightBlack")};
    }
  }
  /* Style system supported prop */
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

NavbarStyle.displayName = "NavbarStyle";

export default NavbarStyle;
