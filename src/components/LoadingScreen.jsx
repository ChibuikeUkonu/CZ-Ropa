 "use client";
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-dark to-accent z-[9999] flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-light/20 border-t-secondary rounded-full animate-spin mx-auto mb-8"></div>
          <i className="fas fa-crown absolute inset-0 m-auto text-3xl text-secondary animate-pulse w-24 h-24 flex items-center justify-center"></i>
        </div>
        <p className="text-light text-xl md:text-2xl font-semibold tracking-wide animate-pulse">
          Loading C&Z Ropa...
        </p>
        <p className="text-light/60 text-sm mt-2 animate-pulse">
          Crafting luxury experience
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
