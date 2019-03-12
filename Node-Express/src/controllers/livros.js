const express = require('express');
const router = express.Router();
const livrosRepo = require('../repositories/LivrosRepository');
const seguranca = require('../util/seguranca')

router.get('/', (req, res) =>
    res.json(livrosRepo.todos())
);
router.get('/:id', (req, res) =>
    res.json(livrosRepo.recuperar(parseInt(req.params.id)))
);

router.post('/', seguranca.autorizaJWT,(req, res) => {
    res.json(livrosRepo.adicionar(req.body));
});
router.put('/:id', seguranca.autorizaJWT, (req, res) => {
    res.json(livrosRepo.alterar(parseInt(req.params.id), res.body))
});
router.delete('/:id', seguranca.autorizaJWT, (req, res) => {
    livrosRepo.remover(parseInt(req.params.id));
    res.sendStatus(200);
});

module.exports = router;