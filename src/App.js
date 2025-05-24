import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Layout from './components/Layout.jsx';
import VegetableOrderSystem from '../components/VegetableOrderSystem.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx'; // Import Profile
import './index.css';
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentView, setCurrentView] = useState('orders');
    const handleLogout = () => {
        setIsAuthenticated(false);
    };
    const handleViewChange = (view) => {
        setCurrentView(view);
    };
    return (_jsx(_Fragment, { children: !isAuthenticated ? (_jsx(Login, { onLogin: () => setIsAuthenticated(true) })) : (_jsx(Layout, { onLogout: handleLogout, onViewChange: handleViewChange, currentView: currentView, children: _jsxs("div", { className: "min-h-screen bg-green-50 flex items-center justify-center p-4", children: [currentView === 'orders' && _jsx(VegetableOrderSystem, {}), currentView === 'profile' && _jsx(Profile, {})] }) })) }));
}
export default App;
