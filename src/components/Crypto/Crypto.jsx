import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/NavBar";
import BackToTop from "./BackToTop";
import {
  Container,
  H2,
  B,
  HR,
  Symbol,
  Red,
  Green,
  Button,
} from "./CryptoStyles";

const Crypto = () => {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR")
        .then((response) => {
          if (response.status !== 200) {
            console.log("error", response.status);
            return;
          }
          response.json().then((crypto) => {
            setCrypto(crypto.coins);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <Container>
        <BackToTop />

        {crypto
          .filter((cryptos) => {
            return (
              cryptos.name.toLowerCase().includes(search.toLowerCase()) ||
              cryptos.symbol.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((cryptos, i) => (
            <div className="center" key={i}>
              <H2>{cryptos.name}</H2>
              <a href={cryptos.websiteUrl}>
                <img src={cryptos.icon} alt="logo" width="40px" />
              </a>
              <br />
              <br />
              <Symbol>{cryptos.symbol}</Symbol>
              <br />
              <br />
              <B>Price:</B> ${cryptos.price.toFixed(4)}
              <br />
              <B> Market Cap:</B> ${cryptos.marketCap.toLocaleString()}
              {cryptos.priceChange1d < 0 ? (
                <Red>
                  <B>24H Change: </B>
                  {cryptos.priceChange1d}%
                </Red>
              ) : (
                <Green>
                  <B>24H Change: </B>
                  {cryptos.priceChange1d}%
                </Green>
              )}
              <Button>Follow</Button>
              <HR />
            </div>
          ))}
      </Container>
    </>
  );
};

export default Crypto;
