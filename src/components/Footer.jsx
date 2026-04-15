import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center space-x-3">
            <i className="fas fa-crown text-2xl text-accent"></i>
            <span className="text-2xl font-bold">C&amp;Z Ropa</span>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-accent transition-colors">Terms</a>
            <a href="#contact" className="hover:text-accent transition-colors">Support</a>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
        <div className="text-center space-y-2 text-sm">
          <p className="text-gray-400">
            &amp;copy; 2026 C&amp;Z Ropa. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Secure Payments | Worldwide Shipping | Premium Quality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

