var express = require("express");
var db = require("./models");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
require("./routes/api-dish")(app);

// Function that will populate database with dummy data
var seed = require("./seeder/seed");
app.get("/insert_dummy_data", function(req, res){
    seed();
    // Call databsae here and retrieve json
    const obj = db.Dish_type.findAll({
        include: [ db.Dish ]
    }).then(function(dishTypes){
        console.log('Dish Found is: ' + dishTypes.name);
        res.send(dishTypes);
        res.end()
    });
});

db.sequelize.sync({
    logging: console.log
})
.then(function(){
    app.listen(PORT, function(){
        console.log(`The restaurant is open for service on ${PORT}`);
    });
});