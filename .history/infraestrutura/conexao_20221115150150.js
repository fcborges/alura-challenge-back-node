const mysql = require('mysql')

const conexao = mysql.createConnection({
    // host: 'g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // port: 3306,
    // user: 'pruwg1xmxu5oiazh',
    // password: 'wi8tvx0epq1948rb',
    // database: 'bghm1fgr0xbsqc3j'

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'alura'

})

module.exports = conexao