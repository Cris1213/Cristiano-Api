const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const ItemCarrinho = require('./itemCarrinho');

const Carrinho = db.define('Carrinho',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status_carrinho:{
        type: DataTypes.ENUM('ABERTO','FINALIZADO'),
        defaultValue: 'ABERTO'
    },
    valor_total: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    }
},{
    timestamps: true,
    tableName:'carrinho'
});

Carrinho.hasMany( ItemCarrinho, {
    as: 'itens_carrinho',
    foreignKey: 'carrinho_id'
});

ItemCarrinho.belongsTo(Carrinho, {
    as: 'carrinho',
    foreignKey: 'carrinho_id'
});

module.exports = Carrinho;