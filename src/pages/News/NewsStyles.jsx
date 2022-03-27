import styled from "styled-components";

export const Div = styled.div`
  margin-top: 10%;

  text-align: center;
  color: #ecdbba;
  @media screen and (max-width: 960px) {
    margin-top: 20%;
  }
`;

export const H2 = styled.h2`
  position: relative;
  color: #ecdbba;
  top: 10px;
`;

export const B = styled.b`
  color: #c84b31;
  text-decoration: none;
`;
export const HR = styled.hr`
  border: none;
  height: 0.5px;
  background-color: #ecdbba;
  box-shadow: 0 0 15px #ecdbba;
  position: relative;
  bottom: 20px;
  width: 80%;
  @media screen and (max-width: 960px) {
    width: 60%;
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
