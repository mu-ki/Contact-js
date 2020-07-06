var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var routes = require("./route");
const pg = require("pg");
var app = express();
const config = {
  host: "localhost",
  user: "postgres",
  password: "1111",
  database: "contact",
  port: 5432,
  ssl: false
};
const postsql = new pg.Client(config);
postsql.connect(err => {
  if (err) throw err;
  else console.log("Database Connected!!");
});
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
