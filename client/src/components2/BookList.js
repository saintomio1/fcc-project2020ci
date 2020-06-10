import React, { useContext } from "react";
import Book from "./Book";
import { BookContext } from "./BookContext";
import { Link } from "react-router-dom";

const BookList = (props) => {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div>
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Book Order</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/addBook">
                <span
                  className="glyphicon glyphicon-th-list"
                  aria-hidden="true"
                ></span>
                Add Book
              </Link>
            </h4>
          </div>
        </div>
      </div>

      {books.map((book) => (
        <Book
          title={book.title}
          description={book.description}
          updated_date={book.updated_date}
          key={book.id}
        />
      ))}
    </div>
  );
};

export default BookList;
