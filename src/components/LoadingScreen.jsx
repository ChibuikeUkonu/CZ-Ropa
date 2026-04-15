"use client";
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-light to-white z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin mx-auto mb-6 shadow-sm-custom"></div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Loading...
        </h2>
        <p className="text-gray text-sm">
          Preparing your luxury experience
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

