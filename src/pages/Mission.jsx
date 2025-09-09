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

const Mission = () => {
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
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Our Vision & Mission</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            A World Empowered by Knowledge and Opportunity
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-700 dark:text-slate-300">
            We are dedicated to fostering a community where every individual has the resources and guidance to achieve their full potential.
          </p>
        </motion.div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            
            <motion.div 
              className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200/60 dark:border-gray-700"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionVariants}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl leading-tight font-bold text-slate-900 dark:text-white mb-2">Provide Accessible Knowledge</h3>
              <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
                To bridge the educational gap by offering comprehensive and easy-to-understand resources for all.
              </p>
            </motion.div>

            <motion.div 
              className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200/60 dark:border-gray-700"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionVariants}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl leading-tight font-bold text-slate-900 dark:text-white mb-2">Foster Strong Mentorship</h3>
              <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
                To connect ambitious individuals with experienced professionals who can guide and inspire them.
              </p>
            </motion.div>

            <motion.div 
              className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-slate-200/60 dark:border-gray-700"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionVariants}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl leading-tight font-bold text-slate-900 dark:text-white mb-2">Enable Career Success</h3>
              <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
                To equip our participants with the essential skills and confidence needed to excel in their chosen careers.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mission;