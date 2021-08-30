class home{

    async index(req, res){
        res.send("API - Intranet")
    }

}

module.exports = new home();