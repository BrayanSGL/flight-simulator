const express = require("express");
const db = require("pg-promise")();

const router = express.Router();

const connection = db({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres_user',
    password: 'postgres_admin'
  });

router.get("/", async (req, res) => {
  try {
    const result = await connection.any("SELECT * FROM users;");
    console.log("Usuarios de la base de datos:", result);
    res.send(result);
  } catch (error) {
    console.error("Error al obtener los usuarios de la base de datos:", error);
    res.status(500).send("Error al obtener los usuarios de la base de datos.");
  }
});

//endpoint para obtener un usuario por su id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await connection.any("SELECT * FROM users WHERE id = $1;", [
      id,
    ]);
    console.log("Usuario de la base de datos:", result);
    res.send(result);
  } catch (error) {
    console.error("Error al obtener el usuario de la base de datos:", error);
    res.status(500).send("Error al obtener el usuario de la base de datos.");
  }
});

//endpoint para obtener los vuelos de un usuario por su id
router.get("/:id/fligths", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await connection.any(
      "SELECT * FROM fligths WHERE user_id = $1;",
      [id]
    );
    console.log("Vuelos del usuario de la base de datos:", result);
    res.send(result);
  } catch (error) {
    console.error(
      "Error al obtener los vuelos del usuario de la base de datos:",
      error
    );
    res
      .status(500)
      .send("Error al obtener los vuelos del usuario de la base de datos.");
  }
});

module.exports = router;