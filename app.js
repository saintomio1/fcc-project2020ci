const express = require("express");
const cors = require("cors");
//const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");

const port = process.env.PORT || 4500;

//app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() =>
    console.log("MongoDB Connection connection established successfully")
  )
  .catch((err) => console.log(err));

var book = require("./routes/book");

app.use("/api/book", book);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
