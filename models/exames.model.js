const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class exame {
    adiciona(exame, res) {
        console.log('exames - api',exame);
        const dataInclusao = moment().format('YYYY-MM-DD')
        const exameDatado = { ...exame, dataInclusao }
        const sql = 'INSERT INTO Exames SET ?'

        conexao.query(sql, exameDatado, (erro, resultados) => {
            console.log('sql:',sql);
            console.log('exameDatado:',exameDatado);
            console.log('resultados:',resultados);

            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })


    }

    lista(res) {
        const sql = 'SELECT * FROM Exames'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Exames WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const exame = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(exame)
            }
        })
    }

    buscaPorNome(nome, res) {
        const sql = `select b.dataInclusao, b.nome, b.status, b.tipo from bghm1fgr0xbsqc3j.Laboratorios a , bghm1fgr0xbsqc3j.Exames b where a.exameId = b.id and b.nome = ${nome}`

        conexao.query(sql, (erro, resultados) => {
            const exame = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(exame)
            }
        })
    }

    altera(id, valores, res) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Exames SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    deleta(id, res) {
        const sql = 'UPDATE bghm1fgr0xbsqc3j.Exames l SET l.status = "inativo" WHERE id = ?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }
}

module.exports = new exame