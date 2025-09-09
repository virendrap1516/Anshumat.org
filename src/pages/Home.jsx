import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import Hero from '../components/Hero';


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

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />

      {/* === ABOUT US SECTION === */}
      <motion.section 
        className="py-16 lg:py-24 px-6 container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl leading-tight">Who We Are</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-700 dark:text-slate-300">
          We are a team of passionate individuals committed to creating a positive social impact by providing the right guidance and resources to those in need.
        </p>
        <Link to="/mission">
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="mt-8 text-blue-600 dark:text-blue-400 font-semibold text-lg hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Learn More About Our Mission &rarr;
          </motion.button>
        </Link>
      </motion.section>

      {/* === OUR PROGRAMS SECTION === */}
      <motion.section 
        className="bg-slate-100 dark:bg-gray-900/50 py-16 lg:py-24 px-6 border-t border-b border-slate-200 dark:border-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl leading-tight">Our Core Programs</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-700 dark:text-slate-300">
            Empowering individuals through focused development areas.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Program Card 1 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-slate-200/60 dark:border-gray-700"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaUsers className="text-4xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Mentorship</h3>
              <p className="text-slate-700 dark:text-slate-300">Connecting students with industry professionals for guidance and career advice.</p>
            </motion.div>
            {/* Program Card 2 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-slate-200/60 dark:border-gray-700"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaLightbulb className="text-4xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Workshops</h3>
              <p className="text-slate-700 dark:text-slate-300">Hands-on workshops on modern technologies and soft skills to make you job-ready.</p>
            </motion.div>
            {/* Program Card 3 */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-slate-200/60 dark:border-gray-700"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaHandsHelping className="text-4xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Counseling</h3>
              <p className="text-slate-700 dark:text-slate-300">Personalized one-on-one sessions to help you choose the right career path.</p>
            </motion.div>
          </div>
          <Link to="/programs">
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="mt-12 bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore All Programs
            </motion.button>
          </Link>
        </div>
      </motion.section>
      
      {/* === CALL TO ACTION (CTA) SECTION === */}
      <motion.section 
        className="w-full py-16 lg:py-24 px-6 bg-gradient-to-br from-emerald-100 via-green-50 to-white dark:from-emerald-900 dark:via-green-900 dark:to-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}>
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent dark:from-yellow-400 dark:via-orange-500 dark:to-red-500">Ready to Make a Difference?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-700 dark:text-slate-300">
          Whether you want to join our programs or contribute as a mentor, your journey starts here.
        </p>
        <Link to="/register">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 112, 243, 0.2)" }} 
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Involved Now
          </motion.button>
        </Link>
      </motion.section>

    </motion.div>
  );
};

export default Home;