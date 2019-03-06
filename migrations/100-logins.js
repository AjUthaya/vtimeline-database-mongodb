"use strict";

const tableName = "logins";

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
      ip_address: {
        type: dataTypes.STRING,
        allowNull: false
      },
      browser: {
        type: dataTypes.STRING,
        allowNull: true
      },
      device: {
        type: dataTypes.STRING,
        allowNull: true
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
