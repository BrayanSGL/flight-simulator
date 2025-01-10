const express = require("express");
const db = require("pg-promise")();

const router = express.Router();

const connection = db({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres_user",
  password: "postgres_admin",
});

//End point para obtener los vuelos
router.get("/", async (req, res) => {
  try {
    const result = await connection.any("SELECT * FROM vuelos;");
    console.log("Vuelos de la base de datos:", result);
    res.send(result);
  } catch (error) {
    console.error("Error al obtener los vuelos de la base de datos:", error);
    res.status(500).send("Error al obtener los vuelos de la base de datos.");
  }
});

module.exports = router;

