import React from 'react';
import Link from 'next/link';

const CartSidebar = ({ isOpen, onClose, cartItems = [] }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-80 lg:w-96 bg-light/95 backdrop-blur-xl shadow-2xl border-l-2 border-secondary/30 transform transition-all duration-500 ease-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-light/30">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shopping Cart
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-light rounded-xl transition-all duration-200 hover:shadow-md"
            >
              <i className="fas fa-times text-xl text-primary"></i>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto mb-8 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <i className="fas fa-shopping-bag text-5xl text-gray-300 mb-4"></i>
                <p className="text-lg text-primary/70">Your cart is empty</p>
                <p className="text-sm text-gray-500 mt-1">Add luxury items to get started</p>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-light/50 rounded-xl hover:shadow-md transition-all">
                  <img 
                    src={item.image || '/api/placeholder/80/80'} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-primary truncate">{item.name}</h4>
                    <p className="text-secondary font-bold text-lg">{item.price}</p>
                  </div>
                  <button className="p-2 text-accent hover:text-accent/80 transition-colors">
                    <i className="fas fa-trash text-sm"></i>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-light/30 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-primary">Total:</span>
              <span className="text-2xl text-secondary">${total}</span>
            </div>
            <Link 
              href="/checkout"
              className="w-full bg-gradient-to-r from-secondary to-accent text-primary py-4 px-6 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
              onClick={onClose}
            >
              <i className="fas fa-credit-card mr-2"></i>
              Proceed to Checkout
            </Link>
            <button 
              className="w-full border-2 border-light text-light py-3 px-6 rounded-xl font-semibold hover:bg-light hover:text-primary transition-all duration-300"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
