var depDAO = require("../models/departamentoDAO");

class Departamentos{
    async listarDepartamentos(req,res){
        try {
            var result = await depDAO.listarDepartamentos();

            res.json(result)
            

        } catch (error) {
            res.status(400);
            res.json({msg: "error"});

        }
    }
    async newDepartamento(req, res){
       
        var departamento = req.body.departamento;
        var dep_ativo = req.body.ativo;

        try{
            var result = await depDAO.novoDepartamento(departamento, dep_ativo);

            res.json(result)

        }catch(error){
            res.status(400);
            res.json({msg: "error"});

        }

    }

    async editarDepartamento(req, res){

        // Pegar dados do req.body
        var {id, departamento, ativo } = req.body;
        
 
        // verifiacar se o id está vazio ou undefined
        if(id == "" || id == undefined || id[0]==" "){
             res.json({msg : "erro"});
         }else{
            // verificar id 
            try{
                var result = await depDAO.buscarDepartamento(id);
                
                
                if(result.msg == true){

                    if(departamento == "" || departamento == undefined || departamento[0] == " " ){
                        departamento = result.departamento;
                        
                    }           
                    
                    try {
                        var result = await depDAO.updateDepartamento(id, departamento, ativo);

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

    async findDepartamento(req, res){

        var dep = req.body.departamento;

        try {
            var result = await depDAO.buscarDepartamento(dep);

            res.json(result);

        } catch (error) {
            res.json(400);
            return res.json({msg: error});
            
        }

    }
    
    async removerDepartamentos(req,res){

        var id = req.body.id;

        if(id != undefined || id[0] != " " || id != ""){

            var result = await depDAO.removerDepartamento(id);
    
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

module.exports = new Departamentos();