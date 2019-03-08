"use strict";

const tableName = "meta";

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
      key: {
        allowNull: false,
        type: dataTypes.STRING
      },
      value: {
        allowNull: false,
        type: dataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: dataTypes.DATE,
        defaultValue: dataTypes.literal("CURRENT_TIMESTAMP")
      },
      updated_at: dataTypes.DATE,
      deleted_at: dataTypes.DATE
    });
  },

  down: (sequelize, dataTypes) => {
    return sequelize.dropTable(tableName);
  }
};
