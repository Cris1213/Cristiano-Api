const express = require('express');

const Cliente = require('../../models/libelula/cliente');
const Produto = require('../../models/libelula/produto');
const Favorito = require('../../models/libelula/favorito');

const router = express.Router();
router.use(express.json());

const clienteRouter = require('./clienteRouter');
const produtoRouter = require('./produtoRouter');
const carrinhoRouter = require('./carrinhoRouter');

router.use('cliente', clienteRouter);
router.use('produto', produtoRouter);
router.use('carrinho', carrinhoRouter);

module.exports = router;