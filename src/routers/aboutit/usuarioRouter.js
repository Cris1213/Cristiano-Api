const express = require('express');

const router = express.Router();

const Usuario = require('../../models/aboutit/usuario');

router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll({include: 'usuario'});
    res.send(usuarios);
});

router.get('/:id', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id, {include: 'usuario'});
    res.send(usuario);
});

router.post('/', async (req, res) => {
    let usuario = await Usuario.build(req.body); 
    usuario = await usuario.save()
    res.send(usuario);
});

router.put('/:id', async (req, res) => {
    let usuario = await Usuario.findByPk(req.params.id);
    usuario = await usuario.save(usuario);
    res.send(usuario);
});

router.delete('/:id', async (req, res) => {
    let usuario = await Usuario.findByPk(req.params.id);
    usuario.destroy();
    res.status(204).send();
});

module.exports = router;