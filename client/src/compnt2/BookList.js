import React, { useState, useContext } from "react";
import Book from "./Book";
import { BookContext } from "./BookContext";

const BookList = () => {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div>
      {books.map((book) => (
        <Book
          title={book.title}
          description={book.description}
          published_year={book.published_year}
          key={book.id}
        />
      ))}
    </div>
  );
};

export default BookList;
