import Box from 'common/components/Box';
import Drawer from 'common/components/Drawer';
import HamburgMenu from 'common/components/HamburgMenu';
import NavbarWrapper from 'common/components/Navbar';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Container from 'common/components/UI/Container';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { ComingSoonData } from 'common/data';
import PropTypes from 'prop-types';
import Logo from 'common/components/UIElements/Logo';
import React, { useContext } from 'react';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const { title, logo } = ComingSoonData;

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={logo}
            title="SaaS Creative"
            logoStyle={logoStyle}
            className="sticky-logo nav-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={[]}
              offset={-70}
            />

            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={[]}
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
  navbarStyle: {
    className: 'sass_app_dark_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logoContainer: {},
  logoStyle: {
    maxWidth: ['115px', '115px'],
  },
  button: {},
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export default Navbar;
