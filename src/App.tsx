import  { useState } from 'react';

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

  const handleViewChange = (view: string)  => {
    setCurrentView(view);
  };

  return (
    <>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <Layout 
          onLogout={handleLogout} 
          onViewChange={handleViewChange}
          currentView={currentView}
        >
          <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
            {currentView === 'orders' && <VegetableOrderSystem />}
            {currentView === 'profile' && <Profile />}
          </div>
        </Layout>
      )}
    </>
  );
}

export default App;