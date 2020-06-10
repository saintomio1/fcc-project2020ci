import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Edit(props) {
  //const [book, setBooks] = useState([]);
  const [data, setData] = useState({ title: "", description: "" });

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get("/api/book/" + id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  });

  function Submit(e) {
    e.preventDefault();
    const id = props.match.params.id;
    axios
      .put("/api/book/" + id, data)
      .then((res) => {
        console.log(res.data);
        props.history.push("/show/" + props.match.params.id);
      })
      .catch((err) => console.error(err));
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
          <h3 className="panel-title">EDIT BOOK</h3>
        </div>
        <div className="panel-body">
          <h4>
            <Link to={`/show/${data._id}`}>
              <span
                className="glyphicon glyphicon-eye-open"
                aria-hidden="true"
              ></span>{" "}
              Book List
            </Link>
          </h4>
          <form onSubmit={(e) => Submit(e)}>
            <div className="form-group">
              <label for="title">Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={data.title}
                onChange={(e) => handle(e)}
                placeholder="Title"
              />
            </div>

            <div className="form-group">
              <label for="description">Description:</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={data.description}
                onChange={(e) => handle(e)}
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <label for="published_date">Published Date:</label>
              <input
                type="number"
                className="form-control"
                name="published_year"
                value={data.published_year}
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

export default Edit;

// componentDidMount() {
//   axios.get("/api/book/" + this.props.match.params.id).then((res) => {
//     this.setState({ book: res.data });
//     console.log(this.state.book);
//   });
// }

// onChange = (e) => {
//   const state = this.state.book;
//   state[e.target.name] = e.target.value;
//   this.setState({ book: state });
// };

// onSubmit = (e) => {
//   e.preventDefault();

//   const {
//     title,

//     description,
//     published_year,
//   } = this.state.book;

//   axios
//     .put("/api/book/" + this.props.match.params.id, {
//       title,

//       description,
//       published_year,
//     })
//     .then((result) => {
//       this.props.history.push("/show/" + this.props.match.params.id);
//     });
// };

// render() {
