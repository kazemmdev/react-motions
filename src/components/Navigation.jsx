import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Projects</h1>
      </Link>
      <Link to="/toggle">Sample Toggle</Link>
      <Link to="/drag">Sample Drag</Link>
      <Link to="/mouse-parallax">Mouse Parallax</Link>
      <Link to="/card-flip">Card flip</Link>
      <Link to="/radio-group">Radio group</Link>
      <Link to="/lock">Lock</Link>
      <Link to="/share-to">ShareTo</Link>
    </nav>
  );
};

export default Navigation;
