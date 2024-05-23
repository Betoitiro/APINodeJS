// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING, // Manter o tipo como string
    allowNull: false,
  },
}, {
  timestamps: false,
});

// Função para criptografar a senha antes de salvar no banco de dados
User.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10); // Criptografa a senha com um salt de 10 rounds
  user.password = hashedPassword; // Substitui a senha não criptografada pela senha criptografada
});

module.exports = User;
