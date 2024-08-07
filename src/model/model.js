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


   
export const Incident_types = sequelize.define("Incident_types",{
    incident_type_id : {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    } ,

    Incident_type_name : {
        type: DataTypes.VARCHAR,
        primaryKey:false,
    } ,
    Incident_type_description :{
        type: DataTypes.TEXT,
     } ,
     Incident_type_category :{ 
        type: DataTypes.VARCHAR,
     }, 
     Incident_type_priority :{ 
        type: DataTypes.VARCHAR,
     }, 
     Incident_type_creation_Date :{
        type: DataTypes.DATETIME,
     },

     Incident_type_update_Date :{
        type: DataTypes.DATETIME,
     },

     Incident_type_status  :{
        type: DataTypes.VARCHAR,
     }



   })


