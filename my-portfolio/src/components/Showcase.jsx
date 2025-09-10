import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import { FaReact, FaVuejs, FaPhp, FaDatabase, FaGitAlt, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import babImg from '../assets/bab.jpg';
import bapmImg from '../assets/bapm.jpg';
import cdcImg from '../assets/cdc.jpg';


// --- Data ---
const projectsData = [
  {
    id: 'Loan-Management-System', // Unique ID for routing
    title: 'Loan Manggement System',
    description: 'A comprehensive platform for monitoring loans, tracking due dates, and streamlining employee management with efficiency and accuracy.',
    stack: ['ReactJs', 'SQL' , 'tailwindcss', 'javascript', 'GitHub'],
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Dashboard in Power BI',
    description: 'An interactive dashboard to analyze sales performance and visualize monthly revenue trends using slicers, charts, and KPIs.',
    stack: ['Power BI', 'DAX'],
  },
  {
    id: 'personal-web-app',
    title: 'Personal Web Application',
    description: 'A responsive web app showcasing component-based design, dynamic UI updates, and integration of basic APIs.',
    stack: ['React.js', 'Tailwind CSS'],
  },
];

const techStackData = [
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vue.js', icon: <FaVuejs /> },
  { name: 'C#', icon: <FaCode /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const certificatesData = [
    // Add paths to your certificate images in the assets folder
    { name: 'Business Analysis Basics', image: babImg, link: '#' },
    { name: 'Business Analysis & Process Management', image: bapmImg, link: '#' },
    { name: 'Cloud Data Center', image: cdcImg, link: '#' },
];

const tabs = ['Projects', 'Tech Stack', 'Certificates'];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Projects':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-8 mt-8">
            {projectsData.map((project) => (
              <div key={project.id} className="bg-secondary-dark p-6 rounded-lg border border-gray-700 hover:border-accent-teal transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map(tech => <span key={tech} className="bg-primary-dark text-accent-teal text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>)}
                </div>
                {/* Updated Link to project detail page */}
                <Link to={`/project/${project.id}`} className="text-accent-teal font-semibold inline-flex items-center gap-2 hover:underline">
                  View Details <FaExternalLinkAlt />
                </Link>
              </div>
            ))}
          </motion.div>
        );
      case 'Tech Stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center mt-8">
            {techStackData.map(tech => (
              <div key={tech.name} className="flex flex-col items-center justify-center p-4 bg-secondary-dark rounded-lg border border-transparent hover:border-accent-teal transition-colors duration-300">
                <div className="text-5xl text-gray-400 mb-2">{tech.icon}</div>
                <p className="text-white text-sm">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        );
      case 'Certificates':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {certificatesData.map((cert, index) => (
              <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block bg-secondary-dark rounded-lg overflow-hidden group border border-gray-700 hover:border-accent-teal transition-colors duration-300">
                <img src={cert.image} alt={cert.name} className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity" />
                <p className="p-4 text-white font-semibold text-center">{cert.name}</p>
              </a>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="showcase" className="py-20 md:py-24 bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          My Work & Skills
        </motion.h2>
        <div className="flex justify-center border-b border-gray-700 mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-lg font-medium transition-colors duration-300 relative ${activeTab === tab ? 'text-accent-teal' : 'text-gray-400 hover:text-white'}`}
            >
              {tab}
              {activeTab === tab && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-teal" layoutId="underline" />}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Showcase;