var knex= require("../database/db");

class servicoDAO {

    async listarServico(){
        try {
            var result = await knex.select().table('servicos');
           
            if(result.length == 0){
                result = {msg: "Nenhum Serviço Cadastrado"};
                return result;
            }else{
               
                return result;
                
            }

        } catch (error) {
            return error;
        }
    }
    async novoServico(descricao_servico, ativo){
        try {
            
            var result = await knex.select().where({descricao_arquivo: descricao_arquivo}).table('servicos');
            console.log(result.length);
            if(result.length >0 ){
                return {msg: "Serviço já possui cadastro em nossa base de dados"}
            }else{
                try {       
                    await knex.insert({descricao_servico, ativo}).table('servicos');
                    return { msg: "Serviço cadastrado com sucesso !!!"}
                } catch (error) {
                    return error;
                }
            }


        } catch (error) {
            return error
        }
    }

    async removerServico(id){
        
        try {
            var result = await knex.delete().where({id_servico : id }).table('servicos');
        
            if(result == 1){
                return {msg: true}
            }else{
                return {msg: false}
            }
          
        } catch (error) {
            return {msg : error};
        }
    }
    async buscarServico(id_servico){

        try {
            
            var result = await knex.select().where({id_servico}).table('servicos');
            
            if( result.length >0 ){
                return {msg: true, servico: result[0].servico_arquivo, ativo: result[0].ativo};
            }else{

                return {msg: false}
            }

        } catch (error) {
            return error;
        }
    }
    async updateServico(id_servico, descricao_servico, ativo){

        try {
             await knex.update({descricao_servico , ativo}).where({id_servico: id_servico}).table('servicos').then(data=>{
               
                return {msg : "Atualizado"}
            }).catch(err=>{
                return {msg: err};
            })
        } catch (error) {
            return {msg : error}
        }

    }
    
}

module.exports = new servicoDAO();