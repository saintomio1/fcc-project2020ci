import React, { useState, createContext } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "Construction",
      description: "Building works",
      published_year: 2020,
    },

    {
      title: "Programing",
      description: "Full-stack programer",
      published_year: 2020,
    },

    {
      title: "AI",
      description: "Artificial Intelligence",
      published_year: 2020,
    },
    {
      title: "Machine Learning",
      description: "Machine learning is key in AI",
      published_year: 2020,
    },
  ]);

  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
};
