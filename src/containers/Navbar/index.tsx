import Box from "common/components/Box";
import Drawer from "common/components/Drawer";
import HamburgMenu from "common/components/HamburgMenu";
import NavbarWrapper from "common/components/Navbar";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import Container from "common/components/Container";
import { DrawerContext } from "common/contexts/DrawerContext";
import { NavbarData } from "common/data";
import PropTypes from "prop-types";
import Logo from "common/components/UIElements/Logo";
import React, { useContext } from "react";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";

const navbarStyle = {
  className: "sass_app_dark_navbar",
  height: {
    _: "122px",
    xs: "122px",
    sm: "84px",
    md: "84px",
    xxl: "112px",
  },
  paddingLeft: {
    _: "8px",
    xs: "8px",
    sm: "16px",
    md: "16px",
    xxl: "24px",
  },
  paddingRight: {
    _: "8px",
    xs: "8px",
    sm: "16px",
    md: "16px",
    xxl: "24px",
  },
  display: "block",
};

const logoStyles = {
  height: {
    _: "42px",
    xs: "42px",
    sm: "42px",
    md: "42px",
    xxl: "56px",
  },
  width: {
    _: "106px",
    xs: "106px",
    sm: "106px",
    md: "106px",
    xxl: "152px",
  },
};

const Navbar = ({ row, menuWrapper }) => {
  const { state, dispatch }: any = useContext(DrawerContext);
  const { menuItems, logo, logoWhite } = NavbarData;

  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} mode={state.mode}>
      <Container
        noGutter
        px={{
          _: "25px",
          sm: "0px",
        }}
        maxWidth={{
          lg: "1180px",
          xl: "1300px",
          xxl: "1600px",
        }}
      >
        <Box {...row}>
          <Box
            {...menuWrapper}
            className="mainMenuWrapper"
            justifyContent={{
              _: "space-between",
              md: "center",
            }}
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <Logo
              // @ts-ignore
              logoSrc={state.mode === "light" ? logoWhite : logo}
              href="/"
              alt="Aut Logo"
              logoStyle={logoStyles}
              className="sticky-logo nav-logo"
            />
            {/* @ts-ignore */}
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menuItems}
              offset={-70}
            />

            {/* <div className="navbar-buttons">
              {navButtons.map(({ link, name }, index) => (
                <Button
                  key={`nav-button-key-${index}`}
                  target="_blank"
                  title={name}
                  href={link}
                  variant="roundOutlined"
                  size="normal"
                  colors="primary"
                  ml={{
                    md: "65px",
                    lg: "70px",
                    xxl: "82px",
                  }}
                  as="a"
                />
              ))}
            </div> */}
            {/* @ts-ignore */}
            <Drawer
              width="420px"
              placement="right"
              closeButton={<Icon size={30} icon={ic_close} />}
              // @ts-ignore
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menuItems}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  row: {
    flexBox: true,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default Navbar;
