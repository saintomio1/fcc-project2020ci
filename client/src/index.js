import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Route } from "react-router-dom";

// import "../node_modules/materialize-css/dist/css/materialize.min.css";
// import "../node_modules/materialize-css/dist/js/materialize.min.js";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";
// import Edit from "./components/Edit";
// import Create from "./components/Create";
// import Show from "./components/Show";

//import Navbar from "./components/Navbar";
//import About from "./components/About";
//import Home from "./components/home";
//import BookList from "./components/BookList";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
