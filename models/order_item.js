module.exports = function(sequelize, DataTypes){
    var Order_item = sequelize.define("Order_item", {
        item: DataTypes.STRING  //an item from the menu
    });

    Order_item.associate = function(models){
        Order_item.belongsTo(models.Order,{
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        Order_item.hasMany(models.Menu,{
            onDelete: "CASCADE"
        });
    }

    return Order_item;
}