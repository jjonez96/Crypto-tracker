import React, { useState, useEffect } from "react";
import CryptoTable from "./CryptoTable";
import Addfav from "./buttons/Addfav";
import { Store } from "react-notifications-component";

const CryptoApi = () => {
  const [crypto, setCrypto] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=300&page=1&sparkline=false"
    )
      .then((response) => {
        if (response.status !== 200) {
          console.log("error", response.status);
          return;
        }
        response.json().then((crypto) => {
          setCrypto(crypto);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const coinPortfolio = JSON.parse(localStorage.getItem("portfolio"));
    if (coinPortfolio) {
      setPortfolio(coinPortfolio);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("portfolio", JSON.stringify(items));
  };

  const addFavouriteCrypto = (crypto) => {
    const newFavouriteList = [...portfolio, crypto];
    setPortfolio(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    Store.addNotification({
      title: `${crypto.name} added to Portfolio`,
      type: "success",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1000,
      },
    });

    console.log(newFavouriteList);
  };

  const filterCryptos = crypto.filter((crypto) => {
    return (
      crypto.name.toLowerCase().includes(search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(search.toLowerCase()) ||
      crypto.market_cap_rank.toString().includes(search.toString())
    );
  });

  return (
    <>
      <div>
        <CryptoTable
          filterCryptos={filterCryptos}
          search={search}
          setSearch={setSearch}
          handleFavouritesClick={addFavouriteCrypto}
          btnState={Addfav}
        />
      </div>
    </>
  );
};

export default CryptoApi;
