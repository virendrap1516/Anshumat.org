import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br 
                from-purple-200 via-pink-100 to-indigo-100 
                dark:from-purple-900 dark:via-pink-900 dark:to-indigo-900 
                text-center py-20 lg:py-32 px-6 
                border-b border-purple-200/50 dark:border-pink-800">
      <motion.h1 
        className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Empowering Futures, One Person at a Time
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        Anshumat Foundation is a non-profit dedicated to empowering individuals through knowledge, mentorship, and career development.
      </motion.p>
      <Link to="/register">
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 112, 243, 0.2)" }} 
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          Join Our Mission
        </motion.button>
      </Link>
    </div>
  );
};

export default Hero;