import { Sequelize } from "sequelize";
import connection from "../config/db.js";

import userModel from "../models/user.model.js";
import productModel from "./product.model.js";
import contactModel from "./contact.model.js";
import categoryModel from "./category.model.js";



try {
  await connection.authenticate();
  console.log("Connexion à la BDD OK");
} catch (error) {
  console.error("Probleme lors de la connexion à la BDD", error);
}

userModel(connection, Sequelize);
productModel(connection, Sequelize);
contactModel(connection, Sequelize);
categoryModel(connection, Sequelize);

const { User, Product, Contact, Category } = connection.models;


// Les relations




await connection.sync({ alter: false, force: false });
console.log("Synchro Ok ");

// export default connection.models
export { User, Product, Contact, Category };
