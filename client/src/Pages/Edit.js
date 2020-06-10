import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
    };
  }

  componentDidMount() {
    axios.get("/api/book/" + this.props.match.params.id).then((res) => {
      this.setState({ book: res.data });
      console.log(this.state.book);
    });
  }

  onChange = (e) => {
    const state = this.state.book;
    state[e.target.name] = e.target.value;
    this.setState({ book: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, published_year } = this.state.book;

    axios
      .put("/api/book/" + this.props.match.params.id, {
        title,
        description,
        published_year,
      })
      .then((result) => {
        this.props.history.push("/show/" + this.props.match.params.id);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">EDIT BOOK</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to={`/show/${this.state.book._id}`}>
                <span
                  className="glyphicon glyphicon-eye-open"
                  aria-hidden="true"
                ></span>{" "}
                Book List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={this.state.book.title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>

              <div className="form-group">
                <label for="description">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={this.state.book.description}
                  onChange={this.onChange}
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label for="published_date">Published Date:</label>
                <input
                  type="number"
                  className="form-control"
                  name="published_year"
                  value={this.state.book.published_year}
                  onChange={this.onChange}
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
}

export default Edit;
