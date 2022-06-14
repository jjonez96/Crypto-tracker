import React from "react";
import { Heading, H1, H2, Div, HR, B, Button, Img } from "./WatchlistStyles";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import news from "../Home/assets/news.png";
const WatchlistTable = (props) => {
  return (
    <>
      <Heading>Watchlist</Heading>
      <ReactNotifications />
      {props.watchlist.length === 0 ? (
        <Div>
          <H1>No news in the watchlist</H1>
        </Div>
      ) : (
        <Div>
          {props.watchlist.map((news, i) => (
            <div key={i}>
              <H2>{news.title}</H2>
              <a href={news.url}>
                <B>Read more</B>
              </a>
              <div>
                <Button onClick={() => props.handleWatchlistClick(news)}>
                  Remove
                </Button>
              </div>

              <HR />
            </div>
          ))}
          <Img src={news} alt="news" />
        </Div>
      )}
    </>
  );
};

export default WatchlistTable;
