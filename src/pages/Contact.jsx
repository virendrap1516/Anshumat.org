import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl leading-tight">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-700 dark:text-slate-300">
            We would love to hear from you. Please fill out the form below or reach out to us directly.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-slate-200/60 dark:border-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          <form className="grid grid-cols-1 gap-y-6">
            <input type="text" name="full-name" placeholder="Full name" 
                   className="block w-full py-3 px-4 placeholder-slate-400 bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white border border-slate-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
            
            <input id="email" name="email" type="email" placeholder="Email"
                   className="block w-full py-3 px-4 placeholder-slate-400 bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white border border-slate-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
            
            <textarea id="message" name="message" rows="4" placeholder="Message"
                      className="block w-full py-3 px-4 placeholder-slate-400 bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white border border-slate-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"></textarea>
            
            <motion.button 
              type="submit" 
              className="w-full justify-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;