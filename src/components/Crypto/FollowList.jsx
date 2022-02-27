import React, { useState, useEffect } from "react";
import CryptoList from "./CryptoList";
import NavBar from "../Navbar/NavBar";
import RemoveFav from "./buttons/RemoveFav";
import BackToTop from "./BackToTop";

const FollowList = () => {
  const [favourites, setFavourites] = useState([]);

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

  const removeFavouriteCrypto = (crypto) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== crypto.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div>
      <NavBar />
      <div>
        <CryptoList
          filterCryptos={favourites}
          handleFavouritesClick={removeFavouriteCrypto}
          favouriteComponent={RemoveFav}
        />
      </div>
      <BackToTop />
    </div>
  );
};

export default FollowList;
