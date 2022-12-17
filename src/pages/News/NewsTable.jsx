import React from "react";
import { H2, Div, HR, B, Img, Input, Button, Desc } from "./NewsStyles";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const NewsTable = (props) => {
  return (
    <>
      <Div>
        <Input
          onChange={(event) => props.setSearch(event.target.value)}
          placeholder="Search news..."
        ></Input>
        {props.isLoading && <p>Loading...</p>}
        <ReactNotifications />
        {props.filterNews.map((news, i) => (
          <div className="center" key={i}>
            <H2>{news.title}</H2>
            <Desc>{news.description}</Desc>
            <a href={news.url}>
              <B>Read more</B>
              <br />
              <br />
              <Img
                src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80/"
                alt="picsum"
              />
            </a>
            <div>
              <Button onClick={() => props.handleWatchlistClick(news)}>
                {props.btnState}
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

export default NewsTable;
