"use strict";
const express = require("express");
const path = require("path");
const index = "./routes/index";
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = (module.exports = express());
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
require("./database");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Para saber donde estan las vistas
app.set("views", path.join(__dirname, "views"));

app.use(express.static(__dirname + "controllers"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/", require(index));