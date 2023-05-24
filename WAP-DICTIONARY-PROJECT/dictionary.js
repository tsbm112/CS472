var express = require("express");
var cors = require('cors')
var bodyParser = require("body-parser"); // for parsing the body
var path = require("path"); // module used for working with path related stuff
var search = require("./word");

var app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(__dirname));

// This is the home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dict.html"));
});

// This is the search page
app.post("/search", function (req, res) {
  search.wordMeaning(res, req.body.searchTerm);
});

app.listen(8080, function () {
  console.log("Server is running on port 8080...");
});
