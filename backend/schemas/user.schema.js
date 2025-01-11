const joi = require("joi");
const { get } = require("../routes/users.router");

const id = joi.string().uuid();
const name = joi.string().min(3).max(30);
const email = joi.string().email();
const password = joi.string().min(8);

const createUserSchema = joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});
const updateUserSchema = joi.object({
  name: name,
  email: email,
  password: password,
});

getUserSchema = joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
