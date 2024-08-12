import sequelize from "../database/config.js";
import { DataTypes } from "sequelize";

// criando tabela usuario
export const usuario = sequelize.define("Usuario", {
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

export const incidentComent = sequelize.define("Incident_Coment",{
    comment_id : {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    } ,
    incident_Id: {
        type: DataTypes.INTEGER,
        allowNull:false,
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

export const reductionsActions = sequelize.define("ReductionsActions",{
    action_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    } ,
    department_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    incident_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    action_date:{
        type:DataTypes.DATE,
        allowNull:false,
    },

    action_taken:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    effectiveness:{
        type:DataTypes.STRING,
        allowNull:false,
    },
})

export const incident_types = sequelize.define("Incident_types",{
    incident_type_id : {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    } ,

    Incident_type_name : {
        type: DataTypes.STRING,
        allowNull:false,
    } ,
    Incident_type_description :{
        type: DataTypes.STRING,
        allowNull:false,
     } ,
     Incident_type_category :{ 
        type: DataTypes.STRING,
        allowNull:false,
     }, 
     Incident_type_priority :{ 
        type: DataTypes.STRING,
        allowNull:false,
     }, 
     Incident_type_creation_Date :{
        type: DataTypes.DATE,
     },

     Incident_type_update_Date :{
        type: DataTypes.DATE,
     },

     Incident_type_status  :{
        type: DataTypes.STRING,
     }



   })

