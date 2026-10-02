import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint, PhoneCall, Menu, X, User } from 'lucide-react';
import './Header.css'; // Corrected import (replaced self-import)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="brand-logo-container">
            <div className="brand-icon-wrapper">
              <PawPrint className="h-6 w-6" />
            </div>
            <span className="brand-title">
             Dr Dejene Animal <span className="brand-title-accent">Clinic</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>About Us</Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}>Services</Link>
            <Link to="/pharmacy" className={`nav-link ${isActive('/pharmacy') ? 'nav-link-active' : ''}`}>Pharmacy</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>Contact</Link>
          </nav>

          {/* Call & Portal Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
         
           
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-forest-800 bg-forest-900 px-4 pt-4 pb-6 space-y-3 mobile-menu-enter">
          <Link to="/" onClick={() => setIsOpen(false)} className={`block nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={`block nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className={`block nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}>Services</Link>
          <Link to="/pharmacy" onClick={() => setIsOpen(false)} className={`block nav-link ${isActive('/pharmacy') ? 'nav-link-active' : ''}`}>Pharmacy</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`block nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>Contact</Link>
          
          <div className="pt-4 border-t border-forest-800 space-y-2">
            <a href="tel:0910037682" className="btn-emergency w-full justify-center">
              <PhoneCall className="w-4 h-4" />
              <span>Call 0910037682</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}