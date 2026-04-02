'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(form);
    if (res.success) router.push('/'); // Redirect to homepage
    else setError(res.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-dark to-accent p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-light/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md border border-light/20"
      >
        <h1 className="text-3xl text-light font-bold mb-6 text-center">Login</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-4 rounded-xl mb-4 bg-light/20 text-light placeholder-light/60 outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full p-4 rounded-xl mb-6 bg-light/20 text-light placeholder-light/60 outline-none focus:ring-2 focus:ring-secondary"
        />

        <button
          type="submit"
          className="w-full bg-secondary text-dark font-bold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;