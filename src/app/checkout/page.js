 'use client'

import React, { useState, useContext, useEffect } from 'react'
import Header from '../../components/Header'
import CartSidebar from '../../components/CartSidebar'
import PaymentModal from '../../components/PaymentModal'
import Footer from '../../components/Footer'
import { CartContext } from '../../context/CartContext'
import { products } from '../../utils/products'
import { formatPrice, calculateTotal } from '../../utils/helpers'

export default function CheckoutPage() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)
  const [showPayment, setShowPayment] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const total = calculateTotal(cart)

  useEffect(() => {
    setSidebarOpen(true)
  }, [])

  const handlePayment = (paymentData) => {
    // Simulate successful payment
    alert('Payment successful! Thank you for your purchase.')
    setShowPayment(false)
    setSidebarOpen(false)
  }

  if (cart.length === 20) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-light to-light/50 flex items-center justify-center p-8">
        <Header />
        <div className="text-center max-w-md">
          <i className="fas fa-shopping-cart text-8xl text-gray-300 mb-8"></i>
          <h1 className="text-4xl font-bold text-primary mb-4">Your cart is empty</h1>
          <p className="text-xl text-primary/70 mb-8">Add some luxury items to checkout</p>
          <a href="/" className="inline-flex items-center bg-gradient-to-r from-secondary to-accent text-primary px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <i className="fas fa-arrow-left mr-2"></i>
            Continue Shopping
          </a>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-20 bg-gradient-to-b from-light to-light/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Secure Checkout
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 max-w-2xl mx-auto">
              Complete your luxury purchase with confidence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 lg:h-screen lg:overflow-y-auto">
              <div className="bg-light/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-light/30">
                <h2 className="text-2xl font-bold text-primary mb-8">Order Summary</h2>
                <div className="space-y-4 mb-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-light/50 rounded-2xl">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.image || '/api/placeholder/64/64'} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xl"
                        />
                        <div>
                          <h4 className="font-semibold text-primary">{item.name}</h4>
                          <p className="text-secondary font-bold">{item.price}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-accent hover:text-accent/80 transition-colors"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 border-t pt-6 border-light/30">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-2xl text-secondary">{formatPrice(total)}</span>
                  </div>
                  <div className="text-sm text-primary/60 space-y-1">
                    <div className="flex items-center">
                      <i className="fas fa-shield-alt text-secondary mr-2"></i>
                      Secure SSL Encryption
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-truck text-secondary mr-2"></i>
                      Free Worldwide Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Area */}
            <div>
              <div className="bg-gradient-to-b from-secondary/5 to-accent/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-secondary/20">
                <h3 className="text-2xl font-bold text-primary mb-6">Payment Method</h3>
                <button 
                  onClick={() => setShowPayment(true)}
                  className="w-full bg-gradient-to-r from-secondary to-accent text-primary py-5 px-8 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 mb-4 flex items-center justify-center"
                >
                  <i className="fas fa-credit-card mr-3"></i>
                  Pay with Card
                </button>
                <div className="text-sm text-primary/60 text-center">
                  <p>We accept all major credit cards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} cartItems={cart} />
      
      {/* Payment Modal */}
      <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} onPayment={handlePayment} />
    </>
  )
}
