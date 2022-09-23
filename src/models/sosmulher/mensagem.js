const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Contato = require('./contato');
const Conversa = require('./conversa');

const Mensagem = db.define('Mensagem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    conteudo: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.ENUM('ESCREVENDO','ENVIADA','BAIXADA','LIDA'),
        defaultValue: 'ESCREVENDO'
    }
}, {
    timestamps: true,
    tableName:'mensagem'
});

Conversa.hasMany(Mensagem, {as: 'mensagens', foreignKey:'conversa_id'});
Mensagem.belongsTo(Conversa, {as: 'conversa', foreignKey: 'conversa_id'});

Contato.hasMany(Mensagem, { foreignKey:'remetente_id'});
Mensagem.belongsTo(Contato, {as: 'remetente', foreignKey:'remetente_id'});

Contato.hasMany(Mensagem, { foreignKey:'destinatario_id'});
Mensagem.belongsTo(Contato, {as: 'destinatario', foreignKey:'destinatario_id'});

module.exports = Mensagem;