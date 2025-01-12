// const db = require("pg-promise")();
// const boom = require("@hapi/boom");
const getConnection = require("../libs/postgres");

class FligthsService {
  constructor() {
  }

  async find() {
    const client = await getConnection();
    const fligths = await client.query("SELECT * FROM vuelos");
    return fligths.rows;
  }

  async findOne(id) {
    const client = await getConnection();
    const fligth = await client.query("SELECT * FROM vuelos WHERE id = $1", [id]);
    return fligth.rows[0];
  }
}

module.exports = FligthsService;
