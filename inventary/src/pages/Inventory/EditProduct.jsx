import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const EditProduct = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product by ID', error);
      }
    };

    fetchProductById();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8082/api/products/${productId}`, editedProduct);
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedProduct.name || product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={editedProduct.quantity || product.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={editedProduct.price || product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

EditProduct.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default EditProduct;
