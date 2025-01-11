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

router.get("/", async (req, res, next) => {
  try {
    const result = await connection.any("SELECT * FROM usuarios;");
    console.log("Usuarios de la base de datos:", result);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

//endpoint para obtener un usuario por su id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await connection.any("SELECT * FROM usuarios WHERE id = $1;", [
      id,
    ]);
    console.log("Usuario de la base de datos:", result);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

//endpoint para obtener los vuelos de un usuario por su id
router.get("/:id/fligths", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await connection.any(
      "SELECT * FROM vuelos WHERE user_id = $1;",
      [id]
    );
    console.log("Vuelos del usuario de la base de datos:", result);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
    const body = req.body;
    res.json({
        message: "Usuario creado",
        body,
    });
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: "Usuario actualizado",
        id,
        body,
    });
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Usuario eliminado",
        id,
    });
});

module.exports = router;