import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Book from "./components2/Book";
// import Contact from "./components2/Contact";
// import Navbar from "./components2/Navbar";
// import About from "./components2/About";
// //import Home from "./components/Home";
// import BookList from "./components2/BookList";
// import AddBook from "./components2/AddBook";
// import PageDetail from "./components2/PageDetail";
// import Edit from "./components2/Edit";
// import { BookProvider } from "./components2/BookContext";

// axios.defaults.baseURL = "http://localhost:4000/api/book/";

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Book} />
            <Route path="/bookList" component={BookList} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/addBook" component={AddBook} />
            <Route path="/Edit/:id" component={Edit} />
            <Route path="/pageDetail" component={PageDetail} />
          </Switch>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
