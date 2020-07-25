// dependencies
var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
// var TableArray = require("./data/tabledata");

let reservations = [];
let waitingArray = [];

// setting up express app
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitingArray);
});

app.get("/api/clear", function(req, res) {
    reservations.length = 0;
    waitingArray.length = 0;
    res.sendFile(path.join(__dirname, "reserve.html"));
    ;
  });

app.post("/api/tables", function(req, res){
    // server will respond to request and let customers know if they have tables or not
    // sends 'true' if table is available
    // console.log(newReservation);
    // res.json(newReservation);
         if(reservations.length < 5){
            reservations.push(req.body);
            res.json(true);
        }
        else {
            // should be inserted onto waitlist array
            waitingArray.push(req.body);
            res.json(false);
        }
    // });
});

// app.delete("/clear", function(){
//     reservations = [];
//     waitingArray = [];    
// })

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});

// let test = new TableArray("dina", "dina@example.com", "dina123", "000-000-000");
// console.log(test);
