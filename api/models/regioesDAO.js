var knex= require("../database/db");

class regioesDAO {

    async listarRegiao(){
        try {
            var result = await knex.select().table('regioes');
           
            if(result.length == 0){
                result = {msg: "Nenhuma Região Cadastrada"};
                return result;
            }else{
               
                return result;
                
            }

        } catch (error) {
            return error;
        }
    }
    async novoRegiao(descricao_regiao, ativo){
        try {
            
            var result = await knex.select().where({descricao_regiao: descricao_regiao}).table('regioes');
            console.log(result.length);
            if(result.length >0 ){
                return {msg: "Região já possui cadastro em nossa base de dados"}
            }else{
                try {       
                    await knex.insert({descricao_servico, ativo}).table('servicos');
                    return { msg: "Região cadastrada com sucesso !!!"}
                } catch (error) {
                    return error;
                }
            }


        } catch (error) {
            return error
        }
    }

    async removerRegiao(id){
        
        try {
            var result = await knex.delete().where({id_regiao : id }).table('regioes');
        
            if(result == 1){
                return {msg: true}
            }else{
                return {msg: false}
            }
          
        } catch (error) {
            return {msg : error};
        }
    }
    async buscarRegiao(id_regiao){

        try {
            
            var result = await knex.select().where({id_regiao}).table('regioes');
            
            if( result.length >0 ){
                return {msg: true, regiao: result[0].decricao_regiao, ativo: result[0].ativo};
            }else{

                return {msg: false}
            }

        } catch (error) {
            return error;
        }
    }
    async updateRegiao(id_regiao, descricao_regiao, ativo){

        try {
             await knex.update({descricao_regiao , ativo}).where({id_regiao: id_regiao}).table('regioes').then(data=>{
               
                return {msg : "Atualizado"}
            }).catch(err=>{
                return {msg: err};
            })
        } catch (error) {
            return {msg : error}
        }

    }
    
}

module.exports = new regioesDAO();