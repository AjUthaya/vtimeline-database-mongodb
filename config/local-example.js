module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "vtimeline_development",
    host: "127.0.0.1",
    port: "8889",
    dialect: "mysql",
    logging: true
  },
  test: {
    username: "root",
    password: "root",
    database: "vtimeline_test",
    host: "127.0.0.1",
    port: "8889",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "root",
    database: "vtimeline_production",
    host: "127.0.0.1",
    port: "8889",
    dialect: "mysql"
  }
};
