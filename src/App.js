import "./App.css";
import React from "react";
import CryptoApi from "./pages/CryptoComponents/CryptoApi";
import { Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import News from "./pages/News";
import Portfolio from "./pages/CryptoComponents/Portfolio";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CryptoApi />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
