// Layout.jsx
import React from 'react';
import { Leaf, Home, Settings, User, LogOut } from 'lucide-react';

const Layout = ({ children, onLogout, onViewChange, currentView }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                Kalamkar Exotics
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <NavLink 
                icon={<Home size={25} />} 
                text="Dashboard" 
                active={currentView === 'orders'}
                onClick={() => onViewChange('orders')}
              />
              <NavLink 
                icon={<Leaf size={25} />} 
                text="Orders" 
                active={currentView === 'orders'}
                onClick={() => onViewChange('orders')}
              />
              <NavLink 
                icon={<Settings size={25} />} 
                text="Settings" 
                active={currentView === 'settings'}
                onClick={() => onViewChange('settings')}
              />
              <NavLink 
                icon={<User size={25} />} 
                text="Profile" 
                active={currentView === 'profile'}
                onClick={() => onViewChange('profile')}
              />
              <button 
                onClick={onLogout} 
                className="flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut size={25} className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Leaf className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-gray-600">Kalamkar Exotics Pvt Ltd</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Kalamkar Exotics Pvt Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ icon, text, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-3 py-2 rounded-lg transition-colors
      ${active 
        ? 'bg-green-50 text-green-600' 
        : 'text-gray-600 hover:bg-gray-50'
      }`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </button>
);

export default Layout;