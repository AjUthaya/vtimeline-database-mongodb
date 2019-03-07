"use strict";

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (sequelize, dataTypes) => {
  let user_event = sequelize.define(
    "user_event",
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
      tableName: "user_event"
    }
  );

  user_event.associate = function(models) {};

  return user_event;
};
