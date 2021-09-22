var knex= require("../database/db");

class departamentoDAO {

    async listarDepartamentos(){
        try {
            var result = await knex.select().table('departamentos');
           
            if(result.length == 0){
                result = {msg: "Nenhum Departamento Cadastrado"};
                return result;
            }else{
               
                return result;
                
            }

        } catch (error) {
         return error;
        }
    }
    async novoDepartamento(descricao_departamento, ativo){
        try {
            
            var result = await knex.select().where({descricao_departamento: descricao_departamento}).table('departamentos');
            console.log(result.length);
            if(result.length >0 ){
                return {msg: "Departamento já possui cadastro em nossa base de dados"}
            }else{
                try {       
                    await knex.insert({descricao_departamento, ativo}).table('departamentos');
                    return { msg: "Departamento cadastrado com sucesso !!!"}
                } catch (error) {
                    return error;
                }
            }


        } catch (error) {
            return error
        }
    }

    async removerDepartamento(id){
        
        try {
            var result = await knex.delete().where({id_departamento : id }).table('departamentos');
            
            console.log(result);
            if(result == 1){
                return {msg: true}
            }else{
                return {msg: false}
            }
          
        } catch (error) {
            return {msg : error};
        }
    }
    async buscarDepartamento(id_departamento){

        try {
            
            var result = await knex.select().where({id_departamento}).table('departamentos');
            console.log(result);
            if( result.length >0 ){
                return {msg: true, departamento: result[0].departamento, ativo: result[0].ativo};
            }else{

                return {msg: false}
            }

        } catch (error) {
            return error;
        }
    }
    async updateDepartamento(id_departamento, descricao_departamento, ativo){

        try {
             await knex.update({descricao_departamento , ativo}).where({id_departamento: id_departamento}).table('departamentos').then(data=>{
               
                return {msg : "Atualizado"}
            }).catch(err=>{
                return {msg: err};
            })
        } catch (error) {
            return {msg : error}
        }

    }
    
}

module.exports = new departamentoDAO();