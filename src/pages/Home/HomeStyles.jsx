import styled from "styled-components";

export const Div = styled.div`
  background-color: #000208;
  display: flex;
  justify-content: center;
`;
export const H1 = styled.h1`
  color: #c84b31;
  position: relative;
  bottom: 70px;
`;
export const P = styled.p`
  color: #ecdbba;
  font-size: 18px;
  position: relative;
  bottom: 50px;
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
  width: 300px;
  height: 150px;
  background-color: #000208;
  border: 1px solid #ecdbba;
  position: relative;
  top: 200px;
  @media screen and (max-width: 960px) {
    top: 80px;
    right: 10px;
    padding: 65px 15px 65px 15px;

    width: 100%;
    margin-bottom: 25%;
    height: 330px;
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
