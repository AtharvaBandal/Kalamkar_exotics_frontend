import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
const AuthPage = ({ onLogin }) => {
    const [showLogin, setShowLogin] = useState(true);
    // Login state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingLogin, setLoadingLogin] = useState(false);
    // Signup state
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
            if (!response.ok)
                throw new Error(data.error || 'Login failed');
            localStorage.setItem('token', data.token);
            onLogin(data.user);
        }
        catch (err) {
            alert(err.message);
        }
        finally {
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
            if (!response.ok)
                throw new Error(data.error || 'Registration failed');
            localStorage.setItem('token', data.token);
            onLogin(data.user);
        }
        catch (err) {
            alert(err.message);
        }
        finally {
            setLoadingSignup(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-green-50 p-4", children: _jsxs("div", { className: "bg-white p-8 shadow-lg rounded-lg w-full max-w-md", children: [_jsxs("div", { className: "flex items-center mb-6 space-x-4", children: [_jsx("img", { src: "../../public/Kalamkar-Exotics-Logo-3.png", alt: "Kalamkar Exotics Logo", className: "h-16 w-18" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-green-600", children: "Kalamkar Exotics Pvt Ltd" }), _jsx("p", { className: "text-gray-600", children: "Random Tagline!!!" })] })] }), showLogin ? (_jsxs(_Fragment, { children: [_jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-gray-700", children: "Username" }), _jsx("input", { type: "text", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700", children: "Password" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500", required: true })] }), _jsx("button", { type: "submit", className: "w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition", disabled: loadingLogin, children: loadingLogin ? 'Logging in...' : 'Login' })] }), _jsxs("p", { className: "mt-4 text-center text-sm text-gray-600", children: ["No account?", ' ', _jsx("button", { type: "button", className: "text-green-600 hover:underline", onClick: () => setShowLogin(false), children: "Sign up" })] })] })) : (_jsxs(_Fragment, { children: [_jsxs("form", { onSubmit: handleSignup, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-gray-700", children: "Username" }), _jsx("input", { type: "text", value: signupUsername, onChange: (e) => setSignupUsername(e.target.value), className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700", children: "Password" }), _jsx("input", { type: "password", value: signupPassword, onChange: (e) => setSignupPassword(e.target.value), className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-gray-700", children: "Address" }), _jsx("input", { type: "text", value: signupAddress, onChange: (e) => setSignupAddress(e.target.value), className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" })] }), _jsx("button", { type: "submit", className: "w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition", disabled: loadingSignup, children: loadingSignup ? 'Registering...' : 'Sign Up' })] }), _jsxs("p", { className: "mt-4 text-center text-sm text-gray-600", children: ["Already have an account?", ' ', _jsx("button", { type: "button", className: "text-blue-600 hover:underline", onClick: () => setShowLogin(true), children: "Log in" })] })] }))] }) }));
};
export default AuthPage;
