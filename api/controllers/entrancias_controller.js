var entranciaDAO = require("../models/entranciaDAO");
class Entrancia{
    async listarEnt(req,res){
        try {
            var result = await entranciaDAO.listarEntrancia();

            res.json(result)
            

        } catch (error) {
            res.status(400);
            res.json({msg: "error"});

        }
    }
    async newEntrancia(req, res){
       
        var entrancia = req.body.entrancia;
        var entrancia_ativo = req.body.ativo;

        try{
            var result = await servicoDAO.novoServico(entrancia, entrancia_ativo);

            res.json(result)

        }catch(error){
            res.status(400);
            res.json({msg: "error"});

        }

    }

    async editarEntrancia(req, res){

        // Pegar dados do req.body
        var {id, entrancia, ativo } = req.body;
        
 
        // verifiacar se o id está vazio ou undefined
        if(id == "" || id == undefined || id[0]==" "){
             res.json({msg : "erro"});
         }else{
            // verificar id 
            try{
                var result = await entranciaDAO.buscarEntrancia(id);
                
                
                if(result.msg == true){

                    if(entrancia == "" || entrancia == undefined || entrancia[0] == " " ){
                        entrancia = result.entrancia;
                        
                    }           
                    
                    try {
                        var result = await entranciaDAO.updateEntrancia(id, entrancia, ativo);

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

    }
    */
    async removerEntrancia(req,res){

        var id = req.body.id;

        if(id != undefined || id[0] != " " || id != ""){

            var result = await entranciaDAO.buscarEntrancia(id);
    
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

module.exports = new Entrancia();