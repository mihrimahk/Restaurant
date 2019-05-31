var db = require("../models");

module.exports = function(app){
    
    //Create Order
    app.post("/api/order", function(req, res){
        console.log(`***** ORDER: CREATE *****`);

        // Create a new Order
        db.Order.create({
            UserId: req.body.UserId,
            isFulfilled: false
        })
        .then(function(data){
            
            // create individual order_item entries in the db
            req.body.Order_items.forEach(function(item){
                item.OrderId = data.id;
                console.log(data.id);
                console.log(item);

                db.Order_item.create(item)
                .then(function(data){
                    console.log(data)
                })
                .catch(function(err){
                    console.log(err);
                });
            });

            // redirect to return the order 
            res.redirect("/api/order/" + data.id);
        })
        .catch(function(err){
            console.log(err);
            res.status(500).end();
        });

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