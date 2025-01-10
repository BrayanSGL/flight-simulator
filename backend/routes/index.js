const usersRouter = require("./users.router");
const fligthsRouter = require("./fligths.router");

function routerApi(app) {
  app.use("/users", usersRouter);
  app.use("/fligths", fligthsRouter);
}

module.exports = routerApi;
