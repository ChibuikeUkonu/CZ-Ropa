'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, getProfile } from '../app/api/auth.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  // Init user from localStorage token
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const profile = await getProfile();
          if (profile.user) {
            setUser(profile.user);
          } else {
            localStorage.removeItem('token');
          }
        }
      } catch (error) {
        console.error('Auth init error:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async ({ email, password }) => {
  try {
    const data = await loginUser({ email, password });

    if (!data.token) {
      return { success: false, message: data.message || "Login failed" };
    }

    localStorage.setItem("token", data.token);
    setUser(data.user || null);

    return { success: true, user: data.user };
  } catch (error) {
    return { success: false, message: "Login error" };
  }
  
};
 
  const signup = async (formData) => {
    try {
      const data = await registerUser(formData);
      if (data._id) {
        return { success: true, message: 'Registration successful!' };
      } else {
        return { success: false, message: data.message || 'Registration failed' };
      }
    } catch (error) {
      return { success: false, message: 'Registration error' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  if (loading) {
    return <div>Loading...</div>; // Or your LoadingScreen
  }
   
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

