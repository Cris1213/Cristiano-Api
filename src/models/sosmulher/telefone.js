const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Contato = require('./contato');

const TelefoneUtil = db.define('TelefoneUtil', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    descricao:{
        type: DataTypes.STRING(100),
        allowNull: false, 
    }
}, {
    timestamps: true,
    tableName: 'telefone_util'
});

TelefoneUtil.belongsTo(Contato, {as: 'contato', foreignKey:'contato_id'});

module.exports = TelefoneUtil;