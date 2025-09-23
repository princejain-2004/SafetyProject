import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: (role: 'student' | 'teacher' | 'admin') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'student@school.edu',
    name: 'Alex Johnson',
    role: 'student',
    grade: '10th',
    school_id: 'school-1',
    points: 1250,
    badges: ['first-aid-hero', 'earthquake-expert'],
    created_at: '2024-01-15'
  },
  {
    id: '2',
    email: 'teacher@school.edu',
    name: 'Sarah Mitchell',
    role: 'teacher',
    school_id: 'school-1',
    points: 3500,
    badges: ['fire-safety-master', 'drill-coordinator'],
    created_at: '2023-08-20'
  },
  {
    id: '3',
    email: 'admin@school.edu',
    name: 'Michael Chen',
    role: 'admin',
    school_id: 'school-1',
    points: 5000,
    badges: ['preparedness-champion', 'safety-leader'],
    created_at: '2023-06-10'
  }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would authenticate with Supabase
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const switchRole = (role: 'student' | 'teacher' | 'admin') => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      switchRole
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}