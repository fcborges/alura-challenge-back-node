const Videos = require('../models/videos.model')

module.exports = app => {
    var cors = require('cors');
    app.use(cors());

    app.get('/videos', (req, res) => {
        Videos.lista(res);
    })

    app.get('/videos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Videos.buscaPorId(id, res);
    })

    app.post('/novo', (req, res) => {
        const videos = req.body;
        console.log('videos.controller ->', videos);
        Videos.adiciona(videos, res);
    })

    app.patch('/videos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Videos.altera(id, valores, res)
    })

    app.delete('/videos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Videos.deleta(id, res);
    })
}