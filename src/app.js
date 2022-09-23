const express = require('express');
const env = require('dotenv/config');
const database = require('./db');


// requimentos das rotas 
const alunoRouter = require('./alunosRouter');
const libelulaRouter = require('./routers/libelula/libelulaRouter');
const aboutItRouter = require('./routers/aboutit/aboutitRouter');
const sosmulherRouter = require('./routers/sosmulher/sosMulherRouter');



const app = express();
app.use(express.json());


//chamadas
app.use('/alunos', alunoRouter);
app.use('/libelula', libelulaRouter);
app.use('/aboutit', aboutItRouter);
app.use('/sosmulher', sosmulherRouter);


app.listen(process.env.PORT, async () => {
    const resultDb = await database.sync({force:true});
    console.log('server started');
})