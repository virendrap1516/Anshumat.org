import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black 
                dark:from-black dark:via-gray-950 dark:to-gray-900
                text-slate-300 mt-auto border-t border-gray-700 py-6"
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