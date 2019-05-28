module.exports = function(sequelize, DataTypes){
    var Order_item = sequelize.define("Order_item", {
        quantity: DataTypes.INTEGER
    });

    Order_item.associate = function(models){
        
        Order_item.belongsTo(models.Order,{
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        Order_item.belongsTo(models.Dish,{
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

    }

    return Order_item;
}