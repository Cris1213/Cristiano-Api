const express = require('express');

const Contato = require('../../models/sosmulher/contato');
const Smartphone = require('../../models/sosmulher/smartphone');
const Telefone = require('../../models/sosmulher/telefone');
const Conversa = require('../../models/sosmulher/conversa');
const Mensagem = require('../../models/sosmulher/mensagem');

const router = express.Router();
router.use(express.json());

const contatoRouter = require('./contatoRouter');
const conversaRouter = require('./conversaRouter');
const mensagemRouter = require('./mensagemRouter');
const smartphoneRouter = require('./smartphoneRouter');
const telefoneRouter = require('./telefoneRouter');

router.use('contato', contatoRouter);
router.use('conversa', conversaRouter);
router.use('mensagem', mensagemRouter);
router.use('smartphone', smartphoneRouter);
router.use('telefone', telefoneRouter);


module.exports = router;