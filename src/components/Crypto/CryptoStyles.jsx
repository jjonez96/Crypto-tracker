import styled from "styled-components";

export const Container = styled.div`
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
    box-shadow: 0 0 8px #ecdbba;
  }
  &:focus {
    outline: none !important;
    border: 1px solid #ecdbba;
    box-shadow: 0 0 8px #ecdbba;
  }
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
  width: 35%;
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
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Backtotop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 60px;
  background-image: linear-gradient(
    70deg,
    rgba(236, 219, 186, 1) 32%,
    rgba(255, 64, 64, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;

  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ecdbba;
  &:hover {
    box-shadow: 0 0 10px #ecdbba;
    transition-duration: 0.4s;
  }
`;
