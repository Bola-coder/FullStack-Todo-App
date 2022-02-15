// const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con);
    console.log("DB connected successfully");
  })
  .catch((err) => console.log("Error occured", err));

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
