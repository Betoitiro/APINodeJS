const { Sequelize } = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize('Humbertoitiro', 'postgres', '1234567', {
  host: 'localhost',
  dialect: 'postgres', // Especifica que o banco de dados é PostgreSQL
});

module.exports = sequelize;
