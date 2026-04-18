'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      onClose();
    }
  }, [user, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  return (
    <div className="fixed inset-0 z-90 backdrop-sm flex items-center justify-center p-4 top-80">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-times text-xl text-gray-500"></i>
            </button>
          </div>
          
          {/* Toggle */}
          <div className="flex mt-6 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            <button
              onClick={() => {
                setIsLogin(true);
                resetMessages();
              }}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                isLogin
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-primary'
                  : 'text-gray-500 dark:text-gray-400 hover:text-primary'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                resetMessages();
              }}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                !isLogin
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-primary'
                  : 'text-gray-500 dark:text-gray-400 hover:text-primary'
              }`}
            >
              Register
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="text-sm text-green-800 dark:text-green-200">{success}</p>
            </div>
          )}

          {isLogin ? <LoginForm onError={setError} onSuccess={setSuccess} onClose={onClose} /> : <RegisterForm onError={setError} onSuccess={setSuccess} />}
        </div>

        {/* Footer
        <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            By continuing, you agree to our{' '}
            <button className="text-primary hover:underline font-medium">Terms of Service</button>{' '}
            and{' '}
            <button className="text-primary hover:underline font-medium">Privacy Policy</button>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AuthModal;

