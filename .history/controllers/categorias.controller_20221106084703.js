const categorias = require('../models/categorias.model')

module.exports = app => {
    var cors = require('cors');
    app.use(cors());

    app.get('/categorias', (req, res) => {
        categorias.lista(res);
    })

    app.get('/categorias/:id', (req, res) => {
        const id = parseInt(req.params.id);
        categorias.buscaPorId(id, res);
    })

    app.post('/novo', (req, res) => {
        const categorias = req.body;
        console.log('categorias.controller ->', categorias);
        categorias.adiciona(categorias, res);
    })

    app.patch('/atualiza/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        categorias.altera(id, valores, res)
    })

    app.delete('/remove/:id', (req, res) => {
        const id = parseInt(req.params.id);
        categorias.deleta(id, res);
    })
}