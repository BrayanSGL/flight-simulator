const usersRouter = require("./users.router");
const fligthsRouter = require("./fligths.router");
const express = require("express");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", usersRouter);
  router.use("/fligths", fligthsRouter);
}

module.exports = routerApi;
