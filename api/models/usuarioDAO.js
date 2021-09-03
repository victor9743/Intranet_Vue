var knex= require("../database/db");
var crypto = require("bcrypt");

class userDao {
    
    async listarUsuarios(){
        try {
            var result = await knex.select().table('usuarios');
            
            if(result.length == 0){
                result = {msg: "Nenhum Usuário Cadastrado"};
            }else{
                return result;
            }

        } catch (error) {
         error;
        }
    }

    async novoUsuario(nome, senha, email){
         var hash = await crypto.hash(senha, 10);

         try {
             
            var result = await knex.select().where({nome:nome}).table('usuarios');
            var resultEmail = await knex.select().where({email: email}).table('usuarios');

            if(result.length > 0 || resultEmail.length > 0){
                return {msg: "Usuário ou Email já possui cadastro na base de dados"};
            }else{
                try {       
                    await knex.insert({nome, senha:hash, email}).table('usuarios');
                    return { msg: "Usuário cadastrado com sucesso !!!"}
                } catch (error) {
                    return error;
                }
                
            }
         } catch (error) {
             return error;
         }
         
        
    }
    
    async buscarUsuario(usuario){

        try {
            
            var result = await knex.select().where({nome : usuario}).table('usuarios');

            if( result.length >0 ){
                return result;
            }else{

                return {msg: false}
            }

        } catch (error) {
            return error;
        }
    }
    async removerUsuario(id){
        
    }

    async login(usuario, senha){
        try {
            var result = await knex.select().where({nome : usuario, senha : senha}).table('usuarios');

           
            if(result.length > 0){
                return {login : true}
            }else{
                return {login: false}

            }

        } catch (error) {
            return error;
        }
    }
}

module.exports = new userDao();