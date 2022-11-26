import Box from "common/components/Box";
import Drawer from "common/components/Drawer";
import HamburgMenu from "common/components/HamburgMenu";
import NavbarWrapper from "common/components/Navbar";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import Container from "common/components/UI/Container";
import { DrawerContext } from "common/contexts/DrawerContext";
import { NavbarData } from "common/data";
import PropTypes from "prop-types";
import Logo from "common/components/UIElements/Logo";
import React, { useContext } from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import Button from "common/components/Button";

const navbarStyle = {
  className: "sass_app_dark_navbar",
  height: ["122px", "122px", "84px", "84px", "112px"],
  display: "block",
};

const logoStyles = {
  height: ["42px", "42px", "42px", "42px", "56px"],
}

const Navbar = ({ row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const { menuItems, logo, navButtons } = NavbarData;


  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Link href="/" shallow>
            <Logo
              logoSrc={logo}
              title="SaaS Creative"
              logoStyle={logoStyles}
              className="sticky-logo nav-logo"
            />
          </Link>
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menuItems}
              offset={-70}
            />

            <div className="navbar-buttons">
              {navButtons.map(({ link, name }, index) => (
                <Button
                  key={`nav-button-key-${index}`}
                  target="_blank"
                  className="gradient"
                  title={name}
                  href={link}
                  as="a"
                />
              ))}
            </div>

            <Drawer
              width="420px"
              placement="right"
              closeButton={<Icon size={30} icon={ic_close} />}
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
