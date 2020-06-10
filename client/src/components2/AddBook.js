import React, { useState, useContext } from "react";
import { BookContext } from "./BookContext";
import axios from "axios";
import { Link } from "react-router-dom";

function AddBook(props) {
  const [books, setBooks] = useContext(BookContext);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  function Submit(e) {
    e.preventDefault();
    axios.post("/api/book", data).then((res) => {
      console.log(res.data);
      const mydata = [...books, res.data];
      setBooks(mydata);
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  // function Edit(id) {
  //   console.log(id);
  //   props.history.push("/Edit/" + id);
  // }

  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">ADD BOOK</h3>
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
          <form onSubmit={Submit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={data.title}
                onChange={(e) => handle(e)}
                placeholder="Title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Description:</label>
              <input
                type="text"
                className="form-control"
                name="description"
                id="description"
                value={data.description}
                onChange={(e) => handle(e)}
                placeholder="description"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {/* <button
          onClick={() => Edit(book.bookId)}
          className="btn btn-danger"
        ></button> */}
      </div>
    </div>
  );
}

export default AddBook;
