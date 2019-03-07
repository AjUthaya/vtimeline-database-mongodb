"use strict";

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (sequelize, dataTypes) => {
  let user_login = sequelize.define(
    "user_login",
    {
      id: {
        type: dataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4
      }
    },
    {
      paranoid: true,
      freezeTableName: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "user_login"
    }
  );

  user_login.associate = function(models) {};

  return user_login;
};
