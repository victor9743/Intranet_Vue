var chamadoDAO = require("../models/chamadosDAO");
class Chamado{
    async listarCha(req,res){
        try {
            var result = await chamadoDAO.listarChamados();

            res.json(result)
            

        } catch (error) {
            res.status(400);
            res.json({msg: "error"});

        }
    }
    async newChamado(req, res){
       
        var chamado = req.body.chamado;
        var cha_ativo = req.body.ativo;

        try{
            var result = await chamadoDAO.novoChamados(chamado, cha_ativo);

            res.json(result)

        }catch(error){
            res.status(400);
            res.json({msg: "error"});

        }

    }

    async editarChamado(req, res){

        // Pegar dados do req.body
        var {id, chamado, ativo } = req.body;
        
 
        // verifiacar se o id está vazio ou undefined
        if(id == "" || id == undefined || id[0]==" "){
             res.json({msg : "erro"});
         }else{
            // verificar id 
            try{
                var result = await chamadoDAO.buscarChamados(id);
                
                
                if(result.msg == true){

                    if(chamado == "" || chamado == undefined || chamado[0] == " " ){
                        chamado = result.chamado;
                        
                    }           
                    
                    try {
                        var result = await chamadoDAO.updateChamados(id, chamado, ativo);

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

    async findChamado(req, res){

        var dep = req.body.chamado;

        try {
            var result = await chamadoDAO.buscarChamados(dep);

            res.json(result);

        } catch (error) {
            res.json(400);
            return res.json({msg: error});
            
        }

    }
    
    async removerChamado(req,res){

        var id = req.body.id;

        if(id != undefined || id[0] != " " || id != ""){

            var result = await chamadoDAO.buscarChamados(id);
    
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

module.exports = new Chamado();