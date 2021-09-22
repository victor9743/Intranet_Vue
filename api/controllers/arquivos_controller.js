var arquivoDAO = require("../models/arquivoDAO");
class Arquivo{
    async listarArq(req,res){
        try {
            var result = await arquivoDAO.listarArquivos();

            res.json(result)
            

        } catch (error) {
            res.status(400);
            res.json({msg: "error"});

        }
    }
    async newArquivo(req, res){
       
        var arquivo = req.body.arquivo;
        var arq_ativo = req.body.ativo;

        try{
            var result = await arquivoDAO.novoArquivo(arquivo, arq_ativo);

            res.json(result)

        }catch(error){
            res.status(400);
            res.json({msg: "error"});

        }

    }

    async editarArquivo(req, res){

        // Pegar dados do req.body
        var {id, arquivo, ativo } = req.body;
        
 
        // verifiacar se o id está vazio ou undefined
        if(id == "" || id == undefined || id[0]==" "){
             res.json({msg : "erro"});
         }else{
            // verificar id 
            try{
                var result = await arquivoDAO.buscarArquivo(id);
                
                
                if(result.msg == true){

                    if(arquivo == "" || arquivo == undefined || arquivo[0] == " " ){
                        arquivo = result.arquivo;
                        
                    }           
                    
                    try {
                        var result = await arquivoDAO.updateArquivo(id, departamento, ativo);

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

    async findArquivo(req, res){

        var dep = req.body.arquivo;

        try {
            var result = await arquivoDAO.buscarArquivo(dep);

            res.json(result);

        } catch (error) {
            res.json(400);
            return res.json({msg: error});
            
        }

    }
    
    async removerArquivo(req,res){

        var id = req.body.id;

        if(id != undefined || id[0] != " " || id != ""){

            var result = await arquivoDAO.removerArquivo(id);
    
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

module.exports = new Arquivo();