var db = require("../models");

module.exports = function(app){

    // Create Dish
    app.post("/api/dish", function(req, res){
        console.log(`DISH: CREATE`);
        db.Dish.create(req.body)
        .then(function(data){
            console.log(data)
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
            res.status(500).end();
        });
    });

    // Read all Dishes
    app.get("/api/dish", function(req, res){
        console.log(`DISH: READ ALL`);
        db.Dish.findAll()
        .then(function(data){
            console.log(data);
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
            res.status(500).end();
        });
    });

    // Read One
    app.get("/api/dish/:dish_id", function(req, res){
        console.log(`DISH: READ ONE`);
        db.Dish.findOne({where :{
            id: req.params.dish_id
        }})
        .then(function(data){
            console.log(data);
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
            res.status(404).end();
        });
    });

    // Update Dish
    app.put("/api/dish/:dish_id", function(req, res){
        console.log(`DISH: UPDATE`);
        console.log(req.body);
        console.log(req.params);
        db.Dish.update(req.body, {
            where: {
                id: req.params.dish_id
            }
        })
        .then(function(data){
            console.log(data);
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
            res.status(500).end();
        });

    });

    //DELETE
    app.delete("/api/dish/:dish_id", function(req, res){
        console.log(`DISH: DELETE`);
        db.Dish.destroy({
            where: {
                id: req.params.dish_id
            }
        })
        .then(function(data){
            console.log(data);
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
            res.status(404).end();
        });
    });
}