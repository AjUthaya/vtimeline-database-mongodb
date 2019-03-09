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
      active: {
        type: dataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      revision: {
        type: dataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
      },
      img_url: dataTypes.STRING,
      title: {
        type: dataTypes.STRING,
        allowNull: false
      },
      description: dataTypes.STRING,
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
      updated_at: dataTypes.DATE,
      deleted_at: dataTypes.DATE
    });
  },

  down: (sequelize, dataTypes) => {
    return sequelize.dropTable(tableName);
  }
};
