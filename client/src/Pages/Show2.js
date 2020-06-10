import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Show(props) {
  const [book, setBook] = useState({ title: "", description: "" });
  //const [data, setData] = useState({ title: "", description: "", id: null, });

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get("/api/book/" + id)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => console.error(err));
  });

  function deleteBook(id) {
    //console.log(res.data)
    axios
      .delete("/api/book/" + id)
      .then((res) => {
        console.log(res.data);
        const myData = book.filter((p) => p.bookId !== id);
        setBook(myData);
      })
      .catch((err) => console.error(err));
  }

  // componentDidMount() {
  //   axios.get("/api/book/" + this.props.match.params.id).then((res) => {
  //     this.setState({ book: res.data });
  //     console.log(this.state.book);
  //   });
  // }

  // delete(id) {
  //   console.log(id);
  //   axios.delete("/api/book/" + id).then((result) => {
  //     this.props.history.push("/");
  //   });
  // }

  // function Edit (id){
  //   const newData = {...data}
  //   newData[e.target.id] = e.target.value;
  //   setData(newData);

  // }

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
              ></span>{" "}
              Book List
            </Link>
          </h4>
          <dl>
            <h3 className="panel-title">{book.title}</h3>
            <dt>Description:</dt>
            <dd>{book.description}</dd>
            <dt>Publish Date:</dt>
            <dd>{book.published_year}</dd>
          </dl>
          <Link to={`/edit/${book._id}`} className="btn btn-success">
            Edit
          </Link>
          &nbsp;
          <button
            onClick={deleteBook.bind(book._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Show;
