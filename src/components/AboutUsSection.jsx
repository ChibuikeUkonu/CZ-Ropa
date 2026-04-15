'use client';

import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="About Us" className="py-24 bg-gradient-to-b from-white to-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            About Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-lg text-gray mb-6 leading-relaxed">
              Welcome to <span className="font-bold text-primary">C&amp;Z Ropa</span> where fashion meets passion. 
              We are a team of creative individuals dedicated to bringing you the latest trends with a unique twist.
            </p>
            <p className="text-lg text-gray mb-6 leading-relaxed">
              Our mission is to provide high-quality yet affordable, stylish clothing that empowers you to express your personality. 
              Every piece is carefully curated to ensure comfort, durability, and a touch of elegance.
            </p>
            <p className="text-lg text-gray leading-relaxed">
              From casual wear to formal outfits, we have something for everyone. Join our community and let&apos;s make 
              fashion a celebration of who you are.
            </p>
          </div>
          <div>
            <img
              src="/images/about-placeholder.jpg"
              alt="About C&amp;Z Ropa"
              className="rounded-lg shadow-sm-custom w-full object-cover h-80 md:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

