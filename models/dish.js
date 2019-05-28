
module.exports = function(sequelize, DataTypes){
    var Dish = sequelize.define("Dish", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL(6, 2),
        photo: DataTypes.STRING
    });

    Dish.associate = function(models){
        
        Dish.belongsTo(models.Dish_type, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Dish;
};