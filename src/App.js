import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Toggle from "./views/Toggle";

import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="home">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toggle" element={<Toggle />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
