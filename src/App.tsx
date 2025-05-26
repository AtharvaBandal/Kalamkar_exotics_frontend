import { useState, useEffect } from 'react';

import Layout from './components/Layout.jsx';
import VegetableOrderSystem from '../components/VegetableOrderSystem.jsx';
import OrderHistory from '../ /OrderHistory.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('orders');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(isLoggedIn);

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('orderSuccess')) {
      setCurrentView('orderHistory');
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const handleViewChange = (view:string) => {
    setCurrentView(view);
  };

  return (
    <>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <Layout onLogout={handleLogout} onViewChange={handleViewChange} currentView={currentView}>
          <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
            {currentView === 'orders' && (
              <VegetableOrderSystem onViewChange={handleViewChange} />
            )}
            {currentView === 'orderHistory' && <OrderHistory />}
            {currentView === 'profile' && <Profile />}
          </div>
        </Layout>
      )}
    </>
  );
}

export default App;
