const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres_user",
  password: "postgres_admin",
  database: "postgres",
});

module.exports = pool;
