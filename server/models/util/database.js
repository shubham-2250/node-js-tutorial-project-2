const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'sqlpassword', {dialect : 'mysql', host : 'localhost'});

const User = sequelize.define('user', {
    id: {
        type : Sequelize.DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey:true
    },
    email : {
        type: Sequelize.DataTypes.STRING,
        allowNull : false
    },
    //hashed
    password : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    imageUri : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
});
User.sync();
const Blog = sequelize.define('blog', {
    id: {
        type : Sequelize.DataTypes.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey:true
    },
    text : {
        type: Sequelize.DataTypes.STRING,
        allowNull : false
    },
    imageUri : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
});
Blog.sync();

module.exports = {sequelize};