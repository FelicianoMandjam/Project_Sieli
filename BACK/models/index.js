import { Sequelize } from "sequelize";
// J'import les models
import userModel from "../models/user.model.js";
import productModel from "./product.model.js";
import { env } from "../config.js";

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

try {
  await connection.authenticate();
  console.log("Connexion à la BDD OK");
} catch (error) {
  console.error("Probleme lors de la connexion à la BDD", error);
}

userModel(connection, Sequelize);
productModel(connection, Sequelize);

const { User , Product } = connection.models;

await connection.sync({ alter: true, force: false });
console.log('Synchro Ok ')

// export default connection.models
export {User , Product}
