import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import BookList from "./components/BookList";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
//import PageDetail from "./components/PageDetail";
import Edit from "./components/Edit";
//import { BookProvider } from "./components/BookContext";

// axios.defaults.baseURL = "http://localhost:4000/api/book/";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Book} />
          <Route path="/home" component={Home} />
          <Route path="/bookList" component={BookList} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/Edit/:id" component={Edit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
