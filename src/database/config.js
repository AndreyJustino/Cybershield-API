import { Sequelize } from 'sequelize';
import dotenv from "dotenv"

dotenv.config()

// criando estancia do sequelize para se conectar com o banco no mysql
const sequelize = new Sequelize(process.env.NAME_BANK, 
  process.env.USER_BANK, 
  process.env.PASSWORD_BANK, {
    dialect: "mysql",
    host: process.env.HOST_BANK,
    port: process.env.PORT_BANK,
});

export default sequelize