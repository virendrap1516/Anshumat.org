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

const programs = [
  {
    title: "Student Mentorship Program",
    description: "Connecting students with industry professionals for guidance, career advice, and skill development pathways.",
    icon: "🎓"
  },
  {
    title: "Skill Development Workshops",
    description: "Hands-on, intensive workshops on cutting-edge technologies, soft skills, and entrepreneurial mindset.",
    icon: "💼"
  },
  {
    title: "Career Counseling & Placement",
    description: "Personalized one-on-one sessions to help identify strengths, choose the right career path, and prepare for interviews.",
    icon: "💡"
  },
  {
    title: "Community Outreach & Events",
    description: "Engaging with local communities through events, seminars, and awareness campaigns on education and empowerment.",
    icon: "🤝"
  },
  {
    title: "Leadership Development Program",
    description: "Cultivating future leaders through specialized training, project management experience, and public speaking opportunities.",
    icon: "🌟"
  },
  {
    title: "Digital Literacy Initiative",
    description: "Providing fundamental computer and internet skills to underserved populations, bridging the digital divide.",
    icon: "💻"
  }
];

const Programs = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-slate-100 dark:bg-gray-900/50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-gray-800"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Our Initiatives</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl leading-tight">
            Comprehensive Programs for Growth
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-700 dark:text-slate-300">
            We offer a diverse range of programs meticulously designed to cater to various needs and aspirations.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-slate-200/60 dark:border-gray-700"
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionVariants}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              <div className="text-5xl mb-4 mx-auto w-min">{program.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{program.title}</h3>
              <p className="text-slate-700 dark:text-slate-300">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Programs;