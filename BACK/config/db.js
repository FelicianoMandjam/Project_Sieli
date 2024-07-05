import { env } from "./env.js";
import { Sequelize } from "sequelize";

// Connecion a la BDD SQL
const connection = new Sequelize(
  env.DATABASE_NAME, // Nom de la DB
  env.DATABASE_USER, // Identifiant DB
  env.DATABASE_PASSWORD, // Password DB
  {
    host: env.DATABASE_URI, // URL de mySQL
    dialect: env.DATABASE_TYPE,
    dialectOptions: {
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    },
  }
);

export default connection


