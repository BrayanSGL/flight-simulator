const express = require("express");
// const db = require("pg-promise")();
const FligthsService = require("../services/fligths.service");

const router = express.Router();
const fligthsService = new FligthsService();


// const connection = db({
//   host: "localhost",
//   port: 5432,
//   database: "postgres",
//   user: "postgres_user",
//   password: "postgres_admin",
// });

//End point para obtener los vuelos
router.get("/", async (req, res) => {
    const fligths = await fligthsService.find(req, res);
    res.json(fligths);
});

//End point para obtener un vuelo por su id
router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const fligth = await fligthsService.findOne(id);
        console.log(fligth);
        res.json(fligth);
    } catch (error) {
        next(error);
    }
});


module.exports = router;

