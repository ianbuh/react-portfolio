import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaUser, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const Resume = () => {
  return (
    <section className="py-20 md:py-24 bg-primary-dark">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          My <span className="text-accent-teal">Resume</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 text-gray-800"
        >
          {/* Left Column */}
          <div className="md:col-span-1 bg-gray-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold border-b-2 border-gray-400 pb-2 mb-6">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-center"><FaEnvelope className="mr-3 text-gray-600" /> paul.faustino1424@gmail.com</li>
              <li className="flex items-center"><FaLinkedin className="mr-3 text-gray-600" /> <a href="https://www.linkedin.com/in/paul-christian-faustino-774712251/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">linkedin.com/in/paul-christian-faustino</a></li>
            </ul>

            <h3 className="text-2xl font-bold border-b-2 border-gray-400 pb-2 my-6">SKILLS</h3>
            <ul className="space-y-4 list-disc list-inside">
              <li>Web Development: PHP, Vue.js, HTML, CSS, JavaScript</li>
              <li>Automation Tools: Power Automate, PowerApps</li>
              <li>Data & Analytics: Power BI, SQL, Microsoft Excel</li>
              <li>Programming Languages: C#, Java, Python (basic)</li>
              <li>Other Tools: Microsoft Forms, SharePoint, OneDrive, Firebase, Git</li>
            </ul>

            <h3 className="text-2xl font-bold border-b-2 border-gray-400 pb-2 my-6">LANGUAGES</h3>
            <ul className="list-disc list-inside">
              <li>English (Intermediate)</li>
            </ul>

            <h3 className="text-2xl font-bold border-b-2 border-gray-400 pb-2 my-6">REFERENCE</h3>
            <p className="font-bold">Don Cachuela</p>
            <p>Accenture / Associate Manager II</p>
            <p>Phone: 09688525979</p>
            <p className="break-all">Email: doncachuela@gmail.com</p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg">
            <div className="mb-8">
              <h3 className="flex items-center text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4"><FaUser className="mr-4" /> PROFILE</h3>
              <p>Recent graduate passionate about web development, automation, and data analytics. Skilled in web technologies (PHP, Vue.js, C#) and automation tools (Power Automate, PowerApps). Currently expanding expertise in Power BI and SQL through self-study, with a focus on data visualization, reporting, and database management. Eager to contribute technical knowledge and problem-solving skills to innovative projects.</p>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4"><FaBriefcase className="mr-4" /> WORK EXPERIENCE</h3>
              <div className="mb-4">
                <p className="font-bold">INTERNSHIP AT SCHNEIDER ELECTRIC <span className="font-normal float-right">FEB 2023 - JUNE 2023</span></p>
                <p className="italic">Web Developer Intern</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Developed a loan management system using PowerApps and Power Automate.</li>
                  <li>Collaborated on website management with PHP and Vue.js.</li>
                  <li>Automated paperless employment processes and PDF signature routing.</li>
                  <li>Built workflows to automatically email employees and manage file transfers.</li>
                  <li>Enhanced the EIT-PH website by enabling signed PDF uploads.</li>
                  <li>Implemented an asset and loan monitoring system using PHP and Vue.js.</li>
                  <li>Utilized Microsoft Forms for data collection and database integration.</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4"><FaGraduationCap className="mr-4" /> EDUCATION</h3>
              <p className="font-bold">Bachelor of Science in Information Technology <span className="font-normal float-right">2019-2023</span></p>
              <p className="italic">San Sebastian College Recoletos De Cavite</p>
              <p className="mt-2">Our final project was a big project where we made a game in Unity called "BasteKonek." We used C#, Firebase, and Android to make it. The game is similar to a popular online game called. Players can have fun playing on their phones. We learned a lot about making games, using databases with Firebase, and making things work well on Android phones. It was a cool project that showed what we learned during our studies.</p>
            </div>

            <div>
              <h3 className="flex items-center text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4"><FaCode className="mr-4" /> PROJECTS</h3>
              <ul className="space-y-4">
                <li><span className="font-bold">Student Information Management System (Self-Study):</span> Designed and implemented a basic system for managing student profiles, grades, and attendance.</li>
                <li><span className="font-bold">Sales Dashboard in Power BI (Self-Study):</span> Created an interactive dashboard to analyze sales performance and visualize monthly revenue trends.</li>
                <li><span className="font-bold">Personal Web Application using React.js:</span> Developed a simple responsive web application with React.js, showcasing component-based design.</li>
                <li><span className="font-bold">Student Grade System (C#):</span> Built a desktop-based grading system in C# that allows instructors to input, calculate, and manage student grades.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;