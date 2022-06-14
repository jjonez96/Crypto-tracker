import React from "react";
import Portfolio from "../CryptoComponents/PortfolioPage";
import Watchlist from "../News/Watchlist";
import Header from "./Header";
import { HR } from "./HomeStyles";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Home = () => {
  return (
    <div>
      <ReactNotifications />
      <Header />
      <HR />
      <Watchlist />
      <HR />
      <Portfolio />
    </div>
  );
};

export default Home;
