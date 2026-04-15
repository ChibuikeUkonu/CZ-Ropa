import React from 'react'
import Header from '../../components/Header'
import ProductGrid from '../../components/ProductGrid'
import { products } from '../../utils/products'
import Footer from '../../components/Footer'

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="py-24 lg:py-32 bg-gradient-to-b from-light to-white">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-gray-900 to-primary bg-clip-text text-transparent mb-6 leading-tight">
              Our Collection
            </h1>
            <p className="text-xl md:text-2xl text-gray max-w-2xl mx-auto leading-relaxed">
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
