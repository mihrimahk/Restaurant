var express = require("express");
var db = require("./models")
var PORT = process.env.PORT || 3000;

var app = express();

app.get("/", function(req, res){
    res.send("WELCOME TO THE RESTAURANT");
});

app.post("/api/dish/add", function(req, res){
    res.send("You tried to add a dish")
});

app.listen(PORT, function(){
    console.log(`The restaurant is open for service on ${PORT}`);
});