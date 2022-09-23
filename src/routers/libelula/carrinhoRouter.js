const express = require('express');

const router = express.Router();

const Carrinho = require('../../models/libelula/carrinho');

router.get('/', async (req, res) => {
    const carrinhos = await Carrinho.findAll({include:['itens_carrinho', 'cliente']});
    res.send(carrinhos);
});

router.get('/:id', async (req, res) => {
    const carrinho = await Carrinho.findByPk(req.params.id, {include:['itens_carrinho', 'cliente']});
    res.send(carrinho);
});

router.post('/', async (req, res) => {
    let carrinho = await Carrinho.build(req.body); 
    carrinho = await carrinho.save()
    res.send(carrinho);
});

router.put('/:id', async (req, res) => {
    let carrinho = await Carrinho.findByPk(req.params.id);
    carrinho = await post.save(carrinho);
    res.send(carrinho);
});

router.delete('/:id', async (req, res) => {
    let carrinho = await Carrinho.findByPk(req.params.id);
    carrinho.destroy();
    res.status(204).send();
});

module.exports = router;