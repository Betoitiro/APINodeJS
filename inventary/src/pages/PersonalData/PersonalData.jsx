import { useState } from 'react';
import axios from 'axios';

const PersonalData = () => {
  const [formData, setFormData] = useState({
    address: '',
    cep: '',
    numero: '',
    complemento: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/users/personal-data', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error saving personal data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="CEP" required />
      <input type="text" name="numero" value={formData.numero} onChange={handleChange} placeholder="Number" required />
      <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} placeholder="Complement" />
      <button type="submit">Save Personal Data</button>
    </form>
  );
};

export default PersonalData;
