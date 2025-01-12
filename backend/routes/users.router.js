const express = require("express");
// const db = require("pg-promise")();
const UsersService = require("../services/users.service");
const validatorHandler = require("../middlewares/validator.handler");
// const { createUserSchema, updateUserSchema, getUserSchema } = require("../schemas/user.schema");
const router = express.Router();
const usersService = new UsersService();


router.get("/", async (req, res, next) => {
  try {
    const users = await usersService.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

//endpoint para obtener un usuario por su id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await usersService.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

//endpoint para obtener los vuelos de un usuario por su id
router.get("/:id/fligths", async (req, res, next) => {
  try {
    const { id } = req.params;
    const userFligths = await usersService.findFligths(id);
    res.json(userFligths);
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