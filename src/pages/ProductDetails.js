import React from 'react';
import { useAppContext } from '../context/AppContext';

const ProductDetails = ({ product }) => {
  const { selectedProduct } = useAppContext();
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      {selectedProduct && (
        <div>
          <p>Description: {selectedProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
