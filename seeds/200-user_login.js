"use strict";

const tableName = "user_login";

module.exports = {
  up: (sequelize, dataTypes) => {
    return sequelize.bulkInsert(
      {
        tableName: tableName
      },
      [
        {
          user_id: 1,
          login_id: 1
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
