import styled from "styled-components";

export const Div = styled.div`
  margin-top: 250px;
  justify-content: center;
  text-align: center;
  align-items: center;

  color: #ecdbba;
  @media screen and (max-width: 960px) {
    position: relative;
    top: 50%;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 18px;
  vertical-align: baseline;
  outline-offset: -2px;
  width: 20%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #ecdbba;
  background-color: transparent;
  color: #ecdbba;
  @media screen and (max-width: 960px) {
    justify-content: center;
    align-items: center;
    width: 85%;
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

export const Button = styled.button`
  height: 40px;
  font-size: 1.2rem;
  color: #ecdbba;
  overflow: hidden;
  background-color: transparent;
  box-shadow: inset 0 0 0 0 #ecdbba;
  transition: ease-out 0.5s;
  border: 1px solid #ecdbba;
  border-radius: 4px;
  z-index: 1;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    box-shadow: inset 0 0 0 50px #ecdbba;
    color: black;
  }
  &:focus {
    outline: none !important;
    background-color: #ecdbba;
    box-shadow: 0 0 10px #ecdbba;
    color: black;
  }
`;
export const HR = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.1em;
  opacity: 0.6;
  &:before {
    content: "";
    background: linear-gradient(to right, transparent, #ecdbba, transparent);
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
  }
`;

export const P = styled.p`
  color: #c84b31;
`;
