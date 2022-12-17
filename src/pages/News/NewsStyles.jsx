import styled from "styled-components";

export const Div = styled.div`
  margin-top: 10%;
  text-align: center;
  color: #ecdbba;
  @media screen and (max-width: 960px) {
    margin-top: 20%;
  }
`;

export const Button = styled.button`
  height: 40px;
  font-size: 1.2rem;
  color: #11d811;
  overflow: hidden;
  background-color: transparent;
  box-shadow: inset 0 0 0 0 #11d811;
  transition: ease-out 0.5s;
  border: 1px solid #11d811;
  border-radius: 4px;
  z-index: 1;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    box-shadow: inset 0 0 0 50px #11d811;
    color: black;
  }
  &:focus {
    outline: none !important;
    background-color: #11d811;
    box-shadow: 0 0 10px #11d811;
    color: black;
  }
`;

export const H2 = styled.h2`
  position: relative;
  color: #ecdbba;
  top: 10px;
  padding-left: 5%;
  padding-right: 5%;
`;
export const Desc = styled.p`
  color: #ecdbba;
  padding-left: 15%;
  padding-right: 15%;
`;
export const B = styled.b`
  color: #c84b31;
  text-decoration: underline;
  &:hover {
    color: #c02000;
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
    top: 50%;
    width: 100%;
    height: 1px;
  }
`;

export const Input = styled.input`
  font-family: inherit;
  margin: 20px;
  font-size: 18px;
  vertical-align: baseline;
  outline-offset: -2px;
  width: 95%;
  border: none;
  border-bottom: 1px solid #ecdbba;
  background-color: transparent;
  padding: 10px 16px;
  color: #ecdbba;
  @media screen and (max-width: 960px) {
    width: 70%;
    position: relative;
    bottom: -40px;
  }
  &::placeholder {
    color: #746c5c;
  }

  &:focus {
    outline: none !important;
    box-shadow: 0px 0.5px 0.1px 0px #ecdbba;
  }
`;
export const Img = styled.img`
  object-fit: cover;
  width: 500px;
  height: 300px;
  @media screen and (max-width: 960px) {
    object-fit: cover;
    width: 250px;
    height: 250px;
  }
`;
