import React from "react";
import "./left-nav-style.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import samples from "../assets/sample-list";
function LeftSideNav() {
  return (
    <div className="item-container">
      {samples.map((sample, index) => {
        return (
          <Link
            key={index}
            className="item"
            to={sample.path}
            style={{ textDecoration: "none", color: "black" }}
          >
            {sample.name}
          </Link>
        );
      })}
    </div>
  );
}

export default LeftSideNav;
