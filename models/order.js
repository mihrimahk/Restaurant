module.exports = function(sequelize, DataTypes){
    var Order = sequelize.define("Order", {
        // order_number: DataTypes.INTEGER,
        isFulfilled: DataTypes.BOOLEAN
    });

    Order.associate = function(models){
        
        Order.belongsTo(models.User,{
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        
        Order.hasMany(models.Order_item, {
            onDelete: "CASCADE"
        });
    }

    return Order;
};