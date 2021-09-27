var express = require('express');
var rota = express.Router();
var userController = require("../controllers/usuarios_controller");
var indexController = require("../controllers/index_controller");
var depController = require("../controllers/departamentos_controller");
var arqController = require("../controllers/arquivos_controller");
var chaController = require("../controllers/chamados_controller");
var regController = require("../controllers/regioes_controller");
var servController = require("../controllers/servicos_controller");
var entranciaController = require("../controllers/entrancias_controller");


// importando middleware

var cookieControl = require('../middleware/tokenacess');
const { updateArquivo } = require('../models/arquivoDAO');


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
rota.get("/servicos", cookieControl, servController.listarSer);
rota.post("/servicos", cookieControl, servController.newServico);
rota.put("/servicos", cookieControl, servController.editarServico);
rota.delete("/servicos", cookieControl, servController.removerServico);



// Regiões
rota.get("/regiao", cookieControl, regController.listarRegiao);
rota.post("/regiao", cookieControl, regController.newRegiao);
rota.put("/regiao", cookieControl, regController.editarRegiao);
rota.delete("/regiao", cookieControl, regController.removerRegiao);


// Entrâncias
rota.get("/entrancias", cookieControl, entranciaController.listarEnt);
rota.post("/entrancias", cookieControl, entranciaController.newEntrancia);
rota.put("/entrancias", cookieControl, entranciaController.editarEntrancia);
rota.delete("/entrancias", cookieControl, entranciaController.removerEntrancia);

module.exports = rota;

