import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Projects</h1>
      </Link>
      <Link to="/toggle">Somple Toggle</Link>
      <Link to="/drag">Somple Drag</Link>
    </nav>
  );
};

export default Navigation;
