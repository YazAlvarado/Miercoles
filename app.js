const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use("/api", routes);

const server = app.listen(3000, () => console.log("Servidor en puerto 3000"));

module.exports = { app, server };
