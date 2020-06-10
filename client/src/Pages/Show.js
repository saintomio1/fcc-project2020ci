import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Show extends Component {
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

  delete(id) {
    console.log(id);
    axios.delete("/api/book/" + id).then((result) => {
      this.props.history.push("/");
    });
  }

  render() {
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
              <h3 className="panel-title">{this.state.book.title}</h3>
              <dt>Description:</dt>
              <dd>{this.state.book.description}</dd>
              <dt>Publish Date:</dt>
              <dd>{this.state.book.published_year}</dd>
            </dl>
            <Link
              to={`/edit/${this.state.book._id}`}
              className="btn btn-success"
            >
              Edit
            </Link>
            &nbsp;
            <button
              onClick={this.delete.bind(this, this.state.book._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
