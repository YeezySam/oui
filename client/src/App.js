import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import DashboardNavbar from './DashboardNavbar';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';


function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <>
      {isDashboard ? <DashboardNavbar /> : <Navbar />}
      {isDashboard ? <Dashboard /> : <LoginPage />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/pexels-823sl-2294361-copy.jpg.jpg')",
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
