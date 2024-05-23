const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  idDoProduto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomeDoProduto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  codigobarras: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
