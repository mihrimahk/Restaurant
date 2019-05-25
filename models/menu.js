module.exports = function(sequelize, DataTypes){
    var Menu = sequelize.define("Menu", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
        photo: DataTypes.STRING
        // , tags: DataTypes.STRING // TODO: needs to be an array of tags
    });

    return Menu;
};

