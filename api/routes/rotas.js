var express = require('express');
var rota = express.Router();
var userController = require("../controllers/usuarios_controller");
var indexController = require("../controllers/index_controller");
var depController = require("../controllers/departamentos_controller");
var arqController = require("../controllers/arquivos_controller");
var chaController = require("../controllers/chamados_controller");
var servController;


// importando middleware

var cookieControl = require('../middleware/tokenacess');


// rota.get("/", indexController.index);
// Login
rota.post("/login", userController.login);

// Usuários
rota.post("/usuarios", cookieControl, userController.newUsuario);
rota.get("/usuarios", cookieControl, userController.listarUsuarios);
rota.put("/usuarios", cookieControl, userController.editarUsuario);
rota.delete("/usuarios", cookieControl, userController.removerUsuario);

// autenticação
rota.post("/autenticar", cookieControl, indexController.validate );

// departamentos
rota.get("/departamentos",cookieControl, depController.listarDepartamentos );
rota.post("/departamentos", cookieControl, depController.newDepartamento);
rota.put("/departamentos" , cookieControl, depController.editarDepartamento);
rota.delete("/departamentos", cookieControl, depController.removerDepartamentos);

// arquivos
rota.get("/arquivos", cookieControl,  arqController.listarArq);
rota.post("/arquivos", cookieControl, arqController.newArquivo);
rota.put("/arquivos", cookieControl, arqController.editarArquivo);
rota.delete("/arquivos", cookieControl, arqController.removerArquivo);

// chamados
rota.get("/chamados", cookieControl,  chaController.listarCha);
rota.post("/chamados", cookieControl, chaController.newChamado);
rota.put("/chamados", cookieControl, chaController.editarChamado);
rota.delete("/chamados", cookieControl, chaController.removerChamado);

// servicos



module.exports = rota;

