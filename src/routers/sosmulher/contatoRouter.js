const express = require('express');

const router = express.Router();

const Contato = require('../../models/sosmulher/contato');

router.get('/', async (req, res) => {
    const contatos = await Contato.findAll({});
    res.send(contatos);
});

router.get('/:id', async (req, res) => {
    const contato = await Contato.findByPk(req.params.id, {});
    res.send(contato);
});

router.post('/', async (req, res) => {
    let contato = await Contato.build(req.body); 
    res.send(contato);
});

router.put('/:id', async (req, res) => {
    let contato = await Contato.findByPk(req.params.id);
    contato = await post.save(contato);
    res.send(contato);
});

router.delete('/:id', async (req, res) => {
    let contato = await Contato.findByPk(req.params.id);
    contato.destroy();
    res.status(204).send();
});

module.exports = router;