const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class categorias {

    adiciona(categorias, res) {
        console.log('categorias - api',categorias);
        const sql = 'INSERT INTO categorias SET ?'

        conexao.query(sql, categorias, (erro, resultados) => {
            console.log('sql:',sql);
            console.log('resultados:',resultados);

            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM categorias'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM categorias WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const video = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(video)
            }
        })
    }

    altera(id, valores, res) {
        console.log(valores);
        console.log(valores.nome);
        const sql = `UPDATE categorias v SET v.titulo="${valores.nome}"  WHERE id = ${valores.id};`

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    deleta(id, res) {
        const sql = `DELETE FROM categorias WHERE id=${id}?`

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }
}

module.exports = new categorias