import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pharmacy from './pages/Pharmacy';
import Contact from './pages/Contact';
import Login from './pages/Login';

// Inner wrapper component to handle conditional layout rendering
function AppLayout() {
  const location = useLocation();
  
  // Hide global Header and Footer on the Login/Portal page for a full-screen split view
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen bg-cream-50 text-gray-800 antialiased">
      {!isLoginPage && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}