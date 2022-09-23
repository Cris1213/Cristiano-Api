const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Endereco = require('./enredeco');

const Carrinho = require('./carrinho');

const Cliente = db.define('Cliente',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(12)
    },
    email: {
        type: DataTypes.STRING(100)
    },
    senha: {
        type: DataTypes.STRING(20)
    }
    
},{
    timestamps: true,
    tableName:'cliente'
});


Endereco.hasOne(Cliente, {
    as: 'cliente',
    foreignKey: 'endereco_id'
});
Cliente.belongsTo(Endereco, {
    as: 'endereco',
    foreignKey: 'endereco_id'
});


Cliente.hasMany(Carrinho, {
    as: 'carrinhos',
    foreignKey: 'cliente_id' 
});
Carrinho.belongsTo(Cliente,{ 
    as: 'cliente',
    foreignKey: 'cliente_id'  
});

module.exports = Cliente;