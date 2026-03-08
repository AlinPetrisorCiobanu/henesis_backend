const path = require("path");
require("dotenv").config();

const config = {
    development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "",
      database: "henesis"
    },
    migrations: {
      directory: path.resolve(__dirname, "src/database/migrations")
    }
  },
  production: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: path.resolve(__dirname, "src/database/migrations")
    }
  }
};

export default config;