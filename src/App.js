import "./App.css";
import React from "react";
import Crypto from "./components/Crypto/Crypto";
import { Routes, Route } from "react-router-dom";
import Kynnet from "./components/Kynnet";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="/Kynnet" element={<Kynnet />} />
      </Routes>
    </div>
  );
};

export default App;
