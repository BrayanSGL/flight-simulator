const db = require("pg-promise")();

class FligthsService {
  constructor() {
    this.connection = db({
      host: "localhost",
      port: 5432,
      database: "postgres",
      user: "postgres_user",
      password: "postgres_admin",
    });
    this.fligths = [];
    this.loadFlights();
  }

  async loadFlights() {
    try {
      const result = await this.connection.any("SELECT * FROM vuelos;");
      this.fligths = result;
    } catch (error) {
      console.error("Error al cargar los vuelos de la base de datos:", error);
      this.fligths = [
        { error: "Error al cargar los vuelos de la base de datos." },
      ];
    }
  }

  async find(req, res) {
    return this.fligths;
  }

  async findOne(id, req, res) {
    const fligth = this.fligths.find((fligth) => fligth.id === Number(id));
    console.log(fligth);
    return fligth;
  }
  
}

module.exports = FligthsService;
