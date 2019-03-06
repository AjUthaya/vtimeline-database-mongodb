"use strict";

const tableName = "logins";

module.exports = {
  up: (sequelize, dataTypes) => {
    return sequelize.bulkInsert(
      {
        tableName: tableName
      },
      [
        {
          ip_address: dataTypes.literal("CURRENT_TIMESTAMP")
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
