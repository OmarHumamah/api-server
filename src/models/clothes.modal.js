"use strict";

const Clothes = (sequelize, DataTypes) =>
  sequelize.define("clothes", {
    pice: {
      type: DataTypes.STRING,
      allowNull: false
    },

    brand: {
      type: DataTypes.STRING,
    },
  });

  module.exports = Clothes;
