const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class laboratorio {
    adiciona(laboratorio, res) {
        console.log('laboratorio - api',laboratorio);
        const dataInclusao = moment().format('YYYY-MM-DD')
        const laboratorioDatado = { ...laboratorio, dataInclusao }
        const sql = 'INSERT INTO Laboratorios SET ?'

        conexao.query(sql, laboratorioDatado, (erro, resultados) => {
            console.log('sql:',sql);
            console.log('laboratorioDatado:',laboratorioDatado);
            console.log('resultados:',resultados);

            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })

    }

    lista(res) {
        const sql = 'SELECT * FROM Laboratorios'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Laboratorios WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const laboratorio = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(laboratorio)
            }
        })
    }

    altera(id, valores, res) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE bghm1fgr0xbsqc3j.Laboratorios l SET l.status = "inativo" WHERE id = ?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    deleta(id, res) {
        const sql = 'UPDATE Laboratorios SET status = "inativo" WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }
}

module.exports = new laboratorio