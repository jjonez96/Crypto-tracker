import React, { useState, useEffect } from "react";
import CryptoTable from "./CryptoTable";
import RemoveFav from "./buttons/RemoveFav";
import { Store } from "react-notifications-component";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const coinPortfolio = JSON.parse(localStorage.getItem("portfolio"));
    if (coinPortfolio === null) {
      alert("No coins in portfolio. Add some.");
    } else {
      setPortfolio(coinPortfolio);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("portfolio", JSON.stringify(items));
  };

  const removeFavouriteCrypto = (crypto) => {
    const newPortfolio = portfolio.filter((follow) => follow.id !== crypto.id);

    setPortfolio(newPortfolio);
    saveToLocalStorage(newPortfolio);
    Store.addNotification({
      title: `${crypto.name} removed`,
      type: "danger",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1000,
      },
    });
  };

  const filterCryptos = portfolio.filter((crypto) => {
    return (
      crypto.name.toLowerCase().includes(search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(search.toLowerCase()) ||
      crypto.id.toLowerCase().includes(search.toLowerCase()) ||
      crypto.market_cap_rank.toString().includes(search.toString())
    );
  });

  return (
    <div>
      <CryptoTable
        filterCryptos={filterCryptos}
        search={search}
        setSearch={setSearch}
        handleFavouritesClick={removeFavouriteCrypto}
        btnState={RemoveFav}
      />
    </div>
  );
};

export default Portfolio;
