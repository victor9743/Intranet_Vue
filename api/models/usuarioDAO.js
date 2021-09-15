var knex= require("../database/db");
var crypto = require("bcrypt");
const res = require("express/lib/response");

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
        
        try {
            var result = await knex.delete().where({id_usuario : id }).table('usuarios');
            
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
    async updateUSER(id, usuario, novasenha){

        var hash = await crypto.hash(novasenha, 10);
        
        console.log(id, usuario, novasenha);

        try {
             await knex.update({nome: usuario , senha : hash}).where({id_usuario : id}).table('usuarios').then(data=>{
               
                return {msg : "Atualizado"}
            }).catch(err=>{
                return {msg: err};
            })
        } catch (error) {
            return {msg : error}
        }

    }
    async buscarID(id){
        
        try {
            var result = await knex.select().where({id_usuario : id}).table('usuarios');

            if(result.length > 0){
                return {msg: true, usuario: result[0].nome, password: result[0].senha};      
            }else{
                return {msg: false};
            }

        } catch (error) {
           
            return error;
        }

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