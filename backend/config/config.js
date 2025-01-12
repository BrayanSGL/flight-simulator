require("dotenv").config(); 

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || "postgres_user",
    password: process.env.DB_PASSWORD || "postgres_admin",
    database: process.env.DB_NAME || "postgres",
  },
};

module.exports = { config };