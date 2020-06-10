import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/book")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
};
