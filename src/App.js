import "./App.css";
import React from "react";
import Crypto from "./components/Crypto/Crypto";
import { Routes, Route } from "react-router-dom";
import Kynnet from "./components/Kynnet";
import News from "./components/Crypto/News";
import FavList from "./components/Crypto/FavList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="/Kynnet" element={<Kynnet />} />
        <Route path="/FavList" element={<FavList />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
