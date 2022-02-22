import "./App.css";
import React from "react";
import Crypto from "./components/Crypto/Crypto";
import { Routes, Route } from "react-router-dom";
import Kynnet from "./components/Kynnet";
import News from "./components/Crypto/News";
import FollowList from "./components/Crypto/FollowList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="/Kynnet" element={<Kynnet />} />
        <Route path="/FollowList" element={<FollowList />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
