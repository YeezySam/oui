import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import DashboardNavbar from './DashboardNavbar';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import AuthPage from './pages/AuthPage';

function Layout() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<><DashboardNavbar /><Dashboard /></>} />
        <Route path="/auth" element={<><Navbar /><AuthPage /></>} />
        <Route path="/" element={<><Navbar /><LoginPage /></>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <Layout />
        </div>
      </div>
    </Router>
  );
}

export default App;
