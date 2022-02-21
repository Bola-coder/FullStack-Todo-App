import React from "react";
import { Link } from "react-router-dom";
import "./../css/header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>AGE TODO</h1>
      </Link>
      <form>
        <input type="search" placeholder="search a todo" />
        <button className="search">Search</button>
      </form>
    </header>
  );
};

export default Header;
