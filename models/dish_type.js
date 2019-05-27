module.exports = function(sequelize, DataTypes){
    var Dish_type = sequelize.define("Dish_type", {
        name: DataTypes.STRING
    });

    Dish_type.associate = function(models){
        Dish_type.belongsTo(models.Dish,{
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Dish_type;
}