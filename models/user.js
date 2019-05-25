module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING
    });

    User.associate = function(models){
        
        User.hasMany(models.Order, {
            onDelete: "CASCADE"
        });

        User.hasMany(models.Role,{
            onDelete: "CASCADE"
        });
    };

    return User;
};