import styled from "styled-components";

export const Container = styled.div`
  color: #ecdbba;
  background-color: #000208;
  border: 1px solid #ecdbba;
  margin-left: 5%;
  margin-right: 5%;
  overflow-x: auto;
`;
export const Thead = styled.thead`
  background-color: rgb(44, 44, 44);
  color: white;
  text-align: center;
`;
export const P = styled.p`
  text-align: center;
  margin-left: 2%;

  font-size: 1.2rem;
  color: #ecdbba;
`;
export const Div = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  border: 1px solid #ecdbba;
  background-color: #000208;
  text-align: left;
  color: #ecdbba;
`;
export const Imgdiv = styled.div`
  position: relative;
  bottom: 5px;
  @media screen and (max-width: 960px) {
    position: relative;
    bottom: 13px;
  }
`;
export const Button = styled.button`
  height: 30px;
  color: #ff3a3a;
  overflow: hidden;
  background-color: transparent;
  box-shadow: inset 0 0 0 0 #ff3a3a;
  transition: ease-out 0.5s;
  border: 1px solid #ff3a3a;
  border-radius: 4px;
  position: relative;
  @media screen and (max-width: 2560px) {
    position: relative;
    right: 150px;
  }
  @media screen and (max-width: 960px) {
    position: relative;
    right: 33px;
  }
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 0 50px #ff3a3a;
    color: black;
  }
  &:focus {
    outline: none !important;
    background-color: #ff3a3a;
    box-shadow: 0 0 10px #ff3a3a;
    color: black;
  }
`;
export const H1 = styled.h1`
  color: #c84b31;
  text-align: center;
  padding-top: 10%;
  font-size: 2rem;
  position: relative;
  bottom: 10px;
`;

export const H2 = styled.h2`
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

export const Symbol = styled.b`
  color: #ecdbba;
  font-size: 18px;
`;

export const Red = styled.p`
  color: #ff3a3a;
`;
export const Green = styled.p`
  color: #11d811;
`;
export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;
export const Img = styled.img`
  position: relative;
  top: 7px;
  right: 10px;

  @media screen and (max-width: 960px) {
    position: relative;
    top: 25px;
    right: 30px;
  }
`;
export const Tr = styled.tr`
  text-align: center;
`;
export const Td = styled.td`
  text-align: left;
  padding: 8px;
`;
export const Th = styled.th`
  text-align: left;
  padding: 8px;
  color: #c84b31;
  border-bottom: solid 1px #ecdbba;
`;
export const Backtotop = styled.a`
  position: fixed;
  bottom: 10px;
  right: 12px;
  color: #ecdbba;
  background: transparent;
  cursor: pointer;
`;
