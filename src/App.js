import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./styles/index.css";

import Home from "./views/Home";
import Toggle from "./views/Toggle";
import Drag from "./views/Drag";
import MouseParallax from "./views/MouseParallax";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
