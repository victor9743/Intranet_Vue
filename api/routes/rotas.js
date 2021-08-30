var express = require('express');
var rota = express.Router();
var userController = require("../controllers/usuarios_controller");
// var indexController = require("../controllers/index_controller");




// rota.get("/", indexController.index);
rota.post("/", userController.login);
rota.post("/cadastrarUsuario", userController.newUsuario);
rota.get("/usuarios", userController.listarUsuarios);
rota.put("/usuarios", userController.editarUsuario);

module.exports = rota;

