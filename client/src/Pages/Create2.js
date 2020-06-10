import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Create(props) {
  const [books, setBooks] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
    updated_date: "",
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
          <form onSubmit={(e) => Submit(e)}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <textarea
                className="form-control"
                type="text"
                name="title"
                value={data.title}
                onChange={(e) => handle(e)}
                placeholder="Title"
                cols="80"
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                type="text"
                name="description"
                value={data.description}
                onChange={(e) => handle(e)}
                placeholder="Description"
                cols="80"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="updated_date">Published Date:</label>
              <input
                type="date"
                className="form-control"
                name="updated_date"
                value={data.updated_date}
                onChange={(e) => handle(e)}
                placeholder="Published Year"
              />
            </div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
