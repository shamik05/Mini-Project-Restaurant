// dependencies
var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
var TableArray = require("./data/tabledata");

// setting up express app
var app = express();

// setting initial port 
var PORT = process.env.PORT || 7000;

// Router
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/home", function(req, res) {
res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Display API as JSON
app.get("/api/tables", function(req, res) {
    return res.json(TableArray);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitingArray);
});

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});

// let test = new TableArray("dina", "dina@example.com", "dina123", "000-000-000");
// console.log(test);
