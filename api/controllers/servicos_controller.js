var servicoDAO = require("../models/servicosDAO");
class Servico{
    async listarSer(req,res){
        try {
            var result = await servicoDAO.listarServico();

            res.json(result)
            

        } catch (error) {
            res.status(400);
            res.json({msg: "error"});

        }
    }
    async newServico(req, res){
       
        var servico = req.body.servico;
        var serv_ativo = req.body.ativo;

        try{
            var result = await servicoDAO.novoServico(servico, serv_ativo);

            res.json(result)

        }catch(error){
            res.status(400);
            res.json({msg: "error"});

        }

    }

    async editarServico(req, res){

        // Pegar dados do req.body
        var {id, servico, ativo } = req.body;
        
 
        // verifiacar se o id está vazio ou undefined
        if(id == "" || id == undefined || id[0]==" "){
             res.json({msg : "erro"});
         }else{
            // verificar id 
            try{
                var result = await servicoDAO.buscarServico(id);
                
                
                if(result.msg == true){

                    if(servico == "" || servico == undefined || servico[0] == " " ){
                        servico = result.servico;
                        
                    }           
                    
                    try {
                        var result = await servicoDAO.updateServico(id, servico, ativo);

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

    async findServico(req, res){

        var dep = req.body.servico;

        try {
            var result = await servicoDAO.buscarServico(dep);

            res.json(result);

        } catch (error) {
            res.json(400);
            return res.json({msg: error});
            
        }

    }
    
    async removerServico(req,res){

        var id = req.body.id;

        if(id != undefined || id[0] != " " || id != ""){

            var result = await servicoDAO.buscarServico(id);
    
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

module.exports = new Servico();