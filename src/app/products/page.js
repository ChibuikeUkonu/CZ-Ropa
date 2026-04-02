import React from 'react'
import Header from '../../components/Header'
import ProductGrid from '../../components/ProductGrid'
import { products } from '../../utils/products'
import Footer from '../../components/Footer'

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-light to-light/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
              Our Collection
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 max-w-2xl mx-auto leading-relaxed">
              Discover timeless pieces crafted for the modern elite. Luxury meets sophistication.
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </>
  )
}
