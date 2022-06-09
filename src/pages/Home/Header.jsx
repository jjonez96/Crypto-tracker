import React from "react";
import invest from "./assets/invest.png";
import { Img, Div } from "./HomeStyles";
const Header = () => {
  return (
    <Div>
      <Img src={invest} alt="invest" />
    </Div>
  );
};

export default Header;
