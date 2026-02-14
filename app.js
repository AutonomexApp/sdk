const express = require("express");
const logger = require("./middleware/logger.middleware");
const routes = require("./routes/index.routes");

const app = express();

app.use(express.json());
app.use(logger);
app.use("/api", routes);

module.exports = app;
