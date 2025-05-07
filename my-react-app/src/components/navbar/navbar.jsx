import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";


function Navbar() {
  return (
    <nav>
      <Link to="/">Characters</Link>
      <SearchBar/>
    </nav>
  );
}

export default Navbar