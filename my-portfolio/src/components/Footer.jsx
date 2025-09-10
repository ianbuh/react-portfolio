import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/paul-christian-faustino-774712251/' },
    { icon: <FaGithub />, href: 'https://github.com/ianbuh' },
  ];

  return (
    <footer className="bg-secondary-dark py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Paul Faustino. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-teal transition-colors duration-300 text-xl">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;