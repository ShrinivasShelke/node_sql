const Sequelize=require("sequelize");

const sequelize=new Sequelize("new database","new user","password",{
    dialect:"mysql",
    host:"localhost"

})

module.exports=sequelize;