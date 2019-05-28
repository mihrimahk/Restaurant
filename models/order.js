module.exports = function(sequelize, DataTypes){
    var Order = sequelize.define("Order", {
        order_number: DataTypes.INTEGER,
        isFulfilled: DataTypes.BOOLEAN
        // order_type: DataTypes.INTEGER
    });

    Order.associate = function(models){
        
        Order.belongsTo(models.User,{
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        Order.belongsTo(models.Order_type,{
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        
        Order.hasMany(models.Order_item, {
            onDelete: "CASCADE"
        });

        Order.hasMany(models.Order_type, {
            onDelete: "CASCADE"
        });
    }

    return Order;
};