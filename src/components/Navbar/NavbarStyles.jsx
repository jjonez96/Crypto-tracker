import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ active }) => (active ? "#000" : "#000411")};
  transition: 0.8s all ease;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  scroll-behavior: smooth;

  @media screen and (max-width: 960px) {
    position: fixed;
    top: 0;
    width: 100%;
    background: ${({ click }) => (click ? "#000" : "#000411")};
    transition: 0.8s all ease;
    background: ${({ active }) => (active ? "#000" : "#000411")};
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1900px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: inherit;
  margin: 20px;
  font-size: 18px;
  vertical-align: baseline;

  outline-offset: -2px;
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ecdbba;
  background-color: transparent;
  padding: 10px 16px;
  color: #ecdbba;
  @media screen and (max-width: 960px) {
    width: 57%;
  }
  &::placeholder {
    color: #746c5c;
  }
  &:hover {
    background: transparent;
    transition-duration: 0.4s;
    box-shadow: 0px 0.5px 0.1px 0px #ecdbba;
  }
  &:focus {
    outline: none !important;
    box-shadow: 0px 0.5px 0.1px 0px #ecdbba;
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
    height: 100vh;
    position: absolute;
    top: ${({ click }) => (click ? "74%" : "-1000px")};
    opacity: 1;
    background: #000000;
    transition: 0.6s all ease;
  }
`;
export const HR = styled.hr`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    border: none;
    height: 0.5px;
    background-color: #ecdbba;
    box-shadow: 0 6px 15px #ecdbba;
    position: relative;
    top: 20px;
    width: 100%;
  }
`;
export const NavItem = styled.li`
  height: 100px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const NavLinks = styled(Link)`
  color: #ecdbba;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 22px;
  font-weight: 300;
  padding: 2.4rem 2rem;
  width: 100%;
  &:hover {
    text-decoration: underline;
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
      text-decoration: underline;
    }
  }
`;
