const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//require("dotenv/config");

//const port = process.env.PORT || 4500;

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
//Post
//const postsRoute = require("./routes/posts");
//app.use("/posts", postsRoute);
var book = require("./routes/book");

//Contact
//const contactRoute = require("./routes/contacts");
//app.use("/contacts", contactRoute);
app.use("/api/book", book);
//ROUTES;
app.get("/", (req, res) => {
  res.send("This is Home Page 1");
});

//CONNECTION OPTION -1
mongoose
  .connect("mongodb://localhost:27017/mernloginregB", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("FCC-Backend2 App connected to DB!"))
  .catch((err) => console.error(err));

//Listen Option 1
app.listen(5000);
