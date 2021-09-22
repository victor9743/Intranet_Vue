var knex= require("../database/db");

class chamadoDAO {

    async listarChamados(){
        try {
            var result = await knex.select().table('chamados');
           
            if(result.length == 0){
                result = {msg: "Nenhum Chamdado Cadastrado"};
                return result;
            }else{
               
                return result;
                
            }

        } catch (error) {
            return error;
        }
    }
    async novoChamados(descricao_chamado, ativo){
        try {
            
            var result = await knex.select().where({descricao_chamado: descricao_chamado}).table('arquivos');
            
            if(result.length >0 ){
                return {msg: "Chamado já possui cadastro em nossa base de dados"}
            }else{
                try {       
                    await knex.insert({descricao_chamado, ativo}).table('chamados');
                    return { msg: "Chamados cadastrado com sucesso !!!"}
                } catch (error) {
                    return error;
                }
            }


        } catch (error) {
            return error
        }
    }

    async removerChamados(id){
        
        try {
            var result = await knex.delete().where({id_chamado : id }).table('chamados');
            
            if(result == 1){
                return {msg: true}
            }else{
                return {msg: false}
            }
          
        } catch (error) {
            return {msg : error};
        }
    }
    async buscarChamados(id_chamado){

        try {
            
            var result = await knex.select().where({id_chamado}).table('chamados');
            
            if( result.length >0 ){
                return {msg: true, chamado: result[0].descricao_chamado, ativo: result[0].ativo};
            }else{

                return {msg: false}
            }

        } catch (error) {
            return error;
        }
    }
    async updateChamados(id_chamado, descricao_chamado, ativo){

        try {
             await knex.update({descricao_chamado , ativo}).where({id_chamado: id_chamado}).table('chamados').then(data=>{
               
                return {msg : "Atualizado"}
            }).catch(err=>{
                return {msg: err};
            })
        } catch (error) {
            return {msg : error}
        }

    }
    
}

module.exports = new chamadoDAO();