import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthOption from "../auth/authoptions";
const Header = () => {
  return (
    <header id="header">
      <Link to="/about">
        <h1 style={{ margin: 0 }}>click here to go home</h1>
      </Link>
      <AuthOption></AuthOption>
    </header>
  );
};

export default Header;
