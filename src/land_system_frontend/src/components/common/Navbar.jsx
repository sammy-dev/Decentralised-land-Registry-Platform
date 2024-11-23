import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 
import { Menu, X, Globe2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
    const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLandownerLogin = async () => {
   setIsLoading(true);
   const result = await dispatch(getPrincipal());
   if (getPrincipal.fulfilled.match(result)) {
       setIsLoading(false);
       navigate('/landowner');
   } else {
       alert("Please create an internet identity to access our system");
       setIsLoading(false);
   }
};

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <Globe2 className="h-8 w-8 text-yellow-400" />
              <span className="text-white font-bold text-xl">DecentrAssets</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </NavLink>
            <NavLink to="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </NavLink>
            <NavLink to="/assets" className="text-gray-300 hover:text-white transition-colors">
              Assets
            </NavLink>
            <NavLink to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </NavLink>
            <NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </NavLink>
            <button className="px-6 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/50 rounded-md transition-colors">
                About
              </NavLink>
              <NavLink to="/features" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/50 rounded-md transition-colors">
                Features
              </NavLink>
              <NavLink to="/assets" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/50 rounded-md transition-colors">
                Assets
              </NavLink>
              <NavLink to="/blog" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/50 rounded-md transition-colors">
                Blog
              </NavLink>
              <NavLink to="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/50 rounded-md transition-colors">
                Contact
              </NavLink>
              <button className="w-full mt-4 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
