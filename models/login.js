"use strict";

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (sequelize, dataTypes) => {
  let login = sequelize.define(
    "login",
    {
      id: {
        type: dataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4
      },
      ip_address: dataTypes.STRING,
      browser: dataTypes.STRING,
      device: dataTypes.STRING
    },
    {
      paranoid: true,
      freezeTableName: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "logins"
    }
  );

  login.associate = function(models) {};

  return login;
};
