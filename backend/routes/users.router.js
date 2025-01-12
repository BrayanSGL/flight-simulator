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

router.post("/", async (req, res) => {
    const body = req.body;
    const newUser = await usersService.create(body);
    res.status(201).json(newUser);
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const user = await usersService.update(id, body);
    res.status(201).json(user);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await usersService.delete(id);
    res.status(200).json({ message: "Usuario eliminado" });
});

module.exports = router;