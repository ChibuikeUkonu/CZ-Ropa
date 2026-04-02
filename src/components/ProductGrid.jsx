  "use client";
import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext';

const ProductGrid = ({ products, className = '' }) => {
  const { addToCart } = useContext(CartContext);

  if (!products || !Array.isArray(products) || products.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center">
        <i className="fas fa-box-open text-6xl text-gray-300 mb-8 animate-pulse"></i>
        <p className="text-2xl text-primary font-medium opacity-70">No products available at the moment</p>
        <p className="text-lg text-gray-500 mt-2">Check back soon for our latest collection</p>
      </div>
    );
  }

  return (
    <div className={`w-full py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
