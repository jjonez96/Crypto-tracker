import React from "react";
import { H1, H2, Div, HR, B, Button, Img, P } from "./WatchlistStyles";
import news from "../Home/assets/news.png";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
const WatchlistTable = (props) => {
  return (
    <>
      <H1>Watchlist</H1>
      <HR style={{ width: "100%" }} />
      <ReactNotifications />
      {props.watchlist.length === 0 ? (
        <Div>
          <P>No news in the watchlist</P>
        </Div>
      ) : (
        <Div>
          <Img src={news} alt="news" />
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
        </Div>
      )}
    </>
  );
};

export default WatchlistTable;
