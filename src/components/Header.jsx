import React from "react";
import "./../css/header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>AGE TODO</h1>
        <input type="search" />
        <button>Search</button>
      </header>
    </React.Fragment>
  );
};

export default Header;
