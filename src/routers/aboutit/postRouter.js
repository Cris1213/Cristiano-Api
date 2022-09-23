const express = require('express');

const router = express.Router();

const Post = require('../../models/aboutit/post');

router.get('/', async (req, res) => {
    const posts = await Post.findAll({include: 'usuario'});
    res.send(posts);
});

router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id, {include: 'usuario'});
    res.send(post);
});

router.post('/', async (req, res) => {
    let post = await Post.build(req.body); 
    post = await post.save()
    res.send(post);
});

router.put('/:id', async (req, res) => {
    let post = await Post.findByPk(req.params.id);
    post = await post.save(post);
    res.send(post);
});

router.delete('/:id', async (req, res) => {
    let post = await Post.findByPk(req.params.id);
    post.destroy();
    res.status(204).send();
});

module.exports = router;