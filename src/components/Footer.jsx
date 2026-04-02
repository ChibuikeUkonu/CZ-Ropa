import React from "react";

const Footer = () => {

   

  return (
    <footer className="bg-gradient-to-t from-primary to-dark text-light py-12 px-4 mt-20 border-t-4 border-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Existing top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <i className="fas fa-crown text-3xl text-secondary"></i>
            <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              C&Z Ropa
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-secondary transition-colors text-light/80 hover:underline">Privacy</a>
            <a href="#terms" className="hover:text-secondary transition-colors text-light/80 hover:underline">Terms</a>
            <a href="#contact" className="hover:text-secondary transition-colors text-light/80 hover:underline">Support</a>
          </div>
        </div>
 
        {/* Divider and copyright (unchanged) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-light/30 to-transparent my-8"></div>
        <p className="text-light/60 text-sm md:text-base font-medium text-center">
          &copy; 2026 C&Z Ropa. Crafted with <i className="fas fa-heart text-accent mx-1"></i> for fashion lovers worldwide. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-light/40 text-center">
          Secure Payments | Worldwide Shipping | Premium Quality
        </p>
      </div>
    </footer>
  );
};

export default Footer;