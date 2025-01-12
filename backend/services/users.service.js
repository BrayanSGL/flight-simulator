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
}

module.exports = UsersService;