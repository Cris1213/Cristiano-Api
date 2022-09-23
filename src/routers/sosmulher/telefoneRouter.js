const express = require('express');

const router = express.Router();

const Telefone = require('../../models/sosmulher/telefone');

router.get('/', async (req, res) => {
    const telefones = await Telefone.findAll({include: 'contato'});
    res.send(telefones);
});

router.get('/:id', async (req, res) => {
    const telefone = await Telefone.findByPk(req.params.id, {include: 'contato'});
    res.send(telefone);
});

router.post('/', async (req, res) => {
    let telefone = await Telefone.build(req.body); 
    telefone = await telefone.save()
    res.send(telefone);
});

router.put('/:id', async (req, res) => {
    let telefone = await Telefone.findByPk(req.params.id);
    telefone = await post.save(telefone);
    res.send(telefone);
});

router.delete('/:id', async (req, res) => {
    let telefone = await Telefone.findByPk(req.params.id);
    telefone.destroy();
    res.status(204).send();
});

module.exports = router;