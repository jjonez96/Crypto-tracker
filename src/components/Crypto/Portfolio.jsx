import React, { useState, useEffect } from "react";
import CryptoList from "./CryptoList";
import NavBar from "../Navbar/NavBar";
import RemoveFav from "./buttons/RemoveFav";
import BackToTop from "./BackToTop";
import { Store } from "react-notifications-component";

const Portfolio = () => {
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

export default Portfolio;
