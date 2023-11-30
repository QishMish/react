import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const AddProductPage = () => {
  const { products, setProducts } = useAppContext();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = () => {
    if (name && description) {
      setProducts([...products, { name, description }]);
      setName('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <label>Name:</label>
      <br></br>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br></br>
      <label>Description:</label>
      <br></br>
      <input value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <br></br>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProductPage;
