     'use client';
 // components/AboutSection.jsx
import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="About Us" className="py-20 bg-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-600 mb-6">
              Welcome to <span className="font-bold text-secondary">C&Z Ropa</span> where fashion meets passion. 
              We are a team of creative individuals dedicated to bringing you the latest trends with a unique twist.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-600 mb-6">
              Our mission is to provide high‑quality yet affordable, stylish clothing that empowers you to express your personality. 
              Every piece is carefully curated to ensure comfort, durability, and a touch of elegance.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-600">
              From casual wear to formal outfits, we have something for everyone. Join our community and let’s make 
              fashion a celebration of who you are and also subscribe to our NewsLetter.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/about-placeholder.jpg" // Replace with your actual image
              alt="About C&Z Ropa"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary/20 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;