import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import BookList from "./BookList";

const Home = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div>
      <BookList />
    </div>
  );
};
export default Home;
