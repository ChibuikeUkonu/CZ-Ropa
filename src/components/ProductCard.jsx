import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm-custom border border-gray-200 hover:shadow-md-custom transition-shadow duration-200 hover:border-gray-300 group max-w-sm mx-auto">
      <div className="relative mb-6 aspect-video rounded-lg overflow-hidden bg-gray-50">
        <img 
          src={product.image || '/api/placeholder/400/500'} 
          alt={product.name}
          className="w-full h-full object-cover hover:opacity-95 transition-opacity duration-200"
        />
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2.5 bg-white rounded-lg shadow-md-custom hover:shadow-md-custom border transition-all duration-200 ring-primary focus:ring-2"
          title="Add to Cart"
          aria-label="Add to cart"
        >
          <i className="fas fa-shopping-bag text-primary text-sm"></i>
        </button>
      </div>
      <div className="space-y-3">
        <h3 className="font-semibold text-xl text-primary line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary tracking-tight">
            {product.price}
          </span>
          <div className="flex gap-1 text-accent text-sm">
            ★ ★ ★ ★ ★
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
