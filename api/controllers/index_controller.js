class home{

    async index(req, res){
        res.send("API - Intranet")
    }

    async validate(req, res){
        res.send("okay");
    }

}

module.exports = new home();