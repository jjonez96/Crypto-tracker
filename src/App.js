import React from "react";
import { Routes, Route } from "react-router-dom";
import CryptoPage from "./pages/CryptoComponents/CryptoPage";
import NewsPage from "./pages/NewsPage";
import PortfolioPage from "./pages/CryptoComponents/PortfolioPage";
import BackToTop from "./components/BackToTop";
import NavBar from "./components/Navbar/NavBar";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CryptoPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/PortfolioPage" element={<PortfolioPage />} />
        <Route path="/NewsPage" element={<NewsPage />} />
      </Routes>
      <BackToTop />
    </>
  );
};

export default App;
