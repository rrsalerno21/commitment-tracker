// Dependencies
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
// const cors = require(cors);
require("dotenv").config();
// Sequelize models
const db = require("./models");

// Set a port
const PORT = process.env.PORT || 8080;

// Create an express instance
const app = express();

// Setup Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors);
app.use(express.static("public"));

// Routes go here
app.use(router);

// Have our app listen after sequelize models are synced
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
