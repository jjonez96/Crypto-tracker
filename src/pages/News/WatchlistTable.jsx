import React from "react";
import { H2, Div, HR, B, Button } from "./NewsStyles";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const WatchlistTable = (props) => {
  return (
    <>
      <Div>
        <ReactNotifications />
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

              <br />
              <br />
              <HR />
            </div>
          </div>
        ))}
      </Div>
    </>
  );
};

export default WatchlistTable;
