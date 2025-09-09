import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

// Icons for theme toggle
const SunIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const MoonIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Mission', path: '/mission' },
  { name: 'Programs', path: '/programs' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  
  useEffect(() => {
      setActiveLink(location.pathname);
  }, [location.pathname]);

  const getMobileNavLinkClass = ({ isActive }) => {
    const baseClasses = "block w-full text-left py-2 px-4 rounded transition-colors duration-200";
    const activeClasses = "bg-blue-100 dark:bg-gray-700 font-semibold text-blue-600 dark:text-blue-400";
    const inactiveClasses = "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700";
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-400/80 dark:bg-slate-800/80 shadow-md sticky top-0 z-50 backdrop-blur-sm border-b border-slate-200/50 dark:border-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 animate-gradient">
             Anshumat
          </Link>
          {/* Desktop Navigation Links with Magic Underline */}
          <div className="hidden md:flex items-center h-full space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative h-full flex items-center">
                <NavLink 
                    to={link.path}
                    className="text-slate-900 dark:text-slate-300 transition-colors duration-300 pb-1"
                >
                  {link.name}
                </NavLink>
                {activeLink === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center">
            {/* Theme Toggle Button */}
            <motion.button 
              onClick={toggleTheme} 
              className="p-2 rounded-full focus:outline-none text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <MoonIcon/> : <SunIcon/>}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Register Button */}
            <div className="hidden md:block ml-4">
              <Link to="/register">
                <motion.button 
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Register Now
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 flex flex-col items-start space-y-2">
                {navLinks.map((link) => (
                    <NavLink key={link.path} to={link.path} className={getMobileNavLinkClass} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </NavLink>
                ))}
                <Link to="/register" className="block w-full mt-2" onClick={() => setIsOpen(false)}>
                  <motion.button 
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                  >
                    Register Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;