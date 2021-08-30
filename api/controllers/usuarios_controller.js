var userDAO = require("../models/usuarioDAO");
var crypto = require("bcrypt");
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
                        res.json({msg: "Seja bem vindo"})
                    }else{
                        res.json({msg: "Usuário ou senha Inválidos"})
                    }
                   
                }else{
                    res.json({msg: "Usuário ou senha Inválidos"});
                }
            }else{
                res.json({msg: "Usuário ou senha Inválidos"});
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

          
            return res.json(conexao);


            

         }catch(error){
            res.status(400);
             return res.json({msg: "erro"})
         }
    }
    async editarUsuario(req, res){

        var {id , usuario , senha} = req.body;


    }
}

module.exports = new Usuarios();