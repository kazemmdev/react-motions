import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./styles/index.css";

import Home from "./views/Home";
import Toggle from "./views/Toggle";
import Drag from "./views/Drag";
import MouseParallax from "./views/MouseParallax";
import CardFlip from "./views/CardFlip";

const App = () => {
  return (
    <BrowserRouter>
      <div className="home">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toggle" element={<Toggle />} />
            <Route path="/drag" element={<Drag />} />
            <Route path="/mouse-parallax" element={<MouseParallax />} />
            <Route path="/card-flip" element={<CardFlip />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
