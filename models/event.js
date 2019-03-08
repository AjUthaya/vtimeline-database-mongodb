"use strict";

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (sequelize, dataTypes) => {
  let event = sequelize.define(
    "event",
    {
      id: {
        type: dataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: dataTypes.UUIDV4
      },
      revision: {
        type: dataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
      },
      img_url: {
        type: dataTypes.STRING,
        allowNull: true
      },
      title: {
        type: dataTypes.STRING,
        allowNull: false
      },
      description: {
        type: dataTypes.STRING,
        allowNull: true
      },
      start_date: {
        type: dataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: dataTypes.DATE,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: dataTypes.DATE,
        defaultValue: dataTypes.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        allowNull: true,
        type: dataTypes.DATE
      },
      deleted_at: {
        allowNull: true,
        type: dataTypes.DATE
      }
    },
    {
      paranoid: true,
      freezeTableName: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      tableName: "events"
    }
  );

  event.associate = function(models) {};

  return event;
};
