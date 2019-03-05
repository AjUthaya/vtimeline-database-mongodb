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
  qa: {
    username: "root",
    password: "root",
    database: "vtimeline_qa",
    host: "127.0.0.1",
    port: "8889",
    dialect: "mysql"
  },
  staging: {
    username: "root",
    password: "root",
    database: "vtimeline_staging",
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
