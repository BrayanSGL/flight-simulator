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

//End point para filtar por medio de query los vielos con x estado
router.get("/", async (req, res) => {
  try {
    const { status } = req.query;
    const result = await connection.any(
      "SELECT * FROM fligths WHERE status = $1;",
      [status]
    );
    console.log("Vuelos de la base de datos:", result);
    res.send(result);
  } catch (error) {
    console.error("Error al obtener los vuelos de la base de datos:", error);
    res.status(500).send("Error al obtener los vuelos de la base de datos.");
  }
});

module.exports = router;

