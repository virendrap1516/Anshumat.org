import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-400 mt-auto border-t border-slate-200 dark:border-gray-700 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Anshumat Foundation. All Rights Reserved.</p>
          <p className="text-sm mt-2">
            Empowering individuals through knowledge and mentorship.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;