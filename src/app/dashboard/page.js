'use client';

import ProtectedRoute from '@/components/ProtectedRoute';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to your account</p>
      </div>
    </ProtectedRoute>
  );
}