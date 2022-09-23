const express = require('express');

const router = express.Router();

const Produto = require('../../models/libelula/produto');

router.get('/', async (req, res) => {
    const produtos = await Produto.findAll({});
    res.send(produtos);
});

router.get('/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id, {});
    res.send(produto);
});

router.post('/', async (req, res) => {
    let produto = await Produto.build(req.body); 
    produto = await produto.save()
    res.send(produto);
});

router.put('/:id', async (req, res) => {
    let produto = await Produto.findByPk(req.params.id);
    produto = await post.save(produto);
    res.send(produto);
});

router.delete('/:id', async (req, res) => {
    let produto = await Produto.findByPk(req.params.id);
    produto.destroy();
    res.status(204).send();
});

module.exports = router;