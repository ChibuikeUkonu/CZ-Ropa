import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-light/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-light/50 overflow-hidden max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-gradient-to-br from-primary/20 to-dark/20">
        <img 
          src={product.image || '/api/placeholder/400/500'} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-secondary text-primary p-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            title="Add to Cart"
          >
            <i className="fas fa-shopping-bag text-sm"></i>
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-xl text-primary group-hover:text-secondary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-secondary tracking-wide">
            {product.price}
          </span>
          <div className="flex gap-1 text-secondary">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
