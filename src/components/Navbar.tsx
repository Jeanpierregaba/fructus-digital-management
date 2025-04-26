
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Réalisations', path: '/realisations' },
  { name: 'À Propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-montserrat",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-fructus-blue to-fructus-green bg-clip-text text-transparent">
              FRUCTUS
            </span>
            <span className="text-sm md:text-base ml-1 md:ml-2 font-medium text-gray-600">DIGITAL & MANAGEMENT</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-medium text-sm hover:text-fructus-green transition-colors",
                  location.pathname === item.path 
                    ? "text-fructus-green" 
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-fructus-orange hover:bg-orange-600 text-white"
            >
              <Link to="/contact">Consultation Gratuite</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "font-medium text-sm py-2 hover:text-fructus-green transition-colors",
                    location.pathname === item.path 
                      ? "text-fructus-green" 
                      : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild 
                className="bg-fructus-orange hover:bg-orange-600 text-white mt-2 w-full"
              >
                <Link to="/contact">Consultation Gratuite</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
