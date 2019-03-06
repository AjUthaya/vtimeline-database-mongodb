"use strict";

const tableName = "users";

module.exports = {
  up: (sequelize, dataTypes) => {
    return sequelize.bulkInsert(
      {
        tableName: tableName
      },
      [
        {
          firstname: "test",
          lastname: "test",
          email: "test",
          password: "test"
        }
      ],
      {}
    );
  },

  down: (sequelize, dataTypes) => {
    return sequelize.bulkDelete(
      {
        tableName: tableName
      },
      null,
      {}
    );
  }
};
