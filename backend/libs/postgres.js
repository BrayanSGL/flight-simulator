const { Client } = require("pg");
const { config } = require("../config/config");

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);
const HOST = config.db.host;
const PORT = config.db.port;
const DATABASE = config.db.database;

const CONNECTION = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

async function getConnection() {
  const client = new Client({
    connectionString: CONNECTION,
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
