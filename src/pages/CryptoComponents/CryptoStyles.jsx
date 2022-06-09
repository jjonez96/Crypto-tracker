import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10%;
  margin-left: 1.7%;
  margin-right: 2%;
  text-align: center;
  color: #ecdbba;
  @media screen and (max-width: 960px) {
    margin-top: 25%;
    margin-left: 4.8%;
    margin-right: 2%;
  }
`;

export const Button = styled.button`
  height: 35px;
  font-size: 1.2rem;
  color: #ecdbba;
  overflow: hidden;
  background-color: transparent;
  box-shadow: inset 0 0 0 0 #ecdbba;
  transition: ease-out 0.5s;
  border: 1px solid #ecdbba;
  border-radius: 4px;
  z-index: 1;
  position: relative;
  bottom: 40px;
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
export const H1 = styled.h1`
  text-decoration: underline;
  text-align: center;
  color: #ecdbba;
`;

export const H2 = styled.h2`
  position: relative;
  top: 20px;

  color: #ecdbba;
`;

export const B = styled.b`
  color: #c84b31;
  text-decoration: none;
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
  position: relative;
  bottom: 30px;
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
export const Hr = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #ecdbba;
  box-shadow: 0 0 15px #ecdbba;
  width: 100%;
`;
export const Symbol = styled.b`
  color: #ecdbba;
  font-size: 18px;
`;

export const Red = styled.p`
  position: relative;
  bottom: 15px;
  color: #ff3a3a;
`;
export const Green = styled.p`
  position: relative;
  bottom: 15px;
  color: #11d811;
`;
export const Table = styled.table`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  float: left;
  margin: 1%;
  width: 18%;
  height: 350px;
  background-color: #000208;
  border: 1px solid #ecdbba;

  @media screen and (max-width: 960px) {
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    top: 60px;
    left: 6px;
    width: 92%;
    margin-bottom: 4%;
    height: 330px;
  }
`;

export const Backtotop = styled.a`
  position: fixed;
  bottom: 10px;
  right: 12px;
  color: #ecdbba;
  background: transparent;
  cursor: pointer;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 18px;
  vertical-align: baseline;
  width: 95%;
  border: none;
  border-bottom: 1px solid #ecdbba;
  background-color: transparent;
  padding: 5px 20px;
  color: #ecdbba;
  @media screen and (max-width: 960px) {
    width: 80%;
    margin-top: 50px;
    margin-left: -15px;
    position: relative;
    top: 35px;
  }
  &::placeholder {
    color: #746c5c;
  }

  &:focus {
    outline: none !important;
    box-shadow: 0px 0.5px 0.1px 0px #ecdbba;
  }
`;
