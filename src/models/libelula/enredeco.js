const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Endereco = db.define('Endereco',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cep: {
        type: DataTypes.STRING(12),
    },
    rua: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    numero: {
        type: DataTypes.STRING(5)
    },
    complemento: {
        type: DataTypes.STRING(200)
    },
    cidade: {
        type: DataTypes.STRING(100)
    },
    estado: {
        type: DataTypes.STRING(100)
    },
    bairro: {
        type: DataTypes.STRING(100)
    },
    pais: {
        type: DataTypes.STRING(100)
    }
},{
    timestamps: false,
    tableName:'endereco'
});

module.exports = Endereco;