// Dependencies
const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
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
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes go here
app.use(routes);

// Have our app listen after sequelize models are synced
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
