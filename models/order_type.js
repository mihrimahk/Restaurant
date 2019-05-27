module.exports = function(sequelize, DataTypes){
    var Order_type = sequelize.define("Order_type", {
        name: DataTypes.STRING
    });

    Order_type.associate = function(models){
        
        Order_type.belongsTo(models.Order, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Order_type;
}

// name values: dine-in, takeout, delivery, pickup