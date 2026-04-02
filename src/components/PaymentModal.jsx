// import React, { useState } from 'react';
import React from 'react';
import { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, onPayment }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onPayment({ cardNumber, expiry, cvv });
  };

  return (
    <>
      <div className="fixed inset-0 bg-white/60 backdrop-md z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div 
          className="bg-light/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-light/10 transform scale-100 hover:scale-[1.02] transition-all duration-300 border-secondary/20 animate-in fade-in zoom-in duration-200" 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-light/20">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Secure Payment
              </h2>
              <p className="text-primary/70 font-medium">Trusted by 100K+ customers</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-light rounded-2xl transition-all duration-300 hover:shadow-lg hover:rotate-90"
            >
              <i className="fas fa-times text-2xl text-primary"></i>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">Card Information</label>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\\s/g, ' ').replace(/[^0-9 ]/gi, ''))}
                    maxLength="19"
                    className="w-full p-4 border-2 border-light/30 rounded-2xl bg-light/50 backdrop-blur-sm text-lg font-semibold text-primary focus:border-secondary focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-all duration-300 hover:border-light peer"
                    required
                  />
                  <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
                    <span>Visa / MasterCard / Amex</span>
                    <i className="fas fa-lock text-secondary text-sm"></i>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value.replace(/[^0-9/]/g, ''))}
                      maxLength="5"
                      className="w-full p-4 border-2 border-light/30 rounded-2xl bg-light/50 backdrop-blur-sm text-lg font-semibold text-primary focus:border-secondary focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-all duration-300 hover:border-light"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                      maxLength="4"
                      className="w-full p-4 border-2 border-light/30 rounded-2xl bg-light/50 backdrop-blur-sm text-lg font-semibold text-primary focus:border-secondary focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-all duration-300 hover:border-light"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-secondary to-accent text-primary py-5 px-8 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-[1.05] transition-all duration-500 transform flex items-center justify-center"
            >
              <i className="fas fa-credit-card mr-3 text-lg"></i>
              Complete Secure Payment
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-light/20 text-center">
            <p className="text-sm text-primary/60">
              <i className="fas fa-shield-alt text-secondary mr-1"></i>
              Your payment information is protected with 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
