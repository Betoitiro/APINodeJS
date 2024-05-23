// controllers/loginController.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { email, password } = req.body;

  console.log('Tentativa de login com email:', email); // Log para verificar o email recebido

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('Usuário não encontrado'); // Log para usuário não encontrado
      return res.status(401).json({ error: 'Email incorretos' });
    }

    console.log('Usuário encontrado:', user); // Log para verificar o usuário encontrado

    // Verifica a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Resultado da verificação da senha:', isPasswordValid); // Log para verificar a senha

    if (!isPasswordValid) {
      console.log('Senha inválida'); // Log para senha inválida
      return res.status(401).json({ error: 'senha incorretos' });
    }

    console.log('Login bem-sucedido'); // Log para login bem-sucedido
    res.json({ message: 'Login bem-sucedido', user });
  } catch (error) {
    console.error('Erro ao fazer login:', error); // Log para erros inesperados
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = { login };
