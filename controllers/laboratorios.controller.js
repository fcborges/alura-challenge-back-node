const Laboratorios = require('../models/laboratorios.model')

module.exports = app => {
    var cors = require('cors');

    app.use(cors());

    app.get('/laboratorios', (req, res) => {
        Laboratorios.lista(res);
    })

    app.get('/laboratorios/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Laboratorios.buscaPorId(id, res);
    })

    app.post('/laboratorios', (req, res) => {
        const laboratorios = req.body;
        console.log('laboratorios.controller ->', laboratorios);

        Laboratorios.adiciona(laboratorios, res);
    })

    app.patch('/laboratorios/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Laboratorios.altera(id, valores, res)
    })

    app.delete('/laboratorios/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Laboratorios.deleta(id, res);
    })
}