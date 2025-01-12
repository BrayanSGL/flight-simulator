const boom = require("@hapi/boom");
const getConnection = require("../libs/postgres");

class UsersService {
  constructor() {}

  async find() {
    const client = await getConnection();
    const users = await client.query("SELECT * FROM usuarios");
    return users.rows;
  }

  async findOne(id) {
    const client = await getConnection();
    const user = await client.query("SELECT * FROM usuarios WHERE id = $1", [
      id,
    ]);
    return user.rows[0];
  }

  async create(data) {
    try {
      const client = await getConnection();
      const user = await client.query(
          "INSERT INTO usuarios (nombre, email, contrasena) VALUES ($1, $2, $3) RETURNING *",
          [data.nombre, data.email, data.contrasena]
        );
        return user.rows[0];
    } catch (error) {
        boom.badRequest("El usuario ya existe");
    }
}

async update(id, data) {
    const client = await getConnection();
    // console.log(data);
    const user = await client.query(
        "UPDATE usuarios SET nombre = $1, email = $2, contrasena = $3 WHERE id = $4 RETURNING *",
      [data.nombre, data.email, data.contrasena, id]
    );
    return user.rows[0];
  }

  async delete(id) {
    const client = await getConnection();
    const user = await client.query("DELETE FROM usuarios WHERE id = $1", [id]);
    return user.rows[0];
  }
}

module.exports = UsersService;
