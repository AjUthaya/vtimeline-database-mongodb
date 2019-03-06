"use strict";

const tableName = "role_permission";

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
      role_id: {
        allowNull: false,
        type: dataTypes.INTEGER
      },
      permission_id: {
        allowNull: false,
        type: dataTypes.INTEGER
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
