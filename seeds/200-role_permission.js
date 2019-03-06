"use strict";

const tableName = "role_permission";

module.exports = {
  up: (sequelize, dataTypes) => {
    return sequelize.bulkInsert(
      {
        tableName: tableName
      },
      [
        {
          role_id: 1,
          permission_id: 1
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
