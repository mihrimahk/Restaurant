module.exports = function(sequelize, DataTypes){
    var Dish = sequelize.define("Dish", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
        photo: DataTypes.STRING,
        tags: DataTypes.STRING
    });

    Dish.associate = function(models){
        Dish.hasMany(models.Dish_type, {
            onDelete: "CASCADE"
        });
    }

    return Dish;
};