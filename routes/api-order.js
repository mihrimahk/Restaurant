var db = require("../models");

module.exports = function(app){
    
    //Create Order
    app.post("/api/order", function(req, res){
        console.log(`***** ORDER: CREATE *****`);
        // TODO: save the order
        res.send("ORDER: Create is under construction");

        // UserID
        // OrderTypeId
        
        // quantity, DishID , OrderTypeId
    });

    // Read all Orders
    app.get("/api/order", function(req, res){
        console.log(`***** ORDER: READ ALL *****`);
        // TODO: add an include to grab all order_items
        db.Order.findAll({})
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
    app.get("/api/order/:order_id", function(req, res){
        console.log(`***** ORDER: READ ONE *****`);
        db.Order.findOne({ where: {
                id: req.params.order_id
            },
            include: [db.Order_item]
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

    // Order Update
    app.put("/api/order/:order_id", function(req, res){
        console.log(`***** ORDER: UPDATE *****`)
        res.send(`"ORDER: UPDATE" is under construction`);
        // TODO:
        // expect to receive an 
    });

    //  Delete
    app.delete("/api/order/:order_id", function(req, res){
        console.log(`***** ORDER: DELETE *****`)
        db.Order.destroy({ 
            where : {
                id: req.params.order_id
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