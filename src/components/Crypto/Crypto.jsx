import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/NavBar";
import BackToTop from "./BackToTop";
import FavList from "./FavList";

const Crypto = () => {
  const [crypto, setCrypto] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
    )
      .then((response) => {
        if (response.status !== 200) {
          console.log("error", response.status);
          return;
        }
        response.json().then((crypto) => {
          setIsLoading(false);
          setCrypto(crypto);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const cryptoFavourites = JSON.parse(
      localStorage.getItem("crypto-favourites")
    );

    if (cryptoFavourites) {
      setFavourites(cryptoFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("crypto-favourites", JSON.stringify(items));
  };
  const addFavouriteCrypto = (crypto) => {
    const newFavouriteList = [...favourites, crypto];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
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
      {isLoading && <p>Loading...</p>}

      <NavBar search={search} setSearch={setSearch} />

      <div>
        <FavList
          filterCryptos={filterCryptos}
          handleFavouritesClick={addFavouriteCrypto}
        />
        <BackToTop />
      </div>
    </>
  );
};

export default Crypto;
