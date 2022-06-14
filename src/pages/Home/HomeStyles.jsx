import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;
export const H1 = styled.h1`
  color: #c84b31;

  @media screen and (max-width: 960px) {
    font-size: 26px;
  }
`;
export const P = styled.p`
  color: #ecdbba;
  font-size: 20px;
  @media screen and (max-width: 960px) {
    font-size: 17px;
  }
`;
export const Img = styled.img`
  margin-top: 10%;
  margin-left: 10%;
  @media screen and (max-width: 960px) {
    width: 200px;
    height: 350px;
    margin-top: 40%;

    margin-left: 4.8%;
  }
`;
export const Container = styled.div`
  margin: 6%;
  padding: 5%;

  font-size: 20px;
  position: relative;
  top: 150px;
  @media screen and (max-width: 960px) {
    top: 110px;
    right: 10px;
    margin: 0%;

    width: 100%;
    height: 330px;
  }
`;
export const HR = styled.hr`
  line-height: 1em;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.1em;
  opacity: 0.6;
  position: relative;
  bottom: 10px;
  &:before {
    content: "";
    background: linear-gradient(to right, transparent, #ecdbba, transparent);
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
  }
`;
