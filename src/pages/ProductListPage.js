import React from 'react';
import { useAppContext } from '../context/AppContext';
import ProductDetails from './ProductDetails';

const ProductsListPage = () => {
  const { products, selectedProduct, setSelectedProduct } = useAppContext();

  const handleProductClick = (product) => {
    if (selectedProduct) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => (
        <div key={index} className="product-item" onClick={() => handleProductClick(product)}>
          <ProductDetails product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsListPage;
