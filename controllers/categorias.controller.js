const Categorias = require('../models/categorias.model')

module.exports = app => {
    var cors = require('cors');
    app.use(cors());

    app.get('/categorias', (req, res) => {
        Categorias.lista(res);
    })

    app.get('/categoria/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Categorias.buscaPorId(id, res);
    })

    app.post('/categoria/new', (req, res) => {
        const categorias = req.body;
        console.log('categorias.controller ->', categorias);
        Categorias.adiciona(categorias, res);
    })

    app.patch('/categoria/update/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Categorias.altera(id, valores, res)
    })

    app.delete('/categoria/delete/:id', (req, res) => {
        const id = parseInt(req.params.id);
        categorias.deleta(id, res);
    })
}