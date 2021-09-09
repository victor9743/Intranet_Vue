var jwt = require("jsonwebtoken");

var secret ="dfosgndfçsnnfsudgibfgsbgçfd";
module.exports = function(req, res, next){

    const authToken = req.headers['authorization'];

    if(authToken != undefined){

        // divindo a string em dois 'split()'
        const bearer = authToken.split(' ');

        var token = bearer[1];

        // retorno de um token decodificado

        try {
            
            var decoded = jwt.verify(token, secret);
       
          

            if(decoded.usuario != undefined ){

                next();
            }else{

                res.status(403);
                req.send("Você não tem permissão")
                return;
            }

        } catch (error) {
            res.status(403);
            res.send("você não está autenticado");
            return;
        }
        

    

    }else{
        res.status(403);
        res.send("você não está autenticado");
        return;
    }


}