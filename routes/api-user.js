var db = require("../models");

module.exports = function(app){

    // Create User
    app.post("/api/user", function(req, res){
        console.log(`***** USER: CREATE *****`);
        db.User.create(req.body)
        .then(function(data){
            console.log(data)
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
            res.status(500).end();
        });
    });

    // Read all User
    app.get("/api/user", function(req, res){
        console.log(`***** USER: READ ALL *****`);
        db.User.findAll()
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
    app.get("/api/user/:user_id", function(req, res){
        console.log(`***** USER: READ ONE *****`);
        db.User.findOne({where :{
            id: req.params.user_id
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

    // Update User
    app.put("/api/user/:user_id", function(req, res){
        console.log(`***** USER: UPDATE *****`);
        console.log(req.body);
        console.log(req.params);
        db.User.update(req.body, {
            where: {
                id: req.params.user_id
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
    app.delete("/api/user/:dish_id", function(req, res){
        console.log(`***** USER: DELETE *****`);
        db.User.destroy({
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