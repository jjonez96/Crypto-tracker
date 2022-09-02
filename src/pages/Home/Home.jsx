import React from "react";
import Portfolio from "../CryptoComponents/PortfolioPage";
import Watchlist from "../News/Watchlist";
import Header from "./Header";
import { HR } from "./HomeStyles";

const Home = () => {
  return (
    <>
      <Header />
      <HR />
      <Watchlist />
      <HR />
      <Portfolio />
      <div className="shapedividers_com-1441" style={{ height: "200px" }}>
        asd
      </div>
    </>
  );
};

export default Home;
