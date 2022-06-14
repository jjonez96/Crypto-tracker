import React, { useState, useEffect } from "react";
import PortfolioTable from "./PortfolioTable";
import { Store } from "react-notifications-component";
import { db } from "../../config/firebase";
import { doc, deleteDoc } from "firebase/firestore";
const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

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
    const deleteFromFirestore = (item) => {
      deleteDoc(doc(db, "portfolio", item.id));
    };
    deleteFromFirestore(crypto);

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
    <>
      <PortfolioTable
        portfolio={portfolio}
        handlePortfolioClick={removeFavouriteCrypto}
      />
    </>
  );
};

export default Portfolio;
