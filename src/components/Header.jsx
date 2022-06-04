import React from "react";
import { Link } from "react-router-dom";
import "./../css/header.css";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>TEX TODO</h1>
        </Link>
      </div>
      <div>
        <form>
          <input type="search" placeholder="search a todo" />
          <button className="search">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
