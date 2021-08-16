import React, { useState } from 'react';
import {
  Nav,
  NavLogo,
  MenuBar,
  DesktopMenu,
  MenuItems,
  MobileNav,
  MobileMenuClose,
  MenuClose,
  MobileMenuItems,
} from './styles';
import { NavbarItems } from './NavbarItems';

const Navbar = (): JSX.Element => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleMenu = ():void => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Nav title="Navbar">
        <NavLogo>
          POKEAPP
        </NavLogo>
        <MenuBar onClick={toggleMenu} />
        <DesktopMenu>
          { NavbarItems.map((item):JSX.Element => (
            <MenuItems key={item.name} exact={item.exact} to={item.path}>
              {item.name}
            </MenuItems>
          )) }
        </DesktopMenu>
      </Nav>
      <MobileNav isActive={showNav}>
        <MobileMenuClose>
          <MenuClose onClick={toggleMenu} />
        </MobileMenuClose>
        { NavbarItems.map((item):JSX.Element => (
          <MobileMenuItems key={item.name} onClick={toggleMenu} exact={item.exact} to={item.path}>
            {item.name}
          </MobileMenuItems>
        )) }
      </MobileNav>
    </>
  );
};
export default Navbar;
