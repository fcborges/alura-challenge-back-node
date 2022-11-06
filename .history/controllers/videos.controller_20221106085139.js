const Videos = require('../models/videos.model')

module.exports = app => {
    var cors = require('cors');
    app.use(cors());

    app.get('/videos', (req, res) => {
        Videos.lista(res);
    })

    app.get('/video/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Videos.buscaPorId(id, res);
    })

    app.post('/video/new', (req, res) => {
        const videos = req.body;
        console.log('videos.controller ->', videos);
        Videos.adiciona(videos, res);
    })

    app.patch('/video/update/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Videos.altera(id, valores, res)
    })

    app.delete('/video/delete/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Videos.deleta(id, res);
    })
}