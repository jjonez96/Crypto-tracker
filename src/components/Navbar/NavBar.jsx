import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  HR,
  Nav,
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
    if (window.scrollY >= 80) {
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
    <>
      <IconContext.Provider value={{ color: "#ecdbba" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">
                  Coins <HR />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Portfolio">
                  Portfolio <HR />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/News">
                  News <HR />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Login">
                  Login <HR />
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default NavBar;
