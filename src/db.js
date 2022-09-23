
const dbSequelize = new Sequelize('alunos','aluno','aluno',{
    dialect: 'mysql', host:'localhost'
  
  })
  
  module.exports = dbSequelize 