module.exports = function (sequelize, DataTypes) {
    var gamePlay = sequelize.define("gamePlay", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, platform: {
            type: DataTypes.STRING,
            allowNull: false
        }, game_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, userText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mic: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    });
    return gamePlay;
};





