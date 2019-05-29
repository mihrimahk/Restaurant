var db = require("../models");

module.exports = function(app){

    // Create Order_item
    app.post("/api/order_item", function(req, res){
        console.log(`***** ORDER_ITEM: CREATE *****`);
        db.Order_item.create(req.body)
        .then(function(data){
            console.log(data)
            res.json(data);
        })
        .catch(function(err){
            console.log(err);
            res.status(500).end();
        });
    });

    // Read all Order_item
    app.get("/api/order_item", function(req, res){
        console.log(`***** ORDER_ITEM: READ ALL *****`);
        db.Order_item.findAll()
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
    app.get("/api/order_item/:order_item_id", function(req, res){
        console.log(`***** ORDER_ITEM: READ ONE *****`);
        db.Order_item.findOne({where :{
            id: req.params.order_item_id
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

    // Update Order_item
    app.put("/api/order_item/:order_item_id", function(req, res){
        console.log(`***** ORDER_ITEM: UPDATE *****`);
        console.log(req.body);
        console.log(req.params);
        db.Order_item.update(req.body, {
            where: {
                id: req.params.order_item_id
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
    app.delete("/api/order_item/:order_item_id", function(req, res){
        console.log(`***** ORDER_ITEM: DELETE *****`);
        db.Order_item.destroy({
            where: {
                id: req.params.order_item_id
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