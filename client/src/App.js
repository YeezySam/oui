import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import DashboardNavbar from './DashboardNavbar';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import AuthPage from './pages/AuthPage';
import ModifyDesign from './ModifyDesign';
import  NavbarModify from'./NavbarModify';
import HeaderModify from './HeaderModify';
import BodyModify from "./BodyModify";
import FooterModify from "./FooterModify";
import ManageContents from './pages/ManageContents';
import  Articles from'./pages/Articles';



function Layout() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<><DashboardNavbar /><Dashboard /></>} />
        <Route path="/modify-design" element={<ModifyDesign />} />
        <Route path="/auth" element={<><Navbar /><AuthPage /></>} />
        <Route path="/" element={<><Navbar /><LoginPage /></>} />
        <Route path="/navbar-modify" element={<NavbarModify />} />
        <Route path="header-modify" element={<HeaderModify/>}/>
        <Route path="/body-modify" element={<BodyModify />} />
        <Route path="/footer-modify" element={<FooterModify/>}/>
        <Route path="/dashboard/pages/ManageContents" element={<><DashboardNavbar /><ManageContents /></>} />
        <Route path="/dashboard/pages/ManageContents/Articles" element={<><DashboardNavbar /><Articles /></>} />
        
        <Route path="/Article" element={<Articles />} />


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
