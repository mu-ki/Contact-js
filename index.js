var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var routes = require("./route");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "*");
  return next();
});
app.use("/", routes);
module.exports = app;
const PORT = 8080;
var listener = http.createServer(app);
var listener = app.listen(PORT, function() {
  console.log("Server Started on port " + listener.address().port);
});
