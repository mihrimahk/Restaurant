module.exports = function(sequelize, DataTypes){
    var Order_item = sequelize.define("Order_item", {
        name: DataTypes.STRING,
        quantity: DataTypes.INTEGER
    });

    Order_item.associate = function(models){
        Order_item.belongsTo(models.Order,{
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        Order_item.hasMany(models.Dish,{
            onDelete: "CASCADE"
        });
    }

    return Order_item;
}