const express = require('express');

const routes = express.Router();

const PalavraContextoController = require('./controllers/PalavraContextoController');


routes.get("/", PalavraContextoController.index );
routes.post("/", PalavraContextoController.store );
routes.delete("/:_id", PalavraContextoController.delete );

module.exports = routes;