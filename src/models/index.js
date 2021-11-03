"use strict";

require("dotenv").config();

const POSTGRES_URI =
  process.env.NODE_ENV === "test" ? "sqlite:memory" : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require("sequelize");

const Collection = require("./collection-class");

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const clothes = require("./clothes.modal");
const food = require("./food.modal");

const clothesModel = clothes(sequelize, DataTypes);
const foodModel = food(sequelize, DataTypes);

const clothesCollection = new Collection(clothesModel);
const foodCollection = new Collection(foodModel);

module.exports = {
  database: sequelize,
  clothesCollection: clothesCollection,
  foodCollection: foodCollection,
};
