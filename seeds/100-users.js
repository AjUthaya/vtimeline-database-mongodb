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
          id: 1,
          firstname: "Test",
          lastname: "User",
          email: "app@test.com",
          password: "iforgot",
          verified: true
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
