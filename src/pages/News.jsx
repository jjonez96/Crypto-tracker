import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import { H2, Container, HR } from "./CryptoComponents/CryptoStyles";
import BackToTop from "../components/BackToTop";
import newsApi from "../config/newsApi";
const News = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
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
  console.log(news);

  const filterNews = news.filter((news) => {
    return news.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <Container>
        {isLoading && <p>Loading...</p>}
        {filterNews.map((news, i) => (
          <div className="center" key={i}>
            <H2>{news.title}</H2>

            <a href={news.url}>
              <img src="https://picsum.photos/200/300" alt="asd" />
            </a>
            <HR />
          </div>
        ))}

        <BackToTop />
      </Container>
    </>
  );
};

export default News;
