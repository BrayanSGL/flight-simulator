const express = require("express");
const routerApi = require("./routes");
const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/error.handler")

const db = require("pg-promise")();

const app = express();
const port = 3000;

app.use(express.json());

// Configuración de la conexión
const connection = db({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres_user",
  password: "postgres_admin",
});

app.get("/", async (req, res) => {
  try {
    // Probar la conexión con la base de datos
    const result = await connection.any("SELECT NOW()");
    console.log(
      "Conexión con la base de datos establecida correctamente:",
      result
    );
    res.send("Conexión con la base de datos establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    res.status(500).send("Error al conectar con la base de datos.");
  }
});

//mostras las tablas de la base de datos
app.get("/tables", async (req, res) => {
  try {
    const result = await connection.any(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
    );
    console.log("Tablas de la base de datos:", result);
    res.send(result);
  } catch (error) {
    console.error("Error al obtener las tablas de la base de datos:", error);
    res.status(500).send("Error al obtener las tablas de la base de datos.");
  }
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`);
});
