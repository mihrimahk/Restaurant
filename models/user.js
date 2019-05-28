module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING
    });

    User.associate = function(models){
        
        User.belongsTo(models.Role, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        User.hasMany(models.Order, {
            onDelete: "CASCADE",
        });
    };

    return User;
};