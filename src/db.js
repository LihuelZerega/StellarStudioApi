require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const SoldProdcutModel = require("./models/SoldProductModel");

const StellarStudioSoldProdcutModel = SoldProdcutModel(sequelize);

sequelize.sync();

module.exports = {
  sequelize,
  StellarStudioSoldProdcutModel,
};