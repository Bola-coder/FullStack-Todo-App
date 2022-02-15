import React from "react";
import "./../css/header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <h1>AGE TODO</h1>
        <form>
          <input type="search" placeholder="search a todo" />
          <button>Search</button>
        </form>
      </header>
    </React.Fragment>
  );
};

export default Header;
