import React from "react";
import invest from "./assets/invest.png";
import { Img, Div, H1, Container, P } from "./HomeStyles";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
const Header = () => {
  return (
    <Div>
      <Img src={invest} alt="invest" />
      <Container>
        <H1>How it works?</H1>
        <P>
          This is website for cryptocurrencies. <br /> <br /> You can track your
          coins and crypto related news. <br /> <br /> All added coins and news
          will be added to this homepage.
        </P>
      </Container>
      <ReactNotifications />
    </Div>
  );
};

export default Header;
