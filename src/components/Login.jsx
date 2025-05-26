import React, { useState } from 'react';

const AuthPage = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingLogin, setLoadingLogin] = useState(false);

  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupAddress, setSignupAddress] = useState('');
  const [loadingSignup, setLoadingSignup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoadingLogin(true);
    try {
      const response = await fetch('https://kalamkar-exotics-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Login failed');

      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuthenticated', 'true');

      // Delay onLogin so App can detect updated localStorage
      setTimeout(() => {
        onLogin(data.user);
      }, 100);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoadingLogin(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoadingSignup(true);
    try {
      const response = await fetch('https://kalamkar-exotics-backend.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: signupUsername,
          password: signupPassword,
          address: signupAddress,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Registration failed');

      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuthenticated', 'true');

      // Delay onLogin so App can detect updated localStorage
      setTimeout(() => {
        onLogin(data.user);
      }, 100);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoadingSignup(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center mb-6 space-x-4">
          <img
            src="../../public/Kalamkar-Exotics-Logo-3.png"
            alt="Kalamkar Exotics Logo"
            className="h-16 w-18"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-green-700 tracking-wide">
              Kalamkar Exotics
            </h1>
            <p className="text-gray-500 italic text-sm mt-1">
              Cultivating Excellence in Exotic Produce
            </p>
          </div>
        </div>

        {/* Login / Signup Forms */}
        {showLogin ? (
          <>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                disabled={loadingLogin}
              >
                {loadingLogin ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              No account?{' '}
              <button
                type="button"
                className="text-green-600 hover:underline"
                onClick={() => setShowLogin(false)}
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          <>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  value={signupAddress}
                  onChange={(e) => setSignupAddress(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                disabled={loadingSignup}
              >
                {loadingSignup ? 'Registering...' : 'Sign Up'}
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                className="text-green-600 hover:underline"
                onClick={() => setShowLogin(true)}
              >
                Log in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
