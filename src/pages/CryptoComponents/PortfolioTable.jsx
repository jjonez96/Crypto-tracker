import { padding } from "@mui/system";
import React from "react";
import "react-notifications-component/dist/theme.css";

import {
  Table,
  Container,
  H2,
  B,
  Button,
  Symbol,
  Red,
  Tr,
  Td,
  Green,
  Thead,
  H1,
  HR,
  P,
  Div,
} from "./PortfolioStyles";

const PortfolioTable = (props) => {
  return (
    <>
      <H1>Portfolio</H1>
      <HR style={{ width: "100%" }} />
      {props.portfolio.length === 0 ? (
        <Div>
          <P>No coins in portfolio</P>
        </Div>
      ) : (
        <Container>
          <Table>
            <Thead>
              <tr>
                <td style={{ paddingRight: "20px" }}>Rank</td>
                <td style={{ float: "left" }}>Name</td>
                <td>Symbol</td>
                <td>Price</td>
                <td style={{ float: "right" }}>ATH</td>
                <td style={{ paddingRight: "20px" }}>Volume(24hrs)</td>
              </tr>
            </Thead>
          </Table>
          <div>
            <Table>
              <tbody>
                {props.portfolio.map((cryptos, id) => {
                  return (
                    <Tr key={id}>
                      <Td>{cryptos.market_cap_rank}</Td>

                      <td>
                        <img src={cryptos.image} alt="logo" width="30px" />
                      </td>
                      <td style={{ float: "left" }}>
                        <p>{cryptos.name}</p>
                      </td>
                      <Td>{cryptos.symbol}</Td>
                      <Td>€{cryptos.current_price.toFixed(2)}</Td>
                      <Td>€{cryptos.ath}</Td>
                      <Td>
                        {cryptos.price_change_percentage_24h < 0 ? (
                          <Red>
                            {cryptos.price_change_percentage_24h.toFixed(2)}%
                          </Red>
                        ) : (
                          <Green>
                            {cryptos.price_change_percentage_24h.toFixed(2)}%
                          </Green>
                        )}
                      </Td>
                      <td>
                        <Button
                          onClick={() => props.handlePortfolioClick(cryptos)}
                        >
                          Remove
                        </Button>
                      </td>
                    </Tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      )}
    </>
  );
};

export default PortfolioTable;
