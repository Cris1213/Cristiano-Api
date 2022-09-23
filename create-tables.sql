create table aluno(
id integer auto_increment primary key, 
nome varchar(100),
matricula varchar(20) unique, 
data_nascimento date, 
pontuacao integer

); 

create table atividade(
   id integer auto_increment primary key, 
   aluno_id integer, 
   nome varchar(100), 
   disciplina varchar(100), 
   nota decimal(10,2), 
   observacao varchar(255), 
   foreign key (aluno_id) references aluno(id)

);

insert into aluno values 
(default, 'Cristiano','32312512','1999-04-25', 0),
(default, 'Carol','32131412','1999-09-24', 0),
(default, 'Vitoria','7878547','2002-07-09', 0),
(default, 'Bryan','61231217','2003-09-24', 0),
(default, 'Maria','2912391','2000-02-19', 0);

select * from aluno