var knex = require("knex")({
    client:'mysql',
    connection:{
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'intranet'
    }
})

module.exports = knex;
