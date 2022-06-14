import React from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import {
  Table,
  Container,
  H2,
  B,
  Button,
  Symbol,
  Red,
  Green,
  Thead,
} from "./PortfolioStyles";

const PortfolioTable = (props) => {
  return (
    <>
      <ReactNotifications />
      <Container>
        <div>
          <table>
            <Thead>
              <tr>
                <td>Rank</td>
                <td>Name</td>
                <td>Symbol</td>
                <td>Market Cap</td>
                <td>Price</td>
                <td>Available Supply</td>
                <td>Volume(24hrs)</td>
              </tr>
            </Thead>
            <tbody>
              {props.portfolio.map((cryptos, id) => {
                return (
                  <>
                    <tr key={id} id={id}>
                      <td className="rank">{cryptos.market_cap_rank}</td>
                      <td className="logo">
                        <img src={cryptos.image} alt="logo" width="30px" />

                        <p>{cryptos.name}</p>
                      </td>
                      <td className="symbol">{cryptos.symbol}</td>
                      <td>₹{cryptos.marketCap}</td>
                      <td>₹{cryptos.current_price.toFixed(2)}</td>
                      <td>{cryptos.ath}</td>
                      <td>{cryptos.price_change_percentage_24h.toFixed(0)}</td>
                      <td>
                        <Button
                          onClick={() => props.handleCryptoClick(cryptos)}
                        >
                          Add to portfolio
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default PortfolioTable;
