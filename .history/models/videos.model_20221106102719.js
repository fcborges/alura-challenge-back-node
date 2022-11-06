const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class videos {

    adiciona(videos, res) {
        console.log('videos - api',videos);
        const sql = 'INSERT INTO videos SET ?'

        conexao.query(sql, videos, (erro, resultados) => {
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
        const sql = 'SELECT * FROM videos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM videos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const video = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(video)
            }
        })
    }

    //TODO: fazer validação do que for alterado e não apagar o que estiver sem descrição de atualização
    altera(id, valores, res) {
        console.log(valores);
        const sql = `UPDATE videos v SET v.titulo="${valores.titulo}", v.url = "${valores.url}" , v.descricao = "${valores.descricao}" , v.categoriaId = ${valores.categoriaId} WHERE id = ${id};`

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    buscaPorCategoria(categoria, valores, res) {
        console.log("Categoria Model");
        const sql= `select * from videos v , categorias c where v.categoriaId = c.id and c.titulo = "${categoria}";`
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    deleta(id, res) {
        const sql = `DELETE FROM videos WHERE id=${id}?`

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }
}

module.exports = new videos