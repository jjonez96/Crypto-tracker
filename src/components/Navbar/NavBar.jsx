import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Input,
  NavLogo,
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles";

const NavBar = (props) => {
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
            <NavLogo to="/">Crypto</NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Input
              value={props.value}
              onChange={(event) => props.setSearch(event.target.value)}
              placeholder="Type to search..."
            ></Input>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Cryptos</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Kynnet">Login</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default NavBar;
