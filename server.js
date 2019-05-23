var express = require("express");
var PORT = process.env.PORT || 3000;

var app = express();


app.get("/", function(req, res){
    res.send("WELCOME TO THE RESTAURANT");
});

app.listen(PORT, function(){
    console.log(`The restaurant is open for service on ${PORT}`);
});