const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
