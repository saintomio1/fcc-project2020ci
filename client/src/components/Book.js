import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Book(props) {
  const [book, setBook] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("/api/book")
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function Submit(e) {
    e.preventDefault();
    axios.post("/api/book", data).then((res) => {
      console.log(res.data);
      const mydata = [...book, res.data];
      setBook(mydata);
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

  const DislayBooks = book.map((book) => (
    <div>
      <ul key={book.bookId}>
        <h4>
          <li>title:{book.title}</li>
        </h4>
        <li>description:{book.description}</li>
        <p>Date:{book.updated_date}</p>
      </ul>
      <button className="btn btn-primary">Update</button>
      &nbsp;
      <button className="btn btn-primary">Delete</button>
    </div>
  ));

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

        {DislayBooks}

        {/* <button
          onClick={() => Edit(book.bookId)}
          className="btn btn-danger"
        ></button> */}
      </div>
    </div>
  );
}

export default Book;
