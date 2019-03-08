"use strict";

const tableName = "users";

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
      firstname: {
        allowNull: false,
        type: dataTypes.STRING
      },
      lastname: {
        allowNull: false,
        type: dataTypes.STRING
      },
      email: {
        allowNull: false,
        type: dataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: dataTypes.STRING
      },
      verified: {
        allowNull: false,
        type: dataTypes.BOOLEAN,
        defaultValue: 0
      },
      verification_string: dataTypes.STRING,
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
