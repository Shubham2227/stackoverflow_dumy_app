const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  routes = require("./routes");

// Enviornment Variables Setup
const PORT = process.env.PORT || 3000;

// Middleware Setup
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Routes
app.use("/questions", routes.pages_routes);
app.use("/login", routes.auth_routes);

// Wildcard Routes
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Welcome To StackOverflow Mock API</h1><h3>For Questions request at /questions</h3><h3>For Login request at /login</h3>"
    );
});
app.get("*", (req, res) => {
  res.status(404).json({ message: "Invalid URL" });
});

// Listner
app.listen(PORT, (req, res) => {
  console.log(`The nodeJS server is running on http://localhost:${PORT}`);
});
