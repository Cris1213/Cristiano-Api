const express = require('express');

const router = express.Router();

const Cliente = require('../../models/libelula/cliente');

router.get('/', async (req, res) => {
    const clientes = await Cliente.findAll({include: 'endereco'});
    res.send(clientes);
});

router.get('/:id', async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id, {include: ['endereco', 'carrinhos']});
    res.send(cliente);
});

router.post('/', async (req, res) => {
    let contato = await Contato.build(req.body); 
    contato = await contato.save()
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