import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

// criando tabela usuario
export const usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const incidentComent = sequelize.define('Incident_Coment', {
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  incident_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  make: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  improvement: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

export const reductionsActions = sequelize.define('ReductionsActions', {
  action_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  incident_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  action_taken: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  effectiveness: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export const Incidents = sequelize.define('Incidents', {
  incidents_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  incident_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  presentation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  severity: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date_reported: {
    type: DataTypes.DATE,
  },
  damage_to_device: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  what_damage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
