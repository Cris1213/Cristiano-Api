const express = require('express');

const Aluno = require('./alunoModel');
const Atividade = require('./atividadeModel');

const router = express.Router();
router.use(express.json());


// ver todos os alunos 


router.get('/', async (req, res) => {
    const alunos = await Aluno.findAll({include: 'atividades'});
    res.send(alunos);
});


//id para ver os alunos 

router.get('/:id', async (req, res) => {
    const aluno = await Aluno.findByPk(req.params.id, {include: 'atividades'});
    res.send(aluno);
});

//matriula aluno

router.get('/matricula/:matricula', async (req, res) => {
    const aluno = await Aluno.findOne({
        where: {
            matricula: req.params.matricula
        },
        include: 'atividades'
    })
    res.send(aluno);
});

//enviar aluno

router.post('/', async (req, res) => {
    let aluno = await Aluno.build(req.body); 
    aluno = await aluno.save()
    res.send(aluno);
});



//editar aluno

router.put('/:id', async (req, res) => {
    let aluno = await Aluno.findByPk(req.params.id);
    aluno.pontuacao = req.body.pontuacao;

    aluno = await aluno.save(aluno);

    res.send(aluno);
});


//deletar aluno


router.delete('/:id', async (req, res) => {
    let aluno = await Aluno.findByPk(req.params.id);
    aluno.destroy();

    res.status(204).send();
});


//enviar atividade


router.post('/:id/atividade', async (req, res) => {
    const aluno = await Aluno.findByPk(req.params.id, {include:'atividades'});
    const atividade = await Atividade.build(req.body);
    atividade.data_envio = Date.now();
    atividade.aluno_id = aluno.id;

    const result = await atividade.save();
    res.send(result);
});




// editar atividade 

router.put('/:id/atividade/:idAtividade', async (req, res) => {
    const aluno = await Aluno.findByPk(req.params.id, {include:'atividades'});
    const atividade = await Atividade.findByPk(req.params.idAtividade);

    atividade.update({...atividade, ...req.body})
    atividade.data_envio = Date.now();
    
    const result = await atividade.save();
    res.send(result);
});

module.exports = router;