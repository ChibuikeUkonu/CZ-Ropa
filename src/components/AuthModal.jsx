'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthModal = ({ isOpen, onClose }) => {
  const { login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  // Helper to reset the form
  const resetForm = () => {
    setForm({ name: '', email: '', password: '', phone: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (isLogin) {
      // Login flow
      const res = login({ email: form.email, password: form.password });
      if (!res.success) {
        setError(res.message);
      } else {
        onClose(); // Close modal on successful login
      }
    } else {
      // Signup flow
      const res = signup(form);
      if (!res.success) {
        setError(res.message);
      } else {
        // Success: clear form, show success message, switch to login view
        resetForm();
        setSuccess('Registration successful! You can now log in.');
        setIsLogin(true); // Switch to login form
        // Optionally, clear success message after a few seconds
        setTimeout(() => setSuccess(''), 3000);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl top-70 relative">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>

          {error && (
            <p className="text-red-600 dark:text-red-400 mb-4 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-600 dark:text-green-400 mb-4 text-center">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent"
            />

            <button
              type="submit"
              className="w-full bg-secondary text-white font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="text-gray-600 dark:text-gray-400 mt-6 text-center">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-secondary font-bold underline hover:opacity-80"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;