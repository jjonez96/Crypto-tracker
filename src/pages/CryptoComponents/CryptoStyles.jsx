import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6%;
  text-align: center;
  color: #ecdbba;
`;

export const Button = styled.button`
  font-size: 20px;
  color: #ecdbba;
  overflow: hidden;
  background-image: linear-gradient(
    70deg,
    rgba(236, 219, 186, 1) 32%,
    rgba(255, 64, 64, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
  border: 1px solid #ecdbba;
  border-radius: 7px;
  position: relative;
  bottom: 20px;
  cursor: pointer;

  &:hover {
    transition-duration: 0.4s;
    box-shadow: 0 0 5px #ecdbba;
  }
  &:focus {
    outline: none !important;
    border: 1px solid #ecdbba;
    box-shadow: 0 0 5px #ecdbba;
  }
`;
export const H1 = styled.h1`
  text-decoration: underline;

  text-align: center;
  color: #ecdbba;
`;

export const H2 = styled.h2`
  position: relative;
  color: #ecdbba;
  top: 10px;
`;

export const B = styled.b`
  color: #c84b31;
`;
export const HR = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #ecdbba;
  box-shadow: 0 0 15px #ecdbba;
  position: relative;
  bottom: 20px;
  @media screen and (max-width: 960px) {
    width: 60%;
  }
`;
export const Hr = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #ecdbba;
  box-shadow: 0 0 15px #ecdbba;
  width: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
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
  width: 23%;
  height: 350px;
  background-color: #000208;
  border: 1px solid #ecdbba;
  border-radius: 5px;
  transition: transform 0.1s;
  box-shadow: 1px 1px 4px 0px #ecdbba inset, -1px -1px 4px 0px #ecdbba inset;
  @media screen and (max-width: 960px) {
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    top: 60px;
    left: 12px;
    width: 90%;
    margin-bottom: 4%;
    height: 350px;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

export const Backtotop = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 50px;
  height: 55px;
  color: #ecdbba;
  background-color: #000;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ecdbba;

  &:hover {
    box-shadow: 0 0 5px #ecdbba;
    transition-duration: 0.4s;
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
