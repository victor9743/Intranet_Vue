var express = require('express');
var rota = express.Router();
var userController = require("../controllers/usuarios_controller");
var indexController = require("../controllers/index_controller");


// importando middleware

var cookieControl = require('../middleware/tokenacess');


// rota.get("/", indexController.index);
rota.post("/login", userController.login);
rota.post("/cadastrarUsuario", cookieControl, userController.newUsuario);
rota.get("/usuarios", cookieControl, userController.listarUsuarios);
rota.put("/usuarios", cookieControl, userController.editarUsuario);
rota.post("/autenticar", cookieControl, indexController.validate );
module.exports = rota;

