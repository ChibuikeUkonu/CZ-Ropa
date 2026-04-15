import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-light to-white">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-gray-900 to-primary bg-clip-text text-transparent mb-6 leading-tight">
            C&amp;Z Ropa
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            Premium Fashion for the Modern Elite. Timeless Elegance Meets Contemporary Luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link 
              href="/products" 
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-colors shadow-md-custom hover:shadow-md-custom"
            >
              Shop Collection
            </Link>
            <Link 
              href="#featured" 
              className="border-2 border-gray-200 text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors hover:border-gray-300"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
