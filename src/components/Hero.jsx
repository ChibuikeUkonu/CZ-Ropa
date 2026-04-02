import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary to-dark flex items-center justify-center text-center text-light px-4 py-20 -mt-20 md:-mt-28">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent drop-shadow-2xl">
          C&Z Ropa
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Premium Fashion for the Modern Elite. Timeless Elegance Meets Contemporary Luxury.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-secondary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
            Shop Collection
          </button>
          <button className="border-2 border-light text-light px-8 py-4 rounded-full text-lg font-semibold hover:bg-light hover:text-primary transition-all duration-300">
            Discover More
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] bg-cover bg-center bg-no-repeat opacity-10 mix-blend-multiply" />
    </section>
  );
};

export default Hero;
