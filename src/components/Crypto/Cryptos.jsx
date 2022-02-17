import React from "react";
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

const Cryptos = (props) => {
  return (
    <div>
      <Container>
        <BackToTop />
        {props.crypto.map((cryptos, i) => (
          <div key={i}>
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
    </div>
  );
};

export default Cryptos;
