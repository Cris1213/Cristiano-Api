const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Comunidade = db.define('Comunidade', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao:{
        type: DataTypes.TEXT
    },
    comunidade_img_path:{
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    timestamps: true,
    tableName:'comunidade'
});



module.exports = Comunidade;