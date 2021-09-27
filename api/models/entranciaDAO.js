var knex= require("../database/db");

class entranciaDAO {

    async listarEntrancia(){
        try {
            var result = await knex.select().table('entrancias');
           
            if(result.length == 0){
                result = {msg: "Nenhum Entrãncia Cadastrado"};
                return result;
            }else{
               
                return result;
                
            }

        } catch (error) {
            return error;
        }
    }
    async novaEntrancia(descricao_entrancia, ativo){
        try {
            
            var result = await knex.select().where({descricao_entrancia: descricao_entrancia}).table('entrancia');
            console.log(result.length);
            if(result.length >0 ){
                return {msg: "Entrância já possui cadastro em nossa base de dados"}
            }else{
                try {       
                    await knex.insert({descricao_servico, ativo}).table('entrancias');
                    return { msg: "Entrância cadastrado com sucesso !!!"}
                } catch (error) {
                    return error;
                }
            }


        } catch (error) {
            return error
        }
    }

    async removerEntrancia(id){
        
        try {
            var result = await knex.delete().where({id_entrancia : id }).table('entrancias');
        
            if(result == 1){
                return {msg: true}
            }else{
                return {msg: false}
            }
          
        } catch (error) {
            return {msg : error};
        }
    }
    async buscarEntrancia(id_entrancia){

        try {
            
            var result = await knex.select().where({id_entrancia}).table('entrancias');
            
            if( result.length >0 ){
                return {msg: true, entrancia: result[0].descricao_entrancia, ativo: result[0].ativo};
            }else{

                return {msg: false}
            }

        } catch (error) {
            return error;
        }
    }
    async updateEntrancia(id_entrancia, descricao_entrancia, ativo){

        try {
             await knex.update({descricao_entrancia , ativo}).where({id_entrancia: id_entrancia}).table('entrancias').then(data=>{
               
                return {msg : "Atualizado"}
            }).catch(err=>{
                return {msg: err};
            })
        } catch (error) {
            return {msg : error}
        }

    }
    
}

module.exports = new entranciaDAO();