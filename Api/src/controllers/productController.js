const Product = require('../models/productModel');

const registerProduct = async (req, res) => {
  const { nomeDoProduto, preco, quantidade, codigobarras } = req.body;
  try {
    const product = await Product.create({ nomeDoProduto, preco, quantidade, codigobarras });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll(); // Use o método findAll do Sequelize para buscar todos os produtos
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { registerProduct, getAllProducts };
