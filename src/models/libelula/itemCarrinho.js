const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Produto = require('./produto');
const Carrinho = require('./carrinho');

const ItemCarrinho = db.define('ItemCarrinho',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantidade: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    valor_produto: {
        type: DataTypes.DECIMAL(10,2)
    }
},{
    timestamps: true,
    tableName:'item_carrinho'
});

ItemCarrinho.belongsTo(Produto, {
    as: 'produto',
    foreignKey: 'produto_id'
});

module.exports = ItemCarrinho;