const express = require('express');
const { registerProduct, getAllProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/RegisterProduct', registerProduct);
router.get('/', getAllProducts);


module.exports = router;
