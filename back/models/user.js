module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {

        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        }

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });

    User.associate = (db) => {
        db.User.hasMany(db.Post);
    };


    return User;

};