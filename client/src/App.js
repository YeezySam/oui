import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import DashboardNavbar from './DashboardNavbar';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import AuthPage from './pages/AuthPage'; // Nouvelle page connexion

function Layout() {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/dashboard') {
    return (
      <>
        <DashboardNavbar />
        <Dashboard />
      </>
    );
  }

  if (path === '/auth') {
    return (
      <>
        <Navbar />
        <AuthPage />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <LoginPage />
    </>
  );
}

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/assets/pexels-ketut-subiyanto-5038876 copy.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <Routes>
            <Route path="/*" element={<Layout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
