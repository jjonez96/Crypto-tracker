import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaBitcoin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  HR,
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScoll] = useState(false);
  const handleClick = () => setClick(!click);

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setScoll(true);
    } else {
      setScoll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div>
      <IconContext.Provider value={{ color: "#ecdbba" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavLogo to="/">
              <FaBitcoin />
            </NavLogo>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">
                  Coins <HR />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/PortfolioPage">
                  Portfolio <HR />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/NewsPage">
                  News <HR />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/LoginPage">
                  Login <HR />
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};
export default NavBar;
