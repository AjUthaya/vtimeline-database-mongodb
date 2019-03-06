"use strict";

const tableName = "events";

module.exports = {
  up: (sequelize, dataTypes) => {
    return sequelize.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: dataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        defaultValue: dataTypes.INTEGER
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
    });
  },

  down: (sequelize, dataTypes) => {
    return sequelize.dropTable(tableName);
  }
};
