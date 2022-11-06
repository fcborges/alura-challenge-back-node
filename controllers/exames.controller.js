const Exames = require('../models/exames.model')

module.exports = app => {
    var cors = require('cors');
    app.use(cors());

    app.get('/exames', (req, res) => {
        Exames.lista(res);
    })

    app.get('/exames/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Exames.buscaPorId(id, res);
    })

    app.post('/exames', (req, res) => {
        const exames = req.body;
        console.log('exames.controller ->', exames);
        Exames.adiciona(exames, res);
    })

    app.patch('/exames/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Exames.altera(id, valores, res)
    })

    app.delete('/exames/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Exames.deleta(id, res);
    })
}