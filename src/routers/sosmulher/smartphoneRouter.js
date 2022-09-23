const express = require('express');

const router = express.Router();

const Smartphone = require('../../models/sosmulher/smartphone');

router.get('/', async (req, res) => {
    const smartphones = await Smartphone.findAll({include: 'contato'});
    res.send(smartphones);
});

router.get('/:id', async (req, res) => {
    const smartphone = await Smartphone.findByPk(req.params.id, {include: 'contato'});
    res.send(smartphone);
});

router.post('/', async (req, res) => {
    let smartphone = await Smartphone.build(req.body); 
    smartphone = await smartphone.save()
    res.send(smartphone);
});

router.put('/:id', async (req, res) => {
    let smartphone = await Smartphone.findByPk(req.params.id);
    smartphone = await post.save(smartphone);
    res.send(smartphone);
});

router.delete('/:id', async (req, res) => {
    let smartphone = await Smartphone.findByPk(req.params.id);
    smartphone.destroy();
    res.status(204).send();
});

module.exports = router;