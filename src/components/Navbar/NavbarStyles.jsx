import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  scroll-behavior: smooth;
  transition: 0.8s all ease;
  @media screen and (max-width: 960px) {
    position: sticky;
    top: 0;
    width: 100%;
    background: ${({ click }) => (click ? "#000" : "#transparent")};
    transition: 0.8s all ease;
    background: ${({ active }) => (active ? "#000" : "#transparent")};
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1530px;
`;
export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin: 25px;
  width: 100%;
  font-size: medium;
  color: #ecdbba;
  overflow: hidden;
  background-color: transparent;
  border: 1px solid #ecdbba;

  border-radius: 7px;

  &:hover {
    background: transparent;
    transition-duration: 0.4s;
    box-shadow: 0 0 15px #ecdbba;
  }
  &:focus {
    outline: none !important;
    border: 1px solid #ecdbba;
    box-shadow: 0 0 10px #ecdbba;
  }
`;
export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;

  font-size: 1.8rem;
  font-family: "Oooh Baby";
  background-image: linear-gradient(
    70deg,
    rgba(236, 219, 186, 1) 32%,
    rgba(255, 64, 64, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  display: flex;
  align-items: center;
  &:hover {
    color: #ff4040;
    transition: all 0.3 ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 1;
    right: 0;
    background-image: linear-gradient(
      70deg,
      rgba(236, 219, 186, 1) 32%,
      rgba(255, 64, 64, 1) 100%
    );
    -webkit-background-clip: text;
    color: transparent;
    transform: translate(-100%, 70%);
    font-size: 1.9rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    position: absolute;
    top: ${({ click }) => (click ? "74%" : "-1000px")};
    opacity: 1;
    background: #000000;
    transition: 0.6s all ease;
  }
`;
export const NavItem = styled.li`
  height: 100px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const NavLinks = styled(Link)`
  background-image: linear-gradient(
    70deg,
    rgba(236, 219, 186, 1) 32%,
    rgba(255, 64, 64, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 22px;
  font-weight: bold;
  padding: 2.4rem 2rem;
  width: 100%;
  &:hover {
    color: #ff4040;
    transition: all 0.3 ease;
  }
  @media screen and (max-width: 960px) {
    color: linear-gradient(
      to right top,
      #000a1a,
      #413545,
      #83636b,
      #be9a8e,
      #ecdbba
    );
    margin: -70px;
    margin-top: 40px;
    width: 100%;
    display: table;
    &:hover {
      color: #ff4040;
      transition: all 0.3 ease;
    }
  }
`;
