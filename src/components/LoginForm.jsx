'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginForm({ onError, onSuccess, onClose }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await login(form);

    console.log("LOGIN RESPONSE:", res);

    if (!res || !res.token) {
      onError?.(res?.message || "Login failed");
      return;
    }

    // SAVE TOKEN (IMPORTANT)
    localStorage.setItem("token", res.token);

    onSuccess?.("Login successful");
    onClose?.();

  } catch (err) {
    console.error(err);
    onError?.("Server error");
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white">
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email address"
        disabled={loading}
        className="w-full px-4 py-3 border rounded-xl"
        required
      />

      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        disabled={loading}
        className="w-full px-4 py-3 border rounded-xl"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3 rounded-xl disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
  );
}