import styled from "styled-components";

export const Div = styled.div`
  margin-top: 10%;
  justify-content: center;
  text-align: center;
  align-items: center;

  color: #ecdbba;
  @media screen and (max-width: 960px) {
    position: relative;
    top: 60px;
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
export const HR = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #ecdbba;
  box-shadow: 0 0 15px #ecdbba;
  position: relative;
  bottom: 20px;
`;
