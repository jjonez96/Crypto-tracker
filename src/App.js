import React from "react";
import { Routes, Route } from "react-router-dom";
import CryptoPage from "./pages/CryptoComponents/CryptoPage";
import NewsPage from "./pages/News/NewsPage";
import LoginPage from "./pages/Login/LoginPage";
import BackToTop from "./components/BackToTop";
import NavBar from "./components/Navbar/NavBar";
import "./App.css";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CryptoPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/NewsPage" element={<NewsPage />} />
      </Routes>
      <BackToTop />
    </>
  );
};

export default App;
