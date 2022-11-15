const mysql = require('mysql')

const conexao = mysql.createConnection({
    // host: 'g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // port: 3306,
    // user: 'pruwg1xmxu5oiazh',
    // password: 'wi8tvx0epq1948rb',
    // database: 'bghm1fgr0xbsqc3j'

//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'admin',
//     database: 'alura'
       //b62a8d0f372d0e@eu-cdbr-west-03.cleardb.net:3306
       host: 'eu-cdbr-west-03.cleardb.net',
       port: 3306,
       user: 'b62a8d0f372d0e',
       password: '61814751',
       database: 'heroku_17258244a262dc1',
       connectionLimit : 5000,
       debug : 'true'

})

module.exports = conexao
