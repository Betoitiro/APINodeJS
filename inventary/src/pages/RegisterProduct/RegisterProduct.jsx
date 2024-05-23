import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterProduct = () => {
  const [formData, setFormData] = useState({
    nomeDoProduto: '',
    preco: '',
    quantidade: '',
    codigobarras: '',
  });

  const Navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8082/api/products/RegisterProduct', formData);
      if(response.status === 201){
        Navigate('/home')
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error registering product', error);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Cadastrar prodruto
        </h2>
        <p className='text-center mb-4'>
          Preencha os dados para cadastrar novos produtos
        </p>
        <form onSubmit={handleSubmit}>

          <div className='mb-4'>
            <label htmlFor="" className="block text-gray-700">
              Nome do produto
            </label>
            <input
              type="text"
              name="nomeDoProduto"
              value={formData.nomeDoProduto}
              onChange={handleChange}
              placeholder="Product Name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mc-4"
              required />

          </div>

          <div className='mb-4'>
            <label htmlFor="" className="block text-gray-700">
              preço
            </label>
            <input
              type="double"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              placeholder="preco"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mc-4"
              required />

          </div>

          <div className='mb-4'>
            <label htmlFor="" className="block text-gray-700">
              Quantidade
            </label>
            <input
              type="number"
              name="quantidade"
              value={formData.quantidade}
              onChange={handleChange}
              placeholder="Quantity"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mc-4"
              required />

          </div>

          <div className='mb-4'>

            <label htmlFor="" className="block text-gray-700"> Codigo de Barras</label>
            <input
              type="text"
              name="codigobarras"
              value={formData.codigobarras}
              onChange={handleChange}
              placeholder="Barcode"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mc-4"
              required />

          </div>
          <button type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

          >Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterProduct;
