const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Contato = db.define('Contato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        isEmail: true,   
    },
    imagem_path:{
        type: DataTypes.STRING(255),
        allowNull: true
    },
    tipo: {
        type: DataTypes.ENUM('PESSOA', 'UTILIDADE'),
        defaultValue: 'UTILIDADE'
    }
}, {
    timestamps: true,
    tableName:'contato'
});




module.exports = Contato;