'use client';

import React, { useState, useContext, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const { user, logout } = useAuth();  // assuming your auth context provides user and logout
  const { cart } = useContext(CartContext);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleIconClick = () => {
    if (user) {
      setIsUserMenuOpen(!isUserMenuOpen); // toggle dropdown
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleLogout = () => {
    logout();  // call logout from context
    setIsUserMenuOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-gray-200 shadow-sm-custom backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeMobileMenu}>
            <i className="fas fa-crown text-2xl text-primary"></i>
            <span className="text-2xl font-bold text-primary">C&amp;Z Ropa</span>
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-primary"
            onClick={toggleMobileMenu}
          >
            <i className={`fas text-xl ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-lg font-medium">
              <li><Link href="/" className="text-primary hover:text-secondary transition-colors px-3 py-2 rounded-md">Home</Link></li>
              <li><Link href="/products" className="text-primary hover:text-secondary transition-colors px-3 py-2 rounded-md">Collections</Link></li>
              <li>
  <button
    onClick={() => {
      const el = document.getElementById('About Us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }}
    className="text-primary hover:text-secondary transition-colors py-2 relative group"
  >
    About Us
  </button>
</li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary hover:text-secondary transition-colors py-2 relative group cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            {/* Auth button with dropdown */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={handleIconClick}
                className="relative p-2 rounded-xl bg-light/50 hover:bg-light hover:shadow-md transition-all duration-300"
              >
                <i className={`fas text-xl ${user ? 'fa-user-check text-secondary' : 'fa-user text-primary'}`}></i>
                {user && (
                  <span className="absolute -top-0 -right-5 bg-accent text-light text-xs rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold animate-pulse">
                    {user.initials || 'U'}
                  </span>
                )}
              </button>

              {/* Dropdown menu for logged in user */}
              {user && isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-50 border border-gray-200 dark:border-gray-700">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name || user.email}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link href="/checkout" className="relative p-2 rounded-xl bg-light/50 hover:bg-light hover:shadow-md transition-all duration-300 group">
              <i className="fas fa-shopping-bag text-xl text-primary group-hover:text-secondary"></i>
              {cart && cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-light text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          {/* Auth Modal – only for unauthenticated users */}
          <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </div>
      </div>

      {/* Mobile menu (unchanged) */}
      <div
  className={`lg:hidden absolute top-20 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-t border-light/50 shadow-2xl transform transition-all duration-300 ease-in-out ${
    isMobileMenuOpen
      ? 'translate-y-0 opacity-100'
      : '-translate-y-full opacity-0 pointer-events-none'
  }`}
>

        <div className="px-4 pt-4 pb-8 space-y-4">
          {['home', 'collections', 'features', 'About Us', 'contact'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="block py-3 px-4 rounded-xl hover:bg-light/50 transition-all text-lg font-semibold text-primary"
              onClick={closeMobileMenu}
            >
              {section === 'payment' ? 'Secure Payment' : section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;