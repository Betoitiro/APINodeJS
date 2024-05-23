const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes')
const database = require('./config/database');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);


app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.findAll(); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/', (req, res) => {
  res.send('API is running');
});



const PORT = process.env.PORT || 8082;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    await database.authenticate();
    console.log('Database connection established successfully.');
    await database.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
