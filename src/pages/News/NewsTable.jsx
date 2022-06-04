import React from "react";
import { H2, Div, HR, B, Img, Input } from "./NewsStyles";

const NewsTable = (props) => {
  return (
    <>
      <Div>
        <Input
          onChange={(event) => props.setSearch(event.target.value)}
          placeholder="Search news..."
        ></Input>
        {props.isLoading && <p>Loading...</p>}
        {props.filterNews.map((news, i) => (
          <div className="center" key={i}>
            <H2>{news.title}</H2>
            <a href={news.url}>
              <Img
                src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80/"
                alt="picsum"
              />
              <br />
              <B>Read more</B>
            </a>
            <div>
              <button onClick={() => props.handleWatchlistClick(news)}>
                add to watchlist
              </button>
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

export default NewsTable;
