const { buscarRegiao } = require("../models/regioesDAO");
var regiaoDAO = require("../models/regioesDAO");
class Regiao{
    async listarRegiao(req,res){
        try {
            var result = await regiaoDAO.listarRegiao();

            res.json(result);
            

        } catch (error) {
            res.status(400);
            res.json({msg: "error"});

        }
    }
    async newRegiao(req, res){
       
        var regiao = req.body.regiao;
        var reg_ativo = req.body.ativo;

        try{
            var result = await regiaoDAO.novoRegiao(regiao, reg_ativo);

            res.json(result)

        }catch(error){
            res.status(400);
            res.json({msg: "error"});

        }

    }

    async editarRegiao(req, res){

        // Pegar dados do req.body
        var {id, regiao, ativo } = req.body;
        
 
        // verifiacar se o id está vazio ou undefined
        if(id == "" || id == undefined || id[0]==" "){
             res.json({msg : "erro"});
         }else{
            // verificar id 
            try{
                var result = await regiaoDAO.buscarRegiao(id);
                
                
                if(result.msg == true){

                    if(regiao == "" || regiao == undefined || regiao[0] == " " ){
                        regiao = result.regiao;
                        
                    }           
                    
                    try {
                        var result = await regiaoDAO.updateRegiao(id, regiao, ativo);

                        res.json({msg: "Atualizado"});
                    } catch (error) {
                        res.json({msg: result.msg});
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
/*
    async findServico(req, res){

        var dep = req.body.servico;

        try {
            var result = await servicoDAO.buscarServico(dep);

            res.json(result);

        } catch (error) {
            res.json(400);
            return res.json({msg: error});
            
        }

    }*/
    
    async removerRegiao(req,res){

        var id = req.body.id;

        if(id != undefined || id[0] != " " || id != ""){

            var result = await regiaoDAO.buscarRegiao(id);
    
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

module.exports = new Regiao();