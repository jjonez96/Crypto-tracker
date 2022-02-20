import React from "react";

import {
  Table,
  Container,
  H2,
  B,
  HR,
  Button,
  Symbol,
  Red,
  Green,
} from "./CryptoStyles";

const FavList = (props) => {
  return (
    <>
      <Container>
        {props.filterCryptos.map((cryptos) => (
          <div key={cryptos.id}>
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
                    <B>Price:</B> ${cryptos.current_price}
                  </td>
                </tr>
                <tr>
                  <td>
                    <B> ATH Price:</B> ${cryptos.ath}
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
                    <Button
                      onClick={() => props.handleFavouritesClick(cryptos)}
                    >
                      Follow
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <HR />
          </div>
        ))}
      </Container>
    </>
  );
};

export default FavList;
