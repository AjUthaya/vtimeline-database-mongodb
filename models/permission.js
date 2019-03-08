"use strict";

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (sequelize, dataTypes) => {
  let permission = sequelize.define(
    "permission",
    {
      id: {
        type: dataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4
      },
      title: {
        allowNull: false,
        type: dataTypes.STRING
      },
      type: {
        allowNull: false,
        type: dataTypes.STRING
      },
      key: {
        allowNull: false,
        type: dataTypes.STRING
      }
    },
    {
      paranoid: true,
      freezeTableName: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "permissions"
    }
  );

  permission.associate = function(models) {};

  return permission;
};
