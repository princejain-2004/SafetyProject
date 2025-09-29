import React, { useState } from 'react';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

// This file contains a small auth flow container that re-uses your original
// LoginForm logic (including demo "click to fill" behavior) and adds two
// sign-up forms (Student / Administrator). Sign-ups call useAuth.register
// if available; otherwise they fall back to saving a minimal record to
// localStorage under the users key.

function LoginForm({ onSwitchToChoice }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // use your existing login function from context (keeps original behaviour)
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const demoAccounts = [
    { email: 'student@school.edu', role: 'Student', password: 'demo123' },
    { email: 'admin@school.edu', role: 'Administrator', password: 'demo123' },
  ];

  // Same quickLogin behaviour as your original file (fills fields only)
  const quickLogin = (email) => {
    setEmail(email);
    setPassword('demo123');
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      {/* Demo Accounts (fills the form fields only) */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-3 text-center">Demo Accounts</p>
        <div className="space-y-2">
          {demoAccounts.map((account, index) => (
            <button
              key={index}
              onClick={() => quickLogin(account.email)}
              className="w-full text-left p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{account.role}</p>
                  <p className="text-sm text-gray-600">{account.email}</p>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Click to fill</span>
              </div>
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-3">Password for all demo accounts: demo123</p>

        <p className="text-center text-blue-600 text-sm cursor-pointer mt-4" onClick={onSwitchToChoice}>
          ← Back
        </p>
      </div>
    </div>
  );
}

function StudentSignup({ onRegistered, onCancel }) {
  const [form, setForm] = useState({
    name: '',
    rollNo: '',
    className: '',
    section: '',
    guardianPhone: '',
    email: '',
    password: '',
    schoolCode: '',
    pincode: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const register = auth?.register;

  const handleChange = (field, value) => setForm((s) => ({ ...s, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (typeof register === 'function') {
        // if your AuthContext exposes register, use it
        await register({ ...form, role: 'Student' });
      } else {
        // fallback: store minimally to localStorage so they can login later if you want
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ email: form.email, password: form.password, role: 'Student', meta: form });
        localStorage.setItem('users', JSON.stringify(users));
      }

      // after successful signup, move them to login
      onRegistered();
    } catch (err) {
      console.error(err);
      setError('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold text-center">Student Sign Up</h2>
        {error && <div className="text-red-600 text-sm">{error}</div>}

        <input required placeholder="Full name" value={form.name} onChange={(e)=>handleChange('name', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="Roll No" value={form.rollNo} onChange={(e)=>handleChange('rollNo', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="Class" value={form.className} onChange={(e)=>handleChange('className', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="Section" value={form.section} onChange={(e)=>handleChange('section', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="Guardian phone" value={form.guardianPhone} onChange={(e)=>handleChange('guardianPhone', e.target.value)} className="w-full border rounded-md p-2" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(e)=>handleChange('email', e.target.value)} className="w-full border rounded-md p-2" />
        <input required type="password" placeholder="Password" value={form.password} onChange={(e)=>handleChange('password', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="School code" value={form.schoolCode} onChange={(e)=>handleChange('schoolCode', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="Pincode" value={form.pincode} onChange={(e)=>handleChange('pincode', e.target.value)} className="w-full border rounded-md p-2" />

        <button type="submit" disabled={isLoading} className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50">
          {isLoading ? 'Registering...' : 'Register as Student'}
        </button>

        <div className="flex justify-between mt-2 text-sm">
          <button type="button" onClick={onCancel} className="text-blue-600">← Back</button>
        </div>
      </form>
    </div>
  );
}

function AdminSignup({ onRegistered, onCancel }) {
  const [form, setForm] = useState({ name: '', schoolName: '', pincode: '', phone: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const register = auth?.register;

  const handleChange = (field, value) => setForm((s) => ({ ...s, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (typeof register === 'function') {
        await register({ ...form, role: 'Administrator' });
      } else {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ email: form.email, password: form.password, role: 'Administrator', meta: form });
        localStorage.setItem('users', JSON.stringify(users));
      }
      onRegistered();
    } catch (err) {
      console.error(err);
      setError('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold text-center">Administrator Sign Up</h2>
        {error && <div className="text-red-600 text-sm">{error}</div>}

        <input required placeholder="Full name" value={form.name} onChange={(e)=>handleChange('name', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="School name" value={form.schoolName} onChange={(e)=>handleChange('schoolName', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="Pincode" value={form.pincode} onChange={(e)=>handleChange('pincode', e.target.value)} className="w-full border rounded-md p-2" />
        <input required placeholder="Phone number" value={form.phone} onChange={(e)=>handleChange('phone', e.target.value)} className="w-full border rounded-md p-2" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(e)=>handleChange('email', e.target.value)} className="w-full border rounded-md p-2" />
        <input required type="password" placeholder="Password" value={form.password} onChange={(e)=>handleChange('password', e.target.value)} className="w-full border rounded-md p-2" />

        <button type="submit" disabled={isLoading} className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 disabled:opacity-50">
          {isLoading ? 'Registering...' : 'Register as Administrator'}
        </button>

        <div className="flex justify-between mt-2 text-sm">
          <button type="button" onClick={onCancel} className="text-blue-600">← Back</button>
        </div>
      </form>
    </div>
  );
}

export default function AuthPage() {
  const [view, setView] = useState('choice'); // choice | login | studentSignup | adminSignup

  const handleRegistered = () => setView('login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="w-50 h-20 mx-auto mb-4">
            <img src="src/Assets/Logo.png" alt="SafetyFirst Logo" className="w-50 h-20 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">SafetyFirst</h1>
          <p className="text-blue-100">Emergency Preparedness Platform</p>
        </div>

        {/* Content area */}
        <div>
          {view === 'choice' && (
            <div className="bg-white rounded-lg shadow-xl p-8 space-y-4">
              <button onClick={() => setView('studentSignup')} className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">Sign Up as Student</button>
              <button onClick={() => setView('adminSignup')} className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700">Sign Up as Administrator</button>
              <button onClick={() => setView('login')} className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">Already a User? Sign In</button>
            </div>
          )}

          {view === 'login' && <LoginForm onSwitchToChoice={() => setView('choice')} />}

          {view === 'studentSignup' && <StudentSignup onRegistered={handleRegistered} onCancel={() => setView('choice')} />}

          {view === 'adminSignup' && <AdminSignup onRegistered={handleRegistered} onCancel={() => setView('choice')} />}
        </div>

        {/* Footer */}
        <div className="text-center text-blue-100 text-sm">
          <p>© 2025 SafetyFirst Platform. Keeping schools prepared.</p>
        </div>
      </div>
    </div>
  );
}