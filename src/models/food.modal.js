"use strict";

const Food = (sequelize, DataTypes) =>
  sequelize.define("food", {
    meal: {
      type: DataTypes.STRING,
      allowNull: false
    },

    calories: {
      type: DataTypes.STRING,
    },
  });

  module.exports = Food;