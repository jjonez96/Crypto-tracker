import React, { useState, useEffect } from "react";
import CryptoTable from "./CryptoTable";
import Addfav from "./buttons/Addfav";
import { Store } from "react-notifications-component";
import { db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const CryptoApi = () => {
  const [crypto, setCrypto] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=300&page=1&sparkline=false"
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
    const coinPortfolio = JSON.parse(localStorage.getItem("portfolio"));
    if (coinPortfolio) {
      setPortfolio(coinPortfolio);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("portfolio", JSON.stringify(items));
  };

  const addToPortfolio = (crypto) => {
    const newPortfolioList = [...portfolio, crypto];
    const unique = [...new Set(newPortfolioList)];
    const saveToFirestore = (item) => {
      setDoc(doc(db, "portfolio", item.id), item);
    };
    saveToFirestore(crypto);
    setPortfolio(unique);
    saveToLocalStorage(unique);
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
  };

  const filterCryptos = crypto.filter((crypto) => {
    return (
      crypto.name.toLowerCase().includes(search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(search.toLowerCase()) ||
      crypto.id.toLowerCase().includes(search.toLowerCase()) ||
      crypto.market_cap_rank.toString().includes(search.toString())
    );
  });

  return (
    <>
      <CryptoTable
        isLoading={isLoading}
        filterCryptos={filterCryptos}
        search={search}
        setSearch={setSearch}
        handleFavouritesClick={addToPortfolio}
        btnState={Addfav}
      />
    </>
  );
};

export default CryptoApi;
