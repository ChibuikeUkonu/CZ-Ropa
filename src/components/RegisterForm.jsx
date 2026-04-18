'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function RegisterForm({ onError, onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  const res = await signup(form);

  console.log("REGISTER RESPONSE:", res);
  
  if (res.success) {
    onSuccess?.(res.message);
  } else {
    onError?.(res.message);
  }
  
  setLoading(false);
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white">
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 dark:bg-gray-800/50"
          required
          disabled={loading}
        />
      </div>
      <div>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 dark:bg-gray-800/50"
          required
          disabled={loading}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 dark:bg-gray-800/50"
          required
          disabled={loading}
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        {loading ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  );
}

