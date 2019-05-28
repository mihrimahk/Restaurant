module.exports = function(sequelize, DataTypes){
    var Order_type = sequelize.define("Order_type", {
        name: DataTypes.STRING
    });

    Order_type.associate = function(models){
        
        Order_type.hasMany(models.Dish,{
            onDelete: "CASCADE"
        });
    }

    return Order_type;
}