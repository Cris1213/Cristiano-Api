const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Contato = require('./contato');

const Smartphone = db.define('Smartphone', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    smartphone: {
        type: DataTypes.STRING(100),
    }
}, {
    timestamps: true,
    tableName: 'smartphone'
});

Smartphone.belongsTo(Contato, {as: 'contato', foreignKey: 'contato_id'})

module.exports = Smartphone;