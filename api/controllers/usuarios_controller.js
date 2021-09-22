var userDAO = require("../models/usuarioDAO");
var crypto = require("bcrypt");
var jwt = require('jsonwebtoken');

var secret ="fa.jk[dsaf}ºsdf...,,hjkhliul;yurtyu/´p[ohjkg~~]´po§gujh$fg@yi";
class Usuarios{

    async login(req,res){
        
        var usuario = req.body.usuario;
        var senha = req.body.password;     

                try {
                
                    var result = await userDAO.buscarUsuario(usuario);

                    if(result.length >0){
                        var senhahash = await crypto.compare(senha, result[0].senha);
                        
                    
                        if(senhahash){

                            var result2 = await userDAO.login(usuario, result[0].senha);
           
                            if(result2.login == true){
                            
                                var token = jwt.sign({usuario : result[0].nome}, secret);
                                res.json({token: token, msg: "true"});
                            }else{
                                res.json({msg: "false"})
                            }
                        
                        }else{
                          
                            res.json({msg: "false"});
                        }
                    }else{
                        res.json({msg: "false"});
                    }

                } catch (error) {
                    
                    res.status(500);
                    res.json(error);
                    
                }  

    }

    async newUsuario(req, res){

  
        if(!req.body.usuario || !req.body.password || !req.body.email){
            res.status(400);
            return res.json({msg: "Campo Inválido"});
        }else{
            var pass = req.body.password;
            var user = req.body.usuario;
            var email = req.body.email;

            try {
                var conexao = await userDAO.novoUsuario(user, pass,email);

                res.json(conexao);
            } catch (error) {
               res.json(error);
            }
        }
    }

    async listarUsuarios(req, res){
         try{

            var conexao = await userDAO.listarUsuarios();
 
             res.json(conexao);
       }catch(error){
            res.status(400);
             return res.json({msg: "erro"})
         }
    }
    async editarUsuario(req, res){

        // Pegar dados do req.body
        var {id , usuario , ANTIGAsenha, NOVAsenha} = req.body;
        
 
        // verifiacar se o id está vazio ou undefined
        if(id == "" || id == undefined || id[0]==" "){
             res.json({msg : "erro"});
         }else{
            // verificar id 
            try{
                var result = await userDAO.buscarID(id);
                
                if(result.msg == true){

                   
                    if(usuario == "" || usuario == undefined || usuario[0] == " " ){
                        usuario = result.usuario;
                        
    
                    }
                  
                      
                        // fazer comparação da senha recebida do req.body com o result.password
                        var buscaPASS  = await crypto.compare(ANTIGAsenha, result.password);
                     
                        // caso o buscaPASS for true, entrará na primeira condição, caso contrário, entrará na segunda
                        if(buscaPASS){
                            if(NOVAsenha == "" || NOVAsenha == undefined || NOVAsenha[0] == " "){
                            
                                NOVAsenha = ANTIGAsenha;
                            }
                            
                            try {
                                var result = await userDAO.updateUSER(id, usuario, NOVAsenha);

                                res.json({msg: "Atualizado"});
                            } catch (error) {
                               res.json({msg: result.msg});
                            }
                            

                        }else{
                            res.json({msg: "erro buscaPASS"})
                        }
                        
               
                
                }else{
                    res.json({msg: "false"});
                }

            }catch(error){
                res.send(error);
                console.log(error);
            }
            

        

          }
        


    }

    async removerUsuario(req,res){

        var id = req.body.id;

        if(id != undefined || id[0] != " " || id != ""){

            var result = await userDAO.removerUsuario(id);
    
            if(result.msg == true){
                res.json({msg: "Ok"});
            }else{
                res.json({msg: false});
            }

        }else{
            res.json({msg : "erro"})
        }

    }
}

module.exports = new Usuarios();