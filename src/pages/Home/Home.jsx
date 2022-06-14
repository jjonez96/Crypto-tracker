import React from "react";
import Portfolio from "../CryptoComponents/PortfolioPage";
import Watchlist from "../News/Watchlist";
import Header from "./Header";
import { Img, Div, H1, Container, P, HR } from "./HomeStyles";

const Home = () => {
  return (
    <div>
      <Header />
      <HR />
      <Watchlist />
      <HR />
      <Portfolio />
    </div>
  );
};

export default Home;
