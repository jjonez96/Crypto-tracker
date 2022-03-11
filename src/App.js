import "./App.css";
import React from "react";
import CryptoApi from "./pages/CryptoComponents/CryptoApi";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import News from "./pages/News";
import Portfolio from "./pages/CryptoComponents/Portfolio";
import BackToTop from "./components/BackToTop";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<CryptoApi />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/News" element={<News />} />
      </Routes>
      <BackToTop />
    </>
  );
};

export default App;
