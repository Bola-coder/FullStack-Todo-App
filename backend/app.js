const express = require("express");
const morgan = require("morgan");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api/v1/todos", todoRoutes);

module.exports = app;
