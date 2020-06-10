import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "./BookContext";

export default function Navbar() {
  const [books, setBooks] = useContext(BookContext);

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            FCC Context App: {books.length}
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Book List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
