var knex= require("../database/db");

class arquivoDAO {

    async listarArquivos(){
        try {
            var result = await knex.select().table('arquivos');
           
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
    async novoArquivo(descricao_arquivo, ativo){
        try {
            
            var result = await knex.select().where({descricao_arquivo: descricao_arquivo}).table('arquivos');
            console.log(result.length);
            if(result.length >0 ){
                return {msg: "Arquivo já possui cadastro em nossa base de dados"}
            }else{
                try {       
                    await knex.insert({descricao_departamento, ativo}).table('arquivos');
                    return { msg: "Arquivo cadastrado com sucesso !!!"}
                } catch (error) {
                    return error;
                }
            }


        } catch (error) {
            return error
        }
    }

    async removerArquivo(id){
        
        try {
            var result = await knex.delete().where({id_arquivo : id }).table('arquivos');
            
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
    async buscarArquivo(id_arquivo){

        try {
            
            var result = await knex.select().where({id_arquivo}).table('arquivos');
            
            if( result.length >0 ){
                return {msg: true, arquivo: result[0].descricao_arquivo, ativo: result[0].ativo};
            }else{

                return {msg: false}
            }

        } catch (error) {
            return error;
        }
    }
    async updateArquivo(id_arquivo, descricao_arquivo, ativo){

        try {
             await knex.update({descricao_arquivo , ativo}).where({id_arquivo: id_arquivo}).table('arquivos').then(data=>{
               
                return {msg : "Atualizado"}
            }).catch(err=>{
                return {msg: err};
            })
        } catch (error) {
            return {msg : error}
        }

    }
    
}

module.exports = new arquivoDAO();