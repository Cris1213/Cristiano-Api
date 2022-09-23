const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Contato = require('./contato')

const Conversa = db.define('Conversa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: true,
    tableName:'conversa'
});



Contato.hasMany(Conversa, { as:'conversasOrigem', foreignKey:'remetente_id'});
Conversa.belongsTo(Contato, {as: 'remetente', foreignKey:'remetente_id'});

Contato.hasMany(Conversa, { as:'conversasDestimo', foreignKey:'destinatario_id'});
Conversa.belongsTo(Contato, {as: 'destinatario', foreignKey:'destinatario_id'});

module.exports = Conversa;