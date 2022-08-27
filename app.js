require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const homeRouter = require("./routers/HomeRouter");
const FormRouter = require("./routers/FormRouter");

const port = process.env.PORT;

const app = express();

const username = process.env.USERSNAME;
const password = process.env.PASSWD;
const dbname = process.env.DBNAME;

const DB = `mongodb+srv://${username}:${password}@cluster0.rurv5.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose
  .connect(DB)
  .then((res) => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(Error, err.message);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/", homeRouter);
app.use("/form", FormRouter);

app.listen(port);
