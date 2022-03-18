import React, { useState, useEffect } from "react";
import { H2, Div, HR, B, Img, Input } from "./NewsStyles";
import newsApi from "../../config/newsApi";
const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://crypto-news-live3.p.rapidapi.com/news", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": newsApi,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("error", response.status);
          return;
        }
        response.json().then((news) => {
          setIsLoading(false);
          setNews(news);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filterNews = news.filter((news) => {
    return news.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Div>
        <Input
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search news..."
        ></Input>
        {isLoading && <p>Loading...</p>}
        {filterNews.map((news, i) => (
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
              <br />
              <HR />
            </div>
          </div>
        ))}
      </Div>
    </>
  );
};

export default NewsPage;
