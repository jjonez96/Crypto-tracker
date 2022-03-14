import React, { useState, useEffect } from "react";
import { H2, Container, HR, B } from "./CryptoComponents/CryptoStyles";
import newsApi from "../config/newsApi";
const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      <Container>
        {isLoading && <p>Loading...</p>}
        {news.map((news, i) => (
          <div className="center" key={i}>
            <H2>{news.title}</H2>
            <a href={news.url}>
              <img src="https://picsum.photos/200/300" alt="picsum" />
              <br />
              <B>Read more</B>
            </a>
            <div>
              <br />
              <HR />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default News;
