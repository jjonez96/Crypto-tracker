import React from "react";
import { FaTimes } from "react-icons/fa";

import {
  Table,
  Container,
  Button,
  Red,
  Tr,
  Td,
  Th,
  Green,
  Img,
  H1,
  HR,
  P,
  Div,
  Imgdiv,
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
            <thead>
              <tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th>Symbol</Th>
                <Th>Price</Th>
                <Th>ATH</Th>
                <Th>Volume(24hrs)</Th>
              </tr>
            </thead>

            {props.portfolio.map((cryptos, id) => {
              return (
                <tbody key={id}>
                  <Tr>
                    <Td>{cryptos.market_cap_rank}</Td>
                    <Td>
                      <Imgdiv>
                        <Img src={cryptos.image} alt="logo" width="25px" />
                        {cryptos.name}
                      </Imgdiv>
                    </Td>
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
                        <FaTimes size={16} style={{ paddingTop: "3px" }} />
                      </Button>
                    </td>
                  </Tr>
                </tbody>
              );
            })}
          </Table>
        </Container>
      )}
    </>
  );
};

export default PortfolioTable;
