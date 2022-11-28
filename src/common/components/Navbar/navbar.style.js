import themeGet from "@styled-system/theme-get";
import { theme } from "common/theme";
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
import { darkenColor, lightenColor } from "../lightenDarken";



const NavbarStyle = styled.nav`
  /* Navbar default style goes here */
  display: flex;
  align-items: center;

  background-color: ${darkenColor(theme.colors.nightBlack, 0.05)};

  
  // &:before {
  //   content: ' ';
  //   display: block;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.25;
  // }
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.35s ease-in-out;

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
