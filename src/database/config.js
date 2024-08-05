import { Sequelize } from 'sequelize';

// criando estancia do sequelize para se conectar com o banco no mysql
const sequelize = new Sequelize("Cybershield", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

export default sequelize