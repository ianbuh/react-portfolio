import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import loginImg from '../assets/login.jpg';
import dashboardImg from '../assets/dashboard.jpg';
import loanImg from '../assets/loan.jpg';
import pbiImg from '../assets/pbi.jpg';

// We'll add an 'images' array to each project object.
const projectsData = [
  {
    id: 'student-info-system',
    id: 'Loan-Management-System',
    title: 'Loan-Management-System',
    description: 'A comprehensive platform for monitoring loans, tracking due dates, and streamlining employee management with efficiency and accuracy.',
    stack: ['React.js', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    link: 'https://paulloan.netlify.app/', // Add your project link here
    images: [
      loginImg,
      dashboardImg,
      loanImg,
    ],
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Dashboard in Power BI',
    description: 'Designed and developed an interactive sales dashboard in Power BI, using Excel as the primary data source. The project showcases key business insights through clean, professional visuals and DAX-driven measures.',
    stack: ['Power BI', 'DAX', 'Data Modeling'],
    link: '#',
    images: [
      pbiImg,
    ],
  },
  {
    id: 'personal-web-app',
    title: 'Personal Web Application',
    description: 'A responsive personal portfolio website built from the ground up. It features a modern, component-based architecture using React.js, dynamic UI updates, and smooth animations. The project also includes integration of basic third-party APIs.',
    stack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
    images: [
      '/src/assets/project-placeholder-1.png',
      '/src/assets/project-placeholder-2.png',
      '/src/assets/project-placeholder-3.png',
    ],
  },
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary-dark flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="flex items-center gap-2 text-accent-teal hover:underline">
          <FaArrowLeft />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary-dark text-white p-4 md:p-8"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/#showcase" className="inline-flex items-center gap-2 text-accent-teal hover:underline mb-8">
          <FaArrowLeft />
          Back to Portfolio
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-gray-400 text-lg mb-8">{project.description}</p>

        <h2 className="text-2xl font-bold text-white mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3 mb-12">
          {project.stack.map(tech => (
            <span key={tech} className="bg-secondary-dark text-accent-teal text-sm font-semibold px-3 py-1.5 rounded-full">{tech}</span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Project Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {project.images.map((img, index) => (
            <motion.div
              key={index}
              // Added a fixed height (e.g., h-64) to the card container
              className="relative h-64 rounded-lg overflow-hidden group border-2 border-gray-700"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img 
                src={img} 
                alt={`${project.title} preview ${index + 1}`} 
                // Changed to h-full to make the image fill the container's height
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-accent-teal text-primary-dark font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-105">
          <FaLink />
          View Live Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;