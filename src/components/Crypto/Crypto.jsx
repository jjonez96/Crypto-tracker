import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/NavBar";

import BackToTop from "./BackToTop";
import {
  Table,
  Button,
  Container,
  H2,
  B,
  HR,
  Symbol,
  Red,
  Green,
} from "./CryptoStyles";
import FavList from "./FavList";

const Crypto = () => {
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

  const addFavouriteCrypto = (crypto) => {
    const newFavouriteList = [...favourites, crypto];
    setFavourites(newFavouriteList);
    console.log(newFavouriteList);
  };

  const filterCryptos = crypto.filter((cryptos) => {
    return (
      cryptos.name.toLowerCase().includes(search.toLowerCase()) ||
      cryptos.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <NavBar search={search} setSearch={setSearch} />

      <Container>
        {filterCryptos.map((cryptos, i) => (
          <div key={i}>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <H2>{cryptos.name}</H2>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={cryptos.image} alt="logo" width="30px" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Symbol>{cryptos.symbol}</Symbol>
                  </td>
                </tr>
                <tr>
                  <td>
                    <B> Rank:</B> {cryptos.market_cap_rank}
                  </td>
                </tr>
                <tr>
                  <td>
                    <B>Present price:</B> ${cryptos.current_price}
                  </td>
                </tr>
                <tr>
                  <td>
                    <B> ATH price:</B> ${cryptos.ath}
                  </td>
                </tr>
                <tr>
                  <td>
                    <B> Market Cap:</B> ${cryptos.market_cap.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td>
                    {cryptos.price_change_percentage_24h < 0 ? (
                      <Red>
                        <B>24H Change: </B>
                        {cryptos.price_change_percentage_24h.toFixed(2)}%
                      </Red>
                    ) : (
                      <Green>
                        <B>24H Change: </B>
                        {cryptos.price_change_percentage_24h.toFixed(2)}%
                      </Green>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button onClick={() => addFavouriteCrypto(cryptos)}>
                      Follow
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <HR />
            <div>
              <FavList cryptos={cryptos} />
            </div>
          </div>
        ))}

        <BackToTop />
      </Container>
    </div>
  );
};

export default Crypto;
