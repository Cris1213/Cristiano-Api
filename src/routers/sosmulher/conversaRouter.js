const express = require('express');

const router = express.Router();

const Conversa = require('../../models/sosmulher/conversa');

router.get('/', async (req, res) => {
    const conversas = await Conversa.findAll({include: ['remetente', 'destinatario', 'conversas']});
    res.send(conversas);
});

router.get('/:id', async (req, res) => {
    const conversa = await Conversa.findByPk(req.params.id, {include: ['remetente', 'destinatario', 'conversas']});
    res.send(conversa);
});

router.post('/', async (req, res) => {
    let conversa = await Conversa.build(req.body); 
    conversa = await conversa.save()
    res.send(conversa);
});

router.put('/:id', async (req, res) => {
    let conversa = await Conversa.findByPk(req.params.id);
    conversa = await post.save(conversa);
    res.send(conversa);
});

router.delete('/:id', async (req, res) => {
    let conversa = await Conversa.findByPk(req.params.id);
    conversa.destroy();
    res.status(204).send();
});

module.exports = router;