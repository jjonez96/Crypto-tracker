import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/NavBar";
import { H2, Container, HR } from "./CryptoStyles";
import BackToTop from "./BackToTop";

const News = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://crypto-news-live3.p.rapidapi.com/news", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": "95c938f007mshf0d1579551cfd6bp13df49jsncb7139af7d30",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("error", response.status);
          return;
        }
        response.json().then((news) => {
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
