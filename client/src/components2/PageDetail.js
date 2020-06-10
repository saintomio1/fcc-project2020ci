import React, { useState, useEffect, useContext } from "react";
import { BookContext } from "./BookContext";
//import Book from "./Book";
import axios from "axios";
import { Link } from "react-router-dom";
//import BookList from "./BookList";

function PageDetail(props) {
  //const [book, setBook] = useState({ title: "", description: "" });
  const [books, setBooks] = useContext(BookContext);
  const [data, setData] = useState({ title: "", description: "" });

  useEffect((id) => {
    axios
      .get("/api/book/" + id)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  });

  // function Edit(id) {
  //   console.log(id);
  //   props.history.push(`/edit/${books.id}`);
  // }

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

  //   const display = books.map((item) => (
  //     <ul key={item.bookId}>
  //       <li>{item.title}</li>
  //       <li>{item.description}</li>
  //       <li>{item.updated_date}</li>
  //       <button onClick={() => Edit(books.id)} className="btn btn-danger">
  //         Edit Item
  //       </button>
  //       &nbsp;
  //       <button onClick={deleteBook.bind(books.id)} className="btn btn-danger">
  //         Delete
  //       </button>
  //     </ul>
  //   ));
  function Edit(id) {
    console.log(id);
    props.history.push("/Edit/" + id);
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
            onClick={deleteBook.bind(null, books.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => Edit(books.bookId)}
            className="btn btn-danger"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default PageDetail;
