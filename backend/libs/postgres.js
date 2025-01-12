const { Client } = require("pg");

async function getConnection() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres_user",
    password: "postgres_admin",
    database: "postgres",
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
