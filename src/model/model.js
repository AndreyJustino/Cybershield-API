import sequelize from "../database/config.js";
import { DataTypes } from "sequelize";

// criando tabela usuario
export const Cybershield = sequelize.define("Usuario", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export const IncidentComent = sequelize.define("Incident_Coment",{
    comment_id : {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    } ,
    incident_Id: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    comment:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    make:{
        type:DataTypes.DATE,
        allowNull:true
    },

    improvement:{
        type:DataTypes.DATE,
        allowNull:true
    }
   })