"use strict";
const mongoose = require("mongoose");
const app = require("./server");
// const { mongodb } = require("./keys");

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("¡Conexión exitosa!");
  app.listen(app.get("port"), () => {
    console.log("Servidor escuchando en", app.get("port"));
  });
});
