import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.MYSQL_DB as string,
  process.env.MYSQL_USER as string,
  process.env.MYSQL_PASSWORD as string,
  {
    dialect: 'mysql',
    port: parseInt(process.env.MYSQL_PORT as string)
  }
);

export const sequelizeConnect = async () => {
  try {
    console.log("Conectando ao Mysql...");
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso!");
  }catch (error){
    console.log("Erro de conexão: ", error);
  }
};