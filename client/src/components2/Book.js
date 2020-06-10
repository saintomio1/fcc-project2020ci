import React, { useContext } from "react";
import { BookContext } from "./BookContext";
//import React from "react";
import { Link } from "react-router-dom";

const Book = ({ title, description, updated_date }) => {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <dl>
            <h3 className="panel-title">{title}</h3>
            <dt>Description:</dt>
            <dd>{description}</dd>
            <dt>Publish Date:</dt>
            <dd>{updated_date}</dd>
            <p className="panel-title">
              <Link to={`/pageDetail/${books.id}`}>More</Link>
            </p>
          </dl>
        </div>
      </div>
    </div>
  );
};
export default Book;
