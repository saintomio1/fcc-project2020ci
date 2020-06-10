import React, { useState, useEffect, useContext } from "react";
import { BookContext } from "./BookContext";
//import Book from "./Book";
import axios from "axios";
import { Link } from "react-router-dom";

function BookDetails(props) {
  //const [book, setBook] = useState({ title: "", description: "" });
  const [books, setBooks] = useContext(BookContext);
  //const [data, setData] = useState({ title: "", description: "", id: null });

  useEffect(() => {
    axios
      .get("/api/book/" + props.match.params.id)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  });

  function deleteBook(id) {
    //console.log(res.data)
    axios
      .delete("/api/book" + id)
      .then((res) => {
        console.log(res.data);
        const myData = books.filter((p) => p.bookId !== id);
        setBooks(myData);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Book Order</h3>
        </div>
        <div className="panel-body">
          <h4>
            <Link to="/">
              <span
                className="glyphicon glyphicon-th-list"
                aria-hidden="true"
              ></span>
              Book List
            </Link>
          </h4>
          <dl>
            <h3 className="panel-title">{books.title}</h3>
            <dt>Description:</dt>
            <dd>{books.description}</dd>
            <dt>Publish Date:</dt>
            <dd>{books.updated_date}</dd>
          </dl>
          <Link to={`/edit/${books.id}`} className="btn btn-success">
            Edit
          </Link>
          &nbsp;
          <button
            onClick={deleteBook.bind(books.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
