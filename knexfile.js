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
      directory: "./src/database/migrations"
    }
  }
}

export default config;