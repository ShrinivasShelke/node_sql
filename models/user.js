const Sequelize=require("sequelize");
const sequelize=require("../utils/database");

const customer=sequelize.define("customer",{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true


    },
    name:{type:Sequelize.STRING,
        allowNull:false

    },
    email:{
        type:Sequelize.STRING,
        allowNull:false


    },
    mydate:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW



    }
})

module.exports=customer;
