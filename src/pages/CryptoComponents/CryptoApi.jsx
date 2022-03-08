import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar/NavBar";
import BackToTop from "../../components/BackToTop";
import CryptoList from "./CryptoList";
import Addfav from "./buttons/Addfav";
import { Store } from "react-notifications-component";

const CryptoApi = () => {
  const [crypto, setCrypto] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
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
      setFavourites(coinPortfolio);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("portfolio", JSON.stringify(items));
  };

  const addFavouriteCrypto = (crypto) => {
    const newFavouriteList = [...favourites, crypto];
    setFavourites(newFavouriteList);
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
      crypto.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <div>
        <CryptoList
          filterCryptos={filterCryptos}
          handleFavouritesClick={addFavouriteCrypto}
          favouriteComponent={Addfav}
        />
      </div>
      <BackToTop />
    </>
  );
};

export default CryptoApi;
