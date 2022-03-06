import "./App.css";
import React from "react";
import Crypto from "./components/Crypto/Crypto";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import News from "./components/Crypto/News";
import Portfolio from "./components/Crypto/Portfolio";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
