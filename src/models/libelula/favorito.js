const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Produto = require('./produto');
const Cliente = require('./cliente');

const Favorito = db.define('Favorito',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},{
    timestamps: true,
    tableName:'favorito'
});

Favorito.belongsTo(Cliente, {
    as: 'cliente',
    foreignKey: 'cliente_id'
});

Favorito.belongsTo(Produto, {
    as: 'produto',
    foreignKey: 'produto_id'
});

Cliente.hasMany(Favorito, {
    as: 'favoritos',
    foreignKey: 'cliente_id' 
});


module.exports = Favorito;