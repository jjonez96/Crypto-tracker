import React, { useState, useEffect } from "react";
import { Store } from "react-notifications-component";
import newsApi from "../../config/newsApi";
import NewsTable from "./NewsTable";

import { db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [watchlist, setWatchlist] = useState([]);

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
  useEffect(() => {
    const newsWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (newsWatchlist) {
      setWatchlist(newsWatchlist);
    }
  }, []);
  const saveToLocalStorage = (items) => {
    localStorage.setItem("watchlist", JSON.stringify(items));
  };
  const addToWatchlist = (news) => {
    const newNewsList = [...watchlist, news];
    const unique = [...new Set(newNewsList)];
    setWatchlist(unique);
    saveToLocalStorage(unique);
    const saveToFirestore = (item) => {
      setDoc(doc(db, "watchlist", item.title), item);
    };
    saveToFirestore(news);
    Store.addNotification({
      title: `Article Added to watchlist`,
      type: "success",
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1000,
      },
    });
  };

  const filterNews = news.filter((news) => {
    return news.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <NewsTable
        filterNews={filterNews}
        isLoading={isLoading}
        search={search}
        setSearch={setSearch}
        handleWatchlistClick={addToWatchlist}
        btnState="Add to watchlist"
      />
    </>
  );
};

export default NewsPage;
